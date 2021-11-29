import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8081/api/auth/";

const register = (username, email, password, profilePicture) => {
    return axios.post(API_URL + "signup", {
        userName: username,
        email: email,
        password: password,
        profilePicture: profilePicture
    });
};

const login = (username, password) => {
    return axios
        .post(API_URL + "signin", {
            userName: username,
            password: password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = async () => {
    return JSON.parse(localStorage.getItem("user"));
};

export default {
    register,
    login,
    logout,
    getCurrentUser,
};