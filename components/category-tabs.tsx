"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

interface CategoryTabsProps {
  activeCategory?: string
}

export default function CategoryTabs({ activeCategory }: CategoryTabsProps) {
  const pathname = usePathname()

  const categories = [
    { name: "All", slug: "" },
    { name: "Health", slug: "health" },
    { name: "Sports", slug: "sports" },
    { name: "Technology", slug: "technology" },
    { name: "Entertainment", slug: "entertainment" },
    { name: "Business", slug: "business" },
  ]

  const isActive = (slug: string) => {
    if (activeCategory) {
      return activeCategory === slug
    }

    if (slug === "" && pathname === "/") {
      return true
    }

    return pathname === `/category/${slug}`
  }

  return (
    <div className="flex overflow-x-auto pb-2 scrollbar-hide">
      <div className="flex space-x-2">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={category.slug ? `/category/${category.slug}` : "/"}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
              isActive(category.slug) ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200",
            )}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

