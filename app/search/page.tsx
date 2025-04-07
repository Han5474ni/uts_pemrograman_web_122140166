import { searchNews } from "@/lib/data"
import NewsCard from "@/components/news-card"
import type { SearchParams } from "@/types"
import { Search } from "lucide-react"

export default async function SearchPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const query = searchParams.q || ""
  const news = query ? await searchNews(query) : []

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Search Results</h1>
        {query && (
          <p className="text-gray-600">
            Showing results for: <span className="font-medium">"{query}"</span>
          </p>
        )}
      </div>

      {!query && (
        <div className="text-center py-12">
          <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Search for News</h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Enter a search term in the search box above to find news articles.
          </p>
        </div>
      )}

      {query && news.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No results found for "{query}".</p>
        </div>
      )}

      {news.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      )}
    </main>
  )
}

