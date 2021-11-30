import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddPage } from './PageStyle';
import FriendService from "../services/friendService";
import AuthService from "../services/auth.service";

const AddFriend= ({ currentUser }) => {
    const [userName, setUserName] = useState();
    const [users, setUsers] = useState();
    const history = useNavigate();

    const onChangeSearch = (e) => {
        const username = e.target.value;
        setUserName(username);
    };

    const toUserDetail = (name) => {
        history(`/friendDetails?friend=${name}`)
    }
  
    const searchUser = () => {
        FriendService.getUser(userName)
        .then((res) => {
            setUsers(res.data);
        },
        (err) => {
            console.log(err)
        });
    };

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

    return (
        <>
            <AddPage>
                <div className="main-content pt-5">
                    <div className="container-fluid px-0 px-sm-3">
                        <div className="row">
                            <div className="col-md-4 mx-auto my-0">
                                <div className="search">
                                    <input type="text" className="form-control rounded-pill" onChange={onChangeSearch} placeholder="Search friend..."/> 
                                    <button className="btn btn-primary rounded-pill" onClick={searchUser}>Search</button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5 m-auto pt-4">
                                <div className="searchResults">
                                    {users && users.map(user => {
                                        return (
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="card userSingle mt-2 mx-2" onClick={() => toUserDetail(user.userName)}>
                                                        <div className="col-md-4 d-flex">
                                                            <img className="mx-auto my-3 rounded-circle" src={user.profilePicture} alt={"profile_picture"}/>
                                                        </div>
                                                        <div className="col-md-8 d-flex align-items-center my-auto">
                                                            <div className="fs-5">
                                                                <p className="my-auto"><b>Username: </b>{user.userName}</p>
                                                            </div>
                                                            {currentUser && checkIfPendingRequest(user.userName) &&
                                                                <div className="btn-group ms-auto me-4" role="group" aria-label="Basic example">
                                                                    <button type="button" className="btn btn-primary rounded me-2 disabled">Pending invite...</button>
                                                                </div>
                                                            }
                                                            {currentUser && !checkIfFriend(user.userName) && !checkIfPendingRequest(user.userName) &&
                                                                <div className="btn-group ms-auto me-4" role="group" aria-label="Basic example">
                                                                    <button type="button" className="btn btn-primary rounded me-2" onClick={() => sendFriendRequest(user.userName)}>Send Friend Request</button>
                                                                </div>
                                                            }
                                                            {currentUser && checkIfFriend(user.userName) && !checkIfPendingRequest(user.userName) &&
                                                                <div className="btn-group ms-auto me-4" role="group" aria-label="Basic example">
                                                                    <button type="button" className="btn btn-primary rounded me-2" onClick={() => deleteFriend(user.userName)}>Delete Friend</button>
                                                                </div>
                                                            }
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

export default AddFriend;
