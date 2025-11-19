import { useProducts } from "@/hooks/useProducts";
import { useCases } from "@/hooks/useCases";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Solutions = () => {
  const { data: products, isLoading: productsLoading } = useProducts();
  const { data: cases, isLoading: casesLoading } = useCases();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="mb-4">Soluções para Empresas</Badge>
            <h1 className="text-4xl md:text-6xl font-bold">
              Transforme seu negócio com
              <span className="text-primary block mt-2">tecnologia de ponta</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluções completas em IA, automação e desenvolvimento para impulsionar startups e empresas
            </p>
            <div className="flex gap-4 justify-center mt-8">
              <Button size="lg" asChild>
                <a href="#produtos">Nossos Produtos</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#cases">Ver Cases</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Produtos</h2>
            <p className="text-muted-foreground text-lg">
              Ferramentas e plataformas desenvolvidas para acelerar seu crescimento
            </p>
          </div>

          {productsLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="h-6 bg-muted rounded w-3/4 mb-2" />
                    <div className="h-4 bg-muted rounded w-full" />
                  </CardHeader>
                  <CardContent>
                    <div className="h-20 bg-muted rounded" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products?.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  {product.image_url && (
                    <div className="h-48 overflow-hidden rounded-t-lg">
                      <img 
                        src={product.image_url} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.short_description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                    {product.features && Array.isArray(product.features) && product.features.length > 0 && (
                      <ul className="space-y-2">
                        {product.features.map((feature: any, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{typeof feature === 'string' ? feature : feature.text}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {product.tags && product.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {product.tags.map((tag, idx) => (
                          <Badge key={idx} variant="secondary">{tag}</Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cases de Sucesso</h2>
            <p className="text-muted-foreground text-lg">
              Conheça os resultados que alcançamos para nossos clientes
            </p>
          </div>

          {casesLoading ? (
            <div className="space-y-6">
              {[1, 2].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="h-6 bg-muted rounded w-3/4 mb-2" />
                    <div className="h-4 bg-muted rounded w-full" />
                  </CardHeader>
                  <CardContent>
                    <div className="h-32 bg-muted rounded" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {cases?.map((caseItem) => (
                <Card key={caseItem.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    {caseItem.image_url && (
                      <div className="md:w-1/3 h-64 md:h-auto">
                        <img 
                          src={caseItem.image_url} 
                          alt={caseItem.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="md:w-2/3">
                      <CardHeader>
                        <div className="flex items-center gap-4 mb-2">
                          {caseItem.client_logo_url && (
                            <img 
                              src={caseItem.client_logo_url} 
                              alt={caseItem.client_name}
                              className="h-8"
                            />
                          )}
                          <span className="text-sm text-muted-foreground">{caseItem.client_name}</span>
                        </div>
                        <CardTitle className="text-2xl">{caseItem.title}</CardTitle>
                        {caseItem.subtitle && (
                          <CardDescription className="text-base">{caseItem.subtitle}</CardDescription>
                        )}
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">{caseItem.description}</p>
                        
                        {caseItem.results && Array.isArray(caseItem.results) && caseItem.results.length > 0 && (
                          <div>
                            <h4 className="font-semibold mb-3">Resultados:</h4>
                            <div className="grid sm:grid-cols-2 gap-4">
                              {caseItem.results.map((result: any, idx: number) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{typeof result === 'string' ? result : result.text}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {caseItem.tags && caseItem.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-2">
                            {caseItem.tags.map((tag, idx) => (
                              <Badge key={idx} variant="outline">{tag}</Badge>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Pronto para transformar seu negócio?
              </h2>
              <p className="text-lg opacity-90">
                Entre em contato e descubra como podemos ajudar sua empresa a crescer
              </p>
              <Button size="lg" variant="secondary" className="mt-4">
                Falar com especialista
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
