import { getLatestNews } from "@/lib/data"
import NewsCard from "./news-card"

export default async function NewsGrid() {
  const news = await getLatestNews()

  if (!news || news.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No news available at the moment.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.map((item) => (
        <NewsCard key={item.id} news={item} />
      ))}
    </div>
  )
}

