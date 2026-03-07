import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, Eye, Target, ChevronRight, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";

const AnaliseDados = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Análise de Dados Empresarial para PMEs",
    "provider": { "@type": "Organization", "name": "Gpowerhub", "url": "https://gpowerhub.com.br" },
    "description": "Transforme os dados da sua empresa em decisões estratégicas. People Analytics, Business Intelligence, dashboards e relatórios automáticos para PMEs.",
    "areaServed": { "@type": "Country", "name": "Brasil" }
  };

  const solutions = [
    {
      icon: BarChart3,
      title: "Business Intelligence",
      desc: "Dashboards interativos com Power BI que mostram o desempenho do negócio em tempo real.",
    },
    {
      icon: Eye,
      title: "People Analytics",
      desc: "Análise completa de indicadores de RH: headcount, turnover, absenteísmo e muito mais.",
    },
    {
      icon: Target,
      title: "Análise Preditiva",
      desc: "Antecipe tendências e tome decisões antes que os problemas aconteçam.",
    },
    {
      icon: TrendingUp,
      title: "Relatórios Automáticos",
      desc: "Relatórios gerenciais gerados automaticamente, sem planilhas manuais.",
    },
  ];

  const benefits = [
    "Decisões baseadas em dados reais, não em feeling",
    "Visibilidade completa do negócio em tempo real",
    "Identificação de problemas antes que se tornem crises",
    "Eliminação de planilhas manuais e erros",
    "Democratização da informação para toda a equipe",
    "Planejamento mais preciso e estratégico",
  ];

  return (
    <>
      <SEO
        title="Análise de Dados Empresarial para PMEs - Business Intelligence"
        description="Tome decisões estratégicas baseadas em dados. Business Intelligence, dashboards com Power BI e análise preditiva para pequenas e médias empresas. A Gpowerhub transforma seus dados em resultados."
        canonical="/analise-de-dados-empresarial"
        keywords="análise de dados empresarial, business intelligence PME, dashboards Power BI, people analytics, análise de dados pequenas empresas, relatórios gerenciais automatizados, data driven"
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
          <section className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-4 bg-indigo-100 text-indigo-700">Análise de Dados</Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Seus dados têm a resposta.{" "}
                  <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                    Você está ouvindo?
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                  A maioria das PMEs tem dados valiosos espalhados em planilhas, sistemas e e-mails.
                  A Gpowerhub organiza, analisa e transforma esses dados em vantagem competitiva real.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700">
                    <Link to="/#contato">
                      Quero análise dos meus dados
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/#cases">Ver casos reais</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Solutions */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Nossas soluções de dados</h2>
                <p className="text-lg text-gray-600">Do dado bruto à decisão estratégica</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {solutions.map((s, i) => (
                  <Card key={i} className="group hover:shadow-lg transition-all hover:-translate-y-2 text-center">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <s.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                      <p className="text-gray-600">{s.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">O que você ganha com análise de dados</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white p-5 rounded-xl shadow-sm">
                      <CheckCircle className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                      <span className="text-gray-800">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Case: Ajinomoto */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-10 text-white">
                <Badge className="mb-4 bg-white/20 text-white border-0">Caso Real</Badge>
                <h2 className="text-3xl font-bold mb-4">Ajinomoto: People Analytics completo</h2>
                <p className="text-white/90 text-lg mb-8">
                  Desenvolvemos análises completas de indicadores de pessoal: Headcount, Turnover, Absenteísmo,
                  Horas Extras e Cotas de atendimento. O resultado foi democratização total das informações
                  e decisões de RH baseadas em dados reais.
                </p>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[
                    { value: "70%", label: "Redução no tempo de compilar dados" },
                    { value: "100%", label: "Democratização das informações" },
                    { value: "Eficaz", label: "Planejamento baseado em dados reais" },
                  ].map((m, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl font-bold">{m.value}</div>
                      <div className="text-white/80 text-sm">{m.label}</div>
                    </div>
                  ))}
                </div>
                <Button asChild variant="secondary" size="lg">
                  <Link to="/#contato">
                    Quero análise assim
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-4">Pronto para tomar decisões com dados?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Mostre-nos seus dados e processos. Apresentamos um diagnóstico gratuito com o potencial de análise da sua empresa.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700">
                <Link to="/#contato">
                  Agendar diagnóstico gratuito
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

export default AnaliseDados;
