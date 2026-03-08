import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight,
  BarChart3,
  Zap,
  Code,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Star,
  CheckCircle,
  TrendingUp,
  Users,
  Clock,
  Shield,
} from "lucide-react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { useCases } from "@/hooks/useCases";
import { useProducts } from "@/hooks/useProducts";
import { useLandingSections } from "@/hooks/useLandingSections";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";

const Index = () => {
  const { posts: blogPosts, loading: blogLoading } = useBlogPosts();
  const { data: casesData, isLoading: casesLoading } = useCases();
  const { data: productsData, isLoading: productsLoading } = useProducts();
  const { data: landingSections, isLoading: sectionsLoading } = useLandingSections();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const defaultServices = [
    {
      icon: BarChart3,
      title: "Análise de Dados",
      description: "Extração, tratamento e análise avançada de dados para decisões estratégicas.",
      href: "/analise-de-dados-empresarial",
    },
    {
      icon: Zap,
      title: "Automação com IA",
      description: "Processos automatizados inteligentes para maior eficiência operacional.",
      href: "/automacao-para-pequenas-empresas",
    },
    {
      icon: Code,
      title: "Desenvolvimento",
      description: "Criação de aplicativos e soluções corporativas personalizadas.",
      href: "/desenvolvimento-de-sistemas",
    },
    {
      icon: ArrowUpRight,
      title: "Migração de Sistemas",
      description: "Implantação e migração segura de sistemas empresariais.",
      href: "/integracao-de-erp",
    },
  ];

  const defaultCases = [
    {
      title: "Automação de Processos Financeiros",
      client_name: "Grupo EMEC",
      description:
        "Implementação de sistema automatizado para reembolso de despesas, saldos bancários integrados, gestão de orçamentos e aprovação de pagamentos — reduzindo o tempo gasto em 80% além de eliminar o uso de papéis.",
      results: [
        { value: "80%", label: "Redução de tempo" },
        { value: "90%", label: "Aumento na precisão" },
        { value: "3 meses", label: "ROI positivo" },
      ],
      image_url:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Análise de Dados de Pessoas (People Analytics)",
      client_name: "Ajinomoto",
      description:
        "Análises completas dos indicadores de pessoal: Headcount, Turnover, absenteísmo, Horas Extras, Cotas de atendimento e outros indicadores críticos de RH.",
      results: [
        { value: "70%", label: "Redução de tempo para compilar dados" },
        { value: "100%", label: "Democratização das informações" },
        { value: "Eficaz", label: "Planejamento baseado em dados reais" },
      ],
      image_url:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Plataforma de Gestão Integrada",
      client_name: "Agrovix",
      description:
        "Desenvolvimento de sistema integrado ao ERP para redução de custo com licenciamento e maior controle operacional.",
      results: [
        { value: "35%", label: "Aumento na produtividade" },
        { value: "50%", label: "Redução em erros operacionais" },
        { value: "20%", label: "Economia em licenciamento" },
      ],
      image_url:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&crop=entropy&auto=format",
    },
  ];

  const defaultTestimonials = [
    {
      name: "Patrick Silva",
      role: "Coordenador de TI",
      company: "Grupo EMEC",
      content:
        "A Gpowerhub transformou completamente nossa operação. Os processos financeiros que levavam dias agora são concluídos em horas, com muito mais precisão.",
      rating: 5,
    },
    {
      name: "Fabio Junger",
      role: "CEO",
      company: "Grupo EMEC",
      content:
        "A análise de dados fornecida pela equipe nos ajudou a tomar decisões cruciais. Finalmente conseguimos enxergar nosso negócio com clareza.",
      rating: 5,
    },
    {
      name: "Jose Augusto",
      role: "Diretor de Operações",
      company: "InnovaTech",
      content:
        "Excelente suporte e soluções verdadeiramente personalizadas para o nosso negócio. Recomendo para qualquer empresa que queira crescer com tecnologia.",
      rating: 5,
    },
  ];

  const stats = [
    { value: "50+", label: "Projetos entregues", icon: CheckCircle },
    { value: "80%", label: "Redução média de custos", icon: TrendingUp },
    { value: "3 meses", label: "ROI médio dos projetos", icon: Clock },
    { value: "100%", label: "Satisfação dos clientes", icon: Star },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Diagnóstico Gratuito",
      desc: "Analisamos seus processos atuais e identificamos onde você está perdendo tempo e dinheiro.",
      icon: Shield,
    },
    {
      step: "02",
      title: "Plano Personalizado",
      desc: "Criamos um plano de ação com as soluções que trarão maior retorno no menor prazo.",
      icon: BarChart3,
    },
    {
      step: "03",
      title: "Implementação Ágil",
      desc: "Desenvolvemos e implantamos as soluções com mínimo impacto na sua operação.",
      icon: Zap,
    },
    {
      step: "04",
      title: "Suporte Contínuo",
      desc: "Acompanhamos os resultados e ajustamos para garantir o ROI prometido.",
      icon: Users,
    },
  ];

  const cases = casesData && casesData.length > 0 ? casesData : defaultCases;
  const services =
    productsData && productsData.length > 0
      ? productsData.map((p) => ({
          icon: BarChart3,
          title: p.name,
          description: p.short_description || p.description,
          href: "/solucoes",
        }))
      : defaultServices;
  const testimonials = defaultTestimonials;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("pt-BR");

  const publishedPosts = blogPosts.filter((p) => p.status === "published").slice(0, 3);

  const getCaseResults = (caseItem: any) => {
    if (Array.isArray(caseItem.results)) return caseItem.results;
    return [];
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Gpowerhub",
    url: "https://gpowerhub.com.br",
    logo: "https://gpowerhub.com.br/og-image.png",
    description:
      "Hub de desenvolvimento tecnológico para pequenas e médias empresas. Reduzimos custos e aumentamos performance com tecnologia estratégica.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cariacica",
      addressRegion: "ES",
      addressCountry: "BR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55-27-99238-9066",
      email: "contato@gpowerhub.com.br",
      contactType: "customer service",
      availableLanguage: "Portuguese",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Consultoria em Tecnologia para PMEs",
    provider: { "@type": "Organization", name: "Gpowerhub" },
    areaServed: { "@type": "Country", name: "Brasil" },
    description:
      "Soluções em análise de dados, automação com IA, desenvolvimento de sistemas e migração para pequenas e médias empresas.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Como a Gpowerhub pode reduzir custos da minha empresa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Implementamos automação de processos, análise de dados e sistemas integrados que eliminam retrabalho e reduzem despesas operacionais. Casos reais mostram até 80% de redução em tempo gasto em processos financeiros.",
        },
      },
      {
        "@type": "Question",
        name: "A Gpowerhub atende pequenas e médias empresas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Somos especializados em transformação digital para PMEs, com soluções acessíveis e com ROI rápido, geralmente em menos de 3 meses.",
        },
      },
      {
        "@type": "Question",
        name: "Quais tecnologias a Gpowerhub utiliza?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trabalhamos com automação de processos, inteligência artificial, análise de dados com Power BI e Python, desenvolvimento de sistemas web e mobile, e integração de ERP.",
        },
      },
    ],
  };

  return (
    <>
      <SEO
        title="Gpowerhub - Tecnologia Estratégica para Pequenas e Médias Empresas"
        description="Reduza custos e aumente a performance da sua empresa com tecnologia. Automação com IA, análise de dados e desenvolvimento de sistemas para PMEs. ROI em até 3 meses."
        canonical="/"
        keywords="tecnologia para pequenas empresas, redução de custos com tecnologia, automação PME, análise de dados empresarial, consultoria tecnologia, transformação digital PME"
        schema={[organizationSchema, serviceSchema, faqSchema]}
      />
      <Layout>
        {/* Hero Section */}
        <section
          id="inicio"
          className="pt-24 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-5 bg-blue-100 text-blue-700 border-0 px-4 py-1.5">
                  🚀 Tecnologia para PMEs
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                  Tecnologia que{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    reduz custos
                  </span>{" "}
                  e escala seu negócio
                </h1>
                <p
                  className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  Transformamos pequenas e médias empresas com automação inteligente, análise de
                  dados e sistemas personalizados. ROI comprovado em até 3 meses.
                </p>
                <div
                  className="flex flex-col sm:flex-row gap-4 animate-fade-in"
                  style={{ animationDelay: "0.4s" }}
                >
                  <Button
                    onClick={() => scrollToSection("contato")}
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-base"
                  >
                    Diagnóstico Gratuito
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button
                    onClick={() => scrollToSection("cases")}
                    variant="outline"
                    size="lg"
                    className="text-base"
                  >
                    Ver Cases de Sucesso
                  </Button>
                </div>
              </div>

              {/* Hero visual */}
              <div className="hidden lg:flex flex-col gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: TrendingUp, label: "Redução de custos", value: "até 80%" },
                    { icon: Clock, label: "ROI médio", value: "3 meses" },
                    { icon: CheckCircle, label: "Projetos entregues", value: "50+" },
                    { icon: Users, label: "Clientes satisfeitos", value: "100%" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-3">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{item.value}</div>
                      <div className="text-sm text-gray-500">{item.label}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-5 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <Star className="w-4 h-4" />
                    </div>
                    <span className="font-semibold">Caso Recente</span>
                  </div>
                  <p className="text-white/90 text-sm">
                    Grupo EMEC reduziu 80% do tempo em processos financeiros com nossa automação —
                    ROI em apenas 3 meses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-700 border-0">Nossos Serviços</Badge>
              <h2 className="text-4xl font-bold mb-4">
                Soluções completas para impulsionar seu negócio
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                De automação a análise de dados, temos o que sua empresa precisa para crescer com
                eficiência.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Link key={index} to={service.href}>
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full cursor-pointer border-gray-100">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </CardDescription>
                      <div className="mt-4 flex items-center text-blue-600 text-sm font-medium group-hover:gap-2 transition-all gap-1">
                        Saiba mais <ChevronRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button asChild variant="outline" size="lg">
                <Link to="/solucoes">Ver todas as soluções</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-purple-100 text-purple-700 border-0">Nosso Processo</Badge>
              <h2 className="text-4xl font-bold mb-4">Como funciona</h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Do diagnóstico à entrega, um processo transparente e orientado a resultados.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((item, i) => (
                <div key={i} className="relative">
                  {i < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(100%-1rem)] w-8 border-t-2 border-dashed border-blue-200 z-10" />
                  )}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
                    <div className="text-5xl font-bold text-blue-100 mb-3 leading-none">
                      {item.step}
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button
                onClick={() => scrollToSection("contato")}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Começar meu diagnóstico gratuito
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Cases Section */}
        <section id="cases" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-green-100 text-green-700 border-0">Projetos em Destaque</Badge>
              <h2 className="text-4xl font-bold mb-4">Cases de Sucesso</h2>
              <p className="text-lg text-gray-500">
                Resultados reais que transformaram empresas como a sua.
              </p>
            </div>
            <div className="space-y-16">
              {cases.map((case_item: any, index: number) => {
                const results = getCaseResults(case_item);
                const imageUrl =
                  case_item.image_url ||
                  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop";
                const clientName = case_item.client_name || "Cliente";

                return (
                  <div
                    key={case_item.id || index}
                    className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
                  >
                    <div className="flex-1">
                      <img
                        src={imageUrl}
                        alt={case_item.title}
                        className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
                      />
                    </div>
                    <div className="flex-1 space-y-6">
                      <div>
                        <Badge className="mb-3 bg-green-100 text-green-700 border-0">
                          {clientName}
                        </Badge>
                        <h3 className="text-3xl font-bold mb-4">{case_item.title}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {case_item.description}
                        </p>
                      </div>
                      {results.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {results.map((metric: any, mi: number) => (
                            <div
                              key={mi}
                              className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100"
                            >
                              <div className="text-2xl font-bold text-blue-600 mb-1">
                                {metric.value}
                              </div>
                              <div className="text-xs text-gray-600">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      )}
                      <Button
                        onClick={() => scrollToSection("contato")}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        Quero resultados iguais
                        <ChevronRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="depoimentos" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-yellow-100 text-yellow-700 border-0">
                O que nossos clientes dizem
              </Badge>
              <h2 className="text-4xl font-bold mb-4">
                Histórias de sucesso de quem confia na Gpowerhub
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gray-100"
                >
                  <CardContent className="p-8">
                    {/* Stars */}
                    <div className="flex gap-1 mb-5">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">
                          {testimonial.role} · {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-0">Blog</Badge>
              <h2 className="text-4xl font-bold mb-4">
                Insights e novidades sobre tecnologia e inovação
              </h2>
            </div>

            {blogLoading ? (
              <div className="text-center py-8 text-gray-500">Carregando posts...</div>
            ) : publishedPosts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 text-lg mb-4">Nenhum post publicado ainda.</div>
                <p className="text-gray-500 text-sm">
                  Em breve publicaremos conteúdos sobre tecnologia e inovação.
                </p>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  {publishedPosts.map((post) => (
                    <Card
                      key={post.id}
                      className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-gray-100"
                      onClick={() => navigate(`/blog/${post.slug}`)}
                    >
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <img
                          src={
                            post.image_url ||
                            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop&crop=entropy&auto=format"
                          }
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center text-sm text-gray-400 mb-3">
                          <span>{formatDate(post.created_at)}</span>
                          <span className="mx-2">·</span>
                          <span>{post.author}</span>
                        </div>
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {post.tags.slice(0, 2).map((tag, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                        <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-gray-500 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                        <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                          Ler mais
                          <ChevronRight className="ml-1 w-4 h-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="text-center">
                  <Button asChild variant="outline" size="lg">
                    <Link to="/blog">Ver todos os artigos</Link>
                  </Button>
                </div>
              </>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-green-100 text-green-700 border-0">Vamos Conversar</Badge>
              <h2 className="text-4xl font-bold mb-4">
                Pronto para transformar sua empresa com tecnologia?
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Agende uma conversa gratuita. Analisamos seus processos e mostramos onde você está
                perdendo tempo e dinheiro.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="space-y-8">
                {[
                  {
                    Icon: MapPin,
                    title: "Endereço",
                    content: "Cariacica, ES — Brasil",
                  },
                  {
                    Icon: Mail,
                    title: "Email",
                    content: "contato@gpowerhub.com.br",
                    href: "mailto:contato@gpowerhub.com.br",
                  },
                  {
                    Icon: Phone,
                    title: "Telefone / WhatsApp",
                    content: "(27) 99238-9066",
                    href: "https://wa.me/5527992389066",
                  },
                ].map(({ Icon, title, content, href }, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{title}</h3>
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <Card className="border-gray-100 shadow-sm">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Nome</label>
                      <input
                        type="text"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                      <input
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Telefone</label>
                      <input
                        type="tel"
                        placeholder="(00) 00000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Mensagem</label>
                      <textarea
                        placeholder="Como podemos ajudar?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-base py-3"
                    >
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;
