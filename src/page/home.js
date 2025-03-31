// src/pages/Home.js
import { useState, useEffect } from "react";
import { fetchNews } from "../api";
import NewsCard from "../components/NewsCard";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      const newsData = await fetchNews();
      setArticles(newsData);
      setLoading(false);
    };
    getNews();
  }, []);

  return (
    <div>
      <h2>Latest News</h2>
      {loading ? <p>Loading...</p> : articles.map((news, index) => (
        <NewsCard key={index} article={news} />
      ))}
    </div>
  );
};

export default Home;
