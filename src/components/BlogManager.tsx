
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Calendar, User } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  date: string;
  image: string;
  slug?: string;
  tags?: string[];
}

interface BlogManagerProps {
  apiEndpoint?: string;
  posts?: BlogPost[];
  onPostClick?: (post: BlogPost) => void;
}

export const BlogManager = ({ apiEndpoint, posts = [], onPostClick }: BlogManagerProps) => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(posts);
  const [loading, setLoading] = useState(false);

  // Função para buscar posts via API (integração com n8n)
  const fetchPosts = async () => {
    if (!apiEndpoint) return;
    
    setLoading(true);
    try {
      console.log("Fetching posts from:", apiEndpoint);
      const response = await fetch(apiEndpoint);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log("Received posts:", data);
      
      // Assumindo que a API retorna um array de posts ou um objeto com array de posts
      const postsData = Array.isArray(data) ? data : data.posts || data.data || [];
      
      setBlogPosts(postsData);
      toast({
        title: "Posts atualizados",
        description: `${postsData.length} posts carregados com sucesso.`,
      });
    } catch (error) {
      console.error("Error fetching posts:", error);
      toast({
        title: "Erro ao carregar posts",
        description: "Não foi possível carregar os posts do blog.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Carregar posts na inicialização se tiver endpoint
  useEffect(() => {
    if (apiEndpoint) {
      fetchPosts();
    }
  }, [apiEndpoint]);

  // Função para adicionar um novo post (pode ser chamada via webhook do n8n)
  const addPost = (newPost: Omit<BlogPost, 'id'>) => {
    const post: BlogPost = {
      ...newPost,
      id: Date.now(), // ID temporário baseado em timestamp
      date: newPost.date || new Date().toLocaleDateString('pt-BR')
    };
    
    setBlogPosts(prev => [post, ...prev]);
    console.log("New post added:", post);
    
    toast({
      title: "Novo post adicionado",
      description: `Post "${post.title}" foi publicado com sucesso.`,
    });
  };

  // Expor função addPost globalmente para uso do n8n
  useEffect(() => {
    (window as any).addBlogPost = addPost;
    
    return () => {
      delete (window as any).addBlogPost;
    };
  }, []);

  const handlePostClick = (post: BlogPost) => {
    if (onPostClick) {
      onPostClick(post);
    } else {
      // Comportamento padrão - pode ser customizado
      console.log("Post clicked:", post);
      toast({
        title: "Post selecionado",
        description: `Abrindo: ${post.title}`,
      });
    }
  };

  return (
    <div className="space-y-8">
      {/* Header com botão de refresh se tiver API */}
      {apiEndpoint && (
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Gerenciador do Blog</h2>
            <p className="text-gray-600">Posts conectados via API: {apiEndpoint}</p>
          </div>
          <Button 
            onClick={fetchPosts} 
            disabled={loading}
            variant="outline"
          >
            {loading ? "Carregando..." : "Atualizar Posts"}
          </Button>
        </div>
      )}

      {/* Grid de posts */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card 
            key={post.id} 
            className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            onClick={() => handlePostClick(post)}
          >
            <div className="aspect-video overflow-hidden rounded-t-lg">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  // Fallback para imagem padrão se a imagem não carregar
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop&crop=entropy&auto=format";
                }}
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center text-sm text-gray-600 mb-3">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <User className="w-4 h-4 mr-1" />
                <span>{post.author}</span>
              </div>
              
              {post.tags && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
              
              <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
              
              <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                Ler mais
                <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Estado vazio */}
      {blogPosts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Calendar className="w-16 h-16 mx-auto mb-4" />
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            Nenhum post encontrado
          </h3>
          <p className="text-gray-500">
            {apiEndpoint 
              ? "Os posts aparecerão aqui quando forem carregados da API." 
              : "Adicione posts para começar a usar o blog."
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default BlogManager;
