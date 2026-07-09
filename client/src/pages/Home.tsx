/**
 * Home Page
 * 
 * Displays:
 * - Developer introduction and presentation
 * - Featured projects
 * - Technologies and skills
 * - Contact form
 * 
 * Design: Minimalismo Corporativo Elegante
 * - Clean typography hierarchy
 * - Generous spacing
 * - Professional imagery
 * - Clear call-to-action
 */

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import { projectsData, technologiesData } from "@/data/content";
import { ArrowRight } from "lucide-react";
import profileImage from "../assets/image/Profile.png";

export default function Home() {
  const featuredProjects = projectsData.filter((p) => p.isFeatured).slice(0, 3);
  const backendTechs = technologiesData.filter((t) => t.category === "backend");
  const dbTechs = technologiesData.filter((t) => t.category === "database");
  const apiTechs = technologiesData.filter((t) => t.category === "api");
  const toolsTechs = technologiesData.filter((t) => t.category === "tools");

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                João A. Cordeiro
              </h1>
              <p className="text-2xl text-blue-600 font-semibold">
                Backend Engineer | APIs & Database Architecture
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Especializado em desenvolvimento de APIs, arquitetura de
              sistemas distribuídos e otimização de bancos de dados. Focado em
              construir soluções técnicas robustas que crescem com o negócio.
            </p>

            {/* Philosophy Section */}
            <div className="bg-muted/50 border border-border rounded-lg p-6 space-y-3">
              <p className="font-semibold text-foreground">Filosofia de Trabalho</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Trabalho com foco em organização, colaboração e melhoria contínua, utilizando a tecnologia para desenvolver soluções robustas, eficientes e orientadas às necessidades dos usuários.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex gap-4 pt-4">
              <a href="/contato" className="inline-block">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Entrar em Contato
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <Link href="/projetos">
                <a>
                  <Button size="lg" variant="outline">
                    Ver Projetos
                  </Button>
                </a>
              </Link>
            </div>
          </div>

          {/* Right: Profile Image Placeholder */}
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-100 md:h-100 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20 flex items-center justify-center border border-border">
              <img
                src={profileImage}
                alt="Imagem de Perfil"
                className="w-full h-full object-cover border border-border rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Featured Projects Section */}
      <section className="container py-20 md:py-32 space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Projetos em Destaque</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Seleção de projetos que demonstram expertise em backend, APIs e
            arquitetura de sistemas escaláveis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <Link key={project.id} href={`/projetos/${project.id}`}>
              <a className="group">
                <Card className="h-full hover:shadow-lg hover:border-blue-600/50 transition-all duration-300 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {project.shortDescription}
                        </CardDescription>
                      </div>
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ${
                          project.status === "completed"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                        }`}
                      >
                        {project.status === "completed"
                          ? "Concluído"
                          : "Em Desenvolvimento"}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs text-muted-foreground px-2 py-1">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Link>
          ))}
        </div>

        <div className="flex justify-center pt-8">
          <Link href="/projetos">
            <a>
              <Button variant="outline" size="lg">
                Ver Todos os Projetos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Technologies Section */}
      <section className="container py-20 md:py-32 space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Tecnologias</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Stack técnico focado em backend, APIs e arquitetura de dados de alta
            performance.
          </p>
        </div>

        {/* Backend */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Backend</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {backendTechs.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-blue-600/50 hover:bg-muted/50 transition-all"
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="font-medium text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Bancos de Dados</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {dbTechs.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-blue-600/50 hover:bg-muted/50 transition-all"
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="font-medium text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* APIs */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">APIs & Protocolos</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {apiTechs.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-blue-600/50 hover:bg-muted/50 transition-all"
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="font-medium text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Ferramentas</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {toolsTechs.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-blue-600/50 hover:bg-muted/50 transition-all"
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="font-medium text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Contact Section */}
      <section id="contato" className="container py-20 md:py-32 space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Vamos Conversar?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Tenho interesse em oportunidades de trabalho, colaborações e discussões
            sobre arquitetura de sistemas. Entre em contato!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Outras Formas de Contato</h3>
              <p className="text-muted-foreground leading-relaxed">
                Você também pode me encontrar nas seguintes plataformas:
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="https://www.linkedin.com/in/joao-a-cordeiro/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-blue-600/50 hover:bg-muted/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                  <span className="text-xl">💼</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">
                    linkedin.com/in/joao-a-cordeiro
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/JoaoAc05/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-blue-600/50 hover:bg-muted/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                  <span className="text-xl">💻</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">GitHub</p>
                  <p className="text-sm text-muted-foreground">
                    github.com/JoaoAc05
                  </p>
                </div>
              </a>

              <a
                href="mailto:joaoalvescordeiro2005@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-blue-600/50 hover:bg-muted/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                  <span className="text-xl">✉️</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">joaoalvescordeiro2005@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
