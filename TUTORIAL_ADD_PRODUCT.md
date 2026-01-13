# 📝 Tutorial: Como Adicionar um Novo Produto

## 🎯 Objetivo
Adicionar um novo produto ao site em 10 minutos

---

## Passo 1: Pesquisar o Produto

### 1.1 Escolher Produto
- Marketplace: Amazon, Mercado Livre, etc.
- Verificar se está em oferta real
- Anotar informações:
  - ✍️ Nome completo
  - ✍️ Preço atual
  - ✍️ Preço antigo
  - ✍️ Link de afiliado
  - ✍️ Avaliações (opcional)

### 1.2 Verificar Histórico de Preço
- Usar: Zoom, Buscapé, ou Keepa
- Confirmar que preço antigo é verdadeiro
- Anotar maior e menor preço recente

---

## Passo 2: Criar Arquivo MDX

### 2.1 Nome do Arquivo

Formato: `nome-marca-modelo.mdx`

**Exemplos:**
```
✅ fone-bluetooth-qcy-t13.mdx
✅ mouse-gamer-logitech-g203.mdx
✅ teclado-mecanico-redragon-k552.mdx
✅ notebook-dell-inspiron-15.mdx

❌ produto1.mdx
❌ fone_bluetooth.mdx
❌ FONE-QCY.MDX
```

### 2.2 Local
```
content/produtos/[nome-do-arquivo].mdx
```

---

## Passo 3: Preencher Frontmatter

### Template Completo

```markdown
---
title: "[Nome do Produto] - [Benefício] em Oferta"
slug: "nome-marca-modelo"
currentPrice: 89.90
oldPrice: 149.90
affiliateLink: "https://seu-link-afiliado"
marketplace: "Amazon"
lastUpdated: "2026-01-13"
rating: 4.5
reviewCount: 1247
image: "/images/produto.jpg"
category: "categoria"
inStock: true
---
```

### Campos Obrigatórios

| Campo | Exemplo | Dicas |
|-------|---------|-------|
| **title** | "Fone Bluetooth QCY T13 com 40% OFF" | Inclua desconto % |
| **slug** | "fone-bluetooth-qcy-t13" | Minúsculas, hífens |
| **currentPrice** | 89.90 | Apenas número |
| **oldPrice** | 149.90 | Preço real anterior |
| **affiliateLink** | "https://amzn.to/xyz" | Seu link de afiliado |
| **marketplace** | "Amazon" | Nome do site |
| **lastUpdated** | "2026-01-13" | Data de hoje (YYYY-MM-DD) |

### Campos Opcionais

| Campo | Quando usar |
|-------|-------------|
| **rating** | Se o produto tem avaliações |
| **reviewCount** | Número de avaliações |
| **image** | Se tiver imagem (ver Passo 4) |
| **category** | Para organização (ex: "audio", "perifericos") |
| **inStock** | Padrão: true. Mudar para false se fora de estoque |

---

## Passo 4: Adicionar Imagem (Opcional)

### 4.1 Obter Imagem
- Baixar do marketplace
- Ou criar screenshot
- Ou deixar sem imagem

### 4.2 Otimizar
- Redimensionar: 800x800px
- Comprimir: < 200KB
- Ferramentas: TinyPNG.com, Squoosh.app

### 4.3 Salvar
```
public/images/nome-produto.jpg
```

### 4.4 Referenciar
```markdown
image: "/images/nome-produto.jpg"
```

---

## Passo 5: Escrever Conteúdo

### 5.1 Estrutura Básica

