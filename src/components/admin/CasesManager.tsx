import { useState } from "react";
import { useAdminCases, useCreateCase, useUpdateCase, useDeleteCase } from "@/hooks/useCases";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Edit, Trash2 } from "lucide-react";
import ImageUpload from "./ImageUpload";

const CasesManager = () => {
  const { data: cases, isLoading } = useAdminCases();
  const createCase = useCreateCase();
  const updateCase = useUpdateCase();
  const deleteCase = useDeleteCase();
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCase, setEditingCase] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    image_url: "",
    client_name: "",
    client_logo_url: "",
    results: "",
    tags: "",
    display_order: 0,
    is_published: false,
  });

  const resetForm = () => {
    setFormData({
      title: "",
      subtitle: "",
      description: "",
      image_url: "",
      client_name: "",
      client_logo_url: "",
      results: "",
      tags: "",
      display_order: 0,
      is_published: false,
    });
    setEditingCase(null);
  };

  const handleEdit = (caseItem: any) => {
    setEditingCase(caseItem);
    setFormData({
      title: caseItem.title || "",
      subtitle: caseItem.subtitle || "",
      description: caseItem.description || "",
      image_url: caseItem.image_url || "",
      client_name: caseItem.client_name || "",
      client_logo_url: caseItem.client_logo_url || "",
      results: Array.isArray(caseItem.results) ? caseItem.results.join("\n") : "",
      tags: Array.isArray(caseItem.tags) ? caseItem.tags.join(", ") : "",
      display_order: caseItem.display_order || 0,
      is_published: caseItem.is_published || false,
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const data = {
      ...formData,
      results: formData.results.split("\n").filter(r => r.trim()),
      tags: formData.tags.split(",").map(t => t.trim()).filter(t => t),
    };

    try {
      if (editingCase) {
        await updateCase.mutateAsync({ id: editingCase.id, ...data });
      } else {
        await createCase.mutateAsync(data);
      }
      setIsDialogOpen(false);
      resetForm();
    } catch (error) {
      // Error handled by mutation
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Tem certeza que deseja deletar este case?")) {
      await deleteCase.mutateAsync(id);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Gerenciar Cases</h2>
        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) resetForm();
        }}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Novo Case
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingCase ? "Editar Case" : "Novo Case"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title">Título *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="subtitle">Subtítulo</Label>
                <Input
                  id="subtitle"
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="description">Descrição *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  required
                />
              </div>

              <div>
                <Label htmlFor="client_name">Nome do Cliente</Label>
                <Input
                  id="client_name"
                  value={formData.client_name}
                  onChange={(e) => setFormData({ ...formData, client_name: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <ImageUpload
                  label="Imagem do Case"
                  value={formData.image_url}
                  onChange={(url) => setFormData({ ...formData, image_url: url })}
                  folder="cases"
                />

                <ImageUpload
                  label="Logo do Cliente"
                  value={formData.client_logo_url}
                  onChange={(url) => setFormData({ ...formData, client_logo_url: url })}
                  folder="logos"
                />
              </div>

              <div>
                <Label htmlFor="results">Resultados (um por linha)</Label>
                <Textarea
                  id="results"
                  value={formData.results}
                  onChange={(e) => setFormData({ ...formData, results: e.target.value })}
                  rows={4}
                  placeholder="Resultado 1&#10;Resultado 2&#10;Resultado 3"
                />
              </div>

              <div>
                <Label htmlFor="tags">Tags (separadas por vírgula)</Label>
                <Input
                  id="tags"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  placeholder="React, Node.js, AWS"
                />
              </div>

              <div>
                <Label htmlFor="display_order">Ordem de Exibição</Label>
                <Input
                  id="display_order"
                  type="number"
                  value={formData.display_order}
                  onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) })}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="is_published"
                  checked={formData.is_published}
                  onCheckedChange={(checked) => setFormData({ ...formData, is_published: checked })}
                />
                <Label htmlFor="is_published">Publicado</Label>
              </div>

              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button type="submit">
                  {editingCase ? "Atualizar" : "Criar"}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {isLoading ? (
        <div>Carregando...</div>
      ) : (
        <div className="grid gap-4">
          {cases?.map((caseItem) => (
            <Card key={caseItem.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex gap-4">
                    {caseItem.image_url && (
                      <img 
                        src={caseItem.image_url} 
                        alt={caseItem.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                    )}
                    <div>
                      <CardTitle>{caseItem.title}</CardTitle>
                      {caseItem.client_name && (
                        <p className="text-sm text-muted-foreground mt-1">{caseItem.client_name}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant={caseItem.is_published ? "default" : "secondary"}>
                      {caseItem.is_published ? "Publicado" : "Rascunho"}
                    </Badge>
                    <Button size="sm" variant="outline" onClick={() => handleEdit(caseItem)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => handleDelete(caseItem.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{caseItem.description}</p>
                {caseItem.tags && caseItem.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {caseItem.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default CasesManager;
