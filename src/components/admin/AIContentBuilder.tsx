import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useQueryClient } from "@tanstack/react-query";
import { useCreateCase } from "@/hooks/useCases";
import { useCreateProduct } from "@/hooks/useProducts";

const AIContentBuilder = ({ onContentSaved }: { onContentSaved?: (type: string) => void }) => {
  const [contentType, setContentType] = useState("case");
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  
  const queryClient = useQueryClient();
  const createCase = useCreateCase();
  const createProduct = useCreateProduct();

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error("Por favor, descreva o conteúdo que deseja gerar");
      return;
    }

    setIsGenerating(true);
    setGeneratedContent("");

    try {
      const { data, error } = await supabase.functions.invoke("generate-content", {
        body: { 
          contentType, 
          prompt,
        },
      });

      if (error) throw error;

      if (data?.content) {
        setGeneratedContent(data.content);
        toast.success("Conteúdo gerado com sucesso!");
      } else {
        throw new Error("Resposta inválida da IA");
      }
    } catch (error: any) {
      console.error("Error generating content:", error);
      toast.error("Erro ao gerar conteúdo: " + error.message);
    } finally {
      setIsGenerating(false);
    }
  };

  const contentTypeLabels: Record<string, string> = {
    case: "Case de Sucesso",
    product: "Produto",
    section: "Seção de Landing Page",
  };

  const getPromptPlaceholder = () => {
    switch (contentType) {
      case "case":
        return "Ex: Criar um case sobre desenvolvimento de plataforma SaaS para e-commerce que aumentou vendas em 150%";
      case "product":
        return "Ex: Criar produto de automação de marketing com IA que segmenta leads automaticamente";
      case "section":
        return "Ex: Criar seção hero para landing page de consultoria em transformação digital";
      default:
        return "Descreva o que você quer criar...";
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            <div>
              <CardTitle>IA Content Builder</CardTitle>
              <CardDescription>
                Use IA para criar cases, produtos e seções de forma inteligente
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label htmlFor="contentType">Tipo de Conteúdo</Label>
            <Select value={contentType} onValueChange={setContentType}>
              <SelectTrigger id="contentType">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="case">Case de Sucesso</SelectItem>
                <SelectItem value="product">Produto</SelectItem>
                <SelectItem value="section">Seção de Landing Page</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="prompt">Descreva o que você quer criar</Label>
            <Textarea
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={getPromptPlaceholder()}
              rows={4}
              className="resize-none"
            />
          </div>

          <Button 
            onClick={handleGenerate} 
            disabled={isGenerating || !prompt.trim()}
            className="w-full"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Gerando...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Gerar com IA
              </>
            )}
          </Button>

          {generatedContent && (
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-lg">Conteúdo Gerado</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  <pre className="whitespace-pre-wrap font-sans text-sm">
                    {generatedContent}
                  </pre>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      navigator.clipboard.writeText(generatedContent);
                      toast.success("Conteúdo copiado!");
                    }}
                  >
                    Copiar
                  </Button>
                  <Button 
                    onClick={async () => {
                      setIsSaving(true);
                      try {
                        // Check if user is authenticated
                        const { data: { user } } = await supabase.auth.getUser();
                        if (!user) {
                          toast.error("Você precisa estar autenticado para salvar conteúdo");
                          setIsSaving(false);
                          return;
                        }

                        // Remove markdown code blocks if present
                        let cleanContent = generatedContent.trim();
                        if (cleanContent.startsWith('```json')) {
                          cleanContent = cleanContent.replace(/^```json\n/, '').replace(/\n```$/, '');
                        } else if (cleanContent.startsWith('```')) {
                          cleanContent = cleanContent.replace(/^```\n/, '').replace(/\n```$/, '');
                        }
                        
                        const parsedContent = JSON.parse(cleanContent);
                        
                        if (contentType === "case") {
                          await createCase.mutateAsync({
                            title: parsedContent.title,
                            subtitle: parsedContent.subtitle,
                            description: parsedContent.description,
                            client_name: parsedContent.clientName || parsedContent.client_name,
                            results: parsedContent.results || [],
                            tags: parsedContent.tags || [],
                            is_published: false,
                            display_order: 0,
                            created_by: user.id
                          });
                          toast.success("Case criado com sucesso! Veja na aba Cases.");
                          
                          // Invalidate queries manually to ensure refresh
                          queryClient.invalidateQueries({ queryKey: ["admin-cases"] });
                          queryClient.invalidateQueries({ queryKey: ["cases"] });
                          
                          // Notify parent to switch tab
                          if (onContentSaved) {
                            onContentSaved("cases");
                          }
                        } else if (contentType === "product") {
                          await createProduct.mutateAsync({
                            name: parsedContent.name,
                            short_description: parsedContent.shortDescription || parsedContent.short_description,
                            description: parsedContent.description,
                            features: parsedContent.features || [],
                            tags: parsedContent.tags || [],
                            price_info: parsedContent.priceInfo || parsedContent.price_info,
                            is_published: false,
                            display_order: 0,
                            created_by: user.id
                          });
                          toast.success("Produto criado com sucesso! Veja na aba Produtos.");
                          
                          // Invalidate queries manually to ensure refresh
                          queryClient.invalidateQueries({ queryKey: ["admin-products"] });
                          queryClient.invalidateQueries({ queryKey: ["products"] });
                          
                          // Notify parent to switch tab
                          if (onContentSaved) {
                            onContentSaved("products");
                          }
                        }
                        
                        setGeneratedContent("");
                        setPrompt("");
                      } catch (error: any) {
                        console.error("Error saving content:", error);
                        toast.error("Erro ao salvar: " + error.message);
                      } finally {
                        setIsSaving(false);
                      }
                    }}
                    disabled={isSaving}
                  >
                    {isSaving ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Salvando...
                      </>
                    ) : (
                      "Usar este conteúdo"
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AIContentBuilder;
