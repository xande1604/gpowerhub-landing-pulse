
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Plus, Edit, Trash2, Eye, Calendar, User, Tag, Search, Globe } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  slug: string;
  tags: string[];
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  status: 'draft' | 'published';
}

const Admin = () => {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: "Como a análise de dados pode transformar sua empresa",
      excerpt: "Descubra como utilizar dados estrategicamente para impulsionar resultados de negócios.",
      content: "Conteúdo completo do artigo aqui...",
      author: "Ana Oliveira",
      date: "12 Jun 2025",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&crop=entropy&auto=format",
      slug: "analise-dados-transformar-empresa",
      tags: ["análise de dados", "business intelligence", "transformação digital"],
      metaTitle: "Como a análise de dados pode transformar sua empresa - Gpowerhub",
      metaDescription: "Descubra estratégias de análise de dados para impulsionar resultados empresariais. Guia completo da Gpowerhub.",
      keywords: "análise de dados, business intelligence, transformação digital, dados empresariais",
      status: 'published'
    }
  ]);

  const [currentPost, setCurrentPost] = useState<Partial<BlogPost>>({
    title: "",
    excerpt: "",
    content: "",
    author: "",
    image: "",
    tags: [],
    metaTitle: "",
    metaDescription: "",
    keywords: "",
    status: 'draft'
  });

  const [editingId, setEditingId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!currentPost.title || !currentPost.content) {
      toast({
        title: "Erro",
        description: "Título e conteúdo são obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    const slug = currentPost.title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();

    const newPost: BlogPost = {
      id: editingId || Date.now(),
      title: currentPost.title,
      excerpt: currentPost.excerpt || "",
      content: currentPost.content,
      author: currentPost.author || "Admin",
      date: new Date().toLocaleDateString('pt-BR'),
      image: currentPost.image || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop&crop=entropy&auto=format",
      slug,
      tags: currentPost.tags || [],
      metaTitle: currentPost.metaTitle || currentPost.title,
      metaDescription: currentPost.metaDescription || currentPost.excerpt,
      keywords: currentPost.keywords || "",
      status: currentPost.status || 'draft'
    };

    if (editingId) {
      setPosts(posts.map(post => post.id === editingId ? newPost : post));
      toast({
        title: "Post atualizado",
        description: "O post foi atualizado com sucesso.",
      });
    } else {
      setPosts([newPost, ...posts]);
      toast({
        title: "Post criado",
        description: "O post foi criado com sucesso.",
      });
    }

    setCurrentPost({
      title: "",
      excerpt: "",
      content: "",
      author: "",
      image: "",
      tags: [],
      metaTitle: "",
      metaDescription: "",
      keywords: "",
      status: 'draft'
    });
    setEditingId(null);
  };

  const handleEdit = (post: BlogPost) => {
    setCurrentPost(post);
    setEditingId(post.id);
  };

  const handleDelete = (id: number) => {
    setPosts(posts.filter(post => post.id !== id));
    toast({
      title: "Post excluído",
      description: "O post foi excluído com sucesso.",
    });
  };

  const handleTagsChange = (value: string) => {
    const tags = value.split(",").map(tag => tag.trim()).filter(tag => tag);
    setCurrentPost({ ...currentPost, tags });
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar ao site</span>
              </Link>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Admin - Gpowerhub
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="posts" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="posts">Gerenciar Posts</TabsTrigger>
            <TabsTrigger value="create">Criar/Editar Post</TabsTrigger>
          </TabsList>

          {/* Lista de Posts */}
          <TabsContent value="posts" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold">Posts do Blog</h2>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Buscar posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-bold text-xl">{post.title}</h3>
                          <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                            {post.status === 'published' ? 'Publicado' : 'Rascunho'}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-3">{post.excerpt}</p>
                        <div className="flex items-center text-sm text-gray-500 space-x-4">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {post.date}
                          </span>
                          <span className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {post.author}
                          </span>
                          <span className="flex items-center">
                            <Globe className="w-4 h-4 mr-1" />
                            {post.slug}
                          </span>
                        </div>
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {post.tags.map((tag, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(post)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(post.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Criar/Editar Post */}
          <TabsContent value="create" className="space-y-6">
            <h2 className="text-3xl font-bold">
              {editingId ? 'Editar Post' : 'Criar Novo Post'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Coluna Principal */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Conteúdo Principal</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="title">Título *</Label>
                        <Input
                          id="title"
                          value={currentPost.title}
                          onChange={(e) => setCurrentPost({ ...currentPost, title: e.target.value })}
                          placeholder="Título do post"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="excerpt">Resumo</Label>
                        <Textarea
                          id="excerpt"
                          value={currentPost.excerpt}
                          onChange={(e) => setCurrentPost({ ...currentPost, excerpt: e.target.value })}
                          placeholder="Breve descrição do post"
                          rows={3}
                        />
                      </div>

                      <div>
                        <Label htmlFor="content">Conteúdo *</Label>
                        <Textarea
                          id="content"
                          value={currentPost.content}
                          onChange={(e) => setCurrentPost({ ...currentPost, content: e.target.value })}
                          placeholder="Conteúdo completo do post"
                          rows={10}
                          required
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Coluna Lateral */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Configurações</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="author">Autor</Label>
                        <Input
                          id="author"
                          value={currentPost.author}
                          onChange={(e) => setCurrentPost({ ...currentPost, author: e.target.value })}
                          placeholder="Nome do autor"
                        />
                      </div>

                      <div>
                        <Label htmlFor="image">URL da Imagem</Label>
                        <Input
                          id="image"
                          value={currentPost.image}
                          onChange={(e) => setCurrentPost({ ...currentPost, image: e.target.value })}
                          placeholder="https://exemplo.com/imagem.jpg"
                        />
                      </div>

                      <div>
                        <Label htmlFor="tags">Tags (separadas por vírgula)</Label>
                        <Input
                          id="tags"
                          value={currentPost.tags?.join(", ")}
                          onChange={(e) => handleTagsChange(e.target.value)}
                          placeholder="análise de dados, IA, automação"
                        />
                      </div>

                      <div>
                        <Label htmlFor="status">Status</Label>
                        <select
                          id="status"
                          value={currentPost.status}
                          onChange={(e) => setCurrentPost({ ...currentPost, status: e.target.value as 'draft' | 'published' })}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="draft">Rascunho</option>
                          <option value="published">Publicado</option>
                        </select>
                      </div>
                    </CardContent>
                  </Card>

                  {/* SEO */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Otimização SEO</CardTitle>
                      <CardDescription>Configure as meta tags para melhor posicionamento nos buscadores</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="metaTitle">Meta Título</Label>
                        <Input
                          id="metaTitle"
                          value={currentPost.metaTitle}
                          onChange={(e) => setCurrentPost({ ...currentPost, metaTitle: e.target.value })}
                          placeholder="Título otimizado para SEO (até 60 caracteres)"
                          maxLength={60}
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          {currentPost.metaTitle?.length || 0}/60 caracteres
                        </p>
                      </div>

                      <div>
                        <Label htmlFor="metaDescription">Meta Descrição</Label>
                        <Textarea
                          id="metaDescription"
                          value={currentPost.metaDescription}
                          onChange={(e) => setCurrentPost({ ...currentPost, metaDescription: e.target.value })}
                          placeholder="Descrição para os resultados de busca (até 160 caracteres)"
                          rows={3}
                          maxLength={160}
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          {currentPost.metaDescription?.length || 0}/160 caracteres
                        </p>
                      </div>

                      <div>
                        <Label htmlFor="keywords">Palavras-chave</Label>
                        <Input
                          id="keywords"
                          value={currentPost.keywords}
                          onChange={(e) => setCurrentPost({ ...currentPost, keywords: e.target.value })}
                          placeholder="palavras, chave, separadas, por, vírgula"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setCurrentPost({
                      title: "",
                      excerpt: "",
                      content: "",
                      author: "",
                      image: "",
                      tags: [],
                      metaTitle: "",
                      metaDescription: "",
                      keywords: "",
                      status: 'draft'
                    });
                    setEditingId(null);
                  }}
                >
                  Cancelar
                </Button>
                <Button type="submit" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  {editingId ? 'Atualizar Post' : 'Criar Post'}
                </Button>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
