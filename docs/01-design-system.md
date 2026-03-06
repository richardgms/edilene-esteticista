# Edilene Estética Avançada - Design System

## 🎨 Identidade Visual (Visual Identity)

### Cores (Palette)
- **Primary (Branco):** `#FFFFFF` - Fundo principal, leveza
- **Secondary (Nude):** `#F2E8DF` - Fundo de seções contrastantes (ex: Depoimentos), calor humano
- **Accent Light (Rosa suave):** `#E8B4B8` - Detalhes, hover states, badges
- **Accent Dark / CTA (Rosa escuro):** `#C4737A` - Botões principais, links de ação, destaque
- **Text (Cinza escuro):** `#2C2C2C` - Texto principal, alta legibilidade
- **Text Light:** `#666666` - Texto secundário, descrições

### Tipografia (Typography)
- **Headings (Títulos):** Playfair Display (Serif)
  - Transmite elegância, sofisticação e autoridade clínica.
  - Pesos: Medium (500), SemiBold (600), Bold (700).
- **Body (Corpo do texto):** Inter (Sans-serif)
  - Clean, moderno e altamente legível em telas pequenas.
  - Pesos: Light (300), Regular (400), Medium (500).

### Feeling & Estética
- **Sensação:** Spa premium, autoridade clínica, calor humano.
- **Formas:** Bordas levemente arredondadas (`rounded-2xl` no Tailwind) para transmitir suavidade e cuidado.
- **Sombras:** Sombras muito suaves (`shadow-sm` e `shadow-md` customizadas com cor nude/rosa) para profundidade sem peso.
- **Texturas/Padrões:** Elementos florais sutis ou partículas flutuantes nos fundos.

## 🧱 Componentes Core (UI Guide)

### Botões (Buttons)
- **Primary (CTA):** Fundo `#C4737A`, texto branco, cantos arredondados, leve scale no hover com sombra pulsante.
- **Secondary:** Fundo transparente, borda `#C4737A`, texto `#C4737A`. No hover, preenche com `#E8B4B8` bem claro.

### Cards
- **Serviços:** Efeito Flip 3D (Hover no Desktop, Tap no Mobile). Frente clean, verso informativo com CTA.
- **Depoimentos:** Fundo branco sobre container `#F2E8DF`, shadow suave, aspas estilizadas.

### Navegação (Navbar)
- Inicialmente transparente (Hero).
- No scroll, background branco sólido com glassmorphism muito leve (`backdrop-blur-md`), sombra sutil.

### Espaçamento (Spacing)
- Uso de `py-20` ou `py-24` para separar seções (aprox 80px a 96px).
- Muito "whitespace" (espaço em branco) para respirar e reforçar o tom premium.
