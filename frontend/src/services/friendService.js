import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8081/api/friend/";

const getUser = (user) => {
    const headers = authHeader();
    const data = { userName: user };

    return axios.get(API_URL + "user/?name=" + user, {headers});
};

const addFriend = (user) => {
    const headers = authHeader();
    const data = { addUserName: user };

    return axios.post(API_URL + "makeFriendRequest", data, {headers});
};

const handleFriendRequest = (user, accepted) => {
    const headers = authHeader();
    const data = { 
        addUserName: user,
        accepted: accepted
    }

    return axios.post(API_URL + "handleFriendRequest", data, {headers});
}

const deleteFriend = (user) => {
  const headers = authHeader();
  const data = { 
      deleteUserName: user,
  }

  return axios.post(API_URL + "deleteFriend", data, {headers});
}

export default {
    getUser,
    addFriend,
    handleFriendRequest,
    deleteFriend
};