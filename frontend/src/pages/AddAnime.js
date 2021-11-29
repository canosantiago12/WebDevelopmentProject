import React, { useState } from 'react';
import axios from 'axios';
import { AddPage } from './PageStyle';
import { FaSearch } from "react-icons/fa";

const AddAnime = ({ currentUser }) => {
    const [animeName, setAnimeName] = useState();
    const [animes, setAnimes] = useState();

    const onChangeSearch = (e) => {
        const animename = e.target.value;
        setAnimeName(animename);
    };

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
                            <div className="col-md-5 m-auto pt-4">
                                <div className="searchResults">
                                    {animes && animes.map(anime => {
                                        return(
                                            <div>
                                                <img src={anime.image_url} alt={anime.title}/>
                                                <p>{anime.title}</p>
                                            </div>
                                        );
                                    })
                                    };
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
