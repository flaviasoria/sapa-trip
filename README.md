# SapaTrip — site

Site institucional da **SapaTrip** — viagens para mulheres LGBT.
HTML + CSS + JavaScript puro, hospedado de graça no **GitHub Pages**.

## Arquivos

```
index.html      → Home
projeto.html    → O Projeto
viagens.html    → Nossas Viagens
styles.css      → todo o visual
script.js       → menu no celular
CNAME           → domínio (sapatrip.com.br)
images/         → fotos do site (veja images/README.md)
```

## Como editar

- **Texto:** abra o `.html` e edite direto. É tudo texto comum.
- **Cores:** estão no topo do `styles.css`, no bloco `:root`.
- **WhatsApp:** procure por `5511999999999` em TODOS os `.html` e troque pelo
  número real (formato: 55 + DDD + número, só dígitos). São 8 ocorrências.
- **Redes sociais:** no rodapé, troque os `href="#"` pelos links do Instagram, TikTok e Facebook.
- **Fotos:** veja as instruções em `images/README.md`.

---

# 🚀 Publicar no GitHub Pages

### 1. Criar o repositório no GitHub
1. Vá em https://github.com/new
2. Nome do repositório: **`sapa-site`** (ou outro nome).
3. Deixe **Público** e clique **Create repository**.

### 2. Subir os arquivos
No terminal, dentro desta pasta:

```bash
git add .
git commit -m "Site SapaTrip"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/sapa-site.git
git push -u origin main
```

> Troque `SEU-USUARIO` pelo seu usuário do GitHub.

### 3. Ativar o GitHub Pages
1. No repositório → **Settings** → **Pages** (menu da esquerda).
2. Em **Source**, escolha **Deploy from a branch**.
3. Branch: **`main`** / pasta: **`/ (root)`** → **Save**.
4. Espere ~1 minuto. O site fica no ar em `https://SEU-USUARIO.github.io/sapa-site/`.

---

# 🌐 Ligar o domínio sapatrip.com.br

O arquivo `CNAME` já está pronto com `sapatrip.com.br`. Falta configurar o **DNS**
no painel de onde você comprou o domínio (Registro.br, GoDaddy, Hostinger, etc.).

### Passo 1 — No painel do seu domínio, crie estes registros:

**A) Para o domínio raiz (sapatrip.com.br)** — crie 4 registros do tipo **A**
apontando para os IPs do GitHub:

| Tipo | Nome/Host | Valor              |
|------|-----------|--------------------|
| A    | @         | 185.199.108.153    |
| A    | @         | 185.199.109.153    |
| A    | @         | 185.199.110.153    |
| A    | @         | 185.199.111.153    |

**B) Para o www (www.sapatrip.com.br)** — crie 1 registro do tipo **CNAME**:

| Tipo  | Nome/Host | Valor                     |
|-------|-----------|---------------------------|
| CNAME | www       | SEU-USUARIO.github.io     |

> ⚠️ No **Registro.br** o campo "Nome/Host" às vezes fica em branco para o domínio raiz
> — é só preencher os 4 IPs como registros **A**. Para o `www`, use o tipo CNAME.

### Passo 2 — No GitHub
1. Repositório → **Settings** → **Pages**.
2. Em **Custom domain**, digite **`sapatrip.com.br`** → **Save**.
   (Isso já está no arquivo `CNAME`, então pode já vir preenchido.)
3. Marque **Enforce HTTPS** (pode levar alguns minutos até liberar — espere o
   certificado ser emitido).

### Passo 3 — Esperar
A propagação do DNS pode levar de **alguns minutos até 24-48h**.
Quando terminar, `https://sapatrip.com.br` mostrará o site. ✅

---

## Atualizar o site depois
Sempre que mudar algo, rode:

```bash
git add .
git commit -m "descrição da mudança"
git push
```

O GitHub Pages republica sozinho em ~1 minuto.
