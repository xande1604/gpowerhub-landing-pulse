import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";

const WHATSAPP_NUMBER = "5527992389066";
const WHATSAPP_MESSAGE = "Olá! Gostaria de saber mais sobre as soluções da Gpowerhub.";

const WhatsAppIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const navLinks = [
  { label: "Serviços", href: "/#servicos" },
  { label: "Cases", href: "/#cases" },
  { label: "Blog", href: "/blog" },
  { label: "Soluções", href: "/solucoes" },
  { label: "Contato", href: "/#contato" },
];

const serviceLinks = [
  { label: "Análise de Dados", href: "/analise-de-dados-empresarial" },
  { label: "Automação com IA", href: "/automacao-para-pequenas-empresas" },
  { label: "Redução de Custos", href: "/reducao-de-custos-com-tecnologia" },
  { label: "Transformação Digital", href: "/transformacao-digital-pme" },
  { label: "Power BI & Business Intelligence", href: "/powerbi-business-intelligence" },
  { label: "Desenvolvimento de Sistemas", href: "/desenvolvimento-de-sistemas" },
  { label: "Integração de ERP", href: "/integracao-de-erp" },
  { label: "People Analytics", href: "/people-analytics-rh-digital" },
  { label: "Consultoria em IA", href: "/consultoria-em-ia" },
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Gpowerhub
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Button
                asChild
                className="hidden md:inline-flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Link to="/#contato">Fale Conosco</Link>
              </Button>

              {/* Mobile hamburger */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-100 animate-fade-in">
              <div className="flex flex-col space-y-1 pt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="px-3 py-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-3">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Link to="/#contato" onClick={() => setMenuOpen(false)}>
                      Fale Conosco
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Page content */}
      <div>{children}</div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
            <div className="space-y-4">
              <Link
                to="/"
                className="inline-block text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                Gpowerhub
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Hub de desenvolvimento tecnológico para pequenas e médias empresas. Reduzimos custos
                e aumentamos performance com tecnologia estratégica.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm font-medium"
              >
                <WhatsAppIcon />
                Falar no WhatsApp
              </a>
            </div>

            {/* Nav */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Navegação</h3>
              <div className="space-y-2">
                {[
                  { label: "Início", href: "/" },
                  { label: "Serviços", href: "/#servicos" },
                  { label: "Cases", href: "/#cases" },
                  { label: "Blog", href: "/blog" },
                  { label: "Soluções", href: "/solucoes" },
                  { label: "Contato", href: "/#contato" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Serviços</h3>
              <div className="space-y-2">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Contato</h3>
              <div className="space-y-3 text-gray-400 text-sm">
                <p>Cariacica, ES — Brasil</p>
                <a
                  href="mailto:contato@gpowerhub.com.br"
                  className="block hover:text-white transition-colors"
                >
                  contato@gpowerhub.com.br
                </a>
                <a href="tel:+5527992389066" className="block hover:text-white transition-colors">
                  (27) 99238-9066
                </a>
              </div>
              <div className="mt-6 space-y-2">
                <p className="text-gray-500 text-xs uppercase tracking-wide">Legal</p>
                <p className="text-gray-400 text-sm cursor-pointer hover:text-white transition-colors">
                  Termos de Uso
                </p>
                <p className="text-gray-400 text-sm cursor-pointer hover:text-white transition-colors">
                  Política de Privacidade
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2025 Gpowerhub. Todos os direitos reservados.</p>
            <p className="text-gray-500 text-sm">Desenvolvido com ❤️ por Gpowerhub</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-4 py-3"
      >
        <WhatsAppIcon />
        <span className="hidden sm:block font-medium text-sm">Falar no WhatsApp</span>
      </a>
    </div>
  );
};

export default Layout;
