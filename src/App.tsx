
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import BlogPost from "./pages/BlogPost";
import Blog from "./pages/Blog";
import Solutions from "./pages/Solutions";
import AdminDashboard from "./pages/AdminDashboard";

// Landing pages existentes
import AutomacaoPME from "./pages/landing/AutomacaoPME";
import ReducaoCustos from "./pages/landing/ReducaoCustos";
import TransformacaoDigital from "./pages/landing/TransformacaoDigital";
import AnaliseDados from "./pages/landing/AnaliseDados";

// Novas landing pages
import PowerBI from "./pages/landing/PowerBI";
import DesenvolvimentoSistemas from "./pages/landing/DesenvolvimentoSistemas";
import IntegracaoERP from "./pages/landing/IntegracaoERP";
import PeopleAnalytics from "./pages/landing/PeopleAnalytics";
import ConsultoriaIA from "./pages/landing/ConsultoriaIA";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Páginas principais */}
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/solucoes" element={<Solutions />} />
            <Route path="/admin" element={<AdminDashboard />} />

            {/* Landing pages SEO — serviços existentes */}
            <Route path="/automacao-para-pequenas-empresas" element={<AutomacaoPME />} />
            <Route path="/reducao-de-custos-com-tecnologia" element={<ReducaoCustos />} />
            <Route path="/transformacao-digital-pme" element={<TransformacaoDigital />} />
            <Route path="/analise-de-dados-empresarial" element={<AnaliseDados />} />

            {/* Landing pages SEO — novos serviços */}
            <Route path="/powerbi-business-intelligence" element={<PowerBI />} />
            <Route path="/desenvolvimento-de-sistemas" element={<DesenvolvimentoSistemas />} />
            <Route path="/integracao-de-erp" element={<IntegracaoERP />} />
            <Route path="/people-analytics-rh-digital" element={<PeopleAnalytics />} />
            <Route path="/consultoria-em-ia" element={<ConsultoriaIA />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
