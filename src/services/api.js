import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "b0ab58a428adb9626ac45cf149ec37a7",
    language: "pt-BR",
    page: 1,
  },
});

export default api;
