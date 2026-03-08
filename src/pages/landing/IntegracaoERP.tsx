import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Shield, Zap, BarChart3, ChevronRight, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";

const IntegracaoERP = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Integração de ERP e Sistemas Empresariais",
    provider: { "@type": "Organization", name: "Gpowerhub", url: "https://gpowerhub.com.br" },
    description:
      "Integramos seu ERP com sistemas de gestão, e-commerce, CRM e outras plataformas. Eliminamos retrabalho, automatizamos fluxos de dados e unificamos a visão do negócio.",
    areaServed: { "@type": "Country", name: "Brasil" },
  };

  const benefits = [
    {
      icon: ArrowUpRight,
      title: "Zero Retrabalho",
      desc: "Dados inseridos em um sistema fluem automaticamente para todos os outros. Fim do lançamento duplo.",
    },
    {
      icon: Shield,
      title: "Dados Consistentes",
      desc: "Uma única fonte de verdade. Sem inconsistências entre sistemas financeiro, estoque e comercial.",
    },
    {
      icon: Zap,
      title: "Processos Automatizados",
      desc: "Pedidos, notas fiscais, pagamentos e relatórios fluindo automaticamente entre sistemas.",
    },
    {
      icon: BarChart3,
      title: "Visão Unificada",
      desc: "Todos os dados consolidados em dashboards que mostram o negócio completo em tempo real.",
    },
  ];

  const erps = [
    "TOTVS (RM, Protheus, Datasul)",
    "SAP Business One",
    "Sankhya",
    "Omie",
    "Conta Azul",
    "Bling",
    "Tiny ERP",
    "Senior Sistemas",
    "Oracle",
    "Microsoft Dynamics",
  ];

  const faqs = [
    {
      question: "Qual ERP vocês sabem integrar?",
      answer:
        "Trabalhamos com TOTVS, SAP B1, Sankhya, Omie, Conta Azul, Bling, Tiny e outros. Se o ERP tem API ou exportação de dados, conseguimos integrar. Consulte-nos sobre o seu sistema específico.",
    },
    {
      question: "A integração vai parar minha operação?",
      answer:
        "Não. Desenvolvemos e testamos em ambiente paralelo antes de ativar em produção. A transição é feita em horário de menor impacto e com rollback pronto se necessário.",
    },
    {
      question: "Quanto tempo leva uma integração?",
      answer:
        "Integrações simples (dois sistemas) ficam prontas em 2 a 4 semanas. Integrações mais complexas com múltiplos sistemas e regras de negócio levam de 6 a 12 semanas.",
    },
    {
      question: "E se um dos sistemas for atualizado?",
      answer:
        "Monitoramos as integrações e atualizamos quando necessário. Nosso plano de suporte cobre as manutenções decorrentes de atualizações dos sistemas integrados.",
    },
  ];

  return (
    <>
      <SEO
        title="Integração de ERP e Sistemas Empresariais | Gpowerhub"
        description="Integramos seu ERP com e-commerce, CRM, sistemas de gestão e outras plataformas. Elimine retrabalho, automatize fluxos de dados e unifique a visão do negócio."
        canonical="/integracao-de-erp"
        keywords="integração ERP, integração TOTVS, integração SAP, integração sistemas empresariais, automação ERP, conectar sistemas empresariais, API ERP"
        schema={schema}
      />
      <Layout>
        <div className="pt-20">
          {/* Hero */}
          <section className="bg-gradient-to-br from-teal-50 via-white to-green-50 py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-4 bg-teal-100 text-teal-700 border-0">
                  Integração de ERP
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Seus sistemas{" "}
                  <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
                    conversando entre si
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                  Integrar ERP com e-commerce, CRM e outros sistemas elimina o retrabalho de
                  lançamento duplo, garante dados consistentes e automatiza fluxos inteiros.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700"
                  >
                    <Link to="/#contato">
                      Quero integrar meus sistemas
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

          {/* Benefits */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">
                  O que a integração resolve na sua empresa
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((b, i) => (
                  <Card key={i} className="text-center hover:shadow-lg transition-shadow border-gray-100">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 bg-gradient-to-r from-teal-600 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <b.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{b.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* ERPs */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-teal-100 text-teal-700 border-0">Compatibilidade</Badge>
                <h2 className="text-4xl font-bold mb-4">ERPs e sistemas que integramos</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {erps.map((erp, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white p-3 rounded-xl shadow-sm border border-gray-100 text-center"
                  >
                    <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{erp}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-500 text-sm mt-6">
                Não encontrou o seu ERP? Entre em contato — provavelmente conseguimos integrar.
              </p>
            </div>
          </section>

          {/* Stats */}
          <section className="py-16 bg-gradient-to-r from-teal-600 to-green-600 text-white">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                {[
                  { value: "0", label: "Horas de retrabalho com lançamento duplo" },
                  { value: "100%", label: "Consistência de dados entre sistemas" },
                  { value: "Semanas", label: "Para ter a primeira integração no ar" },
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
                <Badge className="mb-4 bg-teal-100 text-teal-700 border-0">FAQ</Badge>
                <h2 className="text-3xl font-bold">Dúvidas sobre integração de ERP</h2>
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
                Chega de sistemas isolados
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Agende uma conversa gratuita. Mapeamos seus sistemas e apresentamos a melhor
                estratégia de integração para eliminar retrabalho.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700"
              >
                <Link to="/#contato">
                  Quero integrar meus sistemas
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

export default IntegracaoERP;
