import axios from "axios";
const API_URL = "http://localhost:5100/";
const login = (username, senha) => {
    return axios
    .post(API_URL + "api/Home/login", {
        username,
        senha,
    })
    .then((response) => {
        console.log("response: " + JSON.stringify(response.data.token))

        if (response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }

            return response.data;
        });
    };

    const logout = () => {
        localStorage.removeItem("user");
    };

    const getCurrentUser = () => {
        return JSON.parse(localStorage.getItem("user"));
    };
    
    const AuthService = {
        API_URL,
        login,
        logout,
        getCurrentUser,
    };
export default AuthService;