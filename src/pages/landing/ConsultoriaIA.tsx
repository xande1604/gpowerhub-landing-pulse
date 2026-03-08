import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Brain, Target, TrendingUp, ChevronRight, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";

const ConsultoriaIA = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Consultoria em Inteligência Artificial para Empresas",
    provider: { "@type": "Organization", name: "Gpowerhub", url: "https://gpowerhub.com.br" },
    description:
      "Consultoria em IA para PMEs. Automação com machine learning, chatbots inteligentes, análise preditiva e implementação prática de inteligência artificial nos processos do seu negócio.",
    areaServed: { "@type": "Country", name: "Brasil" },
  };

  const solutions = [
    {
      icon: Zap,
      title: "Automação Inteligente",
      desc: "IA que aprende os padrões dos seus processos e os executa automaticamente — incluindo decisões complexas.",
    },
    {
      icon: Brain,
      title: "Chatbots e Assistentes",
      desc: "Atendimento automatizado inteligente para clientes, funcionários ou parceiros comerciais.",
    },
    {
      icon: Target,
      title: "Análise Preditiva",
      desc: "Modelos que antecipam demanda, risco de churn, inadimplência e outros comportamentos críticos.",
    },
    {
      icon: TrendingUp,
      title: "IA Generativa Aplicada",
      desc: "Criação automática de conteúdo, relatórios, respostas e documentos com LLMs (GPT, Claude e outros).",
    },
  ];

  const applications = [
    "Triagem e classificação automática de e-mails e tickets",
    "Geração automática de relatórios e documentos",
    "Análise de sentimento em feedbacks de clientes",
    "Previsão de demanda e planejamento de estoque",
    "Detecção de anomalias financeiras e fraudes",
    "Chatbot de atendimento ao cliente 24/7",
    "Extração de dados de documentos e notas fiscais",
    "Recomendação personalizada de produtos ou serviços",
  ];

  const faqs = [
    {
      question: "IA é viável financeiramente para PMEs?",
      answer:
        "Sim. Com a democratização de ferramentas como OpenAI, Claude e plataformas de automação com IA, o custo caiu drasticamente. Muitas soluções de IA para PMEs têm ROI positivo em 3 a 6 meses.",
    },
    {
      question: "Precisa de TI interno ou cientista de dados?",
      answer:
        "Não. Cuidamos de toda a implementação, treinamento dos modelos e manutenção. Sua equipe apenas usa as soluções entregues, sem precisar entender o que acontece por trás.",
    },
    {
      question: "Como a IA aprende sobre o meu negócio?",
      answer:
        "Utilizamos seus dados históricos, documentos, processos e regras de negócio para treinar ou configurar os modelos. Quanto mais dados disponíveis, mais preciso o resultado.",
    },
    {
      question: "A IA pode errar? Como garantem a qualidade?",
      answer:
        "Sim, qualquer modelo pode errar. Por isso implementamos revisão humana nos pontos críticos, monitoramento contínuo e alertas de anomalia. A IA aumenta a capacidade humana, não a substitui completamente.",
    },
  ];

  return (
    <>
      <SEO
        title="Consultoria em Inteligência Artificial para Empresas | Gpowerhub"
        description="Consultoria em IA para PMEs. Automação inteligente, chatbots, análise preditiva e IA generativa aplicada aos processos do seu negócio. ROI em até 6 meses. Fale com a Gpowerhub."
        canonical="/consultoria-em-ia"
        keywords="consultoria inteligência artificial empresas, IA para PME, automação com IA, chatbot empresarial, análise preditiva, IA generativa negócios, machine learning empresas"
        schema={schema}
      />
      <Layout>
        <div className="pt-20">
          {/* Hero */}
          <section className="bg-gradient-to-br from-violet-50 via-white to-purple-50 py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-4 bg-violet-100 text-violet-700 border-0">
                  Consultoria em IA
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  IA aplicada ao seu negócio.{" "}
                  <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                    Resultados reais.
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                  Não vendemos IA por moda. Identificamos onde a inteligência artificial pode
                  resolver problemas reais do seu negócio — e implementamos de forma prática e
                  com ROI mensurável.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"
                  >
                    <Link to="/#contato">
                      Quero aplicar IA na minha empresa
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/#cases">Ver resultados</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Solutions */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Soluções de IA que entregamos</h2>
                <p className="text-lg text-gray-600">
                  Tecnologia de ponta aplicada aos problemas reais da sua empresa
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {solutions.map((sol, i) => (
                  <Card key={i} className="text-center hover:shadow-lg transition-shadow border-gray-100">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
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

          {/* Applications */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-violet-100 text-violet-700 border-0">Aplicações</Badge>
                <h2 className="text-4xl font-bold mb-4">
                  Onde a IA pode agir na sua empresa
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {applications.map((app, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                  >
                    <CheckCircle className="w-5 h-5 text-violet-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="py-16 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                {[
                  { value: "80%", label: "Redução em tarefas manuais repetitivas" },
                  { value: "24/7", label: "Operação sem intervenção humana constante" },
                  { value: "6 meses", label: "ROI médio em projetos de IA" },
                ].map((m, i) => (
                  <div key={i}>
                    <div className="text-4xl font-bold mb-2">{m.value}</div>
                    <div className="text-white/80">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-violet-100 text-violet-700 border-0">FAQ</Badge>
                <h2 className="text-3xl font-bold">Dúvidas sobre consultoria em IA</h2>
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
                Pronto para aplicar IA no seu negócio?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Agende uma conversa gratuita. Identificamos as melhores oportunidades de IA para
                a sua empresa e apresentamos um plano com ROI estimado.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"
              >
                <Link to="/#contato">
                  Quero explorar IA para minha empresa
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

export default ConsultoriaIA;
