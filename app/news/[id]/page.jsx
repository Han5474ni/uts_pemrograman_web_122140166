import { getNewsById } from "@/lib/data"
import { formatDate } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock, User, ExternalLink } from "lucide-react"

export default async function NewsDetailPage(props) {
  // Tunggu props jika perlu, untuk menghindari akses properti dari promise
  const { params } = await props

  // Pastikan id valid
  const id = Number(params.id)
  if (isNaN(id)) {
    notFound()
  }

  const newsItem = await getNewsById(id)

  if (!newsItem) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Link href="/" className="flex items-center text-sm mb-6 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to home
      </Link>

      <article className="max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
            {newsItem.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{newsItem.title}</h1>

          <div className="flex flex-wrap items-center text-gray-500 text-sm mb-6">
            <div className="flex items-center mr-4 mb-2">
              <User className="h-4 w-4 mr-1" />
              <span>{newsItem.author}</span>
            </div>
            {newsItem.source && (
              <div className="flex items-center mr-4 mb-2">
                <span className="font-medium">Source: {newsItem.source}</span>
              </div>
            )}
            <div className="flex items-center mb-2">
              <Clock className="h-4 w-4 mr-1" />
              <span>{formatDate(newsItem.publishedAt)}</span>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[400px] mb-8">
          <Image
            src={newsItem.imageUrl || "/placeholder.svg?height=600&width=800"}
            alt={newsItem.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="prose max-w-none">
          {newsItem.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}

          {(newsItem.content.endsWith("[...]") || /\[\+\d+ chars\]$/.test(newsItem.content)) && (
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                This article has been truncated. To read the full article, please visit the original source:
              </p>
              {newsItem.url && (
                <a
                  href={newsItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:underline mt-2"
                >
                  Read full article
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    </main>
  )
}