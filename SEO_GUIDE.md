# 🔍 Guia de SEO - Melhores Práticas

## 📌 Checklist SEO por Página

### ✅ Metadata Essencial

Cada página de produto DEVE ter:

```typescript
title: "Produto X com Y% de Desconto | Ofertas"
description: "Produto X por R$ Z. De R$ W por R$ Z (Y% OFF). Aproveite!"
```

**Regras:**
- Title: 50-60 caracteres
- Description: 150-160 caracteres
- Incluir desconto % no título
- Incluir CTA na description
- Cada página = título único

### ✅ Estrutura de Headings

```markdown
# H1 único - Nome do Produto com Desconto
## H2 - Por que essa oferta é especial?
## H2 - Para quem é esse produto?
## H2 - Comparação rápida
### H3 - Especificações técnicas
```

**Regras:**
- 1 único H1 por página
- H2-H6 em ordem lógica
- Não pular níveis (H2 → H4 ❌)
- Palavras-chave naturais nos headings

### ✅ Schema.org (Structured Data)

Já implementado automaticamente:

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Nome do Produto",
  "offers": {
    "@type": "Offer",
    "price": 89.90,
    "priceCurrency": "BRL",
    "availability": "InStock"
  },
  "aggregateRating": {
    "ratingValue": 4.5,
    "reviewCount": 1247
  }
}
```

**Validar em:**
- https://search.google.com/test/rich-results
- https://validator.schema.org

## 🎯 Palavras-chave

### Como Escolher

1. **Intenção de Compra:**
   - ✅ "fone bluetooth barato"
   - ✅ "mouse gamer oferta"
   - ✅ "teclado mecânico promoção"
   - ❌ "o que é bluetooth" (informacional)

2. **Long-tail:**
   - ✅ "fone bluetooth qcy t13 oferta"
   - ✅ "mouse logitech g203 preço"
   - ❌ "mouse" (muito genérico)

3. **Localização:**
   - ✅ "notebook dell brasil"
   - ✅ "fone jbl mercado livre"

### Densidade

- **Palavra-chave principal:** 1-2% do texto
- **Variações:** distribuir naturalmente
- ❌ Não fazer keyword stuffing

### Onde Usar

```markdown
✅ URL: /produto/fone-bluetooth-qcy-t13
✅ Title: Fone Bluetooth QCY T13 com 40% OFF
✅ H1: Fone Bluetooth QCY T13 com Desconto
✅ H2: Por que o QCY T13 está em oferta?
✅ Primeiro parágrafo: "O QCY T13 é um fone..."
✅ Meta description
✅ Alt text de imagem: "Fone Bluetooth QCY T13"
```

## 🔗 Links Internos

### Estratégia

```markdown
Recomendamos também:
- [Fone Bluetooth XYZ](/produto/fone-xyz)
- [Melhores ofertas em áudio](/categoria/audio)
```

**Benefícios:**
- Aumenta tempo no site
- Distribui autoridade (PageRank)
- Melhora indexação
- Reduz bounce rate

### Anchor Text

✅ **Bom:**
- "Veja também o [Fone JBL Tune 510BT em oferta](/produto/jbl-tune-510bt)"

❌ **Ruim:**
- "Clique [aqui](/produto/jbl-tune-510bt)"

## 📸 Imagens e Alt Text

### Alt Text Otimizado

```html
<!-- ✅ Bom -->
<img src="/images/qcy-t13.jpg" alt="Fone Bluetooth QCY T13 preto com case de carregamento">

<!-- ❌ Ruim -->
<img src="/images/img001.jpg" alt="imagem">
```

**Regras:**
- Descrever o que se vê
- Incluir palavra-chave principal
- 125 caracteres ou menos
- Não começar com "imagem de..."

### Nome do Arquivo

```
✅ fone-bluetooth-qcy-t13.jpg
❌ IMG_20260113_143022.jpg
```

## 📄 URLs Amigáveis

### Estrutura

```
✅ /produto/fone-bluetooth-qcy-t13
✅ /produto/mouse-gamer-logitech-g203
✅ /categoria/audio

❌ /p?id=12345
❌ /produto/fone_bluetooth_qcy_t13
❌ /produtos/audio/fones/bluetooth/qcy/t13 (muito longo)
```

**Regras:**
- Minúsculas
- Hífens (não underscores)
- Curta e descritiva
- Palavra-chave principal
- Sem parâmetros desnecessários

## 📊 Conteúdo de Qualidade

### Mínimos Recomendados

- **Produto simples:** 300-500 palavras
- **Produto complexo:** 500-1000 palavras
- **Comparação:** 800-1500 palavras

### Estrutura Anti "Thin Affiliate"

Cada página DEVE incluir:

1. **Contexto** (50-100 palavras)
   - Para quem é o produto?
   - Qual problema resolve?

2. **Por que está em oferta?** (50 palavras)
   - Contexto da promoção
   - Quanto tempo válido

3. **Comparação** (100-150 palavras)
   - vs concorrentes
   - Tabela comparativa

4. **Social Proof** (50 palavras)
   - Avaliações
   - Depoimentos

5. **Especificações** (100 palavras)
   - Lista organizada
   - Dados técnicos relevantes

6. **Atualização explícita**
   - Data da última verificação
   - Status do preço

### O que NÃO fazer

❌ Copiar descrição do marketplace
❌ Apenas listar specs
❌ Conteúdo genérico
❌ Múltiplos produtos na mesma página
❌ Sem data de atualização

## 🚀 Velocidade

### Targets

- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

### Otimizações Implementadas

✅ SSG (HTML estático)
✅ CSS inline crítico
✅ Lazy loading de imagens
✅ Fontes do sistema
✅ Sem JavaScript desnecessário

### Testar

```bash
# Lighthouse no Chrome DevTools
F12 → Lighthouse → Gerar Relatório

