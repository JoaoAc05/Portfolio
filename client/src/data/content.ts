/**
 * Content Data Structure for João Cordeiro Portfolio
 * 
 * This file centralizes all portfolio content (education, experience, projects, technologies)
 * to allow easy updates without touching component code.
 * 
 * Design Philosophy: Minimalismo Corporativo Elegante
 * - Clear, professional language
 * - Focus on technical depth and achievements
 * - Emphasis on backend, APIs, and database expertise
 */

export interface Education {
  id: string;
  startDate: string;
  endDate: string;
  name: string;
  focus: string;
  institution: string;
  city: string;
  description: string;
}

export interface ComplementaryEducation {
  id: string;
  name: string;
  institution: string;
  completionDate: string;
}

export interface ProfessionalExperience {
  id: string;
  company: string;
  period: {
    start: string;
    end: string;
  };
  role: string;
  description: string;
  isNonProgramming?: boolean;
}

export interface Technology {
  id: string;
  name: string;
  category: "backend" | "database" | "api" | "devops" | "tools";
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  status: "completed" | "in-development";
  image?: string;
  problemSolved: string;
  solution: string;
  technicalChallenges: string[];
  learnings: string[];
  repositoryUrl?: string;
  demoUrl?: string;
  isFeatured: boolean;
}

// ============================================
// EDUCATION DATA
// ============================================

export const educationData: Education[] = [
  {
    id: "edu-001",
    startDate: "2018",
    endDate: "2022",
    name: "Bacharelado em Engenharia de Software",
    focus: "Engenharia de Software",
    institution: "Universidade XYZ",
    city: "São Paulo, SP",
    description:
      "Formação sólida em princípios de engenharia de software, arquitetura de sistemas e desenvolvimento de aplicações. Participação em projetos de pesquisa focados em otimização de algoritmos e escalabilidade de sistemas distribuídos.",
  },
];

export const complementaryEducationData: ComplementaryEducation[] = [
  {
    id: "comp-001",
    name: "Certificação AWS Solutions Architect Associate",
    institution: "Amazon Web Services",
    completionDate: "2023",
  },
  {
    id: "comp-002",
    name: "Advanced Node.js and Microservices",
    institution: "Udemy",
    completionDate: "2023",
  },
  {
    id: "comp-003",
    name: "PostgreSQL Advanced Administration",
    institution: "Coursera",
    completionDate: "2022",
  },
];

// ============================================
// PROFESSIONAL EXPERIENCE DATA
// ============================================

export const professionalExperienceData: ProfessionalExperience[] = [
  {
    id: "prof-001",
    company: "Tech Startup ABC",
    period: {
      start: "Jan 2023",
      end: "Present",
    },
    role: "Senior Backend Engineer",
    description:
      "Arquiteto e desenvolvedor de APIs RESTful e GraphQL de alta performance. Responsável pela migração de monolito para microserviços, resultando em 40% de redução em latência. Implementação de cache distribuído com Redis e otimização de queries SQL complexas. Mentoria de junior developers e code reviews rigorosos.",
  },
  {
    id: "prof-002",
    company: "Digital Solutions Ltd",
    period: {
      start: "Jun 2021",
      end: "Dec 2022",
    },
    role: "Backend Developer",
    description:
      "Desenvolvimento de APIs em Node.js e Express para plataforma SaaS. Implementação de autenticação JWT, autorização baseada em roles e integração com serviços de pagamento. Otimização de performance de banco de dados PostgreSQL e implementação de replicação para alta disponibilidade.",
  },
  {
    id: "prof-003",
    company: "Freelance Projects",
    period: {
      start: "2020",
      end: "2021",
    },
    role: "Full Stack Developer",
    description:
      "Desenvolvimento de aplicações web full stack para clientes diversos. Experiência com Node.js, React, MongoDB e AWS. Implementação de CI/CD pipelines e containerização com Docker.",
    isNonProgramming: false,
  },
];

