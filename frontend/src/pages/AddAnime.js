import React, { useState } from 'react';
import axios from 'axios';
import { AddPage } from './PageStyle';
import { GiSeahorse } from "react-icons/gi";
import AnimeService from "../services/animeService";
import AuthService from "../services/auth.service";

const AddAnime = ({ currentUser }) => {
    const [animeName, setAnimeName] = useState();
    const [animes, setAnimes] = useState();
    const [disableButton, setDisableButton] = useState(false);

    const onChangeSearch = (e) => {
        const animename = e.target.value;
        setAnimeName(animename);
    };

    const checkIfExists = (anime) => {
        for (let i = 0; i < currentUser.animeList.length; i += 1) {
            if (currentUser.animeList[i].title === anime.title)
              return true;
        }
        return false;
    }

    const searchAnime = () => {
        axios.get(`https://api.jikan.moe/v3/search/anime?q=${animeName}&page=1`)
        .then((res) => {
            console.log('asdfsadf');
            setAnimes(res.data.results);
        },
        (err) => {
            console.log('asdfsadf');
            console.log(err);
        });
    };

    const addToAnimeList = (anime, list) => {
        AnimeService.addAnime(anime, list)
        .then((res) => {
            console.log(res);
            AuthService.updateUser()
            .then((res) => {
                console.log(res);
                window.location.reload();
                alert('Anime added succesfully!')
            },
            (err) => {
                console.log(err);
            });
        },
        (err) => {
            console.log(err);
        });
    };

    const deleteFromAnimeList = (anime) => {
        AnimeService.deleteAnime(anime)
        .then((res) => {
            console.log(res);
            AuthService.updateUser()
            .then((res) => {
                console.log(res);
                window.location.reload();
                alert('Anime deleted succesfully!')
            },
            (err) => {
                console.log(err);
            });
        },
        (err) => {
            console.log(err);
        });
    };

    return (
        <>
            <AddPage>
                <div className="main-content pt-5">
                    <div className="container-fluid px-0 px-sm-3">
                        <div className="row">
                            <div className="col-md-4 mx-auto my-0">
                                <div className="search">
                                    <input type="text" className="form-control rounded-pill" onChange={onChangeSearch} placeholder="Search anime..."/> 
                                    <button className="btn btn-primary rounded-pill" onClick={searchAnime}>Search</button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 m-auto pt-4">
                                <div className="searchResults">
                                    {animes && animes.map(anime => {
                                        return(
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="card animeSingle mt-2 mx-2">
                                                        <div className="col-md-2">
                                                            <img className="m-3 rounded" src={anime.image_url} alt={anime.title}/>
                                                        </div>
                                                        <div className="col-md-10">
                                                            <div className="d-flex align-items-center">
                                                                <div className="d-flex flex-column lh-1 px-1 pt-2">
                                                                    <p><b>Title: </b>{anime.title}</p>
                                                                    <p><b>Type: </b>{anime.type}</p>
                                                                    { anime.type === "Movie" ? 
                                                                        <></>
                                                                        :
                                                                        <>
                                                                            <p><b>Runtime: </b>{anime.episodes}</p>
                                                                            <p><b>Airing: </b>{anime.airing ? "Returning Series" : "Ended"}</p>
                                                                        </>
                                                                    }
                                                                    <p><b>Score: </b>{anime.score} <GiSeahorse size="1rem" color="#FFFFFF"/></p>
                                                                    <p><b>Content Rating: </b>{anime.rated}</p>
                                                                </div>
                                                                {currentUser && !checkIfExists(anime) ? 
                                                                      <div className="btn-group ms-auto me-4" role="group" aria-label="Basic example">
                                                                          <button type="button" className="btn btn-primary rounded me-2" onClick={() => addToAnimeList(anime, 'Seen')}>Add to Seen</button>
                                                                          <button type="button" className="btn btn-primary rounded" onClick={() => addToAnimeList(anime, 'Pending')}>Add to Pending</button>
                                                                      </div>
                                                                  :
                                                                      <div className="btn-group ms-auto me-4" role="group" aria-label="Basic example">
                                                                          <button type="button" className="btn btn-primary btn-delete rounded me-2" onClick={() => deleteFromAnimeList(anime)}>Delete</button>
                                                                      </div>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AddPage>
        </>
    )
}

export default AddAnime;
