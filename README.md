# 🥐 Hollywood Pães e Conveniência — Site Oficial

Site profissional (estático) focado em **vender mais**: botões de WhatsApp em todas as
seções, destaque para delivery/encomendas, prova social (nota 4,6★ do Google) e SEO
para aparecer no Google como "padaria no Núcleo Bandeirante".

## 📁 Arquivos

| Arquivo        | O que é                                            |
|----------------|----------------------------------------------------|
| `index.html`   | Conteúdo do site (todas as seções)                 |
| `styles.css`   | Visual / design                                    |
| `script.js`    | Menu do celular, animações, ano automático         |
| `README.md`    | Este guia                                          |

---

## ✏️ Como personalizar (o que trocar)

Abra o `index.html` e ajuste:

1. **Preços** → troque cada `consulte` pelo valor real (ex.: `R$ 8,00`).
2. **WhatsApp** → o número usado é **(61) 99850-0847**. Se mudar, substitua todos os
   `5561998500847` (formato: 55 + DDD + número).
3. **Telefone** → `+556135524743` (aparece nos links `tel:`).
4. **Redes sociais** → confira os links do Instagram/Facebook no rodapé.
5. **Fotos reais** (muito recomendado! deixa o site muito mais apetitoso):
   - Crie uma pasta `assets/` e coloque as fotos dos produtos.
   - No `index.html`, dentro de cada `<div class="card-img" ...>` você pode trocar o
     emoji por uma imagem: `<img src="assets/bolo.jpg" alt="Bolo caseiro">`.

---

## 🚀 Publicar no GitHub Pages (grátis)

1. Crie uma conta em <https://github.com> (se ainda não tiver).
2. Crie um repositório novo. Dica: para ter o endereço `https://SEU-USUARIO.github.io`,
   nomeie o repositório exatamente como **`SEU-USUARIO.github.io`**.
3. Envie estes arquivos (`index.html`, `styles.css`, `script.js`) para o repositório —
   pelo botão **"Add file → Upload files"** do próprio site do GitHub, ou por git:

   ```bash
   git init
   git add .
   git commit -m "Site Hollywood Pães e Conveniência"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
   git push -u origin main
   ```

4. No repositório: **Settings → Pages → Branch: `main` / pasta `/root` → Save**.
5. Aguarde ~1 minuto. O site fica no ar em `https://SEU-USUARIO.github.io/` (ou
   `https://SEU-USUARIO.github.io/SEU-REPO/`).

> ⚠️ O `index.html` precisa estar na **raiz** do repositório (não dentro de uma subpasta).

---

## 🌐 Usar um domínio próprio (ex.: hollywoodpaes.com.br)

1. Compre o domínio (Registro.br, GoDaddy, Hostgator etc.).
2. No repositório: **Settings → Pages → Custom domain** → digite seu domínio → Save.
   Isso cria um arquivo `CNAME` automaticamente.
3. No painel do seu domínio, aponte o DNS para o GitHub:
   - Registros **A** para: `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - E/ou um registro **CNAME** de `www` apontando para `SEU-USUARIO.github.io`.
4. Marque **"Enforce HTTPS"** quando ficar disponível (cadeado de segurança 🔒).

A propagação do DNS pode levar de alguns minutos até 24h.

---

## 📈 Próximos passos para vender ainda mais

- [ ] Adicionar **fotos reais** dos produtos (usar as do Google Maps é ótimo começo).
- [ ] Preencher os **preços** no cardápio.
- [ ] Manter o **Google Meu Negócio** atualizado (link deste site no perfil).
- [ ] Divulgar o link do site no **Instagram** (@hollywoodpaes) e no WhatsApp.
- [ ] (Opcional) Cadastrar o site no **Google Search Console** para indexar mais rápido.

---

Feito com carinho para a Hollywood Pães e Conveniência 🍞 · Tradição desde 1985.
