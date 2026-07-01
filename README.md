# João Cordeiro - Portfólio Técnico Backend & APIs

Plataforma web responsiva e profissional para portfólio de um engenheiro backend especializado em APIs escaláveis, arquitetura de sistemas distribuídos e otimização de bancos de dados.

## 🎯 Visão Geral

Este projeto é um portfólio técnico moderno que apresenta:

- **Experiência Profissional:** Trajetória em desenvolvimento backend com foco em APIs e arquitetura de sistemas
- **Formação Acadêmica:** Educação formal e complementar
- **Portfólio de Projetos:** Detalhamento de projetos técnicos com problemas resolvidos, soluções e aprendizados
- **Stack Técnico:** Tecnologias dominadas em backend, bancos de dados e APIs
- **Formulário de Contato:** Sistema de contato com validação e feedback

## 🏗️ Arquitetura & Stack

### Frontend
- **React 19** - Framework UI
- **TypeScript** - Type safety
- **TailwindCSS 4** - Estilização utility-first
- **Vite** - Build tool e dev server
- **Wouter** - Roteamento client-side
- **shadcn/ui** - Componentes de UI reutilizáveis
- **Sonner** - Toast notifications

### Design
- **Filosofia:** Minimalismo Corporativo Elegante
- **Paleta:** Monocromática (branco/cinza) com azul técnico como acento
- **Tipografia:** Inter (Google Fonts)
- **Modo Dark/Light:** Totalmente suportado

## 📁 Estrutura de Pastas

```
client/
├── src/
│   ├── pages/              # Componentes de página
│   │   ├── Home.tsx
│   │   ├── Formacao.tsx
│   │   ├── Profissional.tsx
│   │   ├── Projetos.tsx
│   │   ├── ProjetoDetalhes.tsx
│   │   └── NotFound.tsx
│   ├── components/         # Componentes reutilizáveis
│   │   ├── ContactForm.tsx
│   │   └── ui/             # shadcn/ui components
│   ├── layouts/            # Layouts de página
│   │   └── MainLayout.tsx
│   ├── data/               # Dados do portfólio
│   │   └── content.ts
│   ├── contexts/           # React contexts
│   │   └── ThemeContext.tsx
│   ├── hooks/              # Custom hooks
│   ├── lib/                # Utilitários
│   ├── styles/             # CSS global
│   │   └── index.css
│   ├── App.tsx             # Componente raiz
│   └── main.tsx            # Ponto de entrada
├── index.html              # HTML template
└── public/                 # Assets estáticos
```

## 🚀 Como Executar

### Desenvolvimento
```bash
pnpm install
pnpm dev
```

O servidor estará disponível em `http://localhost:3000`

### Build
```bash
pnpm build
```

### Preview
```bash
pnpm preview
```

## 📄 Páginas

### Home (`/`)
- Apresentação profissional com hero section
- Filosofia de trabalho
- Projetos em destaque
- Stack técnico organizado por categoria
- Seção de contato com formulário

### Formação (`/formacao`)
- Educação acadêmica com detalhes
- Formações complementares e certificações
- Placeholder para artigos publicados (futura expansão)

### Profissional (`/profissional`)
- Trajetória profissional não-programação (accordion minimizado)
- Carreira em programação (foco principal)
- Foco de trabalho e filosofia
- Pontos fortes

### Projetos (`/projetos`)
- Listagem de todos os projetos em cards
- Separação entre concluídos e em desenvolvimento
- Links para repositório e demo

### Detalhes do Projeto (`/projetos/:id`)
- Título e descrição completa
- Problema resolvido
- Solução implementada
- Desafios técnicos
- Aprendizados
- Links para código e demo

### 404
- Página de erro com navegação clara

## 🎨 Design System

### Cores
- **Primária:** Azul Técnico `rgb(2, 125, 205)`
- **Fundo (Light):** Branco `#FFFFFF`
- **Fundo (Dark):** `#0F0F0F`
- **Texto (Light):** `#1A1A1A`
- **Texto (Dark):** `#E8E8E8`

### Tipografia
- **Headings:** Inter Bold (700)
- **Body:** Inter Regular (400)
- **Código:** Monaco/Fira Code (monospace)

### Componentes
- Cards com bordas finas e sombras suaves
- Botões com transições suaves
- Inputs com validação e feedback
- Badges para status e tags
- Accordions para conteúdo minimizado

