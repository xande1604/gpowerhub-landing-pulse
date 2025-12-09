import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Pencil, Trash2, GripVertical, Loader2 } from "lucide-react";
import { toast } from "sonner";
import {
  useAdminLandingSections,
  useCreateLandingSection,
  useUpdateLandingSection,
  useDeleteLandingSection,
  LandingSection
} from "@/hooks/useLandingSections";

const SECTION_TYPES = [
  { value: "hero", label: "Hero Banner" },
  { value: "services", label: "Serviços" },
  { value: "cases", label: "Cases" },
  { value: "testimonials", label: "Depoimentos" },
  { value: "cta", label: "Call to Action" },
  { value: "features", label: "Features/Recursos" },
  { value: "stats", label: "Estatísticas" },
  { value: "faq", label: "FAQ" },
  { value: "contact", label: "Contato" },
  { value: "custom", label: "Personalizada" },
];

const LandingSectionsManager = () => {
  const { data: sections, isLoading } = useAdminLandingSections();
  const createSection = useCreateLandingSection();
  const updateSection = useUpdateLandingSection();
  const deleteSection = useDeleteLandingSection();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingSection, setEditingSection] = useState<LandingSection | null>(null);

  const [formData, setFormData] = useState({
    section_type: "hero",
    title: "",
    subtitle: "",
    content: "",
    image_url: "",
    cta_text: "",
    cta_link: "",
    display_order: 0,
    is_published: true
  });

  const resetForm = () => {
    setFormData({
      section_type: "hero",
      title: "",
      subtitle: "",
      content: "",
      image_url: "",
      cta_text: "",
      cta_link: "",
      display_order: sections?.length || 0,
      is_published: true
    });
    setEditingSection(null);
  };

  const openEditDialog = (section: LandingSection) => {
    setEditingSection(section);
    setFormData({
      section_type: section.section_type,
      title: section.title || "",
      subtitle: section.subtitle || "",
      content: section.content || "",
      image_url: section.image_url || "",
      cta_text: section.cta_text || "",
      cta_link: section.cta_link || "",
      display_order: section.display_order || 0,
      is_published: section.is_published ?? true
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingSection) {
        await updateSection.mutateAsync({
          id: editingSection.id,
          ...formData
        });
      } else {
        await createSection.mutateAsync(formData);
      }

      setIsDialogOpen(false);
      resetForm();
    } catch (error) {
      console.error("Erro ao salvar seção:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Tem certeza que deseja excluir esta seção?")) {
      await deleteSection.mutateAsync(id);
    }
  };

  const getSectionTypeLabel = (type: string) => {
    return SECTION_TYPES.find(t => t.value === type)?.label || type;
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Gerenciar Seções da Landing Page</CardTitle>
        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) resetForm();
        }}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Nova Seção
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingSection ? "Editar Seção" : "Nova Seção"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="section_type">Tipo de Seção *</Label>
                  <Select
                    value={formData.section_type}
                    onValueChange={(value) => setFormData({ ...formData, section_type: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {SECTION_TYPES.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="display_order">Ordem de Exibição</Label>
                  <Input
                    id="display_order"
                    type="number"
                    value={formData.display_order}
                    onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) || 0 })}
                  />
                </div>

                <div className="col-span-2">
                  <Label htmlFor="title">Título</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                </div>

                <div className="col-span-2">
                  <Label htmlFor="subtitle">Subtítulo</Label>
                  <Input
                    id="subtitle"
                    value={formData.subtitle}
                    onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  />
                </div>

                <div className="col-span-2">
                  <Label htmlFor="content">Conteúdo</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    rows={4}
                  />
                </div>

                <div className="col-span-2">
                  <Label htmlFor="image_url">URL da Imagem</Label>
                  <Input
                    id="image_url"
                    value={formData.image_url}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                    placeholder="https://..."
                  />
                </div>

                <div>
                  <Label htmlFor="cta_text">Texto do Botão (CTA)</Label>
                  <Input
                    id="cta_text"
                    value={formData.cta_text}
                    onChange={(e) => setFormData({ ...formData, cta_text: e.target.value })}
                    placeholder="Saiba mais"
                  />
                </div>

                <div>
                  <Label htmlFor="cta_link">Link do Botão</Label>
                  <Input
                    id="cta_link"
                    value={formData.cta_link}
                    onChange={(e) => setFormData({ ...formData, cta_link: e.target.value })}
                    placeholder="/contato"
                  />
                </div>

                <div className="col-span-2 flex items-center gap-2">
                  <Switch
                    checked={formData.is_published}
                    onCheckedChange={(checked) => setFormData({ ...formData, is_published: checked })}
                  />
                  <Label>Publicado</Label>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button type="submit" disabled={createSection.isPending || updateSection.isPending}>
                  {(createSection.isPending || updateSection.isPending) && (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  )}
                  {editingSection ? "Atualizar" : "Criar"} Seção
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        {!sections || sections.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            Nenhuma seção encontrada. Crie sua primeira seção!
          </div>
        ) : (
          <div className="space-y-3">
            {sections
              .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
              .map((section) => (
                <div
                  key={section.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <GripVertical className="w-5 h-5 text-muted-foreground cursor-move" />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline">{getSectionTypeLabel(section.section_type)}</Badge>
                        <span className="font-semibold">{section.title || "(Sem título)"}</span>
                        <Badge variant={section.is_published ? "default" : "secondary"}>
                          {section.is_published ? "Publicado" : "Oculto"}
                        </Badge>
                      </div>
                      {section.subtitle && (
                        <p className="text-sm text-muted-foreground">{section.subtitle}</p>
                      )}
                      <span className="text-xs text-muted-foreground">Ordem: {section.display_order}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => openEditDialog(section)}
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(section.id)}
                    >
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LandingSectionsManager;
