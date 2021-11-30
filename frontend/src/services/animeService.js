import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8081/api/anime/";

const addAnime = (anime, list) => {
    const headers = authHeader();
    const data = { 
      animeId: anime.mal_id,
      title: anime.title,
      image: anime.image_url,
      airing: anime.airing,
      synopsis: anime.synopsis,
      episodes: anime.episodes,
      score: anime.score,
      startDate: anime.start_date,
      endDate: anime.end_date,
      type: anime.type,
      rated: anime.rated,
      seen: list === 'Seen' ? true : false
    };

    return axios.post(API_URL + "addAnime", data, {headers});
};

const deleteAnime = (anime) => {
    const headers = authHeader();
    const data = {
        title: anime.title
    };

    return axios.post(API_URL + 'deleteAnime', data, {headers});
}

export default {
    addAnime,
    deleteAnime
};