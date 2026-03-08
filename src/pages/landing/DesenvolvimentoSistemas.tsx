import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Globe, Shield, ChevronRight, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";

const DesenvolvimentoSistemas = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Desenvolvimento de Sistemas Personalizados para Empresas",
    provider: { "@type": "Organization", name: "Gpowerhub", url: "https://gpowerhub.com.br" },
    description:
      "Desenvolvemos sistemas, aplicativos e plataformas web personalizados para PMEs. Substituímos softwares caros, integramos processos e criamos soluções sob medida para o seu negócio.",
    areaServed: { "@type": "Country", name: "Brasil" },
  };

  const types = [
    {
      icon: Globe,
      title: "Sistemas Web",
      desc: "Aplicações web completas com painéis administrativos, portais de clientes e integrações com sistemas externos.",
    },
    {
      icon: Smartphone,
      title: "Aplicativos Mobile",
      desc: "Apps para iOS e Android para equipes de campo, clientes ou gestão operacional.",
    },
    {
      icon: Code,
      title: "Automações e APIs",
      desc: "Integrações entre sistemas, automações de processos e APIs para conectar tudo que você já usa.",
    },
    {
      icon: Shield,
      title: "Painéis de Gestão",
      desc: "Sistemas internos que substituem planilhas e processos manuais com uma solução robusta e escalável.",
    },
  ];

  const benefits = [
    "Sistema 100% personalizado para o seu processo",
    "Sem mensalidades de licença de software de terceiros",
    "Integração com ERP, CRM e outros sistemas existentes",
    "Escalabilidade: cresce junto com sua empresa",
    "Suporte e manutenção contínuos",
    "Código-fonte: você é dono do que construímos",
  ];

  const faqs = [
    {
      question: "Quanto custa desenvolver um sistema personalizado?",
      answer:
        "Depende da complexidade. Um painel de gestão simples pode ser desenvolvido por R$ 8.000 a R$ 20.000. Sistemas mais complexos com integrações múltiplas variam de R$ 20.000 a R$ 80.000+. Sempre fazemos uma proposta detalhada após o diagnóstico gratuito.",
    },
    {
      question: "Não é mais barato usar um software pronto?",
      answer:
        "Depende. Softwares prontos parecem mais baratos, mas as mensalidades acumulam — e geralmente você paga por funcionalidades que não usa. Desenvolvemos sistemas que resolvem exatamente o que você precisa, sem desperdício.",
    },
    {
      question: "Quanto tempo leva para desenvolver?",
      answer:
        "Sistemas simples ficam prontos em 4 a 8 semanas. Projetos maiores podem levar de 3 a 6 meses. Trabalhamos em sprints com entregas parciais para que você possa usar partes do sistema antes da conclusão.",
    },
    {
      question: "O sistema vai funcionar com o que já usamos?",
      answer:
        "Sim. Fazemos integração com a maioria dos ERPs (TOTVS, SAP, Sankhya), CRMs, e-commerces, gateways de pagamento e outras plataformas. Se tem API, conseguimos integrar.",
    },
  ];

  return (
    <>
      <SEO
        title="Desenvolvimento de Sistemas Personalizados para Empresas | Gpowerhub"
        description="Sistemas web, aplicativos mobile e automações personalizados para PMEs. Substitua softwares caros, integre processos e escale sua empresa com tecnologia sob medida."
        canonical="/desenvolvimento-de-sistemas"
        keywords="desenvolvimento de sistemas empresariais, sistemas personalizados PME, desenvolvimento web empresarial, aplicativos corporativos, software sob medida, sistemas de gestão"
        schema={schema}
      />
      <Layout>
        <div className="pt-20">
          {/* Hero */}
          <section className="bg-gradient-to-br from-cyan-50 via-white to-blue-50 py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-4 bg-cyan-100 text-cyan-700 border-0">
                  Desenvolvimento de Sistemas
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Sistemas feitos para o{" "}
                  <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    seu processo, não o contrário
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                  Chega de se adaptar a softwares prontos que não atendem 100% da sua necessidade.
                  Desenvolvemos sistemas personalizados que funcionam exatamente como a sua empresa precisa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
                  >
                    <Link to="/#contato">
                      Quero meu sistema personalizado
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/#cases">Ver projetos entregues</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Types */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">O que desenvolvemos</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {types.map((t, i) => (
                  <Card key={i} className="text-center hover:shadow-lg transition-shadow border-gray-100">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <t.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{t.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
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
                <Badge className="mb-4 bg-cyan-100 text-cyan-700 border-0">Vantagens</Badge>
                <h2 className="text-4xl font-bold mb-4">
                  Por que desenvolver em vez de comprar pronto?
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((b, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                  >
                    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Case */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-10 text-white">
                <Badge className="mb-4 bg-white/20 text-white border-0">Caso Real</Badge>
                <h2 className="text-3xl font-bold mb-4">
                  Agrovix: 20% de economia em licenciamento com sistema próprio
                </h2>
                <p className="text-white/90 text-lg mb-8">
                  Desenvolvemos um sistema integrado ao ERP da Agrovix que substituiu módulos
                  caros de terceiros, aumentando a produtividade em 35% e reduzindo erros
                  operacionais em 50%.
                </p>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[
                    { value: "35%", label: "Aumento de produtividade" },
                    { value: "50%", label: "Menos erros operacionais" },
                    { value: "20%", label: "Economia em licenciamento" },
                  ].map((m, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl font-bold">{m.value}</div>
                      <div className="text-white/80 text-sm">{m.label}</div>
                    </div>
                  ))}
                </div>
                <Button asChild variant="secondary" size="lg">
                  <Link to="/#contato">
                    Quero um sistema assim
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
                <Badge className="mb-4 bg-cyan-100 text-cyan-700 border-0">FAQ</Badge>
                <h2 className="text-3xl font-bold">Dúvidas sobre desenvolvimento de sistemas</h2>
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
                Vamos construir o sistema ideal para sua empresa?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Agende uma conversa gratuita. Entendemos suas necessidades e apresentamos uma
                proposta detalhada sem compromisso.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
              >
                <Link to="/#contato">
                  Falar sobre meu projeto
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

export default DesenvolvimentoSistemas;
