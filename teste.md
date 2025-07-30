````markdown
# 🌐 kiritoapi

[![Status da API](https://g-status.ecoguardiao.tech/api/badge/4/status)](https://g-status.ecoguardiao.tech/status/kiritoapi)

`kiritoapi` é uma API multiuso para desenvolvedores Node.js que desejam acessar facilmente informações de jogos, usuários do Discord, GitHub, YouTube, tradução de textos, letras de músicas, IA de conversa e muito mais — tudo com apenas uma linha de código.

---

## 📦 Instalação

```bash
npm install kiritoapi
````

---

## 🚀 Como usar

```js
const KiritoApi = require("kiritoapi");
const api = new KiritoApi();
```

> Todos os métodos são assíncronos e devem ser usados com `await`.

---

## 📘 Métodos disponíveis

### 🎮 `await api.mineinfo(ip)`

Busca informações detalhadas de um servidor Minecraft (Java ou Bedrock).

```js
const info = await api.mineinfo("mc.sparklypower.net");
```

---

### 🖼️ `await api.minebanner(ip)`

Retorna a imagem/banner de status do servidor Minecraft.

```js
const banner = await api.minebanner("mc.sparklypower.net");
```

---

### 🤖 `await api.userinfo(discordUserId)`

Retorna informações públicas de um usuário do Discord usando seu ID.

```js
const user = await api.userinfo("820344895528632380");
```

---

### 🖼️ `await api.setBannerBot(botToken, imageUrl)`

Define um novo banner para o seu bot do Discord.

```js
await api.setBannerBot("Bot-Token", "https://link-da-imagem.com/banner.png");
```

> ⚠️ Você precisa fornecer o token do bot para essa função funcionar.

---

### 🔗 `await api.inviteInfo(convite)`

Retorna informações de um link de convite de servidor do Discord.

```js
const invite = await api.inviteInfo("discord.gg/servidor");
```

---

### 🤖 `await api.chat(texto)`

Interage com uma IA básica de chat.

```js
const resposta = await api.chat("oii, tudo bem?");
```

---

### 🐙 `await api.GithubUserinfo(username)`

Retorna informações de um usuário do GitHub.

```js
const github = await api.GithubUserinfo("octocat");
```

---

### 📺 `await api.youtubeInfo(channelName)`

Retorna informações públicas de um canal do YouTube.

```js
const canal = await api.youtubeInfo("CanalExemploYT");
```

---

### 🌍 `await api.tradutor(texto, linguagemDestino)`

Traduz qualquer texto para outra linguagem.

```js
const traducao = await api.tradutor("Olá, mundo!", "en"); // Resultado: "Hello, world!"
```

> 🌐 Linguagens usam o código ISO como `en` (inglês), `es` (espanhol), `fr` (francês), etc.

---

### 🎵 `await api.MusicLyrics(artista, musica)`

Busca letras de músicas com base no nome do artista e da música.

```js
const letra = await api.MusicLyrics("Adele", "Hello");
```

---

## ⚠️ Observações

* Todos os métodos devem ser usados com `await`, pois são assíncronos.
* Os parâmetros devem ser strings válidas, como IPs, IDs ou nomes públicos.
* O método `setBannerBot` exige um **token de bot Discord válido** com permissão para alterar o perfil.

---

## 🧪 Exemplo completo

```js
const KiritoApi = require("kiritoapi");
const api = new KiritoApi();

(async () => {
  const mc = await api.mineinfo("mc.hypixel.net");
  const banner = await api.minebanner("mc.hypixel.net");
  const discordUser = await api.userinfo("820344895528632380");
  const traducao = await api.tradutor("Bom dia", "en");
  const musica = await api.MusicLyrics("Imagine Dragons", "Believer");

  console.log("Servidor Minecraft:", mc);
  console.log("Banner:", banner);
  console.log("Discord User:", discordUser);
  console.log("Tradução:", traducao);
  console.log("Letra da música:", musica);
})();
```

---

## 💬 Suporte

* ❓ Dúvidas? Crie uma **Issue** no repositório.
* 🧠 Sugestões? Envie um **Pull Request** ou nos contate via GitHub.
* 📚 Quer integrar com outro projeto? Podemos ajudar.

---

## 📝 Licença

Distribuído sob a licença **MIT**.

---

Feito com ❤️ por [ADS Sousa Group Corporation Ltda.](https://github.com/KiritoGamesPlays)

```
