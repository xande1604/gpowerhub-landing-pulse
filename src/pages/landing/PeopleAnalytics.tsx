import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, BarChart3, Target, ChevronRight, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";

const PeopleAnalytics = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "People Analytics e RH Digital para Empresas",
    provider: { "@type": "Organization", name: "Gpowerhub", url: "https://gpowerhub.com.br" },
    description:
      "Transforme a gestão de pessoas com People Analytics. Dashboards de RH, análise de turnover, absenteísmo, headcount e indicadores estratégicos para tomar decisões baseadas em dados.",
    areaServed: { "@type": "Country", name: "Brasil" },
  };

  const indicators = [
    {
      icon: Users,
      title: "Headcount e Estrutura",
      desc: "Visão completa do quadro de pessoal por área, cargo, senioridade e evolução ao longo do tempo.",
    },
    {
      icon: TrendingUp,
      title: "Turnover e Retenção",
      desc: "Acompanhe saídas voluntárias e involuntárias, identifique padrões e antecipe riscos de perda de talentos.",
    },
    {
      icon: BarChart3,
      title: "Absenteísmo e Horas Extras",
      desc: "Monitore ausências, afastamentos e horas extras por área para identificar problemas operacionais.",
    },
    {
      icon: Target,
      title: "Metas e Desempenho",
      desc: "Dashboards de performance individual e por equipe integrados ao processo de avaliação.",
    },
  ];

  const benefits = [
    "Decisões de RH baseadas em dados, não percepção",
    "Identificação antecipada de risco de turnover",
    "Redução de 70% no tempo de geração de relatórios de RH",
    "Democratização dos indicadores para gestores",
    "Conformidade com eSocial e obrigações trabalhistas",
    "Integração com sistemas de folha de pagamento e ponto",
  ];

  const faqs = [
    {
      question: "Minha empresa tem apenas 30 funcionários. Vale a pena People Analytics?",
      answer:
        "Sim. Mesmo com equipes pequenas, ter visibilidade sobre turnover, absenteísmo e estrutura ajuda a tomar decisões mais acertadas. O custo de perder um colaborador-chave ou de não identificar um problema de saúde organizacional cedo pode ser alto.",
    },
    {
      question: "Como os dados de RH chegam até o dashboard?",
      answer:
        "Conectamos com sistemas de folha de pagamento, ponto eletrônico, HCMs e planilhas. Na maioria dos casos, a atualização é automática — você não precisa fazer nada manualmente.",
    },
    {
      question: "Os dashboards são seguros? Dados de funcionários são sensíveis.",
      answer:
        "Sim. Trabalhamos com controle de acesso por perfil — gestores só veem dados da própria área. RH e diretoria têm visões consolidadas. Os dados são tratados em conformidade com a LGPD.",
    },
    {
      question: "Quais sistemas de folha vocês integram?",
      answer:
        "Trabalhamos com ADP, Totvs RM, Sankhya, Domínio (Thomson Reuters), Sênior, Alterdata e exportações em Excel de qualquer sistema. Se você exporta dados, conseguimos usar.",
    },
  ];

  return (
    <>
      <SEO
        title="People Analytics e RH Digital para Empresas | Gpowerhub"
        description="Dashboards de RH, análise de turnover, absenteísmo e headcount. People Analytics para empresas que querem tomar decisões de pessoas baseadas em dados. Fale com a Gpowerhub."
        canonical="/people-analytics-rh-digital"
        keywords="people analytics, RH digital, dashboard RH, análise turnover, indicadores RH, gestão de pessoas com dados, business intelligence RH, analytics recursos humanos"
        schema={schema}
      />
      <Layout>
        <div className="pt-20">
          {/* Hero */}
          <section className="bg-gradient-to-br from-rose-50 via-white to-pink-50 py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-4 bg-rose-100 text-rose-700 border-0">
                  People Analytics & RH Digital
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Gerencie pessoas com{" "}
                  <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                    dados, não achismo
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                  People Analytics transforma indicadores de RH em decisões estratégicas. Saiba
                  exatamente onde está o risco de turnover, quem precisa de atenção e como sua
                  empresa evolui ao longo do tempo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700"
                  >
                    <Link to="/#contato">
                      Quero implementar People Analytics
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/#cases">Ver caso Ajinomoto</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Indicators */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">
                  Indicadores que transformamos em insights
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {indicators.map((ind, i) => (
                  <Card key={i} className="text-center hover:shadow-lg transition-shadow border-gray-100">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <ind.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{ind.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{ind.desc}</p>
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
                <Badge className="mb-4 bg-rose-100 text-rose-700 border-0">Benefícios</Badge>
                <h2 className="text-4xl font-bold mb-4">O que muda com People Analytics</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((b, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                  >
                    <CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Case */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-10 text-white">
                <Badge className="mb-4 bg-white/20 text-white border-0">Caso Real</Badge>
                <h2 className="text-3xl font-bold mb-4">
                  Ajinomoto: RH orientado a dados com 70% menos esforço
                </h2>
                <p className="text-white/90 text-lg mb-8">
                  Implementamos um painel de People Analytics com headcount, turnover, absenteísmo
                  e horas extras — integrando dados de múltiplos sistemas e democratizando o
                  acesso para todos os gestores de área.
                </p>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[
                    { value: "70%", label: "Menos tempo em relatórios" },
                    { value: "100%", label: "Acesso para gestores" },
                    { value: "Ágil", label: "Tomada de decisão em RH" },
                  ].map((m, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl font-bold">{m.value}</div>
                      <div className="text-white/80 text-sm">{m.label}</div>
                    </div>
                  ))}
                </div>
                <Button asChild variant="secondary" size="lg">
                  <Link to="/#contato">
                    Quero resultados assim no meu RH
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
                <Badge className="mb-4 bg-rose-100 text-rose-700 border-0">FAQ</Badge>
                <h2 className="text-3xl font-bold">Dúvidas sobre People Analytics</h2>
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
                Pronto para um RH orientado a dados?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Agende uma conversa gratuita e descubra como transformar os dados de RH da sua
                empresa em decisões estratégicas.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700"
              >
                <Link to="/#contato">
                  Quero implementar People Analytics
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

export default PeopleAnalytics;
