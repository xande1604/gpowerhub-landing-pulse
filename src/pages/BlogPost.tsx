
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Calendar, User, ArrowLeft } from "lucide-react";
import { useBlogPosts, BlogPost } from "@/hooks/useBlogPosts";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { posts, loading } = useBlogPosts();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (!loading && posts.length > 0 && slug) {
      const foundPost = posts.find(p => p.slug === slug);
      setPost(foundPost || null);
    }
  }, [slug, posts, loading]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Carregando...</div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Post não encontrado</h1>
            <Button onClick={() => navigate('/')} variant="outline">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Voltar ao início
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Gpowerhub
            </div>
            <Button onClick={() => navigate('/')} variant="outline">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Voltar
            </Button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto">
            {/* Header do Post */}
            <header className="mb-8">
              <div className="mb-4">
                <Button 
                  onClick={() => navigate('/')} 
                  variant="ghost" 
                  className="text-blue-600 hover:text-blue-700 p-0 h-auto"
                >
                  <ChevronLeft className="mr-1 w-4 h-4" />
                  Voltar ao blog
                </Button>
              </div>
              
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {post.title}
              </h1>
              
              {post.excerpt && (
                <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>
              )}
              
              <div className="flex items-center text-gray-600 mb-6">
                <User className="w-4 h-4 mr-2" />
                <span className="mr-4">{post.author}</span>
                <Calendar className="w-4 h-4 mr-2" />
                <span>{formatDate(post.created_at)}</span>
              </div>
            </header>

            {/* Imagem destacada */}
            {post.image_url && (
              <div className="mb-8">
                <img 
                  src={post.image_url} 
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
            )}

            {/* Conteúdo do post */}
            <div className="prose prose-lg max-w-none">
              <div 
                className="text-gray-700 leading-relaxed"
                style={{ whiteSpace: 'pre-wrap' }}
              >
                {post.content}
              </div>
            </div>

            {/* Footer do post */}
            <footer className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <Button 
                  onClick={() => navigate('/')} 
                  variant="outline"
                >
                  <ChevronLeft className="mr-2 w-4 h-4" />
                  Voltar ao blog
                </Button>
                
                <div className="text-sm text-gray-500">
                  Publicado em {formatDate(post.created_at)}
                </div>
              </div>
            </footer>
          </article>
        </div>
      </main>
    </div>
  );
};

export default BlogPostPage;
