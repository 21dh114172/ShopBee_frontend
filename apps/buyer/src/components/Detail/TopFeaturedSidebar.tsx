type Item = {
  id: string;
  name: string;
  image: string;
  priceFrom: number;
  priceTo?: number; // nếu có khoảng giá
  href?: string;
};

export default function TopFeaturedSidebar({ items = [] as Item[] }) {
  if (!items.length) return null;

  return (
    <aside className="rounded-lg bg-white p-3 shadow laptop:sticky laptop:top-20">
      <h3 className="mb-3 px-1 text-sm font-semibold text-gray-700">
        Top Sản Phẩm Nổi Bật
      </h3>

      <ul className="space-y-3">
        {items.map((p) => (
          <li key={p.id}>
            <a
              href={p.href ?? "#"}
              className="flex gap-3 rounded-md p-2 hover:bg-gray-50"
            >
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded border">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <div className="line-clamp-2 text-sm">{p.name}</div>
                <div className="mt-1 text-[13px] font-semibold text-red-600">
                  {p.priceFrom.toLocaleString("vi-VN")}đ
                  {p.priceTo ? ` - ${p.priceTo.toLocaleString("vi-VN")}đ` : ""}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
