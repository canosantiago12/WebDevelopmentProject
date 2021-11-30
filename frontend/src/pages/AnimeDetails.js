import React from 'react';
import { DetailsPage } from './PageStyle';

const AnimeDetails = ({ currentUser }) => {
    return (
        <>
            <DetailsPage>
                <div className="main-content">
                    <div className="container-fluid px-0 px-sm-3">
                        <dv className="row">
                            <div className="col-md-4 mx-auto">
                                <div className="animeDetailsContainer">
                                    <h1 className="text-start">Anime title</h1>
                                    <hr />
                                    <div className="animeDetails">

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
