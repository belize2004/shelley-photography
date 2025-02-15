export function LoadingGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="aspect-[3/2] rounded-xl bg-gray-200 animate-pulse"
        />
      ))}
    </div>
  );
}