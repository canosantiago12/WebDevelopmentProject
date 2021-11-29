import React from "react";
import { ProfilePage } from './PageStyle';
import { useNavigate } from 'react-router-dom';

import ejemplo from '../assets/images/MHA.png';

const Profile = ({ currentUser }) => {
  const history = useNavigate();

  const changeRoute = (props) => {
    history(props);
  }

  return (
    <>
      <ProfilePage>
        <div className="main-content">
          <div className="container-fluid px-0 px-sm-3">
            <div className="row">
              <div className="col-md-3 ps-5">
                <div className="card card-profile p-4">
                  <h1>Your Profile:</h1>
                  <img src={currentUser && currentUser.profilePicture} className="profile-img-card" alt="profile_pic"/>
                  <h2>
                    <strong>{currentUser && currentUser.userName}</strong>
                  </h2>
                  <p>
                    <strong>Email:</strong> { currentUser && currentUser.email}
                  </p>
                </div>
              </div>
              <div className="col-md-9 px-5">
                <div className="row">
                  <div className="card card-profile mb-3">
                    <h1 className="text-center pt-4">My Anime List</h1>
                    <hr/>
                    {currentUser && currentUser.animeList ?
                      <div className="wrapper mx-5 py-2">
                        <section id="section1">
                          <a href="#section3">‹</a>
                          <div className="itemAnime">
                            <img src={ejemplo} alt="anime"/>
                            <p className="animeTitle">My Hero Academia</p>
                          </div>
                          <div className="itemAnime">
                            <img src={ejemplo} alt="anime"/>
                            <p className="animeTitle">My Hero Academia</p>
                          </div>
                          <div className="itemAnime">
                            <img src={ejemplo} alt="anime"/>
                            <p className="animeTitle">My Hero Academia</p>
                          </div>
                          <div className="itemAnime">
                            <img src={ejemplo} alt="anime"/>
                            <p className="animeTitle">My Hero Academia</p>
                          </div>
                          <div className="itemAnime">
                            <img src={ejemplo} alt="anime"/>
                            <p className="animeTitle">My Hero Academia</p>
                          </div>
                          <a href="#section2">›</a>
                        </section>
                        <section id="section2">
                          <a href="#section1" className="arrow__btn">‹</a>
                          <div className="itemAnime">
                            <img src="" alt="anime"/>
                            <p className="animeTitle">My Hero Academia</p>
                          </div>
                          <a href="#section3" className="arrow__btn">›</a>
                        </section>
                        <section id="section3">
                          <a href="#section2" className="arrow__btn">‹</a>
                          <div className="itemAnime">
                            <img src="" alt="anime"/>
                            <p className="animeTitle">My Hero Academia</p>
                          </div>
                          <a href="#section1" className="arrow__btn">›</a>
                        </section>
                      </div>
                      :
                      <div className="d-flex align-items-center p-5 flex-column">
                        <p style={{color: "gray"}}>Looks like you haven't added any anime yet :( </p>
                        <button type="button" className="btn btn-primary" onClick={() => changeRoute('/add')}>Add anime</button>
                      </div>
                    }
                  </div>
                </div>
                <div className="row">
                  <div className="card card-profile">
                    <h1 className="text-center pt-4">My Friends</h1>
                    <hr/>
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
                        <button className="btn btn-primary">Add friend</button>
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