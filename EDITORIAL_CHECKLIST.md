# 📋 Checklist Editorial - Processo de Publicação

## Antes de Publicar um Novo Produto

### ✅ Verificação de Conteúdo

- [ ] Título descritivo e otimizado para SEO
- [ ] Slug curto e baseado em palavras-chave
- [ ] Preço atual verificado no marketplace
- [ ] Preço antigo correto (verificar histórico)
- [ ] Link de afiliado funcionando
- [ ] Marketplace correto
- [ ] Data de atualização (hoje)
- [ ] Categoria apropriada

### ✅ Conteúdo da Página

- [ ] H1 único e descritivo
- [ ] Contexto: para quem é o produto
- [ ] Explicação do por que está em promoção
- [ ] Comparação com produtos similares
- [ ] Avaliações e social proof (se disponível)
- [ ] Especificações técnicas relevantes
- [ ] CTA claro e visível
- [ ] Aviso de afiliado presente

### ✅ Qualidade do Conteúdo

- [ ] Mínimo de 300 palavras
- [ ] Conteúdo original (não copiado)
- [ ] Sem erros de ortografia
- [ ] Informações verificadas
- [ ] Imagens com alt text (quando aplicável)

### ✅ SEO

- [ ] Meta description atrativa
- [ ] Desconto % no título
- [ ] Palavras-chave naturais no texto
- [ ] Links internos (se relevante)

## Manutenção Periódica

### 📅 Diariamente

- [ ] Verificar produtos adicionados ontem
- [ ] Atualizar preços dos produtos em destaque
- [ ] Verificar se links de afiliado estão funcionando

### 📅 Semanalmente

- [ ] Atualizar preços de todos os produtos ativos
- [ ] Remover produtos fora de estoque
- [ ] Verificar avaliações atualizadas
- [ ] Analisar métricas no Google Analytics

### 📅 Mensalmente

- [ ] Revisar produtos com baixo desempenho
- [ ] Atualizar páginas institucionais se necessário
- [ ] Verificar links quebrados em todo o site
- [ ] Análise de palavras-chave e SEO
- [ ] Backup do conteúdo

## Marcação de Produtos

### 🔴 Produto Expirado

Se a oferta expirou:

1. Atualizar campo `inStock: false` no frontmatter
2. Adicionar aviso no topo do conteúdo
3. Ou remover o arquivo `.mdx` se não for mais relevante

### ⚠️ Link Quebrado

Se o link de afiliado não funciona:

1. Verificar no marketplace se o produto ainda existe
2. Atualizar o link se mudou
3. Marcar como fora de estoque se foi removido

### ✏️ Atualização de Preço

Quando o preço muda:

1. Atualizar `currentPrice`
2. Verificar se `oldPrice` ainda é válido
3. Atualizar `lastUpdated` para data atual
4. Recalcular desconto %

## Histórico de Alterações

Manter um registro simples no commit do Git:

```bash
git add content/produtos/nome-produto.mdx
git commit -m "feat: adiciona produto XYZ com 40% OFF"

# ou

git commit -m "update: atualiza preço do produto XYZ"

# ou

git commit -m "chore: remove produto XYZ (oferta expirada)"
```

## Métricas para Acompanhar

### No Google Analytics

- [ ] CTR (Click Through Rate) por produto
- [ ] Tempo médio na página
- [ ] Taxa de rejeição
- [ ] Origens de tráfego
- [ ] Conversões de afiliado

### KPIs Importantes

- **Taxa de clique em afiliados**: meta > 5%
- **Tempo na página**: meta > 60 segundos
- **Taxa de rejeição**: meta < 60%

## Otimização Contínua

### O que fazer com produtos de alto desempenho:

- Criar produtos similares
- Expandir conteúdo
- Adicionar mais comparações
- Criar variações (cores, tamanhos)

### O que fazer com produtos de baixo desempenho:

- Revisar título e meta description
- Melhorar conteúdo
- Adicionar mais contexto
- Verificar se o produto ainda é relevante
- Considerar remover

## Boas Práticas

✅ **FAZER:**

- Verificar preços antes de publicar
- Ser transparente sobre comissões
- Priorizar qualidade sobre quantidade
- Atualizar regularmente
- Responder dúvidas nos comentários/contato

❌ **NÃO FAZER:**

- Copiar descrições dos marketplaces
- Promover produtos sem verificar
- Exagerar nos benefícios
- Esquecer o aviso de afiliado
- Deixar produtos desatualizados

## Template Rápido

```markdown
---
title: "[Nome do Produto] - [Benefício Principal]"
slug: "nome-produto-marca"
currentPrice: 99.90
oldPrice: 199.90
affiliateLink: "https://..."
marketplace: "Amazon"
lastUpdated: "2026-01-13"
rating: 4.5
reviewCount: 1000
category: "categoria"
inStock: true
---

# [Nome do Produto] com [X]% de Desconto

## Por que essa oferta é especial?

[Explicar o que torna essa oferta única]

## Para quem é esse produto?

✅ [Público-alvo 1]
✅ [Público-alvo 2]
✅ [Público-alvo 3]

## Comparação rápida

[Tabela comparativa]

## Avaliações reais

⭐ [Rating]/5 - [Reviews] avaliações

> "[Depoimento]" - [Nome]

## Especificações

- [Spec 1]
- [Spec 2]
- [Spec 3]

## Atualização de preço

✅ Preço verificado em [Data]
```
