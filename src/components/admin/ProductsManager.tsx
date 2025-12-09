import { useState } from "react";
import { useAdminProducts, useCreateProduct, useUpdateProduct, useDeleteProduct } from "@/hooks/useProducts";
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

const ProductsManager = () => {
  const { data: products, isLoading } = useAdminProducts();
  const createProduct = useCreateProduct();
  const updateProduct = useUpdateProduct();
  const deleteProduct = useDeleteProduct();
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    short_description: "",
    description: "",
    features: "",
    price_info: "",
    image_url: "",
    category: "",
    tags: "",
    display_order: 0,
    is_published: false,
  });

  const resetForm = () => {
    setFormData({
      name: "",
      short_description: "",
      description: "",
      features: "",
      price_info: "",
      image_url: "",
      category: "",
      tags: "",
      display_order: 0,
      is_published: false,
    });
    setEditingProduct(null);
  };

  const handleEdit = (product: any) => {
    setEditingProduct(product);
    setFormData({
      name: product.name || "",
      short_description: product.short_description || "",
      description: product.description || "",
      features: Array.isArray(product.features) ? product.features.join("\n") : "",
      price_info: product.price_info || "",
      image_url: product.image_url || "",
      category: product.category || "",
      tags: Array.isArray(product.tags) ? product.tags.join(", ") : "",
      display_order: product.display_order || 0,
      is_published: product.is_published || false,
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const data = {
      ...formData,
      features: formData.features.split("\n").filter(f => f.trim()),
      tags: formData.tags.split(",").map(t => t.trim()).filter(t => t),
    };

    try {
      if (editingProduct) {
        await updateProduct.mutateAsync({ id: editingProduct.id, ...data });
      } else {
        await createProduct.mutateAsync(data);
      }
      setIsDialogOpen(false);
      resetForm();
    } catch (error) {
      // Error handled by mutation
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Tem certeza que deseja deletar este produto?")) {
      await deleteProduct.mutateAsync(id);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Gerenciar Produtos</h2>
        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) resetForm();
        }}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Novo Produto
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingProduct ? "Editar Produto" : "Novo Produto"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Nome *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="short_description">Descrição Curta</Label>
                <Input
                  id="short_description"
                  value={formData.short_description}
                  onChange={(e) => setFormData({ ...formData, short_description: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="description">Descrição Completa *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  required
                />
              </div>

              <div>
                <Label htmlFor="features">Recursos (um por linha)</Label>
                <Textarea
                  id="features"
                  value={formData.features}
                  onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                  rows={4}
                  placeholder="Recurso 1&#10;Recurso 2&#10;Recurso 3"
                />
              </div>

              <div>
                <Label htmlFor="price_info">Informações de Preço</Label>
                <Input
                  id="price_info"
                  value={formData.price_info}
                  onChange={(e) => setFormData({ ...formData, price_info: e.target.value })}
                  placeholder="A partir de R$ 99/mês"
                />
              </div>

              <div>
                <Label htmlFor="category">Categoria</Label>
                <Input
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                />
              </div>

              <ImageUpload
                label="Imagem do Produto"
                value={formData.image_url}
                onChange={(url) => setFormData({ ...formData, image_url: url })}
                folder="products"
              />

              <div>
                <Label htmlFor="tags">Tags (separadas por vírgula)</Label>
                <Input
                  id="tags"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  placeholder="SaaS, IA, Automação"
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
                  {editingProduct ? "Atualizar" : "Criar"}
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
          {products?.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex gap-4">
                    {product.image_url && (
                      <img 
                        src={product.image_url} 
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                    )}
                    <div>
                      <CardTitle>{product.name}</CardTitle>
                      {product.short_description && (
                        <p className="text-sm text-muted-foreground mt-1">{product.short_description}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant={product.is_published ? "default" : "secondary"}>
                      {product.is_published ? "Publicado" : "Rascunho"}
                    </Badge>
                    <Button size="sm" variant="outline" onClick={() => handleEdit(product)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => handleDelete(product.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{product.description}</p>
                {product.tags && product.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {product.tags.map((tag, idx) => (
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

export default ProductsManager;
