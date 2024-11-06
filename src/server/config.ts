import axios from "axios";

export const isDevelop = true;
const baseURL = "https://dummyjson.com";

export const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json",
  },
});
