/**
 * ProjetoDetalhes (Project Details) Page
 * 
 * Displays:
 * - Project title and description
 * - Problem solved and solution
 * - Technical challenges and learnings
 * - Images/diagrams and links
 * 
 * Design: Minimalismo Corporativo Elegante
 * - Clean typography hierarchy
 * - Generous spacing
 * - Clear sections for different content types
 */

import { useRoute, Link } from "wouter";
import { projectsData } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github, ExternalLink, CheckCircle2 } from "lucide-react";

export default function ProjetoDetalhes() {
  const [match, params] = useRoute("/projetos/:id");

  if (!match) return null;

  const project = projectsData.find((p) => p.id === params?.id);

  if (!project) {
    return (
      <div className="container py-12 md:py-20">
        <Link href="/projetos">
          <a className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Voltar para Projetos
          </a>
        </Link>
        <div className="text-center py-12">
          <h1 className="text-3xl font-bold mb-4">Projeto não encontrado</h1>
          <p className="text-muted-foreground mb-8">
            Desculpe, o projeto que você está procurando não existe.
          </p>
          <Link href="/projetos">
            <a>
              <Button>Voltar para Projetos</Button>
            </a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Back Button */}
      <div className="container pt-12 md:pt-20">
        <Link href="/projetos">
          <a className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar para Projetos
          </a>
        </Link>
      </div>

      {/* Project Header */}
      <section className="container py-12 md:py-20 space-y-6">
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-muted-foreground">{project.description}</p>
            </div>
            <Badge
              className={`whitespace-nowrap h-fit ${
                project.status === "completed"
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                  : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
              }`}
            >
              {project.status === "completed" ? "Concluído" : "Em Desenvolvimento"}
            </Badge>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 pt-4">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-4">
            {project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  <Github className="w-4 h-4 mr-2" />
                  Repositório
                </Button>
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver Demo
                </Button>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Project Details */}
      <section className="container py-20 md:py-32 space-y-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Problem Solved */}
          <Card className="border-l-4 border-l-blue-600">
            <CardHeader>
              <CardTitle className="text-2xl">Problema Resolvido</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {project.problemSolved}
              </p>
            </CardContent>
          </Card>

          {/* Solution */}
          <Card className="border-l-4 border-l-blue-600">
            <CardHeader>
              <CardTitle className="text-2xl">Solução Implementada</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Technical Challenges and Learnings */}
      <section className="container py-20 md:py-32 space-y-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Challenges */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Desafios Técnicos</h3>
            <div className="space-y-4">
              {project.technicalChallenges.map((challenge, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-lg border border-border hover:border-blue-600/50 hover:bg-muted/50 transition-all"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-blue-600">!</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{challenge}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Learnings */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Aprendizados</h3>
            <div className="space-y-4">
              {project.learnings.map((learning, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-lg border border-border hover:border-green-600/50 hover:bg-green-50/50 dark:hover:bg-green-900/10 transition-all"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground leading-relaxed">{learning}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Call to Action */}
      <section className="container py-20 md:py-32 text-center space-y-6">
        <div className="space-y-4">
          <h3 className="text-3xl font-bold">Interessado em saber mais?</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore outros projetos ou entre em contato para discutir oportunidades de
            colaboração.
          </p>
        </div>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/projetos">
            <a>
              <Button variant="outline" size="lg">
                Ver Outros Projetos
              </Button>
            </a>
          </Link>
          <Link href="/contato">
            <a>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Entrar em Contato
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
