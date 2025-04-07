import LoadingSpinner from "@/components/loading-spinner"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Search Results</h1>
        <p className="text-gray-600">Loading results...</p>
      </div>
      <LoadingSpinner />
    </div>
  )
}

