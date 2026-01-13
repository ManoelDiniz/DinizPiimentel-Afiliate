# 🚀 Site de Ofertas e Promoções - Next.js

Site de afiliados otimizado para SEO, performance e conversão. Construído com Next.js 14, App Router e Static Site Generation (SSG).

## 📚 Documentação Completa

- 🎯 **[INDEX.md](INDEX.md)** - Navegue pela documentação
- 🚀 **[START_HERE.md](START_HERE.md)** - Comece aqui! (5 passos)
- ⚙️ **[GETTING_STARTED.md](GETTING_STARTED.md)** - Guia detalhado
- 🗺️ **[PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)** - Estrutura visual
- 📝 **[TUTORIAL_ADD_PRODUCT.md](TUTORIAL_ADD_PRODUCT.md)** - Adicionar produtos
- 📋 **[EDITORIAL_CHECKLIST.md](EDITORIAL_CHECKLIST.md)** - Processo editorial
- 🔍 **[SEO_GUIDE.md](SEO_GUIDE.md)** - Otimização para Google
- 🚀 **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deploy (Vercel/Netlify)
- 🔧 **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)** - Problemas e soluções

## ✨ Características

- ✅ **Next.js 14** com App Router
- ✅ **SSG (Static Site Generation)** para todas as páginas
- ✅ **Conteúdo em MDX** (Markdown + JSX)
- ✅ **SEO otimizado** (metadata, Schema.org, Open Graph)
- ✅ **Performance** (Lighthouse 90+)
- ✅ **Analytics** integrado (Google Analytics)
- ✅ **Design responsivo** (Mobile-first)
- ✅ **Sitemap.xml** automático
- ✅ **Robots.txt** configurado

## 📁 Estrutura do Projeto

```
.
├── app/
│   ├── layout.tsx              # Layout principal
│   ├── page.tsx                # Homepage com lista de produtos
│   ├── produto/[slug]/
│   │   └── page.tsx            # Página de produto dinâmica
│   ├── sobre/page.tsx          # Página Sobre
│   ├── como-ganhamos/page.tsx  # Transparência sobre afiliados
│   ├── privacidade/page.tsx    # Política de Privacidade
│   ├── contato/page.tsx        # Página de Contato
│   ├── sitemap.ts              # Geração automática do sitemap
│   ├── robots.ts               # Configuração do robots.txt
│   └── globals.css             # Estilos globais
├── components/
│   ├── ProductPage.tsx         # Componente da página de produto
│   ├── ProductCard.tsx         # Card de produto para listagem
│   └── Analytics.tsx           # Componente de analytics
├── content/
│   └── produtos/               # Arquivos MDX dos produtos
│       ├── fone-bluetooth-qcy-t13.mdx
│       └── mouse-gamer-logitech-g203.mdx
├── lib/
│   └── products.ts             # Funções para ler produtos MDX
├── types/
│   └── product.ts              # TypeScript types
├── public/
│   └── images/                 # Imagens dos produtos
├── EDITORIAL_CHECKLIST.md      # Checklist de publicação
├── next.config.mjs             # Configuração do Next.js
├── package.json
└── tsconfig.json
```

## 🚀 Como Começar

### 1. Instalar Dependências

```bash
npm install
```

### 2. Configurar Variáveis

Edite os seguintes arquivos com suas informações:

- `app/layout.tsx` - Alterar `metadataBase` para seu domínio
- `app/sitemap.ts` - Alterar `baseUrl` para seu domínio
- `app/robots.ts` - Alterar `sitemap` para seu domínio
- `components/Analytics.tsx` - Adicionar seu ID do Google Analytics

### 3. Desenvolvimento

```bash
npm run dev
```

Acesse http://localhost:3000

### 4. Build para Produção

```bash
npm run build
```

Isso gera uma versão estática em `/out`

### 5. Deploy

#### Vercel (Recomendado)

