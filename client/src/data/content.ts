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

import { url } from "inspector/promises";

export interface Education {
  id: string;
  startDate: string;
  endDate: string;
  name: string;
  type: string;
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

export interface Article {
  id: string;
  title: string;
  summary: string;
  category: string;
  type: "article" | "discussion";
  date?: string;
  author?: string;
  readingTime?: string;
  tags: string[];
  content: string[];
  keyPoints?: string[];
  references?: { title: string; url?: string }[];
  externalUrl?: string;
}

// ============================================
// EDUCATION DATA
// ============================================

export const educationData: Education[] = [
  {
    id: "edu-001",
    startDate: "2023",
    endDate: "2025",
    name: "Análise e Desenvolvimento de Sistemas",
    type: "Tecnólogo",
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
    name: "Propriedade Intelectual e Transferência de Tecnologia para Inovação",
    type: "Mestrado",
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
      start: "Jul 2026",
      end: "Present",
    },
    role: "Desenvolvedor JR",
    description:
      "Manutenção de sistema ERP voltado ao agronegócio, trabalhando com linguagem Delphi, banco de dados Firebird. Responsável por implementar novas funcionalidades, corrigir bugs e otimizar processos existentes, garantindo a eficiência e confiabilidade do sistema para os usuários finais.",
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
    company: "RuralHub Tecnologia",
    period: {
      start: "Jul 2023",
      end: "Jul 2026",
    },
    role: "Analista de Suporte Pleno",
    description:
      "Responsável pelo suporte técnico em nível pleno, incluindo plantão de suporte, atendimento a demandas mais complexas e apoio direto aos clientes na operação dos sistemas. Atuação com foco na análise de problemas, orientação estratégica aos usuários e melhoria contínua dos processos de suporte. Realização e condução de treinamentos online e presenciais para capacitação dos clientes, além do compartilhamento de conhecimento com a equipe, contribuindo para a qualidade dos serviços e a satisfação dos usuários.",
  },
  {
    id: "prof-004",
    company: "Enermat",
    period: {
      start: "Fev 2023",
      end: "Jul 2023",
    },
    role: "Estoquista",
    description:
      "Atuação no controle e organização de estoque, recebimento e conferência de mercadorias, separação de pedidos e apoio ao atendimento ao cliente. Responsável por garantir a correta armazenagem dos produtos, agilidade no atendimento e suporte às rotinas operacionais da loja, contribuindo para a eficiência dos processos internos.",
    isNonProgramming: true,
  },
  {
    id: "prof-005",
    company: "Orcontec Contabilidade",
    period: {
      start: "Jan 2020",
      end: "Jan 2023",
    },
    role: "Auxiliar Geral",
    description:
      "Atuação em rotinas administrativas e operacionais, incluindo serviços de office boy, emissão de notas fiscais, guias florestais e apoio às atividades do escritório. Desenvolvendo disciplina, responsabilidade e visão de processos.",
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
      "Modelar o banco de dados relacional com Prisma e PostgreSQL para suportar alunos, turmas, disciplinas e presenças.",
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

// ============================================
// ARTICLES AND TECHNICAL DISCUSSIONS DATA
// ============================================

export const articlesData: Article[] = [  
  {
    id: "art-001",
    title: "Inteligência Artificial, C e Assembly: estamos caminhando para uma nova era (ou retorno de uma) das linguagens de programação?",
    summary:
      "Uma reflexão sobre o possível retorno das linguagens de baixo nível, a eficiência do código gerado por inteligência artificial e a importância da supervisão humana no desenvolvimento de software.",
    category: "Inteligência Artificial",
    type: "discussion",
    author: "João Alves Cordeiro",
    readingTime: "6 min",
    tags: [
      "Inteligência Artificial",
      "Linguagem C",
      "Assembly",
      "Engenharia de Software",
      "Otimização de Código"
    ],
    content: [
      "O avanço das ferramentas de inteligência artificial aplicadas à programação levanta uma questão interessante: e se o futuro do desenvolvimento de software não estiver apenas em linguagens cada vez mais abstratas, mas também em um retorno às linguagens de baixo nível, como C e Assembly? Essa possibilidade discutida no vídeo do canal Safe Source foi o ponto de partida para esta reflexão.",
      "Por que utilizar uma linguagem de baixo nível?",
      "A ideia de utilizar linguagens de baixo nível para melhorar o processamento, reduzir o consumo de recursos e otimizar o armazenamento é bastante interessante. A linguagem C, especialmente em sua abordagem clássica associada a Kernighan e Ritchie, oferece controle sobre os recursos da máquina e proximidade com o funcionamento do hardware. Assembly, por sua vez, permite um controle ainda mais específico, embora possa aumentar consideravelmente a complexidade do desenvolvimento e da manutenção.",
      "Entretanto, acredito que uma eventual retomada dessas linguagens não significaria simplesmente abandonar as tecnologias atuais. A escolha de uma linguagem depende de diversos fatores, como o domínio da aplicação, a produtividade da equipe, os requisitos de desempenho, a segurança e o custo de manutenção. O mais provável seria uma combinação de tecnologias, com linguagens de baixo nível utilizadas onde suas vantagens realmente justificassem a escolha.",
      "Outro ponto importante é a modernização dos sistemas legados. Um exemplo é o uso do COBOL em sistemas corporativos e bancários, nos quais aplicações antigas continuam desempenhando funções essenciais. A permanência dessas tecnologias não ocorre necessariamente porque sejam as melhores opções para qualquer novo projeto, mas porque acumulam regras de negócio, integrações e dependências que precisam continuar funcionando corretamente.",
      "A inteligência artificial pode contribuir para analisar código legado, documentar funcionalidades, identificar dependências e automatizar parte das migrações. Ainda assim, acelerar a produção de código não elimina o trabalho de validação, os testes de regressão e a necessidade de garantir que o novo sistema preserve as regras de negócio. Por isso, mesmo que a modernização se torne mais rápida, não considero inevitável uma migração generalizada no curto prazo.",
      "Apesar dessas possibilidades, existe uma questão que considero fundamental: a qualidade do código gerado por IA. Na minha experiência com essas ferramentas, percebo que nem sempre a primeira solução apresentada é a mais adequada. Em muitos casos, o código funciona, mas poderia ser mais simples, eficiente, seguro ou coerente com a arquitetura do projeto.",
      "Existe uma diferença entre produzir código que atende a um requisito imediato e desenvolver uma solução sustentável. Um programa pode entregar o resultado esperado e, ainda assim, apresentar consumo desnecessário de recursos, complexidade excessiva, tratamento inadequado de erros ou dificuldades para manutenção e evolução.",
      "A eficiência também não deve ser avaliada apenas pela velocidade de execução. Consumo de memória, escalabilidade, segurança, legibilidade e custo de manutenção precisam ser considerados de acordo com o contexto. Da mesma forma, migrar um programa para C ou Assembly não garante, por si só, que ele será mais eficiente: a qualidade da implementação, os algoritmos utilizados e as características da aplicação continuam sendo determinantes.",
      "Por isso, vejo a inteligência artificial como uma ferramenta capaz de ampliar a produtividade, mas cujos resultados precisam ser avaliados criticamente. O desenvolvedor continua responsável por compreender o problema, revisar as decisões técnicas, testar o comportamento e verificar se a solução realmente atende aos requisitos.",
      "Acredito que os modelos de IA ainda podem evoluir significativamente na geração de código, na compreensão de arquiteturas e na identificação de oportunidades de otimização. É possível imaginar ferramentas capazes de analisar diferentes implementações, comparar seu desempenho e selecionar alternativas mais adequadas para cada cenário.",
      "Mesmo assim, não considero seguro presumir que essa evolução eliminará a necessidade de supervisão humana. Quanto mais crítico for o sistema, maior será a importância de demonstrar que ele funciona corretamente, protege os dados, atende aos requisitos e se comporta de maneira previsível. Em aplicações financeiras, industriais, médicas ou de infraestrutura, um erro pode produzir consequências que vão muito além de uma falha de programação.",
      "Avanços em áreas como computação quântica e criptografia pós-quântica também reforçam a importância de acompanhar as mudanças tecnológicas com rigor. Embora esses campos apresentem desafios próprios e não determinem diretamente o futuro da geração de código, eles mostram que a evolução da computação exige conhecimento especializado, avaliação de riscos e atualização constante.",
      "Talvez, no futuro, a supervisão se torne menos manual e mais automatizada, com agentes capazes de executar testes, verificar propriedades do código, analisar vulnerabilidades e monitorar o comportamento de sistemas. Ainda assim, automatizar verificações não é o mesmo que eliminar a responsabilidade técnica. Será necessário definir critérios de aceitação, avaliar situações excepcionais e decidir quais riscos são aceitáveis.",
      "Para mim, o principal desafio não é escolher entre programar manualmente ou utilizar inteligência artificial, tampouco decidir antecipadamente qual linguagem dominará o futuro. O desafio está em compreender suficientemente os fundamentos da computação para avaliar as soluções produzidas por essas ferramentas.",
      "Conhecer algoritmos, estruturas de dados, arquitetura de computadores, gerenciamento de memória e funcionamento dos sistemas operacionais permite analisar o código para além de sua aparência ou de sua capacidade de executar uma tarefa simples. Esses conhecimentos também ajudam a identificar quando uma solução de alto nível é suficiente e quando vale a pena considerar uma implementação mais próxima do hardware.",
      "Vejo com interesse a possibilidade de a inteligência artificial contribuir para uma nova valorização das linguagens de baixo nível em cenários que exigem maior eficiência. No entanto, acredito que essa transformação será gradual e dependerá das necessidades de cada sistema, dos custos de migração e da capacidade de validar as soluções geradas. Também não acredito que a evolução da IA torne a supervisão técnica dispensável. O trabalho do desenvolvedor pode mudar, passando da escrita de cada trecho de código para uma atuação mais concentrada em arquitetura, validação, segurança e tomada de decisões, mas a responsabilidade pela qualidade do software continuará sendo essencial."
    ],
    keyPoints: [
      "A inteligência artificial pode favorecer o uso de linguagens de baixo nível em aplicações que exigem maior controle sobre processamento e memória.",
      "A modernização de sistemas legados envolve regras de negócio, integrações, testes e riscos, não apenas a conversão de código.",
      "Código funcional não é necessariamente código eficiente, seguro ou fácil de manter.",
      "A escolha entre linguagens de alto e baixo nível deve considerar os requisitos reais de cada aplicação.",
      "A evolução da IA pode automatizar parte da revisão e dos testes, mas não elimina a responsabilidade técnica.",
      "Conhecimentos fundamentais de computação continuam essenciais para avaliar criticamente o código gerado por IA."
    ],
    references: [
      {
        title: "Vídeo: Inteligência Artificial e Linguagens de Baixo Nível - Safe Source",
        url: "https://lnkd.in/d7Y8TuqU"
      }
      
    ],
  },
];
