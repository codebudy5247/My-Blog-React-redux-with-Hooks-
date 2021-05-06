import axios from "axios";

const API = axios.create({ baseURL: "https://blog-app-backend-server.herokuapp.com" });

export const fetchPosts = () => API.get("/posts");