import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Iniciando seed dos dados iniciais...");

    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    );

    // Inserir Cases
    const casesData = [
      {
        title: "Automação de Processos Financeiros",
        client_name: "Grupo EMEC",
        description: "Implementação de sistema automatizado para reembolso de despesas, saldos bancários integrados, Gestão de orçamentos e planejamento orçamentário, e aprovação de pagamentos reduzindo o tempo de gasto nestas atividades em 80% além de eliminarmos o uso de papeis e impressões.",
        results: [
          { value: "80%", label: "Redução de tempo" },
          { value: "90%", label: "Aumento na precisão" },
          { value: "3 meses", label: "ROI positivo" }
        ],
        image_url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=entropy&auto=format",
        is_published: true,
        display_order: 1
      },
      {
        title: "Análise de Dados de Pessoas (People Analytics)",
        client_name: "Ajinomoto",
        description: "Analises completas dos indicadores de pessoal: Headcount, Turnover, absenteismo, Horas Extras, Cotas de atendimento dentre outros.",
        results: [
          { value: "70%", label: "Redução de tempo para compilar dados" },
          { value: "100%", label: "Democratização das informações" },
          { value: "Eficaz", label: "Planejamento baseado em dados reais" }
        ],
        image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=entropy&auto=format",
        is_published: true,
        display_order: 2
      },
      {
        title: "Plataforma de Gestão Integrada",
        client_name: "Agrovix",
        description: "Desenvolvimento de sistema integrado ao ERP para redução de custo com licenciamento",
        results: [
          { value: "35%", label: "Aumento na produtividade" },
          { value: "50%", label: "Redução em erros operacionais" },
          { value: "20%", label: "Economia em licenciamento" }
        ],
        image_url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&crop=entropy&auto=format",
        is_published: true,
        display_order: 3
      }
    ];

    // Inserir Products/Serviços
    const productsData = [
      {
        name: "Análise de Dados",
        description: "Extração, tratamento e análise avançada de dados para decisões estratégicas.",
        short_description: "Extração, tratamento e análise avançada de dados para decisões estratégicas.",
        category: "Serviços",
        is_published: true,
        display_order: 1
      },
      {
        name: "Automação com IA",
        description: "Processos automatizados inteligentes para maior eficiência operacional.",
        short_description: "Processos automatizados inteligentes para maior eficiência operacional.",
        category: "Serviços",
        is_published: true,
        display_order: 2
      },
      {
        name: "Desenvolvimento",
        description: "Criação de aplicativos e soluções corporativas personalizadas.",
        short_description: "Criação de aplicativos e soluções corporativas personalizadas.",
        category: "Serviços",
        is_published: true,
        display_order: 3
      },
      {
        name: "Migração de Sistemas",
        description: "Implantação e migração segura de sistemas empresariais.",
        short_description: "Implantação e migração segura de sistemas empresariais.",
        category: "Serviços",
        is_published: true,
        display_order: 4
      }
    ];

    // Inserir Landing Sections (Testimonials)
    const landingSectionsData = [
      {
        section_type: "testimonial",
        title: "Patrick Silva",
        subtitle: "Coordenador de TI",
        content: "A Gpowerhub transformou completamente nossa operação com soluções de IA.",
        is_published: true,
        display_order: 1
      },
      {
        section_type: "testimonial",
        title: "Fabio Junger",
        subtitle: "CEO, Grupo EMEC",
        content: "A análise de dados fornecida pela equipe nos ajudou a tomar decisões cruciais.",
        is_published: true,
        display_order: 2
      },
      {
        section_type: "testimonial",
        title: "Jose Augusto",
        subtitle: "Diretor, InnovaTech",
        content: "Excelente suporte e soluções verdadeiramente personalizadas para nosso negócio.",
        is_published: true,
        display_order: 3
      }
    ];

    // Verificar se já existem cases
    const { data: existingCases } = await supabaseAdmin
      .from("cases")
      .select("id")
      .limit(1);

    let casesInserted = 0;
    if (!existingCases || existingCases.length === 0) {
      const { data: cases, error: casesError } = await supabaseAdmin
        .from("cases")
        .insert(casesData)
        .select();

      if (casesError) {
        console.error("Erro ao inserir cases:", casesError);
      } else {
        casesInserted = cases?.length || 0;
        console.log("Cases inseridos:", casesInserted);
      }
    } else {
      // Atualizar cases existentes para publicados e inserir novos
      for (const caseItem of casesData) {
        const { error } = await supabaseAdmin
          .from("cases")
          .insert(caseItem);
        
        if (!error) casesInserted++;
      }
      console.log("Cases inseridos/atualizados:", casesInserted);
    }

    // Verificar se já existem products
    const { data: existingProducts } = await supabaseAdmin
      .from("products")
      .select("id")
      .limit(1);

    let productsInserted = 0;
    if (!existingProducts || existingProducts.length === 0) {
      const { data: products, error: productsError } = await supabaseAdmin
        .from("products")
        .insert(productsData)
        .select();

      if (productsError) {
        console.error("Erro ao inserir products:", productsError);
      } else {
        productsInserted = products?.length || 0;
        console.log("Products inseridos:", productsInserted);
      }
    } else {
      for (const product of productsData) {
        const { error } = await supabaseAdmin
          .from("products")
          .insert(product);
        
        if (!error) productsInserted++;
      }
      console.log("Products inseridos:", productsInserted);
    }

    const { data: sections, error: sectionsError } = await supabaseAdmin
      .from("landing_sections")
      .insert(landingSectionsData)
      .select();

    if (sectionsError) {
      console.error("Erro ao inserir landing_sections:", sectionsError);
    } else {
      console.log("Landing sections inseridas:", sections?.length);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Dados iniciais inseridos com sucesso!",
        cases: casesInserted,
        products: productsInserted,
        sections: sections?.length || 0
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Erro na função seed-data:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
