# Contexto do projeto — Portfolio

Landing page de portfolio (dev & QA) construída com Next.js 16 (App Router,
Turbopack) + TypeScript + Tailwind CSS v4.

## Stack e decisões

- **i18n**: `next-intl` v4, rotas com prefixo de locale (`/pt`, `/en`).
  Config em `src/i18n/routing.ts`, `src/i18n/request.ts`,
  `src/i18n/navigation.ts`, `src/middleware.ts`. Locale padrão: `pt`.
- **Tema**: dark único, sem light mode e sem toggle (decisão explícita —
  ver seção "Escolhas do usuário" abaixo). Tokens de cor em
  `src/app/globals.css` (`--background`, `--accent`, `--accent-2`, etc.).
  `next-themes` está instalado mas **não é usado** — não adicionar toggle
  sem pedir de novo.
- **Animações**: `framer-motion`, só para scroll-reveal
  (`src/components/motion/reveal.tsx`).
- **Ícones**: `lucide-react`, exceto GitHub/LinkedIn — essa versão da lib
  removeu os logos de marca, então existem SVGs próprios em
  `src/components/icons.tsx`.
- **Sem shadcn/ui** — componentes feitos à mão em Tailwind.

## Estrutura das seções (`src/components/sections/`)

Hero → About → Skills → Projects → Education → Contact, montadas em
`src/app/[locale]/page.tsx`, com `Navbar` e `Footer` em
`src/components/`.

## Onde editar conteúdo

- `messages/pt.json` e `messages/en.json` — todos os textos (hero, sobre,
  skills por categoria, projetos, formação/certificações, contato).
- `src/config/site.ts` — nome, e-mail, links de GitHub/LinkedIn, caminho
  do CV (não é traduzido).
- Screenshots de projeto: colocar em `public/` e referenciar no array
  `images` de cada item em `projects.items` (nos dois JSONs). Sem imagem,
  o card mostra um placeholder com ícone `</>`; com mais de uma imagem
  vira carrossel (`src/components/project-card.tsx`).

## Escolhas do usuário (não mudar sem confirmar de novo)

- Estilo visual: **dark mode moderno**, não o tema claro nem o toggle.
- Conteúdo: **só estrutura por enquanto** — tudo placeholder, textos reais
  entram depois.
- Idioma: **PT/EN com toggle** (não só um idioma).

## Estado atual / pendências

- Estrutura e visual prontos, validados com `tsc --noEmit`, `eslint` e
  screenshots via Playwright (PT e EN, sem erros de console).
- Conteúdo real (bio, projetos, skills, cursos/certificações, links
  sociais, CV em PDF) ainda precisa ser preenchido pelo usuário.
- Repositório git local sem remote configurado — nada foi enviado ao
  GitHub ainda (ver conversa sobre isso).
