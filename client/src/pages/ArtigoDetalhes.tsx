/**
 * ArtigoDetalhes
 * Página de leitura de artigos e discussões técnicas do portfólio.
 */

import { useRoute, Link } from "wouter";
import { articlesData } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowUpRight, Clock, ExternalLink, FileText, MessageCircle } from "lucide-react";

export default function ArtigoDetalhes() {
  const [match, params] = useRoute("/artigos/:id");

  if (!match) return null;

  const article = articlesData.find((item) => item.id === params?.id);

  if (!article) {
    return (
      <div className="container py-12 md:py-20">
        <Link href="/formacao">
          <a className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Voltar para Formação
          </a>
        </Link>
        <div className="text-center py-12">
          <h1 className="text-3xl font-bold mb-4">Conteúdo não encontrado</h1>
          <p className="text-muted-foreground mb-8">
            O artigo ou a discussão que você procura não existe ou não está disponível.
          </p>
          <Link href="/formacao">
            <a><Button>Voltar para Formação</Button></a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="container pt-12 md:pt-20">
        <Link href="/formacao">
          <a className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar para Formação
          </a>
        </Link>
      </div>

      <article>
        <section className="container py-8 md:py-12 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="secondary" className="inline-flex items-center gap-1">
              {article.type === "article" ? <FileText className="w-3 h-3" /> : <MessageCircle className="w-3 h-3" />}
              {article.type === "article" ? "Artigo" : "Discussão técnica"}
            </Badge>
            <Badge variant="outline">{article.category}</Badge>
            {article.date && <span className="text-sm text-muted-foreground">{article.date}</span>}
            {article.readingTime && (
              <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" /> {article.readingTime} de leitura
              </span>
            )}
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{article.title}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">{article.summary}</p>
            {article.author && <p className="text-sm text-muted-foreground">Por {article.author}</p>}
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {article.tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}
          </div>
          {article.externalUrl && (
            <div className="pt-2">
              <a href={article.externalUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  Acessar publicação original <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          )}
        </section>

        <div className="border-t border-border" />

        <section className="container py-12 md:py-20">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_280px] gap-12 items-start">
            <div className="max-w-3xl space-y-6">
              {article.content.map((paragraph, index) => (
                <p key={index} className="text-base md:text-lg text-muted-foreground leading-8">
                  {paragraph}
                </p>
              ))}

              {article.keyPoints && article.keyPoints.length > 0 && (
                <Card className="mt-10 border-l-4 border-l-blue-600">
                  <CardHeader><CardTitle className="text-xl">Pontos principais</CardTitle></CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {article.keyPoints.map((point, index) => (
                        <li key={index} className="flex gap-3 text-muted-foreground leading-relaxed">
                          <span className="text-blue-600 font-bold">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {article.references && article.references.length > 0 && (
                <section className="pt-6 space-y-4">
                  <h2 className="text-2xl font-bold">Referências e materiais</h2>
                  <ul className="space-y-3">
                    {article.references.map((reference, index) => (
                      <li key={`${reference.title}-${index}`} className="text-muted-foreground">
                        {reference.url ? (
                          <a href={reference.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 hover:underline">
                            {reference.title}<ArrowUpRight className="w-4 h-4" />
                          </a>
                        ) : reference.title}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            <aside className="lg:sticky lg:top-8">
              <Card>
                <CardHeader><CardTitle className="text-lg">Continue explorando</CardTitle></CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Veja outros artigos e discussões disponíveis na seção de formação.
                  </p>
                  <Link href="/formacao">
                    <a className="block"><Button variant="outline" className="w-full">Ver outros conteúdos</Button></a>
                  </Link>
                  <Link href="/projetos">
                    <a className="block"><Button className="w-full bg-blue-600 hover:bg-blue-700">Explorar projetos</Button></a>
                  </Link>
                </CardContent>
              </Card>
            </aside>
          </div>
        </section>
      </article>
    </div>
  );
}
