# Título do Projeto: Portifólio Técnico: João Cordeiro - Backend, API & DB

## 1. Visão Geral e Objetivo Principal

Desenvolver uma plataforma web responsiva e de alta performance para servir como portfólio profissional de um programador. A plataforma deve apresentar a experiência, formação e projetos do desenvolvedor, com foco em suas competências em backend, desenvolvimento de APIs e gerenciamento de bancos de dados. O objetivo é atrair oportunidades de emprego, colaborações e demonstrar proficiência técnica de forma organizada e acessível. Como minha àrea de desenvolvimento é mais voltada para backend, a interface deve ser mais simples trazendo foco para o conteúdo.

## 2. Público-Alvo

Recrutadores, gerentes de contratação, colegas desenvolvedores, potenciais clientes e colaboradores que buscam profissionais com expertise em desenvolvimento backend, APIs e bancos de dados. O público espera encontrar informações técnicas detalhadas, exemplos de código e uma apresentação profissional da trajetória do desenvolvedor.

## 3. Funcionalidades Principais

### 3.1. Navegação e Estrutura Geral

*   **Cabeçalho Fixo:** Contendo os links de navegação: Home, Formação, Profissional, Projetos, Contato.
*   **Rodapé:** Contendo o nome do desenvolvedor com símbolo de copyright (© [Ano] [João A. Cordeiro]) e, à direita, botões/ícones para contato (LinkedIn, GitHub, E-mail).

### 3.2. Página Home (/)

*   **Seção de Apresentação** 
*   Imagem do desenvolvedor (circular ou estilizada).
*   Texto de apresentação com informações pessoais estratégicas (ex: nome, cargo, especialidade).
*   Botão de Contato que redireciona para a seção de contato da página.
*   Pequena seção separada para contexto de filosofia/intenção do desenvolvedor (ex: paixão por tecnologia, resolução de problemas).
*   **Seção de Principais Projetos:**
*   Exibição de projetos favoritos em formato de cards.
*   Cada card deve conter título, breve descrição e uma imagem/ícone representativo.
*   Ao clicar no card, o usuário é direcionado para a página de detalhes do projeto correspondente (na seção Projetos).
*   **Seção de Tecnologias:**
*   Apresentação das tecnologias, linguagens e ferramentas dominadas pelo desenvolvedor, com foco em backend, APIs e bancos de dados (ex: Node.js, Prisma, SQL).
*   Pode ser em formato de ícones, logos ou uma lista estilizada.

### 3.3. Página Formação (/formacao)

*   **Seção de Formação Acadêmica:** 
*   Listagem de formações acadêmicas (graduação, pós-graduação, etc.).
*   Para cada formação: Data de Início e Data de Término, Nome da Formação, Ponto Focal (ex: Engenharia de Software, Ciência da Computação), Instituição e Cidade.
*   Breve texto descritivo sobre a experiência durante a graduação (ex: projetos de pesquisa, participação em grupos de estudo).
*   **Seção de Formações Complementares:** 
*   Listagem de cursos, eventos, palestras, certificações ou outras formações relevantes.
*   Para cada item: Nome do Curso/Evento, Instituição/Organizador, Data de Conclusão.
*   **Seção de Artigos Publicados (Futura Expansão):** 
*   Esta seção deve ser criada, mas inicialmente sem conteúdo, com uma nota indicando que será preenchida futuramente.

### 3.4. Página Profissional (/profissional)

*   **Seção de Trajetória Não-Programação (Minimizada):** 
*   Conteúdo inicial sobre a trajetória profissional não relacionada à programação, que deve ser minimizada por padrão (ex: um toggle ou accordion para expandir/recolher).
*   O foco principal deve ser na carreira de programação.
*   **Seção de Trajetória Principal (Programação):** 
*   Listagem de experiências profissionais relevantes como programador.
*   Para cada experiência: Local de Trabalho (Empresa), Período (Admissão - Saída), Função Executada.
*   Texto descritivo detalhado sobre as responsabilidades, projetos e conquistas em cada função, com ênfase em backend, APIs e bancos de dados.
*   **Seção de Foco e Filosofia:** 
*   Breve texto sobre o foco de trabalho do programador (ex: escalabilidade, performance, arquitetura de sistemas).
*   Filosofia de trabalho, atuações e pontos fortes (ex: resolução de problemas complexos, trabalho em equipe, aprendizado contínuo).

### 3.5. Página Projetos (/projetos)

