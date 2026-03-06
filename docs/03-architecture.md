# Edilene Estética Avançada - Arquitetura de Componentes

## 📂 Estrutura de Pastas e Arquivos

O projeto seguirá o padrão do Next.js App Router organizado por features lógicas.

```bash
/app
  layout.tsx         # Estrutura HTML global, importação de Fontes, Metadata SEO, Analytics
  page.tsx           # Página única (Landing Page) que unifica todas as Sections
  globals.css        # Variáveis CSS do Tailwind e Design System raiz

/components
  /layout
    navbar.tsx       # Navbar responsiva com background dinâmico no scroll
    footer.tsx       # Rodapé com links, logos e selo de credenciais

  /sections
    1-hero.tsx            # Vídeo bg, Headlines animadas, CTA dupla
    2-stats.tsx           # Números que Falam (stripped bg, Framer Motion contadores)
    3-about.tsx           # Storytelling, Split layout, Timeline visual
    4-services.tsx        # Tabs e Cards Flip 3D (Corporal, Facial, Capilar)
    5-transformations.tsx # Slider de Antes/Depois
    6-testimonials.tsx    # Carrossel horizontal infinito
    7-education.tsx       # Logos curriculares e cursos
    8-final-cta.tsx       # Banner gigantesco CTA WhatsApp

  /ui
    button.tsx            # Botões padronizados (shadcn adaptado)
    whatsapp-fab.tsx      # Floating Action Button persistente para WhatsApp
    flip-card.tsx         # Componente customizado para o Card 3D
    compare-slider.tsx    # Componente pro Before/After

/lib
  utils.ts           # clsx, tailwind-merge utilitários
  data.ts            # Mocks de dados (Array de serviços, depoimentos, fotos) para código limpo

/public
  /images            # Imagens da Edilene, Backgrounds texturizados, Antes/Depois
  /videos            # Vídeo do Hero em loop (mp4, webm) resolvido localmente 
  /logos             # Logos UnP, Pós, etc.
```

## 🔄 Fluxo de Dados (Data Flow)
Como é um site estático focado em conversão e sem sistema de admin complexo por trás (no primeiro momento), utilizaremos uma abordagem **Content as Code** no arquivo `lib/data.ts`:

- `services`: Lista de categorias, nome do serviço, descrição do verso, ícone.
- `testimonials`: Nome, nota (estrelas), procedimento, imagem default/avatar.
- `education`: Cursos e cronologia.

Isso permite edições rápidas no futuro sem necessidade de um CMS pesado gerando custo. Se a cliente desejar gerir depois, a arquitetura torna a migração para Sanity ou Strapi muito simples substituindo importações de `/lib/data.ts` por requisições `fetch`.

## ⚙️ Componentes de Interação Crítica

1. **Navbar transparente dinâmica:**
   - Hook customizado `useScroll` para determinar se a página rolou além de `50px`.
   - Se sim: `bg-white/80 backdrop-blur-md shadow-sm`, caso contrário: `bg-transparent`.

2. **Cards Flip 3D (Serviços):**
   - No CSS puro + Tailwind usando `preserve-3d`, `backface-visibility-hidden`, `rotate-y-180`.
   - State `isFlipped` interno ou controlado via hover state nativo (CSS hover).
   - No mobile, clique vira o card e exibe botão do WhatsApp.

3. **Botão Fixo WhatsApp (FAB):**
   - Renderizado em `layout.tsx` para estar disponível na aplicação inteira (mesmo se criar novas páginas depois).
   - Fica fixo no bottom-right, com z-index elevado (`z-50`). Pulsing animation sutil usando Tailwind `animate-pulse`.
