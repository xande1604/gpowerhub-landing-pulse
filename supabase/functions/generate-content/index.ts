import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { contentType, prompt } = await req.json();
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // System prompts para cada tipo de conteúdo
    const systemPrompts: Record<string, string> = {
      case: `Você é um especialista em criar cases de sucesso para empresas de tecnologia. 
Crie um case detalhado em formato JSON com os seguintes campos:
{
  "title": "Título impactante do case",
  "subtitle": "Subtítulo complementar",
  "description": "Descrição detalhada do projeto e desafios",
  "client_name": "Nome do cliente",
  "results": ["Resultado 1", "Resultado 2", "Resultado 3"],
  "tags": ["Tag1", "Tag2", "Tag3"]
}`,
      
      product: `Você é um especialista em criar descrições de produtos tech. 
Crie uma descrição de produto em formato JSON com os seguintes campos:
{
  "name": "Nome do produto",
  "short_description": "Descrição curta e impactante",
  "description": "Descrição completa do produto",
  "features": ["Recurso 1", "Recurso 2", "Recurso 3"],
  "price_info": "Informações de preço",
  "category": "Categoria do produto",
  "tags": ["Tag1", "Tag2", "Tag3"]
}`,
      
      section: `Você é um especialista em criar seções de landing pages. 
Crie uma seção em formato JSON com os seguintes campos:
{
  "section_type": "hero, about, services, features, etc",
  "title": "Título da seção",
  "subtitle": "Subtítulo",
  "content": "Conteúdo detalhado em markdown",
  "cta_text": "Texto do botão CTA",
  "cta_link": "Link do CTA"
}`,
    };

    const systemPrompt = systemPrompts[contentType] || systemPrompts.case;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: prompt }
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit excedido. Tente novamente em alguns instantes." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Créditos insuficientes. Adicione créditos ao workspace." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error("Erro ao chamar gateway de IA");
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("Resposta inválida da IA");
    }

    return new Response(
      JSON.stringify({ content }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Erro desconhecido" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
