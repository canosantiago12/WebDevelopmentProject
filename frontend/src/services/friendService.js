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
    console.log(user);
    const data = { addUserName: user };

    return axios.post(API_URL + "makeFriendRequest", data, {headers});
}

export default {
    getUser,
    addFriend
};