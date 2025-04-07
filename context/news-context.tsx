"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { NewsItem } from "@/types"

interface NewsContextType {
  allNews: NewsItem[]
  featuredNews: NewsItem[]
  isLoading: boolean
  error: string | null
  refreshNews: () => Promise<void>
}

const NewsContext = createContext<NewsContextType | undefined>(undefined)

export function NewsProvider({ children }: { children: ReactNode }) {
  const [allNews, setAllNews] = useState<NewsItem[]>([])
  const [featuredNews, setFeaturedNews] = useState<NewsItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchNews = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/news")

      if (!response.ok) {
        throw new Error("Failed to fetch news")
      }

      const data = await response.json()

      setAllNews(data)
      setFeaturedNews(data.filter((item: NewsItem) => item.featured).slice(0, 5))
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
      console.error("Error fetching news:", err)
    } finally {
      setIsLoading(false)
    }
  }

  const refreshNews = async () => {
    await fetchNews()
  }

  useEffect(() => {
    fetchNews()
  }, [])

  return (
    <NewsContext.Provider value={{ allNews, featuredNews, isLoading, error, refreshNews }}>
      {children}
    </NewsContext.Provider>
  )
}

export function useNewsContext() {
  const context = useContext(NewsContext)

  if (context === undefined) {
    throw new Error("useNewsContext must be used within a NewsProvider")
  }

  return context
}

