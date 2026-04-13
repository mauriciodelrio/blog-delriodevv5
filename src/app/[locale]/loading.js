// Loading UI - Shows while pages are loading
export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] p-8">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  );
}
