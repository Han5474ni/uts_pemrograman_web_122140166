import type { NewsItem } from "@/types"
import { fetchFromNewsApi, mapArticleToNewsItem } from "./api"

export async function getLatestNews(): Promise<NewsItem[]> {
  try {
    const data = await fetchFromNewsApi("everything", {
      q: "indonesia",
      pageSize: "10",
      sortBy: "publishedAt",
    })

    if (data.status !== "ok" || !data.articles) {
      throw new Error("Invalid API response")
    }

    return data.articles.map(mapArticleToNewsItem)
  } catch (error) {
    console.error("Error fetching latest news:", error)
    return []
  }
}

export async function getNewsByCategory(category: string): Promise<NewsItem[]> {
  try {
    // For categories, we'll use the category as a search term along with Indonesia
    const query = category === "general" ? "indonesia" : `indonesia ${category}`

    const data = await fetchFromNewsApi("everything", {
      q: query,
      pageSize: "20",
      sortBy: "publishedAt",
    })

    if (data.status !== "ok" || !data.articles) {
      throw new Error("Invalid API response")
    }

    return data.articles.map(mapArticleToNewsItem)
  } catch (error) {
    console.error(`Error fetching ${category} news:`, error)
    return []
  }
}

export async function getNewsById(id: number): Promise<NewsItem | null> {
  try {
    // Since NewsAPI doesn't support fetching by ID, we'll get all news
    // and find the one with matching ID
    const allNews = await getLatestNews()
    const newsItem = allNews.find((item) => item.id === id)

    return newsItem || null
  } catch (error) {
    console.error(`Error fetching news with id ${id}:`, error)
    return null
  }
}

export async function getFeaturedNews(): Promise<NewsItem[]> {
  try {
    const data = await fetchFromNewsApi("top-headlines", {
      country: "id", // Indonesia
      pageSize: "5",
    })

    if (data.status !== "ok" || !data.articles) {
      throw new Error("Invalid API response")
    }

    return data.articles.map(mapArticleToNewsItem)
  } catch (error) {
    console.error("Error fetching featured news:", error)
    return []
  }
}

export async function searchNews(query: string): Promise<NewsItem[]> {
  try {
    if (!query.trim()) {
      return []
    }

    const data = await fetchFromNewsApi("everything", {
      q: query,
      pageSize: "20",
      sortBy: "relevancy",
    })

    if (data.status !== "ok" || !data.articles) {
      throw new Error("Invalid API response")
    }

    return data.articles.map(mapArticleToNewsItem)
  } catch (error) {
    console.error(`Error searching news for "${query}":`, error)
    return []
  }
}

