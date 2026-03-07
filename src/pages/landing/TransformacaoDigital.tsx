import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, BarChart3, Code, ArrowUpRight, ChevronRight, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";

const TransformacaoDigital = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Transformação Digital para Pequenas e Médias Empresas",
    "provider": { "@type": "Organization", "name": "Gpowerhub", "url": "https://gpowerhub.com.br" },
    "description": "Consultoria completa de transformação digital para PMEs. Da análise de maturidade digital até a implementação de sistemas e automações que mudam o negócio de verdade.",
    "areaServed": { "@type": "Country", "name": "Brasil" }
  };

  const stages = [
    {
      icon: BarChart3,
      title: "Diagnóstico Digital",
      desc: "Avaliamos a maturidade digital da sua empresa: processos, sistemas, dados e equipe.",
      badge: "Passo 1"
    },
    {
      icon: Code,
      title: "Plano de Transformação",
      desc: "Criamos um roadmap personalizado com as iniciativas de maior impacto para o seu negócio.",
      badge: "Passo 2"
    },
    {
      icon: Zap,
      title: "Implementação",
      desc: "Executamos o plano com metodologia ágil: entregas rápidas, feedback constante e ajustes em tempo real.",
      badge: "Passo 3"
    },
    {
      icon: ArrowUpRight,
      title: "Crescimento Sustentável",
      desc: "Monitoramos métricas e evoluímos continuamente para manter sua empresa à frente.",
      badge: "Passo 4"
    },
  ];

  const pillars = [
    "Digitalização de processos operacionais",
    "Automação com Inteligência Artificial",
    "Análise de dados e Business Intelligence",
    "Integração de sistemas e ERPs",
    "Desenvolvimento de plataformas digitais",
    "Cultura data-driven e capacitação de equipe",
  ];

  return (
    <>
      <SEO
        title="Transformação Digital para PMEs - Consultoria Completa"
        description="Leve sua empresa para o próximo nível com transformação digital. Automatize processos, tome decisões baseadas em dados e cresça com tecnologia. Gpowerhub: especialistas em PMEs brasileiras."
        canonical="/transformacao-digital-pme"
        keywords="transformação digital PME, consultoria transformação digital, digitalização empresas, como digitalizar empresa, maturidade digital, estratégia digital empresas"
        schema={schema}
      />
      <div className="min-h-screen bg-white">
        <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
          <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Gpowerhub
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/#servicos" className="text-gray-600 hover:text-blue-600">Serviços</Link>
              <Link to="/#cases" className="text-gray-600 hover:text-blue-600">Cases</Link>
              <Link to="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link>
            </div>
            <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Link to="/#contato">Fale Conosco</Link>
            </Button>
          </nav>
        </header>

        <main className="pt-20">
          {/* Hero */}
          <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-4 bg-purple-100 text-purple-700">Transformação Digital</Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Transformação digital{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    acessível para sua PME
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                  Transformação digital não é só para grandes empresas. Com a estratégia certa,
                  sua PME pode competir com gigantes usando tecnologia inteligente e acessível.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    <Link to="/#contato">
                      Iniciar minha transformação
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/#cases">Casos de sucesso</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Stages */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Nossa metodologia de transformação</h2>
                <p className="text-lg text-gray-600">Do diagnóstico à implementação, sempre ao seu lado</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {stages.map((s, i) => (
                  <Card key={i} className="group hover:shadow-lg transition-all hover:-translate-y-2">
                    <CardHeader>
                      <Badge className="w-fit mb-3 bg-purple-100 text-purple-700">{s.badge}</Badge>
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <s.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle>{s.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">{s.desc}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Pillars */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">Os pilares da transformação digital</h2>
                  <p className="text-lg text-gray-600">Cada pilar trabalha em conjunto para transformar o negócio de forma completa</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {pillars.map((pillar, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white p-5 rounded-xl shadow-sm">
                      <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0" />
                      <span className="font-medium text-gray-800">{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Case */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-4">Resultados reais de transformação digital</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { company: "Grupo EMEC", result: "80%", desc: "menos tempo em processos financeiros" },
                    { company: "Ajinomoto", result: "70%", desc: "redução no tempo de compilar dados de RH" },
                    { company: "Agrovix", result: "35%", desc: "aumento na produtividade operacional" },
                  ].map((c, i) => (
                    <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                      <CardContent className="p-8">
                        <Badge className="mb-4 bg-blue-100 text-blue-700">{c.company}</Badge>
                        <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3">
                          {c.result}
                        </div>
                        <p className="text-gray-600">{c.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-4">Sua empresa merece tecnologia de verdade</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Vamos conversar sobre onde sua empresa está e onde quer chegar. O diagnóstico é gratuito.
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link to="/#contato">
                  Quero transformar minha empresa
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </section>
        </main>

        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 md:mb-0">
              Gpowerhub
            </Link>
            <div className="text-gray-400 text-sm">© 2025 Gpowerhub. Todos os direitos reservados.</div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default TransformacaoDigital;
