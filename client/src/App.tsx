import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Formacao from "./pages/Formacao";
import Profissional from "./pages/Profissional";
import Projetos from "./pages/Projetos";
import ProjetoDetalhes from "./pages/ProjetoDetalhes";

/**
 * App Router
 * 
 * Routes:
 * - / : Home page with introduction and featured projects
 * - /formacao : Education and complementary training
 * - /profissional : Professional experience and philosophy
 * - /projetos : All projects listing
 * - /projetos/:id : Individual project details
 * - /404 : Not found page
 */
function Router() {
  return (
    <MainLayout>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/formacao"} component={Formacao} />
        <Route path={"/profissional"} component={Profissional} />
        <Route path={"/projetos"} component={Projetos} />
        <Route path={"/projetos/:id"} component={ProjetoDetalhes} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </MainLayout>
  );
}

/**
 * Theme Configuration
 * 
 * Design: Minimalismo Corporativo Elegante
 * - Default theme: light (professional, clean aesthetic)
 * - Switchable: true (users can toggle dark mode)
 * - Color palette: Monochromatic with blue accent (rgb(2, 125, 205))
 */
function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
