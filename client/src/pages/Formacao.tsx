/**
 * Formacao (Education) Page
 * 
 * Displays:
 * - Academic education
 * - Complementary training and certifications
 * - Published articles (placeholder for future)
 * 
 * Design: Minimalismo Corporativo Elegante
 * - Clean timeline or card layout
 * - Clear hierarchy of information
 * - Generous spacing
 */

import { Link } from "wouter";
import { educationData, complementaryEducationData, articlesData } from "@/data/content";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, BookOpen, Award, ArrowUpRight, Clock, FileText, MessageCircle  } from "lucide-react";

export default function Formacao() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="container py-12 md:py-20 space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold">Formação</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Educação acadêmica, formações complementares e desenvolvimento contínuo.
        </p>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Academic Education Section */}
      <section className="container py-20 md:py-32 space-y-12">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold">Formação Acadêmica</h2>
          </div>
          <p className="text-muted-foreground">
            Formação superior e especialização.
          </p>
        </div>

        <div className="space-y-6">
          {educationData.map((edu) => (
            <Card key={edu.id} className="border-l-4 border-l-blue-600">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl">{edu.type} - {edu.name}</CardTitle>
                    <CardDescription className="text-base mt-2">
                      {edu.focus} • {edu.institution}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {edu.startDate} - {edu.endDate} 
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm font-medium text-foreground mb-2">📍Localização</p>
                  <p className="text-sm text-muted-foreground">{edu.city}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Complementary Education Section */}
      <section className="container py-20 md:py-32 space-y-12">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold">Formações Complementares</h2>
          </div>
          <p className="text-muted-foreground">
            Cursos, certificações e eventos de desenvolvimento profissional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {complementaryEducationData.map((comp) => (
            <Card key={comp.id} className="hover:shadow-lg hover:border-blue-600/50 transition-all">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{comp.name}</CardTitle>
                    <CardDescription className="mt-2">{comp.institution}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="whitespace-nowrap">
                    {comp.completionDate}
                  </Badge>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Published Articles Section (Placeholder) */}
      <section className="container py-20 md:py-32 space-y-12">
        {/* <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">Artigos Publicados</h2>
          <p className="text-muted-foreground">
            Artigos técnicos e reflexões.
          </p>
        </div>

        <Card className="border-dashed border-2">
          <CardContent className="py-12 text-center">
            <div className="space-y-4">
              <div className="text-4xl text-muted-foreground/30">📝</div>
              <div>
                <p className="text-lg font-semibold text-foreground mb-2">
                  Em breve
                </p>
                <p className="text-muted-foreground">
                  Esta seção será preenchida com artigos técnicos sobre backend,
                  APIs e arquitetura de sistemas, além de artigos publicados durante período de graduação.
                </p>
              </div>
            </div>
          </CardContent>
        </Card> */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold">Artigos e Discussões</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Artigos e reflexões sobre desenvolvimento backend, APIs, arquitetura de sistemas e tecnologia.
          </p>
        </div>

        {articlesData.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articlesData.map((article) => (
              <Link key={article.id} href={`/artigos/${article.id}`}>
                <a className="group h-full">
                  <Card className="h-full flex flex-col hover:shadow-lg hover:border-blue-600/50 transition-all duration-300 cursor-pointer">
                    <CardHeader className="flex-1">
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <Badge variant="secondary" className="whitespace-nowrap">
                          {article.type === "article" ? (
                            <><FileText className="w-3 h-3 mr-1" /> Artigo</>
                          ) : (
                            <><MessageCircle className="w-3 h-3 mr-1" /> Discussão</>
                          )}
                        </Badge>
                        {article.readingTime && (
                          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground whitespace-nowrap">
                            <Clock className="w-3 h-3" /> {article.readingTime}
                          </span>
                        )}
                      </div>
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors line-clamp-3">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="mt-2">{article.category}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                        {article.summary}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                        ))}
                        {article.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">+{article.tags.length - 3}</Badge>
                        )}
                      </div>
                      <div className="flex items-center justify-between border-t border-border pt-4 text-sm font-medium text-blue-600">
                        <span>Ler conteúdo</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </Link>
            ))}
          </div>
        ) : (
          <Card className="border-dashed border-2">
            <CardContent className="py-12 text-center">
              <div className="space-y-4">
                <div className="text-4xl text-muted-foreground/30">📝</div>
                <div>
                  <p className="text-lg font-semibold text-foreground mb-2">Conteúdo em preparação</p>
                  <p className="text-muted-foreground">
                    Os artigos e as discussões serão apresentados aqui quando forem cadastrados.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </section>
    </div>
  );
}