## 🔧 Funcionalidades

### Formulário de Contato
- Validação de campos (nome, email, mensagem)
- Mensagens de erro claras
- Feedback de sucesso com toast
- Proteção contra XSS
- Acessibilidade (labels, aria-describedby)

### Modo Dark/Light
- Toggle no header
- Persistência de preferência
- Transições suaves
- Contraste adequado em ambos os modos

### Responsividade
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Navegação adaptativa
- Layouts fluidos

## ♿ Acessibilidade

- Contraste de cores adequado (WCAG AA)
- Navegação por teclado funcional
- Labels associadas aos inputs
- Aria attributes para feedback
- Semântica HTML correta
- Respeito a `prefers-reduced-motion`

## 📊 Performance

- Lazy loading de imagens
- Code splitting automático com Vite
- Otimização de bundle
- Pontuação Lighthouse target: 90+

## 🔐 Segurança

- Validação de formulários no cliente
- Proteção contra XSS
- Sem dados sensíveis expostos
- HTTPS recomendado para produção

## 📝 Dados do Portfólio

Todos os dados (educação, experiência, projetos, tecnologias) estão centralizados em `client/src/data/content.ts` para fácil manutenção e atualização.

### Estrutura de Dados

```typescript
// Educação
interface Education {
  id: string;
  startDate: string;
  endDate: string;
  name: string;
  focus: string;
  institution: string;
  city: string;
  description: string;
}

// Experiência Profissional
interface ProfessionalExperience {
  id: string;
  company: string;
  period: { start: string; end: string };
  role: string;
  description: string;
  isNonProgramming?: boolean;
}

// Projetos
interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  status: "completed" | "in-development";
  problemSolved: string;
  solution: string;
  technicalChallenges: string[];
  learnings: string[];
  repositoryUrl?: string;
  demoUrl?: string;
  isFeatured: boolean;
}

// Tecnologias
interface Technology {
  id: string;
  name: string;
  category: "backend" | "database" | "api" | "devops" | "tools";
  icon?: string;
}
```

## 🔄 Atualizando Conteúdo

Para atualizar qualquer informação do portfólio, edite o arquivo `client/src/data/content.ts`:

1. **Adicionar Projeto:**
   ```typescript
   export const projectsData: Project[] = [
     // ... existing projects
     {
       id: "proj-005",
       title: "Novo Projeto",
       // ... other fields
     }
   ];
   ```

2. **Atualizar Experiência:**
   ```typescript
   export const professionalExperienceData: ProfessionalExperience[] = [
     // ... existing experiences
     {
       id: "prof-004",
       company: "Nova Empresa",
       // ... other fields
     }
   ];
   ```

3. **Adicionar Tecnologia:**
   ```typescript
   export const technologiesData: Technology[] = [
     // ... existing technologies
     {
       id: "tech-018",
       name: "Nova Tech",
       category: "backend",
       icon: "🚀"
     }
   ];
   ```

## 🌐 Deploy

O projeto está pronto para deploy em qualquer plataforma que suporte Node.js/Vite:

- **Vercel:** Deploy automático com Git
- **Netlify:** Suporte nativo para Vite
- **GitHub Pages:** Com configuração apropriada
- **Manus:** Plataforma nativa de hospedagem

### Variáveis de Ambiente

Nenhuma variável de ambiente obrigatória para o frontend estático. Para integração com backend (futura):

```env
VITE_API_URL=https://api.example.com
VITE_CONTACT_ENDPOINT=https://api.example.com/contact
```

## 🔮 Futuras Expansões

- [ ] Blog/Artigos técnicos
- [ ] Sistema de comentários em projetos
- [ ] Backend para processar formulário de contato
- [ ] Analytics integrado
- [ ] Integração com GitHub API para projetos dinâmicos
- [ ] Certificações com badges
- [ ] Timeline interativa

## 📄 Licença

MIT - Sinta-se livre para usar este template para seu próprio portfólio.

## 👤 Autor

João A. Cordeiro - Backend Engineer | APIs & Database Architecture

- LinkedIn: [linkedin.com/in/joao-cordeiro](https://linkedin.com/in/joao-cordeiro)
- GitHub: [github.com/joao-cordeiro](https://github.com/joao-cordeiro)
- Email: joao@example.com

---

**Desenvolvido com ❤️ usando React, TypeScript e TailwindCSS**