// ============================================
// TECHNOLOGIES DATA
// ============================================

export const technologiesData: Technology[] = [
  // Backend
  {
    id: "tech-001",
    name: "Node.js",
    category: "backend",
    icon: "⚙️",
  },
  {
    id: "tech-002",
    name: "Express.js",
    category: "backend",
    icon: "🚀",
  },
//   {
//     id: "tech-003",
//     name: "python",
//     category: "backend",
//     icon: "🐍",
//   },
//   {
//     id: "tech-004",
//     name: "FastAPI",
//     category: "backend",
//     icon: "⚡",
//   },

  // Database
  {
    id: "tech-004",
    name: "PostgreSQL",
    category: "database",
    icon: "🗄️",
  },
  {
    id: "tech-005",
    name: "Firebird",
    category: "database",
    icon: "🐦‍🔥",
  },
  {
    id: "tech-006",
    name: "Redis",
    category: "database",
    icon: "💾",
  },
//   {
//     id: "tech-008",
//     name: "Elasticsearch",
//     category: "database",
//     icon: "🔍",
//   },

  // APIs
  {
    id: "tech-007",
    name: "REST APIs",
    category: "api",
    icon: "🔗",
  },
//   {
//     id: "tech-010",
//     name: "GraphQL",
//     category: "api",
//     icon: "📊",
//   },
//   {
//     id: "tech-011",
//     name: "gRPC",
//     category: "api",
//     icon: "📡",
//   },

  // DevOps
  {
    id: "tech-012",
    name: "Docker",
    category: "devops",
    icon: "🐳",
  },
  {
    id: "tech-013",
    name: "Kubernetes",
    category: "devops",
    icon: "☸️",
  },
  {
    id: "tech-014",
    name: "AWS",
    category: "devops",
    icon: "☁️",
  },
  {
    id: "tech-015",
    name: "CI/CD (GitHub Actions)",
    category: "devops",
    icon: "⚙️",
  },

  // Tools
  {
    id: "tech-016",
    name: "Prisma",
    category: "tools",
    icon: "🔧",
  },
  {
    id: "tech-017",
    name: "Git",
    category: "tools",
    icon: "📦",
  },
  {
    id: "tech-018",
    name: "Swagger",
    category: "tools",
    icon: "📊",
  },
];

// ============================================
// PROJECTS DATA
// ============================================

