# 🔧 Troubleshooting - Soluções para Problemas Comuns

## 🚨 Erros de Instalação

### Erro: `npm install` falha

**Problema:**
```
npm ERR! code ENOENT
npm ERR! syscall open
```

**Solução:**
```powershell
# Verificar versão do Node.js (precisa ser 18+)
node --version

# Se for antiga, atualizar:
# Baixe em: https://nodejs.org

# Limpar cache do npm
npm cache clean --force

# Tentar novamente
npm install
```

---

### Erro: `sharp` não instala

**Problema:**
```
Error: Cannot find module 'sharp'
```

**Solução:**
```powershell
# Instalar dependências de build
npm install --save-dev @types/node

# Reinstalar sharp
npm install sharp --force

# Se ainda falhar (Windows):
npm install --platform=win32 --arch=x64 sharp
```

---

## 🚨 Erros de Build

### Erro: `npm run build` falha

**Problema:**
```
Error: Build failed with errors
```

**Solução:**
```powershell
# 1. Limpar .next e node_modules
Remove-Item -Recurse -Force .next, node_modules

# 2. Reinstalar
npm install

# 3. Verificar erros de TypeScript
npm run lint

# 4. Tentar build novamente
npm run build
```

---

### Erro: TypeScript type errors

**Problema:**
```
Type 'X' is not assignable to type 'Y'
```

**Solução:**
```powershell
# Atualizar tipos
npm install --save-dev @types/react @types/node

# Ou ignorar temporariamente (não recomendado)
# Edite tsconfig.json e adicione:
# "skipLibCheck": true
```

---

### Erro: Cannot find module 'gray-matter'

**Problema:**
```
Module not found: Can't resolve 'gray-matter'
```

**Solução:**
```powershell
npm install gray-matter remark remark-html
```

---

## 🚨 Erros de Runtime

### Erro: Página 404 para produtos

**Problema:**
Acessar `/produto/fone-bluetooth` retorna 404

**Causas Possíveis:**

1. **Arquivo MDX não existe**
   ```powershell
   # Verificar se existe:
   Get-ChildItem content/produtos/
   ```

2. **Slug incorreto**
   ```markdown
   # No arquivo MDX, verificar:
   slug: "fone-bluetooth-qcy-t13"
   
   # URL deve ser:
   /produto/fone-bluetooth-qcy-t13
   ```

3. **Build não atualizado**
   ```powershell
   npm run build
   ```

---

### Erro: Imagens não carregam

**Problema:**
Imagens aparecem quebradas (ícone 🖼️❌)

**Soluções:**

1. **Verificar caminho:**
   ```markdown
   # Correto:
   image: "/images/produto.jpg"
   
   # Incorreto:
   image: "images/produto.jpg"
   image: "./images/produto.jpg"
   ```

2. **Verificar se arquivo existe:**
   ```powershell
   Get-ChildItem public/images/
   ```

3. **Criar placeholder:**
   ```powershell
   # Se não tiver imagem real, remova a linha:
   # image: "/images/produto.jpg"
   ```

---

### Erro: Analytics não funciona

**Problema:**
Google Analytics não registra eventos

**Checklist:**

1. **ID configurado?**
   ```typescript
   // components/Analytics.tsx
   const GA_ID = 'G-XXXXXXXXXX'; // Verificar se está correto
   ```

2. **Script carregando?**
   ```javascript
   // Abrir DevTools (F12) → Console
   // Procurar por erros do gtag
   ```

3. **Testar evento:**
   ```javascript
   // No Console do navegador:
   window.gtag('event', 'test', { test: 'value' });
   
   // Ver em Analytics → Realtime → Events
   ```

4. **Bloqueadores de ads?**
   - Desabilitar AdBlock para testar
   - Analytics pode ser bloqueado

---

## 🚨 Erros de Deploy

### Erro: Vercel build falha

**Problema:**
Deploy na Vercel retorna erro

**Soluções:**

1. **Verificar logs:**
   - Abrir deploy na Vercel
   - Ver logs completos
   - Identificar erro específico

2. **Testar local primeiro:**
   ```powershell
   npm run build
   # Se falhar local, não vai funcionar na Vercel
   ```

3. **Variáveis de ambiente:**
   ```
   # Na Vercel: Settings → Environment Variables
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_SITE_URL=https://seudominio.com.br
   ```

4. **Node version:**
   ```json
   // package.json - adicionar:
   "engines": {
     "node": ">=18.0.0"
   }
   ```

---

### Erro: Netlify deploy falha

**Problema:**
Build na Netlify não completa

**Soluções:**

1. **Verificar configurações:**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

2. **Adicionar netlify.toml:**
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

---

## 🚨 Problemas de SEO

### Problema: Sitemap.xml vazio

**Causa:**
Nenhum produto encontrado

**Solução:**
```powershell
# Verificar se há produtos:
Get-ChildItem content/produtos/

# Se vazio, adicionar produtos de exemplo
# Ver: EDITORIAL_CHECKLIST.md
```