1. Crie conta na [Vercel](https://vercel.com)
2. Conecte seu repositório Git
3. Deploy automático!

#### Netlify

1. Crie conta na [Netlify](https://netlify.com)
2. Conecte seu repositório
3. Configure:
   - Build command: `npm run build`
   - Publish directory: `out`

## 📝 Como Adicionar Produtos

### 1. Criar arquivo MDX

Crie um arquivo em `content/produtos/nome-do-produto.mdx`:

```markdown
---
title: "Nome do Produto com Desconto"
slug: "nome-produto-marca"
currentPrice: 89.90
oldPrice: 149.90
affiliateLink: "https://amzn.to/seu-link"
marketplace: "Amazon"
lastUpdated: "2026-01-13"
rating: 4.5
reviewCount: 1247
image: "/images/produto.jpg"
category: "categoria"
inStock: true
---

# Título Principal

## Por que essa oferta é especial?

Explique o valor da oferta...

## Para quem é esse produto?

✅ Público-alvo 1
✅ Público-alvo 2

[... resto do conteúdo ...]
```

### 2. Build

```bash
npm run build
```

O Next.js irá automaticamente:
- Gerar a página estática
- Adicionar ao sitemap
- Configurar SEO

## 🎨 Personalização

### Cores

Edite `app/globals.css`:

```css
:root {
  --primary: #ff4757;      /* Cor principal */
  --secondary: #2ed573;    /* Cor secundária */
  --dark: #1e272e;         /* Cor escura */
}
```

### Fontes

O projeto usa fontes do sistema para performance máxima. Para usar Google Fonts:

```tsx
// app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
```

## 📊 Analytics e Tracking

### Google Analytics

1. Obter ID do GA4 em https://analytics.google.com
2. Editar `components/Analytics.tsx`
3. Substituir `G-XXXXXXXXXX` pelo seu ID

### Eventos Rastreados

- ✅ Clique em link de afiliado
- ✅ Scroll na página (> 500px)
- ✅ Visualizações de página
- ✅ Tempo na página

## 🔍 SEO

### Implementado

- ✅ Metadata única por página
- ✅ Open Graph (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Schema.org (Product, Offer)
- ✅ Sitemap.xml automático
- ✅ Robots.txt configurado
- ✅ URLs limpas e semânticas

### Verificar depois do deploy

1. [Google Search Console](https://search.google.com/search-console)
2. [Bing Webmaster Tools](https://www.bing.com/webmasters)
3. Submeter sitemap: `https://seudominio.com.br/sitemap.xml`

## ⚡ Performance

### Otimizações Implementadas

- ✅ SSG (HTML estático)
- ✅ CSS mínimo
- ✅ JS mínimo
- ✅ Fontes do sistema
- ✅ Lazy loading de imagens
- ✅ Sem dependências pesadas

### Meta Lighthouse

- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: 100

## 📋 Manutenção

Consulte `EDITORIAL_CHECKLIST.md` para:

- ✅ Checklist de publicação
- ✅ Processo de atualização de preços
- ✅ Manutenção periódica
- ✅ Métricas para acompanhar
- ✅ Boas práticas

## 🔧 Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Verificar erros de lint
npm run lint

# Testar build localmente
npm run start
```

## 📦 Dependências Principais

- **next**: Framework React
- **react**: Biblioteca UI
- **@next/mdx**: Suporte para MDX
- **gray-matter**: Parse de frontmatter
- **sharp**: Otimização de imagens
- **typescript**: Type safety

## 🤝 Contribuindo

1. Adicione novos produtos em `content/produtos/`
2. Siga o `EDITORIAL_CHECKLIST.md`
3. Faça build e teste localmente
4. Commit com mensagens claras

## 📄 Licença

Este projeto é privado. Todos os direitos reservados.

## 🆘 Suporte

- Documentação Next.js: https://nextjs.org/docs
- MDX: https://mdxjs.com
- Schema.org: https://schema.org

---

Feito com ❤️ e Next.js
# DinizPiimentel-Afiliate
