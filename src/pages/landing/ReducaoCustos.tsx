import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, DollarSign, BarChart3, CheckCircle, ChevronRight, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";

const ReducaoCustos = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Redução de Custos com Tecnologia para Empresas",
    provider: { "@type": "Organization", name: "Gpowerhub", url: "https://gpowerhub.com.br" },
    description:
      "Identifique e elimine desperdícios na sua empresa com tecnologia. Automação, análise de dados e sistemas integrados para reduzir custos operacionais de forma sustentável.",
    areaServed: { "@type": "Country", name: "Brasil" },
  };

  const costAreas = [
    {
      icon: DollarSign,
      title: "Custos com Retrabalho",
      desc: "Elimine erros manuais e o tempo gasto em corrigir processos com automação inteligente.",
      saving: "Até 60% de economia",
    },
    {
      icon: BarChart3,
      title: "Licenças de Software",
      desc: "Desenvolvemos sistemas personalizados que substituem softwares caros de terceiros.",
      saving: "Até 20% de economia",
    },
    {
      icon: TrendingDown,
      title: "Horas Extras Operacionais",
      desc: "Processos automáticos rodam 24h sem custo adicional, eliminando horas extras.",
      saving: "Até 40% de economia",
    },
    {
      icon: CheckCircle,
      title: "Papel e Impressões",
      desc: "Digitalização completa de documentos, aprovações e relatórios — zero papel.",
      saving: "100% de eliminação",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Diagnóstico",
      desc: "Mapeamos todos os seus processos e identificamos onde há desperdício de tempo e dinheiro.",
    },
    {
      step: "02",
      title: "Priorização",
      desc: "Definimos quais automações trazem maior retorno financeiro no menor prazo.",
    },
    {
      step: "03",
      title: "Implementação",
      desc: "Desenvolvemos e implantamos as soluções com mínimo impacto na operação.",
    },
    {
      step: "04",
      title: "Monitoramento",
      desc: "Acompanhamos os resultados e ajustamos para garantir o ROI prometido.",
    },
  ];

  const faqs = [
    {
      question: "Como vocês calculam a economia potencial?",
      answer:
        "No diagnóstico gratuito, mapeamos todos os processos manuais e calculamos o custo por hora de cada tarefa. Com isso, apresentamos um relatório com as economias estimadas antes de qualquer investimento.",
    },
    {
      question: "Quanto preciso investir para ter retorno?",
      answer:
        "Depende do escopo, mas nossas soluções para PMEs têm ROI médio de 3 meses. Começamos sempre pelas automações de maior retorno para garantir que você recupere o investimento rapidamente.",
    },
    {
      question: "A implementação vai parar minha operação?",
      answer:
        "Não. Trabalhamos de forma paralela à operação atual, implementando gradualmente e testando antes de colocar em produção. A transição é transparente para o seu time.",
    },
    {
      question: "Preciso trocar todos os meus sistemas?",
      answer:
        "Geralmente não. Integramos com os sistemas que você já usa (ERP, CRM, planilhas) e adicionamos automação por cima, sem a necessidade de substituir tudo.",
    },
  ];

  return (
    <>
      <SEO
        title="Redução de Custos com Tecnologia para Empresas"
        description="Reduza os custos operacionais da sua empresa com automação, análise de dados e sistemas integrados. Casos reais: 80% menos tempo em processos, 20% de economia em licenças. Fale com a Gpowerhub."
        canonical="/reducao-de-custos-com-tecnologia"
        keywords="redução de custos com tecnologia, como reduzir custos empresariais, economia com automação, otimização de processos empresariais, ROI tecnologia, custos operacionais PME"
        schema={schema}
      />
      <Layout>
        <div className="pt-20">
          {/* Hero */}
          <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-4 bg-green-100 text-green-700 border-0">
                  Redução de Custos
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Sua empresa perde dinheiro{" "}
                  <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    sem perceber
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
                  Processos manuais, retrabalho, sistemas desintegrados e decisões sem dados custam
                  muito mais do que parece. A tecnologia certa pode mudar isso rápido.
                </p>
                <p className="text-2xl font-bold text-green-600 mb-10">
                  Nossos clientes economizam entre 20% e 80% nos processos que automatizamos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                  >
                    <Link to="/#contato">
                      Quero reduzir meus custos
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

          {/* Cost Areas */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">
                  Onde sua empresa está perdendo dinheiro
                </h2>
                <p className="text-lg text-gray-600">
                  As principais fontes de desperdício em PMEs brasileiras
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {costAreas.map((area, i) => (
                  <Card key={i} className="hover:shadow-lg transition-shadow border-gray-100">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <area.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                          <p className="text-gray-600 mb-3 leading-relaxed">{area.desc}</p>
                          <Badge className="bg-green-100 text-green-700 border-0">
                            {area.saving}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* How it works */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Como funciona o processo</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((s, i) => (
                  <div
                    key={i}
                    className="text-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                  >
                    <div className="text-5xl font-bold text-blue-100 mb-4 leading-none">
                      {s.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Results banner */}
          <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                {[
                  { value: "80%", label: "Redução em processos financeiros" },
                  { value: "70%", label: "Menos tempo compilando dados" },
                  { value: "20%", label: "Economia em licenciamento" },
                  { value: "3 meses", label: "Média de retorno do investimento" },
                ].map((m, i) => (
                  <div key={i}>
                    <div className="text-4xl font-bold mb-2">{m.value}</div>
                    <div className="text-white/80 text-sm">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-green-100 text-green-700 border-0">
                  Perguntas Frequentes
                </Badge>
                <h2 className="text-3xl font-bold">Dúvidas sobre redução de custos</h2>
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
                Descubra quanto sua empresa pode economizar
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Fazemos um diagnóstico gratuito dos seus processos e apresentamos um plano com as
                economias estimadas.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
              >
                <Link to="/#contato">
                  Quero meu diagnóstico gratuito
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default ReducaoCustos;
