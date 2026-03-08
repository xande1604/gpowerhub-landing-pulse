import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, BarChart3, Code, ArrowUpRight, ChevronRight, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";

const TransformacaoDigital = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Transformação Digital para Pequenas e Médias Empresas",
    provider: { "@type": "Organization", name: "Gpowerhub", url: "https://gpowerhub.com.br" },
    description:
      "Consultoria completa de transformação digital para PMEs. Da análise de maturidade digital até a implementação de sistemas e automações que mudam o negócio de verdade.",
    areaServed: { "@type": "Country", name: "Brasil" },
  };

  const stages = [
    {
      icon: BarChart3,
      title: "Diagnóstico Digital",
      desc: "Avaliamos a maturidade digital da sua empresa: processos, sistemas, dados e equipe.",
      badge: "Passo 1",
    },
    {
      icon: Code,
      title: "Plano de Transformação",
      desc: "Criamos um roadmap personalizado com as iniciativas de maior impacto para o seu negócio.",
      badge: "Passo 2",
    },
    {
      icon: Zap,
      title: "Implementação Gradual",
      desc: "Executamos as mudanças de forma estruturada, sem parar sua operação.",
      badge: "Passo 3",
    },
    {
      icon: ArrowUpRight,
      title: "Evolução Contínua",
      desc: "Monitoramos resultados e evoluímos constantemente para manter sua empresa competitiva.",
      badge: "Passo 4",
    },
  ];

  const pillars = [
    "Digitalização de processos manuais",
    "Integração entre sistemas e dados",
    "Dashboards e análise em tempo real",
    "Automação com inteligência artificial",
    "Cultura orientada a dados",
    "Infraestrutura escalável na nuvem",
  ];

  const results = [
    { value: "35%", label: "Aumento médio de produtividade" },
    { value: "80%", label: "Redução de processos manuais" },
    { value: "50%", label: "Menos erros operacionais" },
  ];

  const faqs = [
    {
      question: "O que é transformação digital na prática?",
      answer:
        "É a substituição de processos manuais e analógicos por soluções digitais — desde planilhas vira sistemas, aprovações por papel viram fluxos automáticos, e dados dispersos viram dashboards centralizados. O resultado é uma empresa mais ágil, eficiente e competitiva.",
    },
    {
      question: "Por onde começa a transformação digital?",
      answer:
        "Começa com um diagnóstico honesto da maturidade digital atual. Mapeamos onde estão os maiores gargalos e qual tecnologia resolve com maior ROI. Não existe uma sequência única — depende da realidade de cada empresa.",
    },
    {
      question: "Quanto tempo leva um processo de transformação digital?",
      answer:
        "As primeiras melhorias podem aparecer em semanas. A transformação completa é um processo contínuo de 6 a 24 meses, dependendo do tamanho e complexidade da empresa. Mas os resultados começam cedo.",
    },
    {
      question: "Minha equipe vai conseguir usar as novas ferramentas?",
      answer:
        "Sim. Priorizamos soluções intuitivas e incluímos treinamento no processo. A adoção é gradual para que seu time se adapte sem sobrecarga.",
    },
  ];

  return (
    <>
      <SEO
        title="Transformação Digital para Pequenas e Médias Empresas"
        description="Consultoria completa em transformação digital para PMEs. Digitalize processos, integre sistemas e tome decisões com dados. ROI comprovado em até 3 meses. Fale com a Gpowerhub."
        canonical="/transformacao-digital-pme"
        keywords="transformação digital PME, digitalização de processos, consultoria transformação digital, maturidade digital, sistemas integrados, tecnologia para empresas"
        schema={schema}
      />
      <Layout>
        <div className="pt-20">
          {/* Hero */}
          <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-4 bg-purple-100 text-purple-700 border-0">
                  Transformação Digital
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Transforme sua empresa com{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    tecnologia estratégica
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                  A transformação digital não é sobre comprar tecnologia. É sobre usar a tecnologia
                  certa para resolver os problemas certos e escalar o seu negócio com eficiência.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    <Link to="/#contato">
                      Quero transformar minha empresa
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/#cases">Ver resultados reais</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Stages */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Como fazemos a transformação digital</h2>
                <p className="text-lg text-gray-600">
                  Um processo estruturado e orientado a resultados reais
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {stages.map((stage, i) => (
                  <Card
                    key={i}
                    className="text-center hover:shadow-lg transition-shadow border-gray-100"
                  >
                    <CardHeader>
                      <Badge className="mb-2 mx-auto bg-purple-100 text-purple-700 border-0 w-fit">
                        {stage.badge}
                      </Badge>
                      <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <stage.icon className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-xl">{stage.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {stage.desc}
                      </CardDescription>
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
                  <Badge className="mb-4 bg-blue-100 text-blue-700 border-0">
                    Pilares da Transformação
                  </Badge>
                  <h2 className="text-4xl font-bold mb-4">
                    O que transformamos na sua empresa
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {pillars.map((pillar, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                    >
                      <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">Resultados dos nossos clientes</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                {results.map((r, i) => (
                  <div key={i}>
                    <div className="text-5xl font-bold mb-2">{r.value}</div>
                    <div className="text-white/80">{r.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-purple-100 text-purple-700 border-0">
                  Perguntas Frequentes
                </Badge>
                <h2 className="text-3xl font-bold">Dúvidas sobre transformação digital</h2>
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
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-4">
                Pronto para iniciar sua transformação digital?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Agende uma conversa gratuita e descubra o que a tecnologia certa pode fazer pelo
                seu negócio.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <Link to="/#contato">
                  Começar transformação digital
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

export default TransformacaoDigital;
