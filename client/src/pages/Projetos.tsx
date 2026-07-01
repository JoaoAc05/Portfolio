/**
 * Projetos (Projects) Page
 * 
 * Displays:
 * - All projects in card format
 * - Project status (completed/in-development)
 * - Link to individual project details
 * 
 * Design: Minimalismo Corporativo Elegante
 * - Grid layout with consistent cards
 * - Clear status indicators
 * - Hover effects and transitions
 */

import { Link } from "wouter";
import { projectsData } from "@/data/content";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function Projetos() {
  const completedProjects = projectsData.filter((p) => p.status === "completed");
  const inDevelopmentProjects = projectsData.filter((p) => p.status === "in-development");

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="container py-12 md:py-20 space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold">Projetos</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Portfólio de projetos backend, APIs escaláveis e arquitetura de sistemas
          distribuídos.
        </p>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Completed Projects */}
      <section className="container py-20 md:py-32 space-y-12">
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">Projetos Concluídos</h2>
          <p className="text-muted-foreground">
            Seleção de projetos finalizados que demonstram expertise técnica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {completedProjects.map((project) => (
            <Link key={project.id} href={`/projetos/${project.id}`}>
              <a className="group h-full">
                <Card className="h-full flex flex-col hover:shadow-lg hover:border-blue-600/50 transition-all duration-300 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex-1">
                        <CardTitle className="group-hover:text-blue-600 transition-colors line-clamp-2">
                          {project.title}
                        </CardTitle>
                      </div>
                      <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 whitespace-nowrap">
                        Concluído
                      </Badge>
                    </div>
                    <CardDescription className="line-clamp-2">
                      {project.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2 pt-4 border-t border-border">
                      {project.repositoryUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full flex-1"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.repositoryUrl, '_blank');
                          }}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Código
                        </Button>
                      )}
                      {project.demoUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full flex-1"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.demoUrl, '_blank');
                          }}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Link>
          ))}
        </div>
      </section>

      {/* Divider */}
      {inDevelopmentProjects.length > 0 && <div className="border-t border-border" />}

      {/* In Development Projects */}
      {inDevelopmentProjects.length > 0 && (
        <section className="container py-20 md:py-32 space-y-12">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold">Em Desenvolvimento</h2>
            <p className="text-muted-foreground">
              Projetos em andamento que demonstram trabalho contínuo e inovação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inDevelopmentProjects.map((project) => (
              <Link key={project.id} href={`/projetos/${project.id}`}>
                <a className="group h-full">
                  <Card className="h-full flex flex-col hover:shadow-lg hover:border-blue-600/50 transition-all duration-300 cursor-pointer opacity-75 hover:opacity-100">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex-1">
                          <CardTitle className="group-hover:text-blue-600 transition-colors line-clamp-2">
                            {project.title}
                          </CardTitle>
                        </div>
                        <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 whitespace-nowrap">
                          Em Dev
                        </Badge>
                      </div>
                      <CardDescription className="line-clamp-2">
                        {project.shortDescription}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col gap-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-2 pt-4 border-t border-border">
                        {project.repositoryUrl && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full flex-1"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.repositoryUrl, '_blank');
                            }}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Código
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
