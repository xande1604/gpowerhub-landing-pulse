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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Conheça alguns dos nossos casos de sucesso</h2>
          </div>

          {casesLoading ? (
            <div className="space-y-20">
              {[1, 2].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-96 bg-muted rounded" />
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-20">
              {cases?.map((caseItem, index) => (
                <div key={caseItem.id} className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* Image */}
                  <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    {caseItem.image_url && (
                      <div className="rounded-lg overflow-hidden shadow-lg">
                        <img 
                          src={caseItem.image_url} 
                          alt={caseItem.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                    {caseItem.client_name && (
                      <Badge variant="secondary" className="mb-2">
                        {caseItem.client_name}
                      </Badge>
                    )}
                    
                    <h3 className="text-2xl md:text-3xl font-bold">{caseItem.title}</h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {caseItem.description}
                    </p>

                    {/* Results as metrics */}
                    {caseItem.results && Array.isArray(caseItem.results) && caseItem.results.length > 0 && (
                      <div className="grid grid-cols-3 gap-4 py-6">
                        {caseItem.results.slice(0, 3).map((result: any, idx: number) => {
                          const resultText = typeof result === 'string' ? result : result.text || result.value;
                          const parts = resultText.split(' ');
                          const value = parts[0];
                          const label = parts.slice(1).join(' ');
                          
                          return (
                            <div key={idx} className="text-center">
                              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                                {value}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {label}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    <Button size="lg">
                      Fale Conosco
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>

                    {caseItem.tags && caseItem.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-4">
                        {caseItem.tags.map((tag, idx) => (
                          <Badge key={idx} variant="outline">{tag}</Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
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
