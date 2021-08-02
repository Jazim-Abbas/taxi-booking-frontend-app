import axios from "axios";
import { BASE_URL } from "../utils/constants";

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    // const user = userStorage.getUser();
    // if (user && user.token) {
    //   config.headers["x-auth-token"] = user.token;
    // }
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTAzNjg0ZTk3ZWIwMzJjMzNiMzYyMjAiLCJuYW1lIjoiVXNlciAxIiwiZW1haWwiOiJ1c2VyMUBnbWFpbC5jb20iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjI3NjEzMjY3fQ.rNeohtluFRBU2duAXs3gUZo7x73WU60IdPdlX7kJp8E";

    config.headers["authorization"] = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
