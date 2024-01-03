// utils/HttpClient.js
import Axios from "axios";

const api = Axios.create({
  baseURL: "https://192.168.1.67:7152/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json", // Fixed header value
  },
});

class HttpClient {
  get(url, configs) {
    return api.get(url, configs);
  }

  post(url, data, configs) {
    console.log("HttpClient Data- > Email: "+ data.UsernameOrEmail);
    console.log("HttpClient Data- > Password: "+ data.password);
    return api.post(url, data, configs);
  }

  put(url, data, configs) {
    return api.put(url, data, configs);
  }

  delete(url, config) {
    return api.delete(url, config);
  }
}

export const httpClient = new HttpClient();









