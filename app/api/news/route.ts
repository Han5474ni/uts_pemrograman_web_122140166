import { fetchFromNewsApi, mapArticleToNewsItem } from "@/lib/api"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get("q") || "indonesia"
    const category = searchParams.get("category") || ""

    const endpoint = "everything"
    const params: Record<string, string> = {
      q: query,
      pageSize: "20",
      sortBy: "publishedAt",
    }

    // If category is specified, add it to the query
    if (category && category !== "general") {
      params.q = `${query} ${category}`
    }

    const data = await fetchFromNewsApi(endpoint, params)

    if (data.status !== "ok") {
      throw new Error("News API returned an error")
    }

    const news = data.articles.map(mapArticleToNewsItem)

    return NextResponse.json(news)
  } catch (error) {
    console.error("Error in news API route:", error)
    return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 })
  }
}

