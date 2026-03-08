import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, Eye, Zap, ChevronRight, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";

const PowerBI = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Power BI e Business Intelligence para Empresas",
    provider: { "@type": "Organization", name: "Gpowerhub", url: "https://gpowerhub.com.br" },
    description:
      "Dashboards Power BI profissionais para PMEs. Transformamos dados em insights visuais e decisões estratégicas. Integração com ERP, CRM, planilhas e qualquer fonte de dados.",
    areaServed: { "@type": "Country", name: "Brasil" },
  };

  const features = [
    {
      icon: BarChart3,
      title: "Dashboards Interativos",
      desc: "Painéis visuais e intuitivos que mostram os KPIs mais importantes do seu negócio em tempo real.",
    },
    {
      icon: Eye,
      title: "Visão 360° do Negócio",
      desc: "Consolidamos dados de múltiplas fontes em um único painel — ERP, CRM, planilhas, APIs.",
    },
    {
      icon: TrendingUp,
      title: "Análise de Tendências",
      desc: "Identifique padrões, sazonalidades e tendências antes que se tornem problemas ou oportunidades perdidas.",
    },
    {
      icon: Zap,
      title: "Atualização Automática",
      desc: "Dados sempre atualizados sem esforço manual. Configure uma vez, use todos os dias.",
    },
  ];

  const useCases = [
    "Análise de vendas por produto, região e vendedor",
    "Controle financeiro e DRE visual",
    "Acompanhamento de metas e OKRs",
    "Indicadores de RH (People Analytics)",
    "Dashboard de estoque e logística",
    "Análise de inadimplência e receita",
    "Relatórios automáticos para diretoria",
    "Benchmarking de desempenho operacional",
  ];

  const faqs = [
    {
      question: "Power BI é caro para pequenas empresas?",
      answer:
        "O Power BI tem versão gratuita (Power BI Desktop) e versões pagas a partir de R$ 50/mês por usuário (Power BI Pro). Para PMEs, geralmente o Desktop já resolve, e nossa consultoria garante que você use o plano certo para o seu orçamento.",
    },
    {
      question: "Quanto tempo leva para ter meu primeiro dashboard?",
      answer:
        "Para dashboards mais simples (financeiro, vendas), entregamos em 1 a 2 semanas. Projetos mais complexos com múltiplas fontes de dados ficam prontos em 3 a 6 semanas.",
    },
    {
      question: "Posso usar Power BI se meus dados estão em planilhas Excel?",
      answer:
        "Sim. O Excel é uma das fontes mais comuns. Conectamos direto nas suas planilhas e automatizamos a atualização. Você continua alimentando os dados como sempre, e o dashboard atualiza sozinho.",
    },
    {
      question: "Posso editar os dashboards depois?",
      answer:
        "Sim. Entregamos os dashboards com o arquivo fonte e incluímos treinamento básico para que sua equipe saiba fazer ajustes simples. Para alterações maiores, oferecemos suporte contínuo.",
    },
  ];

  return (
    <>
      <SEO
        title="Power BI e Business Intelligence para Empresas | Gpowerhub"
        description="Dashboards Power BI profissionais para PMEs. Integração com ERP, CRM e planilhas. Transforme dados em decisões estratégicas. Diagnóstico gratuito com a Gpowerhub."
        canonical="/powerbi-business-intelligence"
        keywords="Power BI empresas, business intelligence PME, dashboards Power BI, consultoria Power BI, BI para pequenas empresas, análise de dados Power BI"
        schema={schema}
      />
      <Layout>
        <div className="pt-20">
          {/* Hero */}
          <section className="bg-gradient-to-br from-yellow-50 via-white to-orange-50 py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-4 bg-yellow-100 text-yellow-700 border-0">
                  Power BI & Business Intelligence
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Dashboards Power BI que{" "}
                  <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                    mostram o que importa
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                  Pare de tomar decisões no escuro. Criamos dashboards profissionais que consolidam
                  todos os dados da sua empresa em uma visão clara e acionável.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700"
                  >
                    <Link to="/#contato">
                      Quero meu dashboard Power BI
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/#cases">Ver exemplos reais</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">O que você tem com nossos dashboards</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((f, i) => (
                  <Card key={i} className="text-center hover:shadow-lg transition-shadow border-gray-100">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <f.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-orange-100 text-orange-700 border-0">
                  Casos de Uso
                </Badge>
                <h2 className="text-4xl font-bold mb-4">
                  O que podemos visualizar para você
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {useCases.map((uc, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                  >
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700">{uc}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats banner */}
          <section className="py-16 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                {[
                  { value: "70%", label: "Menos tempo em relatórios manuais" },
                  { value: "100%", label: "Dados sempre atualizados" },
                  { value: "1–2 sem.", label: "Para ter seu primeiro dashboard" },
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
                <Badge className="mb-4 bg-yellow-100 text-yellow-700 border-0">FAQ</Badge>
                <h2 className="text-3xl font-bold">Dúvidas sobre Power BI</h2>
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
                Pronto para visualizar seu negócio com clareza?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Agende uma conversa gratuita. Mostramos como seus dados podem virar um dashboard
                que sua equipe vai usar todos os dias.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700"
              >
                <Link to="/#contato">
                  Quero meu diagnóstico de dados gratuito
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

export default PowerBI;
