/**
 * Profissional (Professional) Page
 * 
 * Displays:
 * - Non-programming career path (minimized/accordion)
 * - Main programming career trajectory
 * - Work focus and philosophy
 * 
 * Design: Minimalismo Corporativo Elegante
 * - Timeline or card layout
 * - Clear hierarchy of experience
 * - Emphasis on technical achievements
 */

import { useState } from "react";
import { professionalExperienceData, professionalPhilosophy } from "@/data/content";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { Briefcase, ChevronDown, Target, Lightbulb } from "lucide-react";

export default function Profissional() {
  const [expandedNonProgramming, setExpandedNonProgramming] = useState(false);

  const programmingExperience = professionalExperienceData.filter(
    (exp) => !exp.isNonProgramming
  );
  const nonProgrammingExperience = professionalExperienceData.filter(
    (exp) => exp.isNonProgramming
  );

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="container py-12 md:py-20 space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold">Trajetória Profissional</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Experiência em desenvolvimento backend, APIs escaláveis e arquitetura de
          sistemas distribuídos.
        </p>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Non-Programming Career (Minimized) */}
      {nonProgrammingExperience.length > 0 && (
        <section className="container py-12 md:py-16">
          <Collapsible
            open={expandedNonProgramming}
            onOpenChange={setExpandedNonProgramming}
          >
            <CollapsibleTrigger className="flex items-center gap-3 text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors">
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  expandedNonProgramming ? "rotate-180" : ""
                }`}
              />
              Trajetória Anterior (Não-Programação)
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-6 space-y-4">
              {nonProgrammingExperience.map((exp) => (
                <Card key={exp.id} className="border-l-4 border-l-gray-400">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle>{exp.role}</CardTitle>
                        <CardDescription className="text-base mt-2">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="whitespace-nowrap">
                        {exp.period.start} - {exp.period.end}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </section>
      )}

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Programming Career (Main Focus) */}
      <section className="container py-20 md:py-32 space-y-12">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold">Carreira em Programação</h2>
          </div>
          <p className="text-muted-foreground">
            Foco em desenvolvimento backend, arquitetura de APIs e otimização de sistemas.
          </p>
        </div>

        <div className="space-y-8">
          {programmingExperience.map((exp, index) => (
            <Card
              key={exp.id}
              className="border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-semibold text-blue-600">
                        {exp.period.end === "Present" ? "Atual" : `${index}º`}
                      </span>
                      <CardTitle className="text-2xl">{exp.role}</CardTitle>
                    </div>
                    <CardDescription className="text-base mt-2">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <Badge className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap">
                    {exp.period.start} - {exp.period.end}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {exp.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Professional Philosophy Section */}
      <section className="container py-20 md:py-32 space-y-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Focus */}
          <Card className="border-l-4 border-l-blue-600">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-blue-600" />
                <CardTitle>Foco de Trabalho</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {professionalPhilosophy.focus}
              </p>
            </CardContent>
          </Card>

          {/* Philosophy */}
          <Card className="border-l-4 border-l-blue-600">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-blue-600" />
                <CardTitle>Filosofia</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {professionalPhilosophy.philosophy}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Strengths */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Pontos Fortes</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {professionalPhilosophy.strengths.map((strength, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 rounded-lg border border-border hover:border-blue-600/50 hover:bg-muted/50 transition-all"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-blue-600">✓</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{strength}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
