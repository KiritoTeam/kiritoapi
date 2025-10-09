import { fetchJson } from "./utils/fetcher.js";
const BASE_URL = "https://kiritoapi.adssousag.is-a.dev";
/**
 * Classe principal da KiritoApi.
 * Responsável por interagir com a API e fornecer métodos para diferentes endpoints.
 */
export class KiritoApi {
    constructor() { }
    /**
     * Método genérico para realizar requisições GET na API.
     * @param endpoint Caminho do endpoint (ex: "/api/v1/mine/server/ip")
     */
    async get(endpoint) {
        return fetchJson(`${BASE_URL}${endpoint}`);
    }
    /**
     * Mede a latência (ping) da API.
     * @returns Tempo de resposta em milissegundos.
     */
    async ping() {
        const start = Date.now();
        await fetch(BASE_URL);
        return Date.now() - start;
    }
    /**
     * Obtém informações sobre um servidor de Minecraft.
     * @param ip IP do servidor.
     * @param version Versão da API (padrão: "v1").
     */
    async mineInfo(ip, version = "v1") {
        if (!ip)
            throw new Error("Você deve informar o IP do servidor");
        return this.get(`/api/${version}/mine/server/${ip}`);
    }
    /**
     * Obtém o banner de um servidor de Minecraft.
     * @param ip IP do servidor.
     * @param version Versão da API (padrão: "v1").
     */
    async mineBanner(ip, version = "v1") {
        if (!ip)
            throw new Error("Você deve informar o IP do servidor");
        return this.get(`/api/${version}/mine/server/banner/${ip}`);
    }
    /**
     * Retorna informações sobre um usuário do Discord pelo ID.
     * @param userId ID do usuário.
     * @param version Versão da API (padrão: "v5").
     */
    async userInfo(userId, version = "v5") {
        if (!userId)
            throw new Error("Você deve informar o ID do usuário");
        return this.get(`/api/${version}/discord/user/${userId}`);
    }
    /**
     * Envia um prompt para o modelo de chat IA da API.
     * @param prompt Texto de entrada.
     * @param model Modelo de IA (padrão: "gemini").
     * @param version Versão da API (padrão: "v1").
     */
    async chat(prompt, model = "gemini", version = "v1") {
        if (!prompt)
            throw new Error("Você deve informar o prompt");
        const url = `/api/${version}/chat/${model}?prompt=${encodeURIComponent(prompt)}`;
        return this.get(url);
    }
    /**
     * Define o banner de um bot do Discord.
     * @param token Token do bot.
     * @param link URL do banner.
     * @param version Versão da API (padrão: "v1").
     */
    async setBannerBot(token, link, version = "v1") {
        if (!token)
            throw new Error("Você deve informar o token do bot");
        if (!link)
            throw new Error("Você deve informar o link do banner");
        const url = `/api/${version}/discord/banner?token=${token}&link=${encodeURIComponent(link)}`;
        return this.get(url);
    }
    /**
     * Obtém informações de convite de um servidor do Discord.
     * @param link Link de convite.
     * @param version Versão da API (padrão: "v1").
     */
    async inviteInfo(link, version = "v1") {
        if (!link)
            throw new Error("Você deve informar o link do servidor");
        const url = `/api/${version}/discord/invite?link=${encodeURIComponent(link)}`;
        return this.get(url);
    }
    /**
     * Obtém informações de um usuário do GitHub.
     * @param username Nome de usuário do GitHub.
     * @param version Versão da API (padrão: "v1").
     */
    async githubUserInfo(username, version = "v1") {
        if (!username)
            throw new Error("Você deve informar o nome do usuário");
        return this.get(`/api/${version}/github/user/${username}`);
    }
    /**
     * Obtém informações de um canal do YouTube.
     * @param user Nome do canal ou usuário.
     * @param version Versão da API (padrão: "v1").
     */
    async youtubeInfo(user, version = "v1") {
        if (!user)
            throw new Error("Você deve informar o nome do usuário");
        return this.get(`/api/${version}/youtube/infos/${user}`);
    }
    /**
     * Traduz um texto para outro idioma.
     * @param text Texto a ser traduzido.
     * @param lang Idioma de destino.
     * @param version Versão da API (padrão: "v1").
     */
    async tradutor(text, lang, version = "v1") {
        if (!text)
            throw new Error("Você deve informar o texto");
        if (!lang)
            throw new Error("Você deve informar a linguagem destino");
        const url = `/api/${version}/tradutor?text=${encodeURIComponent(text)}&lang=${encodeURIComponent(lang)}`;
        return this.get(url);
    }
    /**
     * Obtém a letra de uma música.
     * @param artist Nome do cantor(a).
     * @param music Nome da música.
     * @param version Versão da API (padrão: "v1").
     */
    async musicLyrics(artist, music, version = "v1") {
        if (!artist)
            throw new Error("Você deve informar o nome do cantor");
        if (!music)
            throw new Error("Você deve informar o nome da música");
        const url = `/api/${version}/music/lyrics/letras?artista=${encodeURIComponent(artist)}&musica=${encodeURIComponent(music)}`;
        return this.get(url);
    }
    /**
     * Obtém recomendações musicais baseadas em uma música.
     * @param music Nome da música.
     * @param version Versão da API (padrão: "v1").
     */
    async musicRecommend(music, version = "v1") {
        if (!music)
            throw new Error("Você deve informar o nome da música");
        return this.get(`/api/${version}/music/recommeds?musica=${encodeURIComponent(music)}`);
    }
    /**
     * Acesso direto a uma rota customizada da API (uso avançado).
     * @param route Caminho completo da rota.
     */
    async privi(route) {
        if (!route)
            throw new Error("Você deve informar a rota completa");
        return this.get(`/${route}`);
    }
}
export default KiritoApi;
/* ---------------------------
  Tratamento global de erros
  --------------------------- */
process.on("uncaughtException", (err) => {
    console.error("[KiritoApi] Exceção não capturada:", err);
});
process.on("unhandledRejection", (reason) => {
    console.error("[KiritoApi] Rejeição não tratada:", reason);
});