export const projectsData: Project[] = [
  {
    id: "proj-001",
    title: "Plataforma de Automatização de Chamadas",
    shortDescription:
      "API do sistema para registro de presenças por meio de leitura de QR Code.",
    description:
      "Plataforma de processamento de dados em tempo real construída com Node.js, Prisma e PostgreSQL.",
    problemSolved:
      "Nas aulas, todas as presenças eram registradas manualmente em papel, o que era ineficiente e propenso a erros.",
    solution:
      "Arquitetura MVC com endpoints RESTful para o CRUD completo da plataforma. Implementação de validação de dados e autenticação JWT.",
    technicalChallenges: [
      "Garantir idempotência em processamento distribuído",
      "Otimizar latência de ponta a ponta",
      "Implementar monitoramento e alertas em tempo real",
    ],
    learnings: [
      "Padrões de event sourcing e CQRS",
      "Escalabilidade horizontal com Kubernetes",
      "Observabilidade com Prometheus e Grafana",
    ],
    technologies: ["Node.js", "Kafka", "PostgreSQL", "Docker", "Kubernetes"],
    status: "completed",
    isFeatured: true,
    repositoryUrl: "https://github.com/joao-cordeiro/realtime-data-platform",
    demoUrl: "https://demo.example.com/realtime-platform",
  },
  {
    id: "proj-002",
    title: "API GraphQL de E-commerce",
    shortDescription:
      "API GraphQL performática para plataforma de e-commerce com suporte a múltiplas moedas e idiomas.",
    description:
      "API GraphQL construída com Apollo Server, Node.js e PostgreSQL para plataforma de e-commerce global.",
    problemSolved:
      "Reduzir over-fetching de dados e melhorar performance de aplicações mobile.",
    solution:
      "Implementação de GraphQL com data loaders para evitar N+1 queries, caching com Redis e paginação eficiente.",
    technicalChallenges: [
      "Otimizar resolvers para evitar N+1 queries",
      "Implementar autenticação e autorização granular",
      "Suportar múltiplas moedas com conversão em tempo real",
    ],
    learnings: [
      "Boas práticas de design de schema GraphQL",
      "Performance tuning em queries complexas",
      "Implementação de subscriptions em tempo real",
    ],
    technologies: ["Node.js", "GraphQL", "Apollo", "PostgreSQL", "Redis"],
    status: "completed",
    isFeatured: true,
    repositoryUrl: "https://github.com/joao-cordeiro/ecommerce-graphql-api",
  },
  {
    id: "proj-003",
    title: "Sistema de Autenticação e Autorização Centralizado",
    shortDescription:
      "Serviço centralizado de autenticação com suporte a OAuth2, SAML e autenticação multifator.",
    description:
      "Sistema de autenticação e autorização construído com Node.js, JWT e PostgreSQL.",
    problemSolved:
      "Múltiplos serviços precisavam de autenticação consistente e segura.",
    solution:
      "Serviço centralizado com JWT, refresh tokens, rate limiting e suporte a múltiplos provedores OAuth.",
    technicalChallenges: [
      "Implementar refresh token rotation segura",
      "Suportar múltiplos provedores de identidade",
      "Manter performance com milhões de tokens",
    ],
    learnings: [
      "Segurança em sistemas distribuídos",
      "Padrões de autenticação moderna",
      "Conformidade com OWASP e GDPR",
    ],
    technologies: ["Node.js", "JWT", "PostgreSQL", "Redis", "OAuth2"],
    status: "completed",
    isFeatured: true,
    repositoryUrl: "https://github.com/joao-cordeiro/auth-service",
  },
  {
    id: "proj-004",
    title: "Migração de Monolito para Microserviços",
    shortDescription:
      "Refatoração de aplicação monolítica em 15+ microserviços independentes.",
    description:
      "Projeto de migração arquitetural de monolito para arquitetura de microserviços.",
    problemSolved:
      "Monolito crescente dificultava manutenção, deploy e escalabilidade independente.",
    solution:
      "Decomposição em domínios de negócio, implementação de API Gateway, service discovery e comunicação assíncrona.",
    technicalChallenges: [
      "Manter consistência de dados entre serviços",
      "Implementar distributed tracing",
      "Coordenar deploys de múltiplos serviços",
    ],
    learnings: [
      "Padrões de decomposição de domínios",
      "Saga pattern para transações distribuídas",
      "Observabilidade em arquiteturas distribuídas",
    ],
    technologies: [
      "Node.js",
      "Docker",
      "Kubernetes",
      "RabbitMQ",
      "PostgreSQL",
    ],
    status: "in-development",
    isFeatured: false,
    repositoryUrl: "https://github.com/joao-cordeiro/microservices-migration",
  },
];

// ============================================
// PROFESSIONAL PHILOSOPHY
// ============================================

export const professionalPhilosophy = {
  focus:
    "Arquitetura escalável, performance e confiabilidade. Foco em construir sistemas que crescem com o negócio.",
  philosophy:
    "Acredito que bom código backend é invisível ao usuário final, mas fundamental para experiência de qualidade. Busco sempre entender o problema de negócio antes de implementar soluções técnicas.",
  strengths: [
    "Resolução de problemas complexos em sistemas distribuídos",
    "Mentoria e compartilhamento de conhecimento",
    "Atenção a detalhes e qualidade de código",
    "Aprendizado contínuo e adaptação a novas tecnologias",
  ],
};
