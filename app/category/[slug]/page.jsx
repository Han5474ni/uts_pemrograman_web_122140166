"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { notFound } from "next/navigation"
import CategoryTabs from "@/components/category-tabs"
import NewsCard from "@/components/news-card"

export default function CategoryPage() {
  const params = useParams()
  const slug = params?.slug

  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) return
      const res = await fetch(`/api/news?category=${slug}`)
      const data = await res.json()
      if (!data || data.length === 0) return notFound()
      setNews(data)
    }

    fetchData()
  }, [slug])

  if (!slug) return <p>Loading...</p>

  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1)

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{categoryName} News</h1>

      <div className="my-6">
        <CategoryTabs activeCategory={slug} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </div>

      {news.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No news found in this category.</p>
        </div>
      )}
    </main>
  )
}
