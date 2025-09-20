type Brand = { id: string; logo: string; name?: string };

export default function BrandStrip({ items = [] as Brand[] }) {
  return (
    <section className="rounded-lg bg-white p-4 shadow">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-700">SHOPEE MALL</h3>
        <a href="#" className="text-sm text-blue-600 hover:underline">
          Xem tất cả
        </a>
      </div>
      <div className="grid grid-cols-3 gap-3 mobile:grid-cols-5 laptop:grid-cols-10">
        {items.map((b) => (
          <a
            key={b.id}
            href="#"
            className="flex items-center justify-center rounded border bg-white p-3 hover:shadow"
          >
            <img
              src={b.logo}
              alt={b.name || ""}
              className="h-10 object-contain"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
