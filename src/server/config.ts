import axios from "axios";

const baseURL = "https://dummyjson.com";

export const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json",
  },
});
