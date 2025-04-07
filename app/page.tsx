import NewsSlider from "@/components/news-slider"
import NewsGrid from "@/components/news-grid"
import CategoryTabs from "@/components/category-tabs"
import { Suspense } from "react"
import LoadingSpinner from "@/components/loading-spinner"

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Latest News</h1>

      <Suspense fallback={<LoadingSpinner />}>
        <NewsSlider />
      </Suspense>

      <div className="my-8">
        <CategoryTabs />
      </div>

      <h2 className="text-2xl font-bold mb-6">Top Stories</h2>
      <Suspense fallback={<LoadingSpinner />}>
        <NewsGrid />
      </Suspense>
    </main>
  )
}

