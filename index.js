client = require("./index");
const Urlbase = "https://adssousag.is-a.dev" || "https://npm-kiritoapi.ecoguardiao.tech"

// Script by CroneGamesPlays Developer, NeoKurai Studios & Ads Sousa Group Corporation © 2020 - 2025 × Todos os direitos reservados.

const axios = require('axios');
//const fetch = require("node-fetch");

class KiritoApi {
    
  constructor() {
    // Você pode inicializar instâncias aqui, se necessário
  }

  //Métodos da class do KiritoAPI

async ping(ping) {
    try {
      
      let pingt = Date.now()
      const api = await axios.get(`${Urlbase}`)
      let pings = Date.now()
      let ping = pings - pingt

        
      return ping;
      
    } catch(error){
    throw new Error("Erro: "+ error.message)   
    }
  };


 
  async mineinfo(i, ve) {
    try {
      const v = ve || "v1"
      
      if (!v) {
          throw new Error("Você Deve Informar a versão");
      };
      if (!i) {
          throw new Error("Você Deve Informar O ip do servidor");
      };
      
      const api = await axios.get(`${Urlbase}/api/${v}/mine/server/${i}`)
      
      return api.data;
      
    } catch(error){
    throw new Error("Erro: "+ error.message)   
    }
  };
  
  
  
  
  
  
  async minebanner(i, ve) {
    try {
      const v = ve || "v1"
      
      if (!v) {
          throw new Error("Você Deve Informar a versão");
      };
      if (!i) {
          throw new Error("Você Deve Informar O Ip Do Servidor");
      };
      
      const api = await axios.get(`${Urlbase}/api/${v}/mine/server/banner/${i}`)
      
      return api.data.banner;
      
    } catch(error){
    throw new Error("Erro: "+ error.message)   
    }
  };
  
  
  
  
  
  
  async userinfo(i, ve) {
    try {
      const v = ve || "v5"
      
      if (!v) {
          throw new Error("Você Deve Informar a versão");
      };
      if (!i) {
          throw new Error("Você Deve Informar O Id Do Usuário");
      };
      
      const api = await axios.get(`${Urlbase}/api/${v}/discord/user/${i}`)
      
      return api.data;
      
    } catch(error){
    throw new Error("Erro: "+ error.message)   
    }
  };
  
  
     
  
  
async chat(p, ii, ve) {
    try {
      const v = ve || "v1"
      const i = ii || "gemini"
      
      if (!v) {
          throw new Error("Você Deve Informar a versão");
      };
      if (!i) {
          throw new Error("Você Deve Informar O qual ia será utilizada");
      };
      if (!p) {
          throw new Error("Você Deve Informar O prompt");
      };
      
      const api = await axios.get(`${Urlbase}/api/${v}/chat/${i}?prompt=${p}`)
      
      return api.data;
      
    } catch(error){
    throw new Error("Erro: "+ error.message)   
    }
  };

          
  async setBannerBot(t, l, ve) {
    try {
      const v = ve || "v1"
      
      if (!v) {
          throw new Error("Você Deve Informar a versão");
      };
      if (!t) {
          throw new Error("Você Deve Informar o Token Do Bot a Qual Deseja Mudar o Banner");
      };
      if (!l) {
          throw new Error("Você Deve Informar o Link Do Banner");
      };
  /*  const verilink = l.includes("http")
        if (!verilink) {
            throw new Error("Você deve informar um link Valido");
        };*/
        
      
      const api = await axios.get(`${Urlbase}/api/${v}/discord/banner?token=${t}&link=${l}`)
      
      return api.data;
      
    } catch(error){
    throw new Error("Erro: "+ error.message)   
    }
  };



  async inviteInfo(l, ve) {
    try {
      const v = ve || "v1"
      
      if (!v) {
          throw new Error("Você Deve Informar a versão");
      };
      if (!l) {
          throw new Error("Você Deve Informar O Link Do Servidor");
      };
      
      const api = await axios.get(`${Urlbase}/api/${v}/discord/invite?link=${l}`)
      
      return api.data;
      
    } catch(error){
    throw new Error("Erro: "+ error.message)   
    }
  };


 async GithubUserinfo(i, ve) {
    try {
      const v = ve || "v1"
      
      if (!v) {
          throw new Error("Você Deve Informar a versão");
      };
      if (!i) {
          throw new Error("Você Deve Informar O Nome Do Usuário");
      };
      
      const api = await axios.get(`${Urlbase}/api/${v}/github/user/${i}`)
      
      return api.data;
      
    } catch(error){
    throw new Error("Erro: "+ error.message)   
    }
  };


 async youtubeInfo(i, ve) {
    try {
      const v = ve || "v1"
      
      if (!v) {
          throw new Error("Você Deve Informar a versão");
      };
      if (!i) {
          throw new Error("Você Deve Informar O Nome Do Usuário");
      };
      
      const api = await axios.get(`${Urlbase}/api/${v}/youtube/infos/${i}`)
      
      return api.data;
      
    } catch(error){
    throw new Error("Erro: "+ error.message)   
    }
  };


async tradutor(i, lang, ve) {
    try {
      const v = ve || "v1"
      
      if (!v) {
          throw new Error("Você Deve Informar a versão");
      };
      if (!i) {
          throw new Error("Você Deve Informar O Texto Que Será Traduzido");
      };
     if (!lang) {
          throw new Error("Você Deve Informar A Linguagem Para Qual O Texto Vai Ser Traduzido");
      };
      
      const api = await axios.get(`${Urlbase}/api/${v}/tradutor?text=${i}&lang=${lang}`)
      
      return api.data;
      
    } catch(error){
    throw new Error("Erro: "+ error.message)   
    }
  };


async MusicLyrics(i, musi, ve) {
    try {
      const v = ve || "v1"
      
      if (!v) {
          throw new Error("Você Deve Informar a versão");
      };
      if (!i) {
          throw new Error("Você Deve Informar O Nome Do Cantor");
      };
     if (!musi) {
          throw new Error("Você Deve Informar O Nome Da Musica");
      };
      
      const api = await axios.get(`${Urlbase}/api/${v}/music/lyrics/letras?artista=${i}&musica=${musi}`)
      
      return api.data;
      
    } catch(error){
    throw new Error("Erro: "+ error.message)   
    }
  };


async MusicRecommend(musi, ve) {
    try {
      const v = ve || "v1"
      
      if (!v) {
          throw new Error("Você Deve Informar a versão");
      };
     if (!musi) {
          throw new Error("Você Deve Informar O Nome Da Musica");
      };
      
      const api = await axios.get(`${Urlbase}/api/${v}/music/recommeds?musica=${musi}`)
      
      return api.data;
      
    } catch(error){
    throw new Error("Erro: "+ error.message)   
    }
  };
    
 async privi(rota) {
    try {
        
      if (!rota) {
          throw new Error("Você Deve Informar a rota completa que lhe foi passada");
      };
      const api = await axios.get(`${Urlbase}/${rota}`)

      return api.data;
      
    } catch(error){
    throw new Error("Erro: "+ error.message)   
    }
  };   
 
  
  
}



module.exports = KiritoApi;

require("./update");


process.on("uncaughtException", (err) => {
  console.log("Exceção não capturada: " + err);
});

process.on("unhandledRejection", (reason, promise) => {
  console.log("[GRAVE] Rejeição possivelmente não tratada em: Promise ", promise, " motivo: ", reason.message);
});