*   **Exibição de Projetos em Cards:** 
*   Organização de todos os projetos em cards, com título, breve descrição, tecnologias principais e uma imagem/ícone.
*   Status do Projeto: Cada card deve exibir um status claro: Concluído ou Em Desenvolvimento.
*   Link para Detalhes: Ao clicar no card, o usuário é redirecionado para uma página específica (/projetos/[id_do_projeto]) que detalha o funcionamento e o desenvolvimento do projeto.
*   **Página de Detalhes do Projeto (/projetos/[id_do_projeto]):** 
*   Título do Projeto.
*   Descrição detalhada do problema resolvido, a solução implementada, tecnologias utilizadas (com foco em backend/API/BD), desafios técnicos e aprendizados.
*   Imagens, diagramas ou GIFs que ilustrem o funcionamento ou a arquitetura do projeto.
*   Links para o repositório do código (GitHub, GitLab) e, se aplicável, para uma demo online.

### 3.6. Página de erro (/projetos)
*   Como a plataforma terá navegação e um formulário, há necessidade de ter uma páginas de erro (ex: 404 Not Found) e feedback de erro para o formulário de contato.

## 4. Requisitos Técnicos (Opcional)

*   **Frontend Framework:** React (JavaScript).
*   **Estilização:** TailwindCSS.
*   **Gerenciamento de Estado:** Context API do React para aplicações mais complexas (se necessário).
*   **Roteamento:** React Router.
*   **Build Tool:** Vite.
*   **Hospedagem:** Vercel/GitHub Pages.
*   **Versionamento:** Git (GitHub).
*   **Responsividade:** O layout deve ser totalmente responsivo, garantindo uma excelente experiência em desktops, tablets e smartphones.
*   **Estrutura de Pastas Principal** 
src/
├── assets/             # Imagens, ícones, fontes e outros arquivos estáticos
├── components/         # Componentes React reutilizáveis (botões, cards, inputs, alerts, etc.)
├── config/             # Configurações globais (rotas, constantes, variáveis de ambiente)
├── hooks/              # Custom React Hooks
├── layouts/            # Layouts de página (ex: LayoutPadrão, LayoutAdmin)
├── pages/              # Componentes de página (mapeados para rotas)
├── services/           # Funções para interação com APIs externas ou serviços
├── styles/             # Arquivos CSS globais ou de configuração do Tailwind
├── utils/              # Funções utilitárias diversas (formatação, validação)
├── App.js              # Componente principal da aplicação
├── index.js            # Ponto de entrada da aplicação
└── reportWebVitals.js  # (Opcional) Métricas de performance

## 5. Design e Experiência do Usuário (UX/UI)

*   **Estilo:** Moderno, limpo e profissional, refletindo a seriedade e a competência técnica do desenvolvedor.
*   **Paleda de Cores:** Cores sóbrias e profissionais, com um toque de cor para elementos interativos ou de destaque. Sendo que as cores principais serão branco preto e tons de cinza a depender de ativo modo dark ou ligth da pagina, e a cor para os detalhes principais será azul rgb(2, 125, 205).
*   **Tipografia:** Fontes legíveis e modernas, que transmitam profissionalismo.
*   **Usabilidade:** Navegação intuitiva e fácil acesso a todas as informações. O foco deve ser na clareza e na apresentação eficaz do conteúdo.
*   **Acessibilidade:** Considerar boas práticas de acessibilidade (contraste de cores, navegação por teclado, tags alt para imagens).

## 6. Segurança

*   **HTTPS:** A plataforma deve ser servida via HTTPS para garantir a segurança da comunicação.
*   **Validação de Formulários:** Implementar validação robusta no formulário de contato para prevenir injeções e outros ataques comuns.
*   **Proteção contra XSS/CSRF:** Boas práticas de desenvolvimento para proteger contra Cross-Site Scripting (XSS) e Cross-Site Request Forgery (CSRF), embora para um portfólio estático a superfície de ataque seja menor.

## 7. Restrições e Considerações Adicionais

*   A primeira versão deve focar nas funcionalidades essenciais descritas, com a seção de Artigos Publicados na página Formação sendo um placeholder para futuras implementações.
*   Embora o foco seja um site estático, a estrutura deve permitir a fácil atualização do conteúdo (textos, imagens, projetos) sem a necessidade de recompilar o site a cada pequena alteração (ex: via arquivos Markdown ou um CMS headless simples).
*   O site deve ter um carregamento rápido e uma boa pontuação em ferramentas como Lighthouse.
*   Nomenclatura Consistente: Use convenções de nomenclatura claras e consistentes para arquivos e pastas
*   Documentação: Mantenha um README.md atualizado na raiz do projeto e, se necessário, em pastas específicas para explicar a finalidade e o uso de módulos complexos.