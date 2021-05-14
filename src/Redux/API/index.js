import axios from "axios";

const API = axios.create({ baseURL: "https://blogs-app-api.herokuapp.com/" });

export const fetchPosts = () => API.get("/posts");
