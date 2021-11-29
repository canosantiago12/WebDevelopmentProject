import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8081/api/anime/";

const addAnime = (anime, list) => {
    const headers = authHeader();
    const data = { 
      title: anime.title,
      image: anime.image_url,
      airing: anime.airing,
      synopsis: anime.synopsis,
      episodes: anime.episodes,
      score: anime.score,
      rated: anime.rated,
      seen: list === 'Seen' ? true : false
    };

    return axios.post(API_URL + "addAnime", data, {headers});
};

export default {
    addAnime,
};