```markdown
# [Nome do Produto] com [X]% de Desconto

## Por que essa oferta é especial?

[Explicar contexto da oferta - 50-100 palavras]

## Para quem é esse produto?

✅ [Público-alvo 1]
✅ [Público-alvo 2]
✅ [Público-alvo 3]
✅ [Público-alvo 4]

## Comparação rápida

| Recurso | [Produto] | Concorrente |
|---------|-----------|-------------|
| [Spec 1] | [Valor] | [Valor] |
| [Spec 2] | [Valor] | [Valor] |
| [Spec 3] | [Valor] | [Valor] |
| Preço hoje | R$ [X] | R$ [Y] |

## O que dizem os compradores

⭐ **[Rating]/5** baseado em **[N] avaliações**

> "[Depoimento real]" - [Nome/Inicial]

> "[Outro depoimento]" - [Nome/Inicial]

## Especificações técnicas

- [Spec importante 1]
- [Spec importante 2]
- [Spec importante 3]
- [Spec importante 4]
- [Spec importante 5]

## Atualização de preço

✅ **Preço verificado em [DD/MM/YYYY]**  
📊 Menor preço dos últimos [30/60] dias  
⚠️ Estoque limitado - oferta válida enquanto durar

---

**Nota de transparência:** Este site participa do Programa de Associados. 
Ganhamos comissões por compras qualificadas através dos nossos links, 
sem custo adicional para você.
```

### 5.2 Dicas de Conteúdo

**✅ FAZER:**
- Mínimo 300 palavras
- Contexto real ("para quem treina", "para gamers")
- Comparação honesta
- Depoimentos reais (ou "baseado em avaliações")
- Especificações relevantes
- Data de atualização visível

**❌ NÃO FAZER:**
- Copiar descrição do marketplace
- Apenas listar specs
- Prometer o que não pode cumprir
- Conteúdo genérico
- Esquecer transparência de afiliado

### 5.3 Palavras-chave

Inclua naturalmente:
- Nome do produto (2-3 vezes)
- Marca (2-3 vezes)
- Categoria (1-2 vezes)
- "oferta", "desconto", "promoção" (1-2 vezes)

**Exemplo:**
> "O **Fone Bluetooth QCY T13** está com desconto de 40% hoje. 
> Este **fone da QCY** é ideal para quem busca **áudio de qualidade** 
> sem gastar muito."

---

## Passo 6: Verificar Checklist

### ✅ Checklist Rápida

- [ ] Arquivo em `content/produtos/nome.mdx`
- [ ] Frontmatter completo
- [ ] Slug único e descritivo
- [ ] Preços corretos (número, não texto)
- [ ] Link de afiliado funcionando
- [ ] Data de hoje em `lastUpdated`
- [ ] Conteúdo > 300 palavras
- [ ] Seção "Para quem é"
- [ ] Comparação ou specs
- [ ] Aviso de afiliado no final
- [ ] Sem erros de português

---

## Passo 7: Build e Teste

### 7.1 Build Local

```powershell
npm run build
```

**Esperado:**
```
✓ Generating static pages
✓ Collecting page data
✓ Finalizing page optimization

Page                                Size     First Load JS
...
○ /produto/seu-produto              X kB            Y kB
```

### 7.2 Testar Local

```powershell
npm run dev
```

**Acessar:**
```
http://localhost:3000/produto/seu-slug
```

### 7.3 Verificar

- [ ] Página carrega sem erro
- [ ] Título aparece correto
- [ ] Preço e desconto corretos
- [ ] Botão CTA funciona
- [ ] Conteúdo renderiza bem
- [ ] Imagem aparece (se tiver)
- [ ] Mobile responsivo

---

## Passo 8: Commit e Deploy

### 8.1 Git Commit

```powershell
git add content/produtos/seu-produto.mdx
git add public/images/seu-produto.jpg  # se tiver imagem
git commit -m "feat: adiciona produto X com Y% de desconto"
git push
```

### 8.2 Deploy Automático

Se conectado à Vercel/Netlify:
- Push → Deploy automático
- Aguardar 2-3 minutos
- Verificar em produção

### 8.3 Verificar Online

```
https://seudominio.com.br/produto/seu-slug
```

---

## Passo 9: SEO Pós-Publicação

### 9.1 Verificar Sitemap

```
https://seudominio.com.br/sitemap.xml
```
Deve incluir nova URL

### 9.2 Solicitar Indexação (Opcional)

