import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8081/api/friend/";

const getUser = (user) => {
    const headers = authHeader();
    const data = { userName: user };

    return axios.get(API_URL + "user/?name=" + user, {headers});
};

export default {
    getUser,
};