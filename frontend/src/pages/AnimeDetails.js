import React from 'react';
import { DetailsPage } from './PageStyle';
import { GiSeahorse } from "react-icons/gi";

import exp from '../assets/images/MHA.png'

const AnimeDetails = ({ currentUser }) => {
    return (
        <>
            <DetailsPage>
                <div className="main-content">
                    <div className="container-fluid px-0 px-sm-3">
                        <dv className="row">
                            <div className="col-md-8 mx-auto">
                                <div className="animeDetailsContainer">
                                    <h1 className="text-start ps-4">My Hero Academia</h1>
                                    <div className="divider">
                                    </div>
                                    <div className="animeDetails d-flex pt-3 ps-4">
                                        <div className="d-flex flex-column align-items-center">
                                        <img src={exp}/>
                                        <p className="pt-2"><span>Score: </span><GiSeahorse size="3rem" color="#FFFFFF"/></p>
                                        </div>
                                        <div className="animeDetailsText ps-4">
                                            <p><span>Title: </span></p>
                                            <p><span>Type: </span></p>
                                            <p><span>Runtime: </span></p>
                                            <p><span>Airing: </span></p>
                                            <p><span>Content rating: </span></p>
                                            <p><span>Start date: </span></p>
                                            <p><span>End date: </span></p>
                                            <p><span>Synopsis: </span><br /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </dv>
                    </div>
                </div>
            </DetailsPage>
        </>
    )
}

export default AnimeDetails;
