type Item = { id: string; image: string; title: string; priceFrom?: number };

export default function SectionRail({
  title,
  items = [] as Item[],
}: {
  title: string;
  items: Item[];
}) {
  return (
    <section className="mt-4 rounded-lg bg-white p-4 shadow">
      <h3 className="mb-3 text-sm font-semibold text-gray-700">{title}</h3>
      <div className="grid grid-cols-2 gap-3 mobile:grid-cols-4 laptop:grid-cols-6">
        {items.map((it) => (
          <a
            key={it.id}
            href="#"
            className="rounded border bg-white p-3 hover:shadow"
          >
            <div className="aspect-square w-full overflow-hidden rounded">
              <img
                src={it.image}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-2 line-clamp-2 text-sm">{it.title}</div>
            {it.priceFrom !== undefined && (
              <div className="mt-1 text-xs text-gray-500">
                Từ {it.priceFrom.toLocaleString("vi-VN")}đ
              </div>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
