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
    startDate: "2023",
    endDate: "2025",
    name: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    focus: "Engenharia de Software",
    institution: "Centro Universitário FASIPE",
    city: "Sinop, MT",
    description:
      "Curso superior de tecnologia com foco em desenvolvimento de software, arquitetura de sistemas, engenharia de software, redes e base de robótica.",
  },
  {
    id: "edu-002",
    startDate: "2026",
    endDate: "2027*",
    name: "Mestrado em Propriedade Intelectual e Transferência de Tecnologia para Inovação",
    focus: "Propriedade Intelectual e Transferência de Tecnologia",
    institution: "Universidade do Estado de Mato Grosso (UNEMAT) - PROFNIT",
    city: "Sinop, MT",
    description:
      "Programa de pós-graduação stricto sensu voltado à pesquisa e inovação tecnológica, com foco em propriedade intelectual e transferência de tecnologia.",
  },
];

export const complementaryEducationData: ComplementaryEducation[] = [
  {
    id: "comp-001",
    name: "Certificação em HTML, CSS e JavaScript",
    institution: "Curso em Vídeo",
    completionDate: "2022-2023",
  },
];

// ============================================
// PROFESSIONAL EXPERIENCE DATA
// ============================================

export const professionalExperienceData: ProfessionalExperience[] = [
  {
    id: "prof-001",
    company: "RuralHub Tecnologia",
    period: {
      start: "Jul 2023",
      end: "Present",
    },
    role: "Analista de Suporte Pleno",
    description:
      "Responsável pelo suporte técnico em nível pleno, incluindo plantão de suporte, atendimento a demandas mais complexas e apoio direto aos clientes na operação dos sistemas. Atuação com foco na análise de problemas, orientação estratégica aos usuários e melhoria contínua dos processos de suporte. Realização e condução de treinamentos online e presenciais para capacitação dos clientes, além do compartilhamento de conhecimento com a equipe, contribuindo para a qualidade dos serviços e a satisfação dos usuários.",
  },
  {
    id: "prof-002",
    company: "Unifasipe - Centro Universitário FASIPE",
    period: {
      start: "Fev 2026",
      end: "Present",
    },
    role: "Professor",
    description:
      "Responsável por ministrar conteúdos fundamentais para a formação em tecnologia em nível superior, abordando lógica proposicional, conectivos, tabelas verdade, raciocínio lógico, fundamentos matemáticos aplicados à computação e base estrutural para algoritmos e programação.",
  },
  {
    id: "prof-003",
    company: "Orcontec Contabilidade",
    period: {
      start: "2020/01",
      end: "2023/01",
    },
    role: "Auxiliar Geral",
    description:
      "Atuação em rotinas administrativas e operacionais, incluindo serviços de office boy, emissão de notas fiscais, guias florestais e apoio às atividades do escritório. Desenvolvendo disciplina, responsabilidade e visão de processos.",
    isNonProgramming: true,
  },
  {
    id: "prof-004",
    company: "Enermat",
    period: {
      start: "2023/02",
      end: "2023/07",
    },
    role: "Estoquista",
    description:
      "Atuação no controle e organização de estoque, recebimento e conferência de mercadorias, separação de pedidos e apoio ao atendimento ao cliente. Responsável por garantir a correta armazenagem dos produtos, agilidade no atendimento e suporte às rotinas operacionais da loja, contribuindo para a eficiência dos processos internos.",
    isNonProgramming: true,
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
      "Plataforma de processamento de dados em tempo real construída com Node.js, Prisma e PostgreSQL. Sendo o meu projeto para conclusão de graduação.",
    problemSolved:
      "Nas aulas, todas as presenças eram registradas manualmente em papel, o que era ineficiente e propenso a erros.",
    solution:
      "Arquitetura MVC com endpoints RESTful para o CRUD completo da plataforma. Implementação de validação de dados e autenticação JWT.",
    technicalChallenges: [
      "Implementar autenticação segura utilizando JWT para controle de acesso.",
      "Modelar o banco de dados relacional com Prisma e PostgreSQL para suportar alunos, turmas, eventos e presenças.",
      "Desenvolver uma API REST organizada em arquitetura MVC com validações e tratamento de erros.",
      "Integrar o processo de leitura de QR Code para registrar presenças de forma rápida e confiável."
    ],
    learnings: [
      "Desenvolvimento de APIs REST seguindo boas práticas de arquitetura MVC.",
      "Modelagem de banco de dados e utilização do ORM Prisma com PostgreSQL.",
      "Implementação de autenticação e autorização utilizando JSON Web Token (JWT).",
      "Documentação e testes de endpoints utilizando Swagger/OpenAPI."
    ],
    technologies: ["Node.js", "Prisma", "PostgreSQL", "Swagger"],
    status: "completed",
    isFeatured: true,
    repositoryUrl: "https://github.com/JoaoAc05/Automatizacao-Chamada",
    demoUrl: "https://automatizacao-chamada.onrender.com/docs/#/",
  },
  {
    id: "proj-002",
    title: "Atualização Cambial",
    shortDescription:
      "Bot de consultas a APIs de cotação cambial diariamente.",
    description:
      "BOT construido em python e alocado na vercel para fazer consulta de cambio uma vez ao dia a enviar alertas via e-mail caso os valores estejam a baixo de um limite.",
    problemSolved:
      "Ter maior controle sobre as cotações cambiais e receber notificações em tempo real.",
    solution:
      "Bot que consulta APIs de cotação cambial diariamente e envia alertas por e-mail quando os valores atingem limites pré-definidos.",
    technicalChallenges: [
      "Implementar consultas a múltiplas APIs de cotação cambial e consolidar os resultados.",
      "Gerenciar agendamento de tarefas diárias para execução do bot.",
      "Configurar envio de e-mails com alertas personalizados."
    ],
    learnings: [
      "Integração com APIs externas e tratamento de dados em tempo real.",
      "Automatização de tarefas recorrentes utilizando agendadores e cron jobs.",
      "Configuração de serviços de envio de e-mails e notificações."
    ],
    technologies: ["Python", "Vercel"],
    status: "completed",
    isFeatured: true,
    repositoryUrl: "https://github.com/JoaoAc05/Cambio",
  },
  {
    id: "proj-003",
    title: "Discord-Bot",
    shortDescription:
      "Bot de interação para o Discord integrado com IA via N8N.",
    description:
      "BOT construido em JavaScript para auxiliar na gestão de informações pela equipe de suporte da empresa. Organizando informações de forma estruturada e disponibilizando em forma de comandos e respostas com IA integrada ao N8N.",
    problemSolved:
      "A equipe de suporte precisava de uma forma eficiente de consultar informações de uso do dia dia e de forma rápida, sem precisar acessar múltiplas fontes de dados.",
    solution:
      "Bot centraliza as informações e permite interações estáticas e personalizadas que são direcionadas para uma IA através do N8N.",
    technicalChallenges: [
      "Implementar integração com a API do Discord para receber e responder a comandos.",
      "Gerenciar o estado do bot e armazenar informações relevantes em 'banco de dados'.",
      "Integrar com o N8N para processar comandos e fornecer respostas inteligentes.",
    ],
    learnings: [
      "Integração com APIs de terceiros (Discord API)",
      "Automação de processos com N8N",
      "Desenvolvimento de bots interativos e responsivos",
    ],
    technologies: ["JavaScript", "N8N", "Discord API"],
    status: "completed",
    isFeatured: true,
    repositoryUrl: "https://github.com/JoaoAc05/Discord-BOT",
  },
  {
    id: "proj-004",
    title: "SecureAPI Playground",
    shortDescription:
      "Diferentes exemplos de validações, autenticação e tratamento de dados.",
    description:
      "Aplicação que centraliza diferentes exemplos de validações, autenticação e tratamento de dados utilizados em aplicações reais, permitindo que qualquer pessoa teste visualmente como essas validações funcionam.",
    problemSolved:
      "Validações, autenticações e tratamentos necessários para garantir a segurança e integridade dos dados e de sistemas.",
    solution:
      "Playground de apresentação e treinamento.",
    technicalChallenges: [
      "Diferentes tipos de validações de dados, incluindo validação de entrada, validação de formato e validação de regras de negócio.",
      "Autenticação segura utilizando JWT e/ou OAuth2 para proteger endpoints e recursos sensíveis.",
      "Desenvolver tratamento de erros robusto para lidar com diferentes cenários de falha e fornecer feedback adequado aos usuários.",
    ],
    learnings: [
      "Lidar e consolidar validações necessárias para qualquer sistema",
      "Autenticação e barreira de acessos não autorizados",
      "Tratamento de erros e feedback para usuários",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "Swagger",
    ],
    status: "in-development",
    isFeatured: false,
    repositoryUrl: "https://github.com/JoaoAc05/",
  },
];

// ============================================
// PROFESSIONAL PHILOSOPHY
// ============================================

export const professionalPhilosophy = {
  focus:
    "Arquitetura escalável, performance e confiabilidade. Foco em construir sistemas que crescem com o negócio.",
  philosophy:
    "Trabalho com foco em organização, colaboração e melhoria contínua, utilizando a tecnologia para desenvolver soluções robustas, eficientes e orientadas às necessidades dos usuários.",
  strengths: [
    "Desenvolvimento backend e APIs escaláveis",
    "Aprendizado constante e adaptação a novas tecnologias",
    "Resolução de problemas complexos e otimização de sistemas",
    "Colaboração em equipes multidisciplinares e comunicação clara",
    "Regra de negócio e visão de produto para soluções técnicas",
    "Compartilhamento de conhecimento com colegas",
  ],
};
