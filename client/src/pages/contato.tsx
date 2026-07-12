/**
 * Contato (Contact) Page
 * 
 * Displays:
 * - Contact information
 * - Contact form
 * - Social media links
 * 
 * Design: Minimalismo Corporativo Elegante
 * - Clean timeline or card layout
 * - Clear hierarchy of information
 * - Generous spacing
 */

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import { projectsData, technologiesData } from "@/data/content";
import { ArrowRight } from "lucide-react";
import profileImage from "../assets/image/Profile.png";

export default function Contato() {
  const featuredProjects = projectsData.filter((p) => p.isFeatured).slice(0, 3);
  const backendTechs = technologiesData.filter((t) => t.category === "backend");
  const dbTechs = technologiesData.filter((t) => t.category === "database");
  const apiTechs = technologiesData.filter((t) => t.category === "api");
  const toolsTechs = technologiesData.filter((t) => t.category === "tools");

  return (
    <div className="w-full">
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

                      <a
                        href="https://discord.com/users/user.joao"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-blue-600/50 hover:bg-muted/50 transition-all group"
                      >
                        <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                          <span className="text-xl">🤖</span>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Discord</p>
                          <p className="text-sm text-muted-foreground">user.joao</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
    </div>
  );
}
