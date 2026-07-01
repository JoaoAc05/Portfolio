/**
 * NotFound (404) Page
 * 
 * Displayed when user navigates to non-existent routes
 * 
 * Design: Minimalismo Corporativo Elegante
 * - Clear messaging
 * - Easy navigation back
 */

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-md">
        {/* 404 Icon */}
        <div className="space-y-4">
          <div className="text-7xl md:text-9xl font-bold text-blue-600/20">404</div>
          <h1 className="text-4xl md:text-5xl font-bold">Página não encontrada</h1>
        </div>

        {/* Description */}
        <p className="text-lg text-muted-foreground leading-relaxed">
          Desculpe, a página que você está procurando não existe ou foi removida.
        </p>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link href="/">
            <a>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                <Home className="w-4 h-4 mr-2" />
                Ir para Home
              </Button>
            </a>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}
