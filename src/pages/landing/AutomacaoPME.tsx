import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, Clock, TrendingDown, ChevronRight, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";

const AutomacaoPME = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Automação de Processos para Pequenas e Médias Empresas",
    "provider": { "@type": "Organization", "name": "Gpowerhub", "url": "https://gpowerhub.com.br" },
    "description": "Automatize processos repetitivos da sua PME com inteligência artificial e RPA. Reduza custos operacionais em até 80% e libere sua equipe para o que realmente importa.",
    "areaServed": { "@type": "Country", "name": "Brasil" },
    "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }
  };

  const benefits = [
    { icon: Clock, title: "80% menos tempo", desc: "em tarefas operacionais repetitivas" },
    { icon: TrendingDown, title: "Redução de erros", desc: "processos automatizados não falham" },
    { icon: Zap, title: "ROI em 3 meses", desc: "retorno rápido sobre o investimento" },
    { icon: CheckCircle, title: "Escala sem custo", desc: "cresça sem aumentar a equipe proporcionalmente" },
  ];

  const processes = [
    "Emissão e controle de notas fiscais",
    "Reembolso e aprovação de despesas",
    "Relatórios financeiros automáticos",
    "Integração entre sistemas e ERPs",
    "Envio de e-mails e notificações",
    "Geração de contratos e documentos",
    "Controle de estoque e pedidos",
    "Onboarding de clientes e fornecedores",
  ];

  return (
    <>
      <SEO
        title="Automação de Processos para Pequenas e Médias Empresas"
        description="Automatize os processos da sua PME com IA e RPA. Reduza custos operacionais em até 80%, elimine erros manuais e escale seu negócio sem aumentar equipe. Fale com a Gpowerhub."
        canonical="/automacao-para-pequenas-empresas"
        keywords="automação processos pequenas empresas, automação PME, RPA empresas, automação com IA, reduzir custos operacionais, automação financeira empresarial"
        schema={schema}
      />
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
          <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Gpowerhub
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/#servicos" className="text-gray-600 hover:text-blue-600">Serviços</Link>
              <Link to="/#cases" className="text-gray-600 hover:text-blue-600">Cases</Link>
              <Link to="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link>
              <Link to="/solucoes" className="text-gray-600 hover:text-blue-600">Soluções</Link>
            </div>
            <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Link to="/#contato">Fale Conosco</Link>
            </Button>
          </nav>
        </header>

        <main className="pt-20">
          {/* Hero */}
          <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-4 bg-blue-100 text-blue-700">Automação para PMEs</Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Automatize sua PME e{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    reduza custos em até 80%
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                  Pequenas e médias empresas que automatizam processos repetitivos economizam horas por dia,
                  eliminam erros e escalam sem precisar contratar mais pessoas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Link to="/#contato">
                      Quero automatizar minha empresa
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

          {/* Benefits */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">O que a automação entrega para sua empresa</h2>
                <p className="text-lg text-gray-600">Resultados reais que nossos clientes já alcançaram</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((b, i) => (
                  <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <b.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-blue-600 mb-2">{b.title}</div>
                      <p className="text-gray-600">{b.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* What we automate */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <Badge className="mb-4 bg-purple-100 text-purple-700">Processos Automatizáveis</Badge>
                  <h2 className="text-4xl font-bold mb-4">O que podemos automatizar na sua empresa</h2>
                  <p className="text-lg text-gray-600">
                    Qualquer processo repetitivo pode ser automatizado. Aqui estão os mais comuns em PMEs:
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {processes.map((process, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{process}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Case highlight */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-white">
                <Badge className="mb-4 bg-white/20 text-white border-0">Caso Real</Badge>
                <h2 className="text-3xl font-bold mb-4">Grupo EMEC: 80% menos tempo em processos financeiros</h2>
                <p className="text-white/90 text-lg mb-8">
                  Implementamos um sistema automatizado para reembolso de despesas, saldos bancários integrados
                  e aprovação de pagamentos. Resultado: 80% de redução no tempo gasto, zero papel e ROI em 3 meses.
                </p>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[
                    { value: "80%", label: "Redução de tempo" },
                    { value: "90%", label: "Aumento na precisão" },
                    { value: "3 meses", label: "ROI positivo" },
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
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-4">Pronto para automatizar sua empresa?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Agende uma conversa gratuita. Analisamos seus processos e mostramos onde você está perdendo tempo e dinheiro.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
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

export default AutomacaoPME;
