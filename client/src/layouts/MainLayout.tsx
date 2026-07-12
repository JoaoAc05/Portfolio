/**
 * MainLayout Component
 * 
 * Primary layout wrapper for all pages. Includes:
 * - Fixed header with navigation
 * - Main content area
 * - Footer with contact info
 * 
 * Design: Minimalismo Corporativo Elegante
 * - Clean navigation with professional typography
 * - Generous spacing and breathing room
 * - Smooth transitions and hover states
 */

import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";

interface MainLayoutProps {
  children: ReactNode;
}

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/formacao", label: "Formação" },
  { href: "/profissional", label: "Profissional" },
  { href: "/projetos", label: "Projetos" },
  { href: "/contato", label: "Contato" },
];

export default function MainLayout({ children }: MainLayoutProps) {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                <span className="text-white font-bold text-lg">JC</span>
              </div>
              <span className="hidden sm:inline font-bold text-lg text-foreground">
                João Cordeiro
              </span>
            </a>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(link.href)
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-lg"
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </Button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-16 md:pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50">
        <div className="container py-12 md:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} João A. Cordeiro. Todos os direitos
              reservados.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/in/joao-a-cordeiro"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </a>
              <a
                href="https://github.com/JoaoAc05"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </a>
              <a
                href="mailto:joaoalvescordeiro2005@gmail.com"
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
   );
}
