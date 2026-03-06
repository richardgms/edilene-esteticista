# Edilene Estética

Um portal oficial, moderno e responsivo para serviços de Estética e Saúde. Desenvolvido para apresentar serviços clínicos, transformações, depoimentos de clientes e um fluxo direto para agendamento via WhatsApp.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as melhores e mais modernas tecnologias do ecossistema front-end:

*   **[Next.js 15+ (App Router)](https://nextjs.org/)**: Framework React para renderização híbrida, rotas rápidas e SEO otimizado.
*   **[React 19](https://react.dev/)**: Biblioteca JavaScript para construção de interfaces dinâmicas.
*   **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utilitário para estilização rápida e responsiva.
*   **[Framer Motion](https://www.framer.com/motion/)**: Biblioteca para animações fluidas e micro-interações que encantam o usuário.
*   **[Lucide React](https://lucide.dev/)**: Ícones elegantes e consistentes.
*   **TypeScript**: Tipagem estática para maior segurança e previsibilidade no código.

## 🛠️ Como rodar o projeto localmente

Siga os passos abaixo para executar a aplicação em seu ambiente de desenvolvimento local:

**1. Clone o repositório:**
```bash
git clone https://github.com/richardgms/edilene-esteticista.git
cd edilene-esteticista
```

**2. Instale as dependências:**
```bash
npm install
```

**3. Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```

**4. Acesse a aplicação:**
Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 📂 Estrutura de Diretórios Principal

A arquitetura do projeto segue o padrão modularizado do App Router:

```text
📦 edilene-esteticista
 ┣ 📂 public             # Assets estáticos (imagens, certificados, ícones)
 ┣ 📂 src
 ┃ ┣ 📂 app              # Rotas, Layouts e Páginas do Next.js (App Router)
 ┃ ┣ 📂 components       # Componentes React
 ┃ ┃ ┣ 📂 layout         # Componentes estruturais (Navbar, Footer)
 ┃ ┃ ┣ 📂 sections       # Seções principais da Landing Page
 ┃ ┃ ┗ 📂 ui             # Componentes de interface genéricos (Botões, Cards)
 ┃ ┣ 📂 hooks            # React Hooks customizados
 ┃ ┗ 📂 lib              # Utilitários globais e Mock de Dados (clinicData)
 ┣ 📜 next.config.ts     # Configurações do compilador do Next.js
 ┣ 📜 tailwind.config.ts # Configuração dos temas, cores e utilitários do Tailwind
 ┗ 📜 tsconfig.json      # Configuração do TypeScript e Path Aliases (@/*)
```

## ☁️ Deploy

A forma mais recomendada de colocar essa aplicação em produção é através da [Vercel](https://vercel.com/), criadora do Next.js, que oferece configuração Zero-Config.

1. Faça login na Vercel e adicione um 'New Project'.
2. Importe o repositório `richardgms/edilene-esteticista` do seu GitHub.
3. Clique em **Deploy**! A Vercel detectará automaticamente que é um projeto Next.js e fará todo o processo de build.

---
Feito com 🩵.
