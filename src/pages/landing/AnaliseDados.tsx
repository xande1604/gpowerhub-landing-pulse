import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, Eye, Target, ChevronRight, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";

const AnaliseDados = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Análise de Dados Empresarial para PMEs",
    provider: { "@type": "Organization", name: "Gpowerhub", url: "https://gpowerhub.com.br" },
    description:
      "Transforme os dados da sua empresa em decisões estratégicas. People Analytics, Business Intelligence, dashboards e relatórios automáticos para PMEs.",
    areaServed: { "@type": "Country", name: "Brasil" },
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
      title: "Analytics Preditivo",
      desc: "Modelos que antecipam tendências e riscos antes que se tornem problemas.",
    },
    {
      icon: TrendingUp,
      title: "Relatórios Automáticos",
      desc: "Relatórios gerados e enviados automaticamente para gestores, sem esforço manual.",
    },
  ];

  const benefits = [
    "Decisões baseadas em dados reais, não intuição",
    "Identificação de gargalos e oportunidades ocultas",
    "Redução de 70% no tempo de compilação de dados",
    "Democratização da informação para todos os gestores",
    "Integração com Excel, ERP, CRM e outros sistemas",
    "Visualizações claras e acionáveis para o negócio",
  ];

  const faqs = [
    {
      question: "Preciso de conhecimento técnico para usar os dashboards?",
      answer:
        "Não. Desenvolvemos dashboards intuitivos para usuários não técnicos. Qualquer gestor consegue filtrar, analisar e interpretar os dados sem precisar de TI.",
    },
    {
      question: "Vocês trabalham com Power BI?",
      answer:
        "Sim. Power BI é nossa principal ferramenta para Business Intelligence, mas também trabalhamos com Python, SQL, Google Data Studio e outras tecnologias conforme a necessidade do cliente.",
    },
    {
      question: "Meus dados estão em várias planilhas e sistemas. Conseguem integrar?",
      answer:
        "Sim. Essa é uma das situações mais comuns. Conectamos dados de diferentes fontes — ERP, CRM, planilhas, e-commerce, APIs — em um único dashboard centralizado.",
    },
    {
      question: "Quanto tempo leva para ter meu primeiro dashboard?",
      answer:
        "Para projetos de Business Intelligence, os primeiros dashboards ficam prontos em 2 a 4 semanas. Começamos pelas métricas mais críticas para o seu negócio.",
    },
  ];

  return (
    <>
      <SEO
        title="Análise de Dados Empresarial para PMEs | Power BI e Business Intelligence"
        description="Transforme dados em decisões estratégicas. People Analytics, Business Intelligence, dashboards Power BI e relatórios automáticos para pequenas e médias empresas. Fale com a Gpowerhub."
        canonical="/analise-de-dados-empresarial"
        keywords="análise de dados empresarial, business intelligence PME, Power BI pequenas empresas, people analytics, dashboards empresariais, relatórios automáticos"
        schema={schema}
      />
      <Layout>
        <div className="pt-20">
          {/* Hero */}
          <section className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-0">
                  Análise de Dados
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Seus dados têm respostas.{" "}
                  <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                    Nós as encontramos.
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                  Business Intelligence, People Analytics e relatórios automáticos para que sua
                  empresa tome decisões baseadas em dados reais — não em intuição.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700"
                  >
                    <Link to="/#contato">
                      Quero analisar meus dados
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/#cases">Ver casos de sucesso</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Solutions */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Soluções de análise de dados</h2>
                <p className="text-lg text-gray-600">
                  Do dado bruto à decisão estratégica, temos as ferramentas certas
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {solutions.map((sol, i) => (
                  <Card
                    key={i}
                    className="text-center hover:shadow-lg transition-shadow border-gray-100"
                  >
                    <CardContent className="p-8">
                      <div className="w-14 h-14 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <sol.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{sol.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{sol.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-0">Benefícios</Badge>
                <h2 className="text-4xl font-bold mb-4">
                  O que você ganha com análise de dados
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                  >
                    <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Case */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-10 text-white">
                <Badge className="mb-4 bg-white/20 text-white border-0">Caso Real</Badge>
                <h2 className="text-3xl font-bold mb-4">
                  Ajinomoto: People Analytics com 70% menos tempo
                </h2>
                <p className="text-white/90 text-lg mb-8">
                  Criamos um painel completo de People Analytics integrando dados de headcount,
                  turnover, absenteísmo e horas extras — democratizando a informação para todos os
                  gestores de RH e reduzindo o tempo de compilação em 70%.
                </p>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[
                    { value: "70%", label: "Menos tempo compilando dados" },
                    { value: "100%", label: "Acesso democratizado" },
                    { value: "Eficaz", label: "Gestão baseada em dados" },
                  ].map((m, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl font-bold">{m.value}</div>
                      <div className="text-white/80 text-sm">{m.label}</div>
                    </div>
                  ))}
                </div>
                <Button asChild variant="secondary" size="lg">
                  <Link to="/#contato">
                    Quero resultados iguais
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-0">
                  Perguntas Frequentes
                </Badge>
                <h2 className="text-3xl font-bold">Dúvidas sobre análise de dados</h2>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <Card key={i} className="border-gray-100">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-4">
                Pronto para tomar decisões com dados?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Fazemos um diagnóstico gratuito dos seus dados e mostramos o potencial de análise
                que sua empresa tem.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700"
              >
                <Link to="/#contato">
                  Quero analisar meus dados
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default AnaliseDados;
