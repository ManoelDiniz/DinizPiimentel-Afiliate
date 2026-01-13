# Deploy na Vercel

Este projeto está configurado para deploy automático na Vercel.

## Passos para Deploy

1. **Criar conta na Vercel**
   - Acesse https://vercel.com
   - Conecte com GitHub

2. **Importar Projeto**
   - New Project → Import Git Repository
   - Selecione este repositório

3. **Configurar Variáveis de Ambiente**
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_SITE_URL=https://seudominio.com.br
   ```

4. **Deploy**
   - Clique em "Deploy"
   - Aguarde o build (2-3 minutos)

## Domínio Personalizado

1. Na Vercel: Settings → Domains
2. Adicione seu domínio
3. Configure DNS conforme instruções
4. Aguarde propagação (até 48h)

## Build Automático

Cada push para `main` dispara um novo deploy automaticamente.

---

# Deploy na Netlify (Alternativa)

## Passos para Deploy

1. **Criar conta na Netlify**
   - Acesse https://netlify.com
   - Conecte com GitHub

2. **Importar Projeto**
   - Add new site → Import from Git
   - Selecione este repositório

3. **Configurações de Build**
   - Build command: `npm run build`
   - Publish directory: `out`

4. **Variáveis de Ambiente**
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_SITE_URL=https://seudominio.com.br
   ```

5. **Deploy**
   - Clique em "Deploy site"
   - Aguarde o build

## Domínio Personalizado

1. Domain settings → Add custom domain
2. Configure DNS conforme instruções
3. SSL automático após propagação
