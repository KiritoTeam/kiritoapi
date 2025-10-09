import type { ApiResponse, DiscordUserInfo, GithubUser, MineInfo, Tradutor, YoutubeInfo } from "./types/kirito-api.js";
/**
 * Classe principal da KiritoApi.
 * Responsável por interagir com a API e fornecer métodos para diferentes endpoints.
 */
export declare class KiritoApi {
    constructor();
    /**
     * Método genérico para realizar requisições GET na API.
     * @param endpoint Caminho do endpoint (ex: "/api/v1/mine/server/ip")
     */
    private get;
    /**
     * Mede a latência (ping) da API.
     * @returns Tempo de resposta em milissegundos.
     */
    ping(): Promise<number>;
    /**
     * Obtém informações sobre um servidor de Minecraft.
     * @param ip IP do servidor.
     * @param version Versão da API (padrão: "v1").
     */
    mineInfo(ip: string, version?: string): Promise<MineInfo>;
    /**
     * Obtém o banner de um servidor de Minecraft.
     * @param ip IP do servidor.
     * @param version Versão da API (padrão: "v1").
     */
    mineBanner(ip: string, version?: string): Promise<{
        banner: string;
    }>;
    /**
     * Retorna informações sobre um usuário do Discord pelo ID.
     * @param userId ID do usuário.
     * @param version Versão da API (padrão: "v5").
     */
    userInfo(userId: string, version?: string): Promise<DiscordUserInfo>;
    /**
     * Envia um prompt para o modelo de chat IA da API.
     * @param prompt Texto de entrada.
     * @param model Modelo de IA (padrão: "gemini").
     * @param version Versão da API (padrão: "v1").
     */
    chat(prompt: string, model?: string, version?: string): Promise<ApiResponse>;
    /**
     * Define o banner de um bot do Discord.
     * @param token Token do bot.
     * @param link URL do banner.
     * @param version Versão da API (padrão: "v1").
     */
    setBannerBot(token: string, link: string, version?: string): Promise<ApiResponse>;
    /**
     * Obtém informações de convite de um servidor do Discord.
     * @param link Link de convite.
     * @param version Versão da API (padrão: "v1").
     */
    inviteInfo(link: string, version?: string): Promise<ApiResponse>;
    /**
     * Obtém informações de um usuário do GitHub.
     * @param username Nome de usuário do GitHub.
     * @param version Versão da API (padrão: "v1").
     */
    githubUserInfo(username: string, version?: string): Promise<GithubUser>;
    /**
     * Obtém informações de um canal do YouTube.
     * @param user Nome do canal ou usuário.
     * @param version Versão da API (padrão: "v1").
     */
    youtubeInfo(user: string, version?: string): Promise<YoutubeInfo>;
    /**
     * Traduz um texto para outro idioma.
     * @param text Texto a ser traduzido.
     * @param lang Idioma de destino.
     * @param version Versão da API (padrão: "v1").
     */
    tradutor(text: string, lang: string, version?: string): Promise<Tradutor>;
    /**
     * Obtém a letra de uma música.
     * @param artist Nome do cantor(a).
     * @param music Nome da música.
     * @param version Versão da API (padrão: "v1").
     */
    musicLyrics(artist: string, music: string, version?: string): Promise<ApiResponse>;
    /**
     * Obtém recomendações musicais baseadas em uma música.
     * @param music Nome da música.
     * @param version Versão da API (padrão: "v1").
     */
    musicRecommend(music: string, version?: string): Promise<ApiResponse>;
    /**
     * Acesso direto a uma rota customizada da API (uso avançado).
     * @param route Caminho completo da rota.
     */
    privi(route: string): Promise<ApiResponse>;
}
export default KiritoApi;
