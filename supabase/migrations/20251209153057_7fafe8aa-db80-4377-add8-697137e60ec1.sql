-- Create storage bucket for content images (cases, products, etc.)
INSERT INTO storage.buckets (id, name, public) 
VALUES ('content-images', 'content-images', true)
ON CONFLICT (id) DO NOTHING;

-- Create policies for content-images bucket
CREATE POLICY "Anyone can view content images" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'content-images');

CREATE POLICY "Authenticated users can upload content images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'content-images' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update their content images" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'content-images' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete content images" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'content-images' AND auth.role() = 'authenticated');