import React, { useState } from 'react';
import { AddPage } from './PageStyle';
import FriendService from "../services/friendService";

const AddFriend= ({ currentUser }) => {
    const [userName, setUserName] = useState();
    const [users, setUsers] = useState();

    const onChangeSearch = (e) => {
        const username = e.target.value;
        setUserName(username);
    };
  
    const searchUser = () => {
        FriendService.getUser(userName)
        .then((res) => {
          setUsers(res.data);
        },
        (err) => {
          console.log(err)
        });
    }

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
                                                    <div className="card userSingle mt-2 mx-2">
                                                        <div className="col-md-4 d-flex">
                                                            <img className="mx-auto my-3 rounded-circle" src={user.profilePicture} alt={"profile_picture"}/>
                                                        </div>
                                                        <div className="col-md-8 d-flex my-auto">
                                                            <div className="fs-5">
                                                                <p><b>Username: </b>{user.userName}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
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
