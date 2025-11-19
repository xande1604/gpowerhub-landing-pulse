import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const AIContentBuilder = () => {
  const [contentType, setContentType] = useState("case");
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");

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
                  <Button onClick={() => {
                    toast.info("Use este conteúdo como base nas abas Cases ou Produtos");
                  }}>
                    Usar este conteúdo
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
