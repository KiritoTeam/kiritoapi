[![Status](https://status-kiritoapi.adssousag.is-a.dev/api/badge/6/status)](https://status-kiritoapi.adssousag.is-a.dev/status/kiritoapi)
[![Ping](https://status-kiritoapi.adssousag.is-a.dev/api/badge/6/ping)](https://status-kiritoapi.adssousag.is-a.dev/status/kiritoapi)
[![Uptime](https://status-kiritoapi.adssousag.is-a.dev/api/badge/6/uptime)](https://status-kiritoapi.adssousag.is-a.dev/status/kiritoapi)

# 🌐 kiritoapi

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

### 🎮 `await api.mineInfo(ip)`

Busca informações detalhadas de um servidor Minecraft (Java ou Bedrock).

```js
const info = await api.mineInfo("mc.sparklypower.net");
```

---

### 🖼️ `await api.mineBanner(ip)`

Retorna a imagem/banner de status do servidor Minecraft.

```js
const banner = await api.mineBanner("mc.sparklypower.net");
```

---

### 🤖 `await api.userInfo(discordUserId)`

Retorna informações públicas de um usuário do Discord usando seu ID.

```js
const user = await api.userInfo("820344895528632380");
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

### 🐙 `await api.githubUserInfo(username)`

Retorna informações de um usuário do GitHub.

```js
const github = await api.githubUserInfo("octocat");
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

### 🎵 `await api.musicLyrics(artista, musica)`

Busca letras de músicas com base no nome do artista e da música.

```js
const letra = await api.musicLyrics("Adele", "Hello");
```

---

### 🎶 `await api.musicRecommend(nomeDaMusica)`

Gera recomendações musicais com base no nome de uma música.

```js
const recomendacoes = await api.musicRecommend("Tá Rico Os Meninos do Gueto");
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
  const mc = await api.mineInfo("mc.hypixel.net");
  const banner = await api.mineBanner("mc.hypixel.net");
  const discordUser = await api.userInfo("820344895528632380");
  const traducao = await api.tradutor("Bom dia", "en");
  const musica = await api.musicLyrics("Imagine Dragons", "Believer");
  const recomendacoes = await api.musicRecommend("Tá Rico Os Meninos do Gueto");

  console.log("Servidor Minecraft:", mc);
  console.log("Banner:", banner);
  console.log("Discord User:", discordUser);
  console.log("Tradução:", traducao);
  console.log("Letra da música:", musica);
  console.log("Recomendações:", recomendacoes);
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

