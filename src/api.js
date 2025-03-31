// src/api.js
import axios from "axios";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

export const fetchNews = async (category = "general") => {
  const response = await axios.get(
    `${BASE_URL}/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
  );
  return response.data.articles;
};
