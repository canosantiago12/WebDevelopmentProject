import React, { useState, useEffect } from 'react';
import { DetailsPage } from './PageStyle';
import FriendService from '../services/friendService';
import AuthService from '../services/auth.service';

import pp from '../assets/profile-pictures/profilePreset_6.jpg';
import mha from '../assets/images/MHA.png';

const FriendDetails = ({ currentUser }) => {
      const [friend, setFriend] = useState([]);

      const checkIfFriend = (user) => {
        for (let i = 0; i < currentUser.friends.length; i += 1) {
            if (currentUser.friends[i].userName === user)
              return true;
        }
        return false;
      }
  
      const checkIfPendingRequest = (user) => {
        for (let i = 0; i < currentUser.friendRequestsSent.length; i += 1) {
            if (currentUser.friendRequestsSent[i] === user)
              return true;
        }
        for (let i = 0; i < currentUser.friendRequestsReceived.length; i += 1) {
          if (currentUser.friendRequestsReceived[i] === user)
            return true;
        }
        return false;
      }

      const sendFriendRequest = (user) => {
          FriendService.addFriend(user)
          .then((res) => {
              AuthService.updateUser()
              .then((res) => {
                  console.log(res);
                  window.location.reload();
                  alert(`Friend request sent to ${user}`)
              },
              (err) => {
                  console.log(err);
              });
          },
          (err) => {
              console.log(err)
          });
      };

    const deleteFriend = (user) => {
        FriendService.deleteFriend(user)
        .then((res) => {
            AuthService.updateUser()
            .then((res) => {
                console.log(res);
                window.location.reload();
                alert(`Friend deleted`)
            },
            (err) => {
                console.log(err);
            });
        },
        (err) => {
            console.log(err)
        });
    };

      useEffect(() => {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const fparam = params.get('friend');

        if (currentUser) {
          FriendService.getUser(fparam)
          .then((res) => {
              console.log(res.data)
              setFriend(res.data[0]);
          },
          (err) => {
              console.log(err);
          });
        }
    }, [currentUser]);

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
                                            <img className="friendDetailsProfilePicture rounded-circle" src={friend.profilePicture}/>
                                            <div className="pt-3 d-flex flex-column align-items-center">
                                                {currentUser && checkIfPendingRequest(friend.userName) &&
                                                    <p className="text-secondary">Pending Invite...</p>
                                                }
                                                {currentUser && !checkIfFriend(friend.userName) && !checkIfPendingRequest(friend.userName) &&
                                                    <button type="button" className="btn btn-primary rounded w-50" onClick={() => sendFriendRequest(friend.userName)}>Send Friend Request</button>
                                                }
                                                {currentUser && checkIfFriend(friend.userName) && !checkIfPendingRequest(friend.userName) &&
                                                    <>
                                                    <p className="text-secondary">You are already a friend of this user</p>
                                                    <button type="button" className="btn btn-primary rounded w-50" onClick={() => deleteFriend(friend.userName)}>Delete Friend</button>
                                                    </>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="divider my-3"></div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="frienDetailsInfo">
                                                <h1 className="display-6">User information:</h1>
                                                <p className="fs-4"><span>Username: </span>{friend.userName}</p>
                                                <p className="fs-4"><span>Email: </span>{friend.email}</p>
                                            </div>
                                            {currentUser && friend && friend.friends && friend.friends.filter(el => el.userName === currentUser.userName).length <= 0 ?
                                                <div className="card bg-danger">
                                                    <p>Send friend request to see watched animes list</p>
                                                </div>
                                            :
                                                /* Watched anime slider START */
                                                friend && friend.animeList && friend.animeList.filter(el => el.seen === true).length > 0 ?
                                                    <>
                                                    <h1 className="display-6">Watched animes: </h1>
                                                    <div className="animeSlider">
                                                        <div className="animeSlider__inner py-3">
                                                            {friend.animeList.filter(el => el.seen === true).map(el => {
                                                                return (
                                                                    <div className="tile">
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
                                                    <h1 className="display-6">Watched animes: </h1>
                                                    <div className="d-flex align-items-center p-5 flex-column">
                                                        <p style={{color: "gray"}}>Looks like {friend.userName} hasn't added any animes yet :( </p>
                                                    </div>
                                                    </>
                                                /* Watched anime slider END */
                                            }

                                            {currentUser && friend && friend.friends && friend.friends.filter(el => el.userName === currentUser.userName).length <= 0 ?
                                                <div className="card bg-danger">
                                                    <p>Send friend request to see pending animes list</p>
                                                </div>
                                            :
                                                /* Pending anime slider START */
                                                friend && friend.animeList && friend.animeList.filter(el => el.seen === false).length > 0 ?
                                                    <>
                                                    <h1 className="display-6">Pending animes: </h1>
                                                    <div className="animeSlider">
                                                        <div className="animeSlider__inner py-3">
                                                            {friend.animeList.filter(el => el.seen === false).map(el => {
                                                                return (
                                                                    <div className="tile">
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
                                                    <h1 className="display-6">Pending animes: </h1>
                                                    <div className="d-flex align-items-center p-5 flex-column">
                                                        <p style={{color: "gray"}}>Looks like {friend.userName} hasn't added any animes yet :( </p>
                                                    </div>
                                                    </>
                                                /* Pending anime slider END */
                                            }
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
