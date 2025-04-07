"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import NewsCard from "@/components/news-card";
import { searchNews } from "@/lib/data";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const result = await searchNews(query);
      setNews(result);
      setLoading(false);
    };

    if (query) fetchNews();
  }, [query]);

  return (
    <main className="container mx-auto px-4 py-8">
      {!query ? (
        <div className="text-center py-12">
          <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Search for News</h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Enter a search term in the search box above to find news articles.
          </p>
        </div>
      ) : (
        <>
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Search Results</h1>
            <p className="text-gray-600">
              Showing results for: <span className="font-medium">"{query}"</span>
            </p>
          </div>

          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : news.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No results found for "{query}".</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((item, index) => (
                <NewsCard key={item?.id ?? index} news={item} />
              ))}
            </div>
          )}
        </>
      )}
    </main>
  );
}
