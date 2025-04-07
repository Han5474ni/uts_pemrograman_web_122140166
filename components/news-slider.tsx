"use client"

import { useRef, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useNews } from "@/hooks/use-news"

export default function NewsSlider() {
  const { featuredNews, isLoading, error } = useNews()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  const totalSlides = featuredNews?.length || 0

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Handle autoplay
  useEffect(() => {
    if (autoplay && totalSlides > 0) {
      autoplayRef.current = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [autoplay, currentSlide, totalSlides])

  // Pause autoplay on hover
  const pauseAutoplay = () => setAutoplay(false)
  const resumeAutoplay = () => setAutoplay(true)

  if (isLoading) {
    return <div className="h-96 flex items-center justify-center">Loading featured news...</div>
  }

  if (error) {
    return <div className="h-96 flex items-center justify-center text-red-500">Error loading featured news</div>
  }

  if (!featuredNews || featuredNews.length === 0) {
    return <div className="h-96 flex items-center justify-center">No featured news available</div>
  }

  return (
    <div
      className="relative h-96 overflow-hidden rounded-xl"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {featuredNews.map((news) => (
          <div key={news.id} className="min-w-full h-full relative">
            <div className="absolute inset-0">
              <img src={news.imageUrl || "/placeholder.svg"} alt={news.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded-full mb-3">
                {news.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{news.title}</h2>
              <p className="text-sm md:text-base mb-4 line-clamp-2">{news.summary}</p>
              <a
                href={`/news/${news.id}`}
                className="inline-block bg-white text-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {featuredNews.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  )
}

