export interface NewsItem {
  id: number
  title: string
  summary: string
  content: string
  author: string
  category: string
  imageUrl: string
  publishedAt: string
  featured?: boolean
  source?: string
  url?: string
}

// NewsAPI.org response types
export interface NewsApiResponse {
  status: string
  totalResults: number
  articles: NewsApiArticle[]
}

export interface NewsApiArticle {
  source: {
    id: string | null
    name: string
  }
  author: string | null
  title: string
  description: string | null
  url: string
  urlToImage: string | null
  publishedAt: string
  content: string | null
}

export interface SearchParams {
  q?: string
}

