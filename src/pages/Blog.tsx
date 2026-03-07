import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import SEO from "@/components/SEO";

const Blog = () => {
  const navigate = useNavigate();
  const { posts, loading } = useBlogPosts();

  const publishedPosts = posts.filter(p => p.status === "published");

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR");
  };

  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog Gpowerhub",
    "description": "Artigos sobre tecnologia, automação, análise de dados e transformação digital para pequenas e médias empresas.",
    "url": "https://gpowerhub.com.br/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Gpowerhub",
      "url": "https://gpowerhub.com.br"
    }
  };

  return (
    <>
      <SEO
        title="Blog Gpowerhub - Tecnologia e Inovação para PMEs"
        description="Artigos práticos sobre automação, análise de dados, redução de custos com tecnologia e transformação digital para pequenas e médias empresas."
        canonical="/blog"
        keywords="blog tecnologia empresas, automação processos, análise de dados PME, transformação digital, redução custos operacionais, inovação empresarial"
        schema={blogListSchema}
      />
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Gpowerhub
              </Link>
              <div className="hidden md:flex items-center space-x-6">
                <Link to="/#servicos" className="text-gray-600 hover:text-blue-600 transition-colors">Serviços</Link>
                <Link to="/#cases" className="text-gray-600 hover:text-blue-600 transition-colors">Cases</Link>
                <Link to="/blog" className="text-blue-600 font-medium">Blog</Link>
                <Link to="/solucoes" className="text-gray-600 hover:text-blue-600 transition-colors">Soluções</Link>
              </div>
              <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Link to="/#contato">Fale Conosco</Link>
              </Button>
            </div>
          </nav>
        </header>

        <main className="pt-24 pb-16">
          {/* Hero */}
          <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 mb-12">
            <div className="container mx-auto px-4 text-center">
              <Badge className="mb-4 bg-indigo-100 text-indigo-700">Blog</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Insights sobre Tecnologia e Inovação
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Conteúdo prático sobre automação, análise de dados e como a tecnologia pode transformar sua empresa.
              </p>
            </div>
          </section>

          <div className="container mx-auto px-4">
            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <Card key={i} className="animate-pulse">
                    <div className="aspect-video bg-gray-200 rounded-t-lg" />
                    <CardContent className="p-6 space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-1/2" />
                      <div className="h-6 bg-gray-200 rounded" />
                      <div className="h-4 bg-gray-200 rounded" />
                      <div className="h-4 bg-gray-200 rounded w-3/4" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : publishedPosts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-gray-500 mb-6">Nenhum artigo publicado ainda.</p>
                <Button onClick={() => navigate("/")} variant="outline">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Voltar ao início
                </Button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {publishedPosts.map(post => (
                  <Card
                    key={post.id}
                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                    onClick={() => navigate(`/blog/${post.slug}`)}
                  >
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={post.image_url || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop&crop=entropy&auto=format"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span>{formatDate(post.created_at)}</span>
                        <span className="mx-2">·</span>
                        <span>{post.author}</span>
                      </div>
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.tags.slice(0, 2).map((tag, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">{tag}</Badge>
                          ))}
                        </div>
                      )}
                      <h2 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                        Ler artigo completo
                        <ChevronRight className="ml-1 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </main>

        {/* Footer simples */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 md:mb-0">
              Gpowerhub
            </div>
            <div className="text-gray-400 text-sm">© 2025 Gpowerhub. Todos os direitos reservados.</div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Blog;
