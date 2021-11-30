import React, { useState, useEffect } from "react";
import { ProfilePage } from './PageStyle';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';

import ejemplo from '../assets/images/MHA.png';

const Profile = ({ currentUser }) => {
  const [count, setCount] = useState(0);
  const history = useNavigate();

  const changeRoute = (props) => {
    history(props);
  }

  return (
    <>
      <ProfilePage>
        <div className="main-content pt-3">
          <div className="container-fluid px-0 px-sm-3">
            <div className="row">
              <div className="col-md-3 px-4 pb-2">
                <div className="card card-profile p-4" style={{width: "100%"}}>
                  <h1>Your Profile:</h1>
                  <img src={currentUser && currentUser.profilePicture} className="profile-img-card my-3" alt="profile_pic" style={{height: "20vh", width: "20vh"}}/>
                  <h2>
                    <strong>{currentUser && currentUser.userName}</strong>
                  </h2>
                  <p>
                    <strong>Email:</strong> { currentUser && currentUser.email}
                  </p>
                </div>
              </div>
              <div className="col-md-9 px-5">
                {/* Watched anime wrapper START */}
                <div className="row">
                  <div className="card card-profile mb-3">
                    <h1 className="text-center pt-4 mb-0">Watched anime</h1>
                    <hr className="mb-0"/>
                    {currentUser && currentUser.animeList ?
                      <div className="animeSlider">
                        <div className="animeSlider__inner">
                          {/* Anime tile */}
                          <div className="tile">
                            <div className="tile__media">
                              <img className="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-7.jpg" />
                            </div>
                            <div className="tile__details">
                              <div className="tile__title">
                                Top Gear
                              </div>
                            </div>
                          </div>

                          <div className="tile">
                            <div className="tile__media">
                              <img className="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-7.jpg" />
                            </div>
                            <div className="tile__details">
                              <div className="tile__title">
                                Top Gear
                              </div>
                            </div>
                          </div>

                          <div className="tile">
                            <div className="tile__media">
                              <img className="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-7.jpg" />
                            </div>
                            <div className="tile__details">
                              <div className="tile__title">
                                Top Gear
                              </div>
                            </div>
                          </div>

                          <div className="tile">
                            <div className="tile__media">
                              <img className="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-7.jpg" />
                            </div>
                            <div className="tile__details">
                              <div className="tile__title">
                                Top Gear
                              </div>
                            </div>
                          </div>

                          <div className="tile">
                            <div className="tile__media">
                              <img className="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-7.jpg" />
                            </div>
                            <div className="tile__details">
                              <div className="tile__title">
                                Top Gear
                              </div>
                            </div>
                          </div>

                          <div className="tile">
                            <div className="tile__media">
                              <img className="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-7.jpg" />
                            </div>
                            <div className="tile__details">
                              <div className="tile__title">
                                Top Gear
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    :
                      <div className="d-flex align-items-center p-5 flex-column">
                        <p style={{color: "gray"}}>Looks like you haven't added any friends yet :( </p>
                        <button className="btn btn-primary" onClick={() => changeRoute('/addAnime')}>Add anime</button>
                      </div>
                    }
                  </div>
                </div>
                {/* Watched anime wrapper END */}

                {/* Pending anime wrapper START */}

                {/* Pending anime wrapper END */}

                {/* Friend wrapper START */}
                <div className="row">
                  <div className="card card-profile">
                    <h1 className="text-center pt-4">My Friends</h1>
                    <hr className="mb-0"/>
                    {currentUser && currentUser.friends ?
                      <div className="wrapper mx-5">
                        <section id="section1_car2">
                          <a href="#section3_car2" className="arrow__btn">‹</a>
                          <div className="itemFriend">
                            <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="profile-img" className="profile-img-card"/>
                            <p className="text-center">CACA</p>
                          </div>
                          <div className="itemFriend">
                            <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="profile-img" className="profile-img-card"/>
                            <p className="text-center">CACA</p>
                          </div>
                          <div className="itemFriend">
                            <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="profile-img" className="profile-img-card"/>
                            <p className="text-center">CACA</p>
                          </div>
                          <div className="itemFriend">
                            <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="profile-img" className="profile-img-card"/>
                            <p className="text-center">CACA</p>
                          </div>
                          <div className="itemFriend">
                            <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="profile-img" className="profile-img-card"/>
                            <p className="text-center">CACA</p>
                          </div>
                          <a href="#section2_car2" className="arrow__btn">›</a>
                        </section>
                        <section id="section2_car2">
                          <a href="#section1_car2" className="arrow__btn">‹</a>
                          <div className="itemFriend">
                            <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="profile-img" className="profile-img-card"/>
                            <p className="text-center">CACA</p>
                          </div>
                          <div className="itemFriend">
                            <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="profile-img" className="profile-img-card"/>
                            <p className="text-center">CACA</p>
                          </div>
                          <div className="itemFriend">
                            <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="profile-img" className="profile-img-card"/>
                            <p className="text-center">CACA</p>
                          </div>
                          <div className="itemFriend">
                            <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="profile-img" className="profile-img-card"/>
                            <p className="text-center">CACA</p>
                          </div>
                          <div className="itemFriend">
                            <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="profile-img" className="profile-img-card"/>
                            <p className="text-center">CACA</p>
                          </div>
                          <a href="#section3_car2" className="arrow__btn">›</a>
                        </section>
                        <section id="section3_car2">
                          <a href="#section2_car2" className="arrow__btn">‹</a>
                          <div className="itemFriend">
                            <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="profile-img" className="profile-img-card"/>
                            <p className="text-center">CACA</p>
                          </div>
                          <div className="itemFriend">
                            <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="profile-img" className="profile-img-card"/>
                            <p className="text-center">CACA</p>
                          </div>
                          <div className="itemFriend">
                            <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="profile-img" className="profile-img-card"/>
                            <p className="text-center">CACA</p>
                          </div>
                          <div className="itemFriend">
                            <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="profile-img" className="profile-img-card"/>
                            <p className="text-center">CACA</p>
                          </div>
                          <div className="itemFriend">
                            <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="profile-img" className="profile-img-card"/>
                            <p className="text-center">CACA</p>
                          </div>
                          <a href="#section1_car2" className="arrow__btn">›</a>
                        </section>
                      </div>
                    :
                      <div className="d-flex align-items-center p-5 flex-column">
                        <p style={{color: "gray"}}>Looks like you haven't added any friends yet :( </p>
                        <button className="btn btn-primary" onClick={() => changeRoute('/addFriend')}>Add friend</button>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProfilePage>
    </>
  );
};

export default Profile;