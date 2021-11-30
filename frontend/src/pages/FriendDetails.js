import React from 'react';
import { DetailsPage } from './PageStyle';

import pp from '../assets/profile-pictures/profilePreset_6.jpg';
import mha from '../assets/images/MHA.png';

const FriendDetails = ({ currentUser }) => {
    return (
        <>
            <DetailsPage>
                <div className="main-content">
                    <div className="container-fluid px-0 px-sm-3">
                        <div className="row">
                            <div className="col-md-8 mx-auto">
                                <div className="friendDetailsContainer">
                                    <div className="row">
                                        <div className="col-md-12 d-flex flex-column align-items-center">
                                            <img className="friendDetailsProfilePicture rounded-circle" src={pp}/>
                                            <div className="pt-3 d-flex flex-column align-items-center">
                                                <button type="button" className="btn btn-primary rounded w-50">Send Friend Request</button>
                                                <p className="text-secondary">You are already a friend of this user</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="divider my-3"></div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="frienDetailsInfo">
                                                <h1 className="display-6">User information:</h1>
                                                <p className="fs-4"><span>Username: </span>Specks</p>
                                                <p className="fs-4"><span>Email: </span>specks@gmail.com</p>
                                            </div>

                                            {/* Watched anime slider START */}
                                            <h1 className="display-6">Watched animes: </h1>
                                            <div className="animeSlider">
                                                <div className="animeSlider__inner py-3">
                                                    <div className="tile">
                                                        <div className="tile__media">
                                                            <img className="tile__img" src={mha} alt="TITLE" />
                                                        </div>
                                                        <div className="tile__details">
                                                            <div className="tile__title">
                                                                TITLE
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Watched anime slider END */}

                                            {/* Pending anime slider START */}
                                            <h1 className="display-6">Pending animes: </h1>
                                            <div className="d-flex align-items-center p-5 flex-column">
                                                <p style={{color: "gray"}}>Looks like Specks hasn't added any animes yet :( </p>
                                            </div>
                                            {/* Pending anime slider END */}

                                            <div className="card bg-danger">
                                                <p>Send friend request to see anime list</p>
                                            </div>
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

export default FriendDetails;
