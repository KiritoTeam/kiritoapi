export interface ApiResponse<T = any> {
  success?: boolean;
  error?: string;
  data?: T;
  [key: string]: any;
}

export interface MineInfo {
  ip: string;
  port: number;
  motd: {
    raw: string[];
    clean: string[];
    html: string[];
  };
  players: {
    online: number;
    max: number;
  };
  version: string;
  online: boolean;
  protocol: number;
  protocol_name: string;
  hostname: string;
  icon?: string;
  software?: string;
  eula_blocked?: boolean;
  debug?: {
    ping: boolean;
    query: boolean;
    bedrock: boolean;
    srv: boolean;
    querymismatch: boolean;
    ipinsrv: boolean;
    cnameinsrv: boolean;
    animatedmotd: boolean;
    cachehit: boolean;
    cachetime: number;
    cacheexpire: number;
    apiversion: number;
    dns?: {
      error?: any;
      a?: string[];
    };
    error?: Record<string, string>;
  };
  info?: {
    raw: string[];
    clean: string[];
    html: string[];
  };
}

export interface DiscordUserInfo {
  id: string;
  username: string;
  globalName: string;
  legacyUsername: string;
  flags: number;
  userProfile: {
    avatar: {
      iconURL: string;
      decoration: {
        asset: string;
        assetURL: string;
      } | null;
      icon: string;
    };
    banner: {
      icon: string | null;
      color: string | null;
      iconURL: string | null;
    };
    bio: string;
    pronouns: string;
    profileEffect: string | null;
    profileColor: string | null;
    profileThemeColors: string[] | null;
  };
  [key: string]: any;
}

export interface GithubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: "User" | "Organization";
  site_admin: boolean;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  hireable: boolean | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
  [key: string]: any;
}

export interface YoutubeInfo {
  nome: string;
  imagem: string;
  inscritos: string;
  visualizacoes: string;
  quantidadeDeVideos: string;
  videoMaisNovo: string;
  descricao: string;
  localizacao: string;
  criacao: string;
  customUrl: string;
  [key: string]: any;
}

export interface Tradutor {
  text: string;
  raw: {
    sentences: [[Object]];
    src: string;
    confidence: number;
    spell: {};
    ld_result: {
      srclangs: [Array];
      srclangs_confidences: [Array];
      extended_srclangs: [Array];
    };
  };
}
