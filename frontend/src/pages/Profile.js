import React, { useState, useEffect } from "react";
import { ProfilePage } from './PageStyle';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';
import FriendService from "../services/friendService";

import ejemplo from '../assets/images/MHA.png';

const Profile = ({ currentUser }) => {
  const [friend, setFriend] = useState();
  const [count, setCount] = useState(0);
  const history = useNavigate();

  const changeRoute = (props) => {
    history(props);
  }

  const handleFriendRequest = (user, accepted) => {
    FriendService.handleFriendRequest(user, accepted)
    .then((res) => {
      console.log(res);
      AuthService.updateUser()
      .then((res) => {
        console.log(res);
        window.location.reload();
        const msg = accepted ? 'accepted' : 'rejected';
        alert('Friend request ' + msg);
      },
      (err) => {
        console.log(err);
      });
    },
    (err) => {
      console.log(err)
    });
  }

  return (
    <>
      <ProfilePage>
        <div className="main-content pt-3">
          <div className="container-fluid px-0 px-sm-3">
            <div className="row">
              <div className="col-md-3 px-4 pb-2">
                <div className="row">
                  <div className="newCard" style={{width: "100%"}}>
                    <div className="imgBx">
                      <img src={currentUser && currentUser.profilePicture} alt="profile_pic" style={{height: "20vh", width: "20vh"}}/>
                    </div>
                    <div className="contentBx">
                      <div className="contentTitle">
                        <h1 className="pb-3">Your Profile: </h1>
                        <hr />
                      </div>
                      <div className="contentBody d-flex flex-column">
                        <h2>
                          <strong>{currentUser && currentUser.userName}</strong>
                        </h2>
                        <p>
                          <strong>Email:</strong> { currentUser && currentUser.email}
                        </p>
                        <p>
                          <strong>Total animes watched:</strong> { currentUser && currentUser.animeList.filter(el => el.seen === true).length }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="card card-profile cardBG p-4 mt-3" style={{width: "100%"}}>
                    <h1>Your Friend Requests:</h1>
                    {currentUser && !(currentUser.friendRequestsReceived.length > 0) &&
                      <div className="col-md-4 ps-3">
                        <p className="text-secondary">No pending friend requests</p>
                      </div>
                    }
                      {currentUser && currentUser.friendRequestsReceived && currentUser.friendRequestsReceived.map(user => {
                        return (
                          <div className="row">
                            <div className="col-12">
                              <div className="card userSingle p-3">
                                <div className="col-md-12 d-flex flex-column">
                                  <div className="fs-5">
                                    <p><b>Username: </b>{user}</p>
                                  </div>
                                  <div className="btn-group mx-auto" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-success rounded me-2 h-25" onClick={() => handleFriendRequest(user, true)}>Accept</button>
                                    <button type="button" className="btn btn-danger rounded me-2 h-25" onClick={() => handleFriendRequest(user, false)}>Reject</button>
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
              <div className="col-md-9 px-5">
                {/* Watched anime wrapper START */}
                <div className="row">
                  <div className="card card-profile mb-3">
                    {currentUser && currentUser.animeList.filter(el => el.seen === true).length > 0 ?
                      <>
                        <div className="row mt-4">
                          <div className="col-md-12 d-flex justify-content-center px-5">
                            <h1 className="text-center mb-0">Watched Anime</h1>
                            <button className="btn btn-primary ms-auto" onClick={() => changeRoute('/addAnime')}>Add anime</button>
                          </div>
                        </div>
                        <hr className="mb-0"/>
                        <div className="animeSlider">
                          <div className="animeSlider__inner py-3">
                            {/* Anime tile */}
                            {currentUser.animeList.filter(el => el.seen === true).map(el => {
                              return(
                                <div className="tile" onClick={() => changeRoute(`/animeDetails?animeId=${el._id}`)}>
                                  <div className="tile__media">
                                    <img className="tile__img" src={el.image} alt={el.title} />
                                  </div>
                                  <div className="tile__details">
                                    <div className="tile__title">
                                      {el.title}
                                    </div>
                                  </div>
                                </div>
                              );
                          })}
                          </div>
                        </div>
                      </>
                    :
                      <>
                        <div className="row mt-4">
                          <div className="col-md-12 d-flex justify-content-center px-5">
                            <h1 className="text-center mb-0">Watched Anime</h1>
                          </div>
                        </div>
                        <hr className="mb-0"/>
                        <div className="d-flex align-items-center p-5 flex-column">
                          <p style={{color: "gray"}}>Looks like you haven't added any animes yet :( </p>
                          <button className="btn btn-primary" onClick={() => changeRoute('/addAnime')}>Add anime</button>
                        </div>
                      </>
                    }
                  </div>
                </div>
                {/* Watched anime wrapper END */}

                {/* Pending anime wrapper START */}
                <div className="row">
                  <div className="card card-profile mb-3">
                    {currentUser && currentUser.animeList.filter(el => el.seen === false).length > 0 ?
                      <>
                        <div className="row mt-4">
                          <div className="col-md-12 d-flex justify-content-center px-5">
                            <h1 className="text-center mb-0">Pending Anime</h1>
                            <button className="btn btn-primary ms-auto" onClick={() => changeRoute('/addAnime')}>Add anime</button>
                          </div>
                        </div>
                        <hr className="mb-0"/>
                        <div className="animeSlider">
                          <div className="animeSlider__inner py-3">
                            {/* Anime tile */}
                            {currentUser.animeList.filter(el => el.seen === false).map(el => {
                              return(
                                <div className="tile" onClick={() => changeRoute(`/animeDetails?animeId=${el._id}`)}>
                                  <div className="tile__media">
                                    <img className="tile__img" src={el.image} alt={el.title} />
                                  </div>
                                  <div className="tile__details">
                                    <div className="tile__title">
                                      {el.title}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    :
                      <>
                        <div className="row mt-4">
                          <div className="col-md-12 d-flex justify-content-center px-5">
                            <h1 className="text-center mb-0">Pending Anime</h1>
                          </div>
                        </div>
                        <hr className="mb-0"/>
                        <div className="d-flex align-items-center p-5 flex-column">
                          <p style={{color: "gray"}}>Looks like you haven't added any animes yet :( </p>
                          <button className="btn btn-primary" onClick={() => changeRoute('/addAnime')}>Add anime</button>
                        </div>
                      </>
                    }
                  </div>
                </div>
                {/* Pending anime wrapper END */}

                {/* Friends anime wrapper START */}
                <div className="row">
                  <div className="card card-profile mb-3">
                    {currentUser && currentUser.friends.length > 0 ?
                      <>
                        <div className="row mt-4">
                          <div className="col-md-12 d-flex justify-content-center px-5">
                            <h1 className="text-center mb-0">Friends</h1>
                            <button className="btn btn-primary ms-auto" onClick={() => changeRoute('/addFriend')}>Add friend</button>
                          </div>
                        </div>
                        <hr className="mb-0"/>
                        <div className="animeSlider">
                          <div className="animeSlider__inner py-3">
                            {/* Friend tile */}
                            {currentUser.friends.map(el => {
                              return(
                                <div className="tileFriend" onClick={() => changeRoute('/friendDetails')}>
                                  <div className="tileFriend__media">
                                    <img className="tileFriend__img" src={el.profilePicture} alt={el.userName} />
                                  </div>
                                  <div className="tileFriend__details">
                                    <div className="tileFriend__title text-center">
                                      {el.userName}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    :
                      <>
                        <div className="row mt-4">
                          <div className="col-md-12 d-flex justify-content-center px-5">
                            <h1 className="text-center mb-0">Friends</h1>
                          </div>
                        </div>
                        <hr className="mb-0"/>
                        <div className="d-flex align-items-center p-5 flex-column">
                          <p style={{color: "gray"}}>Looks like you haven't added any friends yet :( </p>
                          <button className="btn btn-primary" onClick={() => changeRoute('/addFriend')}>Add friend</button>
                        </div>
                      </>
                    }
                  </div>
                </div>
                {/* Friends wrapper END */}
              </div>
            </div>
          </div>
        </div>
      </ProfilePage>
    </>
  );
};

export default Profile;