import ProductCard from "./ProductCard";

export default function ProductGrid({ items = [] as any[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 mobile:grid-cols-3 laptop:grid-cols-6">
      {items.map((p) => (
        <ProductCard key={p.id} p={p} />
      ))}
      {/* skeleton lấp kín chỗ trống */}
      {Array.from({ length: Math.max(0, 24 - items.length) }).map((_, i) => (
        <div
          key={"sk" + i}
          className="rounded-lg border bg-white p-2 opacity-50"
        >
          <div className="aspect-square w-full animate-pulse rounded bg-gray-100" />
          <div className="mt-2 h-4 w-3/4 animate-pulse rounded bg-gray-100" />
          <div className="mt-1 h-4 w-1/2 animate-pulse rounded bg-gray-100" />
        </div>
      ))}
    </div>
  );
}
