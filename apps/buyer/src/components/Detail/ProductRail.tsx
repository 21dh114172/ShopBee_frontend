type RailItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number; // optional: để gạch giá cũ
  discountPercent?: number; // optional: hiển thị -xx%
  shopName?: string; // tên shop khác
  href?: string;
};

export default function ProductRail({
  title,
  subtitle = "Gợi ý từ shop khác",
  items,
  cols = { base: 2, md: 3, lg: 6 },
}: {
  title: string;
  subtitle?: string;
  items: RailItem[];
  cols?: {
    base: 2 | 3 | 4 | 5 | 6;
    md: 2 | 3 | 4 | 5 | 6;
    lg: 2 | 3 | 4 | 5 | 6;
  };
}) {
  const grid = cn(
    "grid gap-3",
    colClass(cols.base),
    "mobile:" + colClass(cols.md),
    "laptop:" + colClass(cols.lg)
  );
  return (
    <section className="rounded-lg bg-white p-4 shadow">
      <div className="mb-2">
        <h3 className="text-base font-semibold">{title}</h3>
        {subtitle && <div className="text-sm text-gray-600">{subtitle}</div>}
      </div>

      <div className={grid}>
        {items.map((p) => (
          <a
            key={p.id}
            href={p.href ?? "#"}
            className="group relative rounded-lg border bg-white p-3 hover:shadow"
          >
            {/* Ribbon 'Shop khác' */}
            <span className="absolute left-2 top-2 rounded bg-blue-600 px-2 py-0.5 text-[10px] font-semibold text-white">
              Shop khác
            </span>

            <div className="aspect-square w-full overflow-hidden rounded">
              <img
                src={p.image}
                alt={p.name}
                className="h-full w-full object-cover transition-transform group-hover:scale-[1.02]"
              />
            </div>

            <div className="mt-2 line-clamp-2 text-sm">{p.name}</div>

            {/* Giá */}
            <div className="mt-1 flex items-center gap-2">
              <span className="font-semibold text-red-600">
                {p.price.toLocaleString("vi-VN")}đ
              </span>
              {p.originalPrice && p.originalPrice > p.price && (
                <span className="text-xs text-gray-500 line-through">
                  {p.originalPrice.toLocaleString("vi-VN")}đ
                </span>
              )}
              {p.discountPercent ? (
                <span className="rounded bg-red-50 px-1.5 py-0.5 text-xs font-semibold text-red-600">
                  -{p.discountPercent}%
                </span>
              ) : null}
            </div>

            {/* Tên shop khác */}
            {p.shopName && (
              <div className="text-xs text-gray-500">{p.shopName}</div>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}

function colClass(n: 2 | 3 | 4 | 5 | 6) {
  switch (n) {
    case 2:
      return "grid-cols-2";
    case 3:
      return "grid-cols-3";
    case 4:
      return "grid-cols-4";
    case 5:
      return "grid-cols-5";
    case 6:
      return "grid-cols-6";
  }
}

// gộp classNames gọn gàng
function cn(...s: string[]) {
  return s.filter(Boolean).join(" ");
}
