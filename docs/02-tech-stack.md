# Edilene Estética Avançada - Tech Stack & Deploy

## 💻 Frontend & Core Tecnology
- **Framework:** Next.js 15 (App Router)
  - Motivo: Melhor performance, SEO nativo (crucial para clínicas locais rankearem no Google), fácil gerenciamento de rotas e Server Components.
- **Linguagem:** TypeScript
  - Motivo: Tipagem estática reduz bugs, melhora o autocomplete no desenvolvimento (vibe coding), e escala melhor o projeto.
- **Biblioteca UI:** React 19
  - Motivo: Integração nativa com Next.js, hooks otimizados, concorrência aprimorada.

## 🎨 Estilização & UI
- **Estilização:** Tailwind CSS
  - Motivo: Construção ultrarrápida de interfaces usando utility-first classes. Facilita o mapeamento da paleta e tipografia definidas.
- **Componentes Base:** shadcn/ui
  - Motivo: Acessibilidade out-of-the-box, componentes limpos (sem pacote npm extra, código injetado no repositório), facilmente customizável com Tailwind.
- **Animações:** Framer Motion
  - Motivo: Necessário para os scroll reveals, contador animado de números, efeitos de flip 3D nos cards e transições suaves de navbar.
- **Ícones:** Lucide React
  - Motivo: Ícones consistentes, leves e modernos. Combina com a estética premium.

## 🌉 Recursos Nativos & Carrossel
- **Tipografia:** `next/font/google`
  - Pré-load de fontes nativo (Playfair Display e Inter) sem Cumulative Layout Shift (CLS).
- **Mídia:** `next/image` e tags `<video>` padrão
  - Otimização automática de imagens (WebP, responsividade).
- **Carrosséis & Sliders:** Embla Carousel (ou Swiper)
  - Motivo: Leve, suporta interações de toque mobile arrastáveis (drag) necessárias para os Depoimentos e Before/After slider.
  - O slider "Antes/Depois" pode usar bibliotecas específicas como `react-compare-slider` ou implementação customizada com Framer Motion.

## 🚀 Deploy & Infraestrutura
- **Hospedagem:** Vercel
  - Motivo: Plataforma criadora do Next.js. Deploy contínuo ativado (Push to main = Deploy). Zero configuração de infraestrutura (Serverless).
- **Domínio:** Customizado apontando para Vercel via DNS (ex: `edileneestetica.com.br`).
- **Análise & Métricas:** Vercel Analytics (para velocidade e visitas) ou Google Analytics integrado para monitorar tráfego vindo do Instagram.

## 📱 Mobile-First Approach
- Desenvolvido primeiramente para telas pequenas (smartphones). Tráfego de Instagram/WhatsApp é 90% mobile.
- Toque amigável: Áreas de clique mínimas de 48x48px, botões maiores (CTAs), carrossel suportando "swipe". Sem efeitos de *hover* puramente dependentes do mouse para funções críticas (ex: card de serviço abre a informação ao "tocar").
