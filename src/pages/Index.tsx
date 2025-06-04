
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, BarChart3, Zap, Code, ArrowUpRight, Users, Mail, Phone, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { useBlogPosts } from "@/hooks/useBlogPosts";

const Index = () => {
  const { posts: blogPosts, loading: blogLoading } = useBlogPosts();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const services = [
    {
      icon: BarChart3,
      title: "Análise de Dados",
      description: "Extração, tratamento e análise avançada de dados para decisões estratégicas."
    },
    {
      icon: Zap,
      title: "Automação com IA",
      description: "Processos automatizados inteligentes para maior eficiência operacional."
    },
    {
      icon: Code,
      title: "Desenvolvimento",
      description: "Criação de aplicativos e soluções corporativas personalizadas."
    },
    {
      icon: ArrowUpRight,
      title: "Migração de Sistemas",
      description: "Implantação e migração segura de sistemas empresariais."
    }
  ];

  const cases = [
    {
      title: "Automação de Processos Financeiros",
      client: "Grupo EMEC",
      description: "Implementação de sistema automatizado para reembolso de despesas, saldos bancários integrados, Gestão de orçamentos e planejamento orçamentário, e aprovação de pagamentos reduzindo o tempo de gasto nestas atividades em 80% além de eliminarmos o uso de papeis e impressões.",
      metrics: [
        { value: "80%", label: "Redução de tempo" },
        { value: "90%", label: "Aumento na precisão" },
        { value: "3 meses", label: "ROI positivo" }
      ],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=entropy&auto=format"
    },
    {
      title: "Análise de Dados de Pessoas (People Analytics)",
      client: "Ajinomoto",
      description: "Analises completas dos indicadores de pessoal: Headcount, Turnover, absenteismo, Horas Extras, Cotas de atendimento dentre outros.",
      metrics: [
        { value: "70%", label: "Redução de tempo para compilar dados" },
        { value: "100%", label: "Democratização das informações" },
        { value: "Eficaz", label: "Planejamento baseado em dados reais" }
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=entropy&auto=format"
    },
    {
      title: "Plataforma de Gestão Integrada",
      client: "Agrovix",
      description: "Desenvolvimento de sistema integrado ao ERP para redução de custo com licenciamento",
      metrics: [
        { value: "35%", label: "Aumento na produtividade" },
        { value: "50%", label: "Redução em erros operacionais" },
        { value: "20%", label: "Economia em licenciamento" }
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&crop=entropy&auto=format"
    }
  ];

  const testimonials = [
    {
      name: "Patrick Silva",
      role: "Coordenador de TI",
      content: "A Gpowerhub transformou completamente nossa operação com soluções de IA."
    },
    {
      name: "Fabio Junger",
      role: "CEO, Grupo EMEC",
      content: "A análise de dados fornecida pela equipe nos ajudou a tomar decisões cruciais."
    },
    {
      name: "Jose Augusto",
      role: "Diretor, InnovaTech",
      content: "Excelente suporte e soluções verdadeiramente personalizadas para nosso negócio."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  // Filtra apenas posts publicados para a página pública
  const publishedPosts = blogPosts.filter(post => post.status === 'published').slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Gpowerhub
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection("inicio")} className="text-gray-600 hover:text-blue-600 transition-colors">Início</button>
              <button onClick={() => scrollToSection("servicos")} className="text-gray-600 hover:text-blue-600 transition-colors">Serviços</button>
              <button onClick={() => scrollToSection("cases")} className="text-gray-600 hover:text-blue-600 transition-colors">Cases</button>
              <button onClick={() => scrollToSection("depoimentos")} className="text-gray-600 hover:text-blue-600 transition-colors">Depoimentos</button>
              <button onClick={() => scrollToSection("blog")} className="text-gray-600 hover:text-blue-600 transition-colors">Blog</button>
              <button onClick={() => scrollToSection("contato")} className="text-gray-600 hover:text-blue-600 transition-colors">Contato</button>
            </div>
            <Button onClick={() => scrollToSection("contato")} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Fale Conosco
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
              Tecnologia Estratégica para o Sucesso
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Transformamos sua empresa através de soluções tecnológicas inovadoras em análise de dados, automação e desenvolvimento de sistemas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button onClick={() => scrollToSection("contato")} size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Fale Conosco
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
              <Button onClick={() => scrollToSection("cases")} variant="outline" size="lg">
                Conheça Nossos Cases
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700">Nossos Serviços</Badge>
            <h2 className="text-4xl font-bold mb-4">Soluções completas para impulsionar seu negócio</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700">Projetos em Destaque</Badge>
            <h2 className="text-4xl font-bold mb-4">Conheça alguns dos nossos casos de sucesso</h2>
          </div>
          <div className="space-y-16">
            {cases.map((case_item, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                <div className="flex-1">
                  <img src={case_item.image} alt={case_item.title} className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg" />
                </div>
                <div className="flex-1 space-y-6">
                  <div>
                    <Badge className="mb-2 bg-green-100 text-green-700">{case_item.client}</Badge>
                    <h3 className="text-3xl font-bold mb-4">{case_item.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{case_item.description}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {case_item.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-blue-600 mb-1">{metric.value}</div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  <Button onClick={() => scrollToSection("contato")} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Fale Conosco
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-700">O que nossos clientes dizem</Badge>
            <h2 className="text-4xl font-bold mb-4">Histórias de sucesso de quem confia na Gpowerhub</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="font-semibold text-lg">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section - Updated to use Supabase data */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-700">Blog</Badge>
            <h2 className="text-4xl font-bold mb-4">Insights e novidades sobre tecnologia e inovação</h2>
          </div>
          
          {blogLoading ? (
            <div className="text-center py-8">
              <div className="text-gray-600">Carregando posts...</div>
            </div>
          ) : publishedPosts.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-gray-600">Nenhum post publicado ainda.</div>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {publishedPosts.map((post) => (
                  <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img 
                        src={post.image_url || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop&crop=entropy&auto=format"} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <span>{formatDate(post.created_at)}</span>
                        <span className="mx-2">•</span>
                        <span>{post.author}</span>
                      </div>
                      
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.tags.slice(0, 2).map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                      
                      <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                        Ler mais
                        <ChevronRight className="ml-1 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center">
                <Button variant="outline" size="lg">Ver todos os artigos</Button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700">Vamos Conversar</Badge>
            <h2 className="text-4xl font-bold mb-4">Estamos prontos para transformar sua empresa com soluções tecnológicas inovadoras.</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Endereço</h3>
                  <p className="text-gray-600">Cariacica, ES</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-gray-600">contato@gpowerhub.com.br</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Telefone</h3>
                  <p className="text-gray-600">(27) 99238-9066</p>
                </div>
              </div>
            </div>
            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome</label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Telefone</label>
                  <input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem</label>
                  <textarea
                    placeholder="Como podemos ajudar?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Enviar Mensagem
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Gpowerhub
              </div>
              <p className="text-gray-400">Tecnologia estratégica para o sucesso do seu negócio</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Navegação</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection("inicio")} className="block text-gray-400 hover:text-white transition-colors">Início</button>
                <button onClick={() => scrollToSection("servicos")} className="block text-gray-400 hover:text-white transition-colors">Serviços</button>
                <button onClick={() => scrollToSection("cases")} className="block text-gray-400 hover:text-white transition-colors">Cases</button>
                <button onClick={() => scrollToSection("blog")} className="block text-gray-400 hover:text-white transition-colors">Blog</button>
                <button onClick={() => scrollToSection("contato")} className="block text-gray-400 hover:text-white transition-colors">Contato</button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Serviços</h3>
              <div className="space-y-2 text-gray-400">
                <div>Análise de Dados</div>
                <div>Automação com IA</div>
                <div>Desenvolvimento</div>
                <div>Migração de Sistemas</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <div className="space-y-2 text-gray-400">
                <div>Termos de Uso</div>
                <div>Política de Privacidade</div>
                <div>Cookies</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400">© 2025 Gpowerhub. Todos os direitos reservados.</div>
            <div className="text-gray-400 mt-4 md:mt-0">Desenvolvido com ❤️ por Gpowerhub</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
