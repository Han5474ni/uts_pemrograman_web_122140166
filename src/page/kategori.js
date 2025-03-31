// src/pages/Category.js
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchNews } from "../api";
import NewsCard from "../components/NewsCard";

const Category = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNews(category).then(setArticles);
  }, [category]);

  return (
    <div>
      <h2>{category.toUpperCase()} News</h2>
      {articles.map((news, index) => (
        <NewsCard key={index} article={news} />
      ))}
    </div>
  );
};

export default Category;
