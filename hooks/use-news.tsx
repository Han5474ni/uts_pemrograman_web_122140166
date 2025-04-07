"use client"

import { useNewsContext } from "@/context/news-context"
import type { NewsItem } from "@/types"
import { useCallback, useMemo } from "react"

export function useNews() {
  const { allNews, featuredNews, isLoading, error, refreshNews } = useNewsContext()

  const getNewsByCategory = useCallback(
    (category: string): NewsItem[] => {
      return allNews.filter((news) => news.category.toLowerCase() === category.toLowerCase())
    },
    [allNews],
  )

  const getNewsById = useCallback(
    (id: number): NewsItem | undefined => {
      return allNews.find((news) => news.id === id)
    },
    [allNews],
  )

  const latestNews = useMemo(() => {
    return [...allNews]
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, 6)
  }, [allNews])

  return {
    allNews,
    featuredNews,
    latestNews,
    isLoading,
    error,
    refreshNews,
    getNewsByCategory,
    getNewsById,
  }
}