1. Google Search Console
2. Inspeção de URL
3. Colar URL do produto
4. "Solicitar indexação"

### 9.3 Compartilhar

- Redes sociais
- WhatsApp
- Email list (se tiver)

---

## Passo 10: Monitorar

### 10.1 Primeiras 24h

- [ ] Google Analytics: pageviews
- [ ] Cliques no link de afiliado
- [ ] Tempo médio na página
- [ ] Taxa de rejeição

### 10.2 Primeira Semana

- [ ] Impressões no Google
- [ ] Cliques orgânicos
- [ ] Posição média
- [ ] Conversões de afiliado

### 10.3 Ajustes

Se baixo desempenho:
- Melhorar título (mais atrativo)
- Expandir conteúdo
- Adicionar mais palavras-chave
- Atualizar meta description

---

## 📋 Exemplo Completo

### Arquivo: `content/produtos/webcam-logitech-c920.mdx`

```markdown
---
title: "Webcam Logitech C920 Full HD com 35% de Desconto"
slug: "webcam-logitech-c920"
currentPrice: 329.90
oldPrice: 509.90
affiliateLink: "https://amzn.to/exemplo-c920"
marketplace: "Amazon"
lastUpdated: "2026-01-13"
rating: 4.6
reviewCount: 8543
image: "/images/logitech-c920.jpg"
category: "perifericos"
inStock: true
---

# Webcam Logitech C920 Full HD com 35% OFF

## Por que essa oferta é especial?

A **Webcam Logitech C920** é referência em qualidade de imagem para 
videoconferências e streaming. Com **35% de desconto**, é a melhor 
oportunidade do mês para quem trabalha home office ou cria conteúdo.

## Para quem é esse produto?

✅ Profissionais em home office  
✅ Criadores de conteúdo e streamers  
✅ Professores que dão aulas online  
✅ Quem faz muitas videochamadas  

## Comparação rápida

| Recurso | C920 | Webcam Genérica |
|---------|------|-----------------|
| Resolução | 1080p Full HD | 720p |
| FPS | 30fps | 24fps |
| Microfone | Estéreo | Mono |
| Compatibilidade | Universal | Limitada |
| Preço hoje | R$ 329,90 | R$ 250 |

## O que dizem os compradores

⭐ **4.6/5** - **8.543 avaliações**

> "Qualidade de imagem excepcional. Melhor investimento 
> para home office!" - Roberto M.

> "Uso para streaming no YouTube. Câmera profissional 
> por preço acessível." - Júlia S.

## Especificações técnicas

- Resolução Full HD 1080p a 30fps
- Microfone estéreo com redução de ruído
- Lente de vidro Full HD premium
- Foco automático rápido e preciso
- Compatível com Windows, Mac, ChromeOS
- USB plug-and-play
- Suporte para tripé e monitor

## Atualização de preço

✅ **Preço verificado em 13/01/2026**  
📊 **Menor preço dos últimos 90 dias**  
🔥 Estoque limitado - compre enquanto disponível

---

**Nota de transparência:** Este site participa do Programa de 
Associados da Amazon. Ganhamos comissões por compras qualificadas 
através dos nossos links, sem custo adicional para você.
```

---

## ✅ Pronto!

Você adicionou um novo produto otimizado para:
- 🔍 SEO e ranking Google
- 💰 Conversão de afiliados
- 📱 Experiência mobile
- ⚡ Performance

**Próximo produto? Repita o processo! 🚀**

---

## 🎯 Metas de Publicação

### Iniciante (Mês 1)
- 10-20 produtos
- 1-2 produtos por dia
- Aprender o processo

### Intermediário (Mês 2-3)
- 50-100 produtos
- 2-3 produtos por dia
- Otimizar títulos e conteúdo

### Avançado (Mês 4+)
- 200+ produtos
- 3-5 produtos por dia
- Focar em produtos de alta conversão
- Atualizar produtos antigos

---

**Continue adicionando produtos e acompanhe as métricas! 📊💰**
