const API_KEY = process.env.NEWS_API_KEY || "41f9089f06164cb2b81c9e54a74bd07a"
const BASE_URL = "https://newsapi.org/v2"

export async function fetchFromNewsApi(endpoint, params = {}) {
  const queryParams = new URLSearchParams({
    ...params,
    apiKey: API_KEY,
  })

  const url = `${BASE_URL}/${endpoint}?${queryParams}`

  try {
    const response = await fetch(url, { next: { revalidate: 3600 } }) // Cache for 1 hour

    if (!response.ok) {
      throw new Error(`News API error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching from News API:", error)
    throw error
  }
}

export function mapArticleToNewsItem(article) {
  return {
    id: generateIdFromUrl(article.url),
    title: article.title || "Untitled",
    summary: article.description || "",
    content: article.content || article.description || "",
    author: article.author || (article.source?.name ?? "Unknown"),
    category: getCategoryFromArticle(article),
    imageUrl: article.urlToImage || "/placeholder.svg?height=600&width=800",
    publishedAt: article.publishedAt || new Date().toISOString(),
    source: article.source?.name || "Unknown",
    url: article.url,
  }
}

function generateIdFromUrl(url) {
  let hash = 0
  for (let i = 0; i < url.length; i++) {
    const char = url.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32bit integer
  }
  return Math.abs(hash)
}

function getCategoryFromArticle(article) {
  const url = article.url.toLowerCase()
  const title = article.title?.toLowerCase() || ""

  if (url.includes("/health") || title.includes("health")) return "health"
  if (url.includes("/sports") || title.includes("sports")) return "sports"
  if (url.includes("/tech") || title.includes("technology")) return "technology"
  if (url.includes("/entertainment") || title.includes("entertainment")) return "entertainment"
  if (url.includes("/business") || title.includes("business")) return "business"
  if (url.includes("/politics") || title.includes("politics")) return "politics"
  if (url.includes("/science") || title.includes("science")) return "science"

  return "general"
}
