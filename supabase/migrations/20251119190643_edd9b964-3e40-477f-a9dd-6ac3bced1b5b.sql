-- Create table for company cases
CREATE TABLE IF NOT EXISTS public.cases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  subtitle TEXT,
  description TEXT NOT NULL,
  image_url TEXT,
  client_name TEXT,
  client_logo_url TEXT,
  results JSONB DEFAULT '[]'::jsonb,
  tags TEXT[] DEFAULT '{}'::text[],
  display_order INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_by UUID REFERENCES auth.users(id)
);

-- Create table for products
CREATE TABLE IF NOT EXISTS public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  short_description TEXT,
  features JSONB DEFAULT '[]'::jsonb,
  price_info TEXT,
  image_url TEXT,
  category TEXT,
  tags TEXT[] DEFAULT '{}'::text[],
  display_order INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_by UUID REFERENCES auth.users(id)
);

-- Create table for landing page sections
CREATE TABLE IF NOT EXISTS public.landing_sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section_type TEXT NOT NULL, -- 'hero', 'about', 'services', 'features', etc.
  title TEXT,
  subtitle TEXT,
  content TEXT,
  image_url TEXT,
  cta_text TEXT,
  cta_link TEXT,
  data JSONB DEFAULT '{}'::jsonb, -- Flexible field for section-specific data
  display_order INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_by UUID REFERENCES auth.users(id)
);

-- Enable RLS
ALTER TABLE public.cases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.landing_sections ENABLE ROW LEVEL SECURITY;

-- RLS Policies for cases
CREATE POLICY "Anyone can view published cases"
  ON public.cases FOR SELECT
  USING (is_published = true);

CREATE POLICY "Admins can manage all cases"
  ON public.cases FOR ALL
  USING (has_role(auth.uid(), 'admin'));

-- RLS Policies for products
CREATE POLICY "Anyone can view published products"
  ON public.products FOR SELECT
  USING (is_published = true);

CREATE POLICY "Admins can manage all products"
  ON public.products FOR ALL
  USING (has_role(auth.uid(), 'admin'));

-- RLS Policies for landing_sections
CREATE POLICY "Anyone can view published sections"
  ON public.landing_sections FOR SELECT
  USING (is_published = true);

CREATE POLICY "Admins can manage all sections"
  ON public.landing_sections FOR ALL
  USING (has_role(auth.uid(), 'admin'));

-- Triggers for updated_at
CREATE TRIGGER update_cases_updated_at
  BEFORE UPDATE ON public.cases
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON public.products
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_landing_sections_updated_at
  BEFORE UPDATE ON public.landing_sections
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();