import Image from "next/image"
import Link from "next/link"
import { Clock } from "lucide-react"
import { formatDate } from "@/lib/utils"
import type { NewsItem } from "@/types"

interface NewsCardProps {
  news: NewsItem
  featured?: boolean
}

export default function NewsCard({ news, featured = false }: NewsCardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow ${featured ? "flex flex-col md:flex-row" : ""}`}
    >
      <div className={`relative ${featured ? "md:w-2/5 h-60 md:h-auto" : "h-48"}`}>
        <Image
          src={news.imageUrl || "/placeholder.svg?height=600&width=800"}
          alt={news.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 left-2">
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">{news.category}</span>
        </div>
      </div>

      <div className={`p-4 ${featured ? "md:w-3/5" : ""}`}>
        <Link href={`/news/${news.id}`}>
          <h3 className={`font-bold text-gray-900 hover:text-blue-600 ${featured ? "text-xl mb-3" : "text-lg mb-2"}`}>
            {news.title}
          </h3>
        </Link>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{news.summary}</p>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{news.source || news.author}</span>
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            <span>{formatDate(news.publishedAt)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

