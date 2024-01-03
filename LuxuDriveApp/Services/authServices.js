import { httpClient } from "../utils/HttpClient";

export const login = (data) => {
    console.log("Login Data- > Email: "+ data.UsernameOrEmail);
    console.log("Login Data- > Password: "+ data.password);
    return httpClient.post('api/Auth/Login', data);
};
export const register = (data) => {
    return httpClient.post('api/Auth/register', data);
};