# Ou online:
https://pagespeed.web.dev
```

## 📱 Mobile-First

### Já Implementado

✅ Design responsivo
✅ Fonte legível (16px+)
✅ Botões grandes (touch-friendly)
✅ Sem pop-ups intrusivos
✅ CTA visível sem scroll

### Testar

- https://search.google.com/test/mobile-friendly
- Chrome DevTools → Device Mode

## 🗺️ Sitemap e Robots

### Sitemap.xml

Gerado automaticamente em:
```
https://seudominio.com.br/sitemap.xml
```

Inclui:
- Homepage (priority: 1.0)
- Todas as páginas de produtos (priority: 0.8)
- Páginas institucionais (priority: 0.5)

**Submeter em:**
- Google Search Console
- Bing Webmaster Tools

### Robots.txt

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

Sitemap: https://seudominio.com.br/sitemap.xml
```

## 🔍 Google Search Console

### Setup Inicial

1. Verificar propriedade do domínio
2. Submeter sitemap
3. Solicitar indexação das páginas principais
4. Monitorar:
   - Impressões
   - Cliques
   - CTR
   - Posição média

### Métricas Importantes

- **CTR (Click-Through Rate):** > 2%
- **Posição média:** < 20 (primeira página)
- **Páginas indexadas:** 100% das publicadas
- **Erros de rastreamento:** 0

## 📈 Estratégia de Crescimento

### Fase 1: Fundação (Mês 1)

- [ ] 20-30 produtos publicados
- [ ] Sitemap submetido
- [ ] Search Console configurado
- [ ] Analytics funcionando

### Fase 2: Expansão (Mês 2-3)

- [ ] 50-100 produtos
- [ ] Links internos entre produtos
- [ ] Categorias organizadas
- [ ] Começar backlinks (redes sociais)

### Fase 3: Otimização (Mês 4+)

- [ ] Analisar páginas com melhor performance
- [ ] Duplicar estratégia vencedora
- [ ] Atualizar produtos antigos
- [ ] Remover produtos sem tráfego

## 🎯 KPIs SEO

### Mensurar Mensalmente

| Métrica | Meta | Onde Ver |
|---------|------|----------|
| Impressões | +20%/mês | Search Console |
| Cliques orgânicos | +15%/mês | Search Console |
| CTR médio | > 2% | Search Console |
| Posição média | < 20 | Search Console |
| Páginas indexadas | 100% | Search Console |
| Tráfego orgânico | +20%/mês | Google Analytics |
| Conversão afiliado | > 5% | Google Analytics |

## ⚠️ Penalizações a Evitar

### Google NÃO gosta de:

❌ **Thin Content**
- Solução: > 300 palavras por página

❌ **Duplicate Content**
- Solução: Conteúdo original, não copiar marketplaces

❌ **Keyword Stuffing**
- Solução: Densidade natural (1-2%)

❌ **Links Quebrados**
- Solução: Verificar semanalmente

❌ **Conteúdo Desatualizado**
- Solução: Atualizar preços regularmente

❌ **Mobile Unfriendly**
- Solução: Já implementado (design responsivo)

## 🔗 Recursos Úteis

### Ferramentas Gratuitas

- **Google Search Console:** https://search.google.com/search-console
- **Google Analytics:** https://analytics.google.com
- **PageSpeed Insights:** https://pagespeed.web.dev
- **Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly
- **Rich Results Test:** https://search.google.com/test/rich-results
- **Schema Validator:** https://validator.schema.org

### Aprender Mais

- Google Search Essentials: https://developers.google.com/search/docs
- Moz Beginner's Guide: https://moz.com/beginners-guide-to-seo
- Ahrefs Blog: https://ahrefs.com/blog

---

## ✅ Checklist SEO Rápida

Antes de publicar cada produto:

- [ ] Título único com desconto %
- [ ] Meta description com CTA
- [ ] H1 único e otimizado
- [ ] Conteúdo > 300 palavras
- [ ] Palavra-chave no primeiro parágrafo
- [ ] Imagens com alt text
- [ ] Links internos relevantes
- [ ] Data de atualização visível
- [ ] Schema.org (automático)
- [ ] URL amigável
- [ ] Mobile-friendly (automático)
- [ ] Velocidade < 3s (automático)

---

**🎯 Seguindo essas práticas, você terá um site otimizado para ranking orgânico no Google!**