---

### Problema: Schema.org não valida

**Teste:**
```
https://search.google.com/test/rich-results
```

**Soluções:**

1. **Preço deve ser número:**
   ```markdown
   ✅ currentPrice: 89.90
   ❌ currentPrice: "R$ 89,90"
   ```

2. **Rating opcional:**
   ```markdown
   # Se não tiver rating, remova:
   # rating: 4.5
   # reviewCount: 1000
   ```

---

### Problema: Google não indexa

**Checklist:**

1. **Sitemap submetido?**
   - Google Search Console
   - Solicitar indexação

2. **Robots.txt permite?**
   ```
   # Acessar:
   https://seudominio.com.br/robots.txt
   
   # Deve ter:
   User-agent: *
   Allow: /
   ```

3. **Conteúdo suficiente?**
   - Mínimo 300 palavras
   - Conteúdo original

4. **Tempo:**
   - Pode levar 1-4 semanas
   - Ser paciente

---

## 🚨 Performance

### Problema: Lighthouse baixo

**Diagnóstico:**
```
F12 → Lighthouse → Generate Report
```

**Soluções por categoria:**

### Performance < 90

1. **Imagens grandes:**
   ```powershell
   # Otimizar com:
   # - TinyPNG.com
   # - Squoosh.app
   # Meta: < 200KB por imagem
   ```

2. **CSS muito grande:**
   ```css
   /* Remover CSS não usado */
   /* Minificar */
   ```

### Accessibility < 90

1. **Contraste baixo:**
   ```css
   /* Aumentar contraste de cores */
   color: #1e272e; /* Texto escuro */
   background: #ffffff; /* Fundo claro */
   ```

2. **Alt text faltando:**
   ```markdown
   # Adicionar em todas as imagens:
   image: "/images/produto.jpg"
   # E no MDX:
   ![Fone Bluetooth QCY T13](/images/produto.jpg)
   ```

### SEO < 100

1. **Meta description faltando:**
   ```typescript
   // Verificar em app/produto/[slug]/page.tsx
   ```

2. **Links sem texto:**
   ```html
   ✅ <a href="...">Ver Produto</a>
   ❌ <a href="...">Clique aqui</a>
   ```

---

## 🚨 Erros Comuns de Markdown/MDX

### Problema: Markdown não renderiza

**Causa:**
Sintaxe incorreta

**Soluções:**

1. **Headings:**
   ```markdown
   ✅ # Heading 1
   ❌ #Heading 1 (sem espaço)
   ```

2. **Listas:**
   ```markdown
   ✅ - Item
   ✅ * Item
   ❌ -Item (sem espaço)
   ```

3. **Tabelas:**
   ```markdown
   ✅ 
   | Col 1 | Col 2 |
   |-------|-------|
   | Val 1 | Val 2 |
   
   ❌ Sem linha separadora
   ```

---

### Problema: Frontmatter não reconhecido

**Sintaxe correta:**
```markdown
---
title: "Título"
slug: "slug"
currentPrice: 89.90
---

# Conteúdo aqui
```

**Erros comuns:**
```markdown
❌ -- (dois hífens)
❌ --- (sem fechar no final)
❌ Espaço antes de ---
```

---

## 🔍 Como Debugar

### 1. Verificar Console

```javascript
// Browser DevTools (F12) → Console
// Procurar por:
- Erros em vermelho ❌
- Warnings em amarelo ⚠️
```

### 2. Verificar Network

```
F12 → Network → Recarregar página
- Procurar por requests 404
- Verificar tempo de carregamento
```

### 3. Verificar Build Logs

```powershell
npm run build 2>&1 | Out-File build-log.txt
# Analisar build-log.txt
```

### 4. Modo Verbose

```powershell
# Build com mais detalhes:
$env:DEBUG="*"
npm run build
```

---

## 📞 Ainda com Problemas?

### Checklist Final:

- [ ] Node.js versão 18+ instalado
- [ ] `npm install` sem erros
- [ ] `npm run build` sem erros
- [ ] `npm run dev` funciona local
- [ ] Arquivos MDX em `content/produtos/`
- [ ] Frontmatter correto
- [ ] Imagens em `public/images/`
- [ ] Domínio configurado (4 arquivos)
- [ ] Git repository criado

### Recursos:

- **Next.js Issues:** https://github.com/vercel/next.js/issues
- **Next.js Docs:** https://nextjs.org/docs
- **Stack Overflow:** https://stackoverflow.com/questions/tagged/next.js

### Logs Úteis:

```powershell
# Versões:
node --version
npm --version

# Informações do projeto:
npm list --depth=0

# Verificar erros de lint:
npm run lint

# Build com output detalhado:
npm run build --verbose
```

---

## ✅ Tudo Funcionando?

Se conseguiu:
- ✅ `npm run dev` → http://localhost:3000
- ✅ Ver homepage com produtos
- ✅ Clicar em produto e ver página completa
- ✅ `npm run build` sem erros

**Parabéns! Está pronto para deploy! 🚀**
