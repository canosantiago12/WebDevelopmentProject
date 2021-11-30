import React, { useState, useEffect } from 'react';
import { DetailsPage } from './PageStyle';
import { GiSeahorse } from "react-icons/gi";

import exp from '../assets/images/MHA.png'

const AnimeDetails = ({ currentUser }) => {
    const [anime, setAnime] = useState([{
      title: '',
      score: 0,
      image: '',
      classified: '',
      episodes: '',
      airing: false,
      rated: '',
      startDate: '',
      endDate: '',
      synopsis: ''
    }]);

    const parseDate = (str) => {
        const pos = str.indexOf('T');
        return str.substr(0, pos);
    }

    useEffect(() => {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const animeId = params.get('animeId');

        if (currentUser) {
          setAnime(currentUser.animeList.filter(el => el._id === animeId));
        }
    }, [currentUser]);

    return (
        <>
            <DetailsPage>
                <div className="main-content">
                    <div className="container-fluid px-0 px-sm-3">
                        <div className="row">
                            <div className="col-md-8 mx-auto">
                                <div className="animeDetailsContainer">
                                    <h1 className="text-start ps-4">My Hero Academia</h1>
                                    <div className="divider">
                                    </div>
                                    <div className="animeDetails d-flex pt-3 ps-4">
                                        <div className="d-flex flex-column align-items-center">
                                            <img src={anime[0].image}/>
                                        <p className="pt-2"><span>Score: </span>{anime[0].score}<GiSeahorse size="3rem" color="#FFFFFF"/></p>
                                        </div>
                                        <div className="animeDetailsText ps-4">
                                            <p><span>Title: </span>{anime[0].title}</p>
                                            <p><span>Type: </span>{anime[0].classified}</p>
                                            <p><span>Runtime: </span>{anime[0].episodes}</p>
                                            <p><span>Airing: </span>{anime[0].airing ? 'Yes' : 'No'}</p>
                                            <p><span>Content rating: </span>{anime[0].rated}</p>
                                            <p><span>Start date: </span>{parseDate(anime[0].startDate)}</p>
                                            <p><span>End date: </span>{parseDate(anime[0].endDate)}</p>
                                            <p><span>Synopsis: </span><br />{anime[0].synopsis}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DetailsPage>
        </>
    )
}

export default AnimeDetails;
