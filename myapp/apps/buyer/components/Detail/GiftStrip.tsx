export default function GiftStrip() {
  return (
    <section className="rounded-lg bg-white p-4 shadow">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-base font-semibold">
          Mua 10.000đ để nhận 2 quà tặng
        </h3>
        <a href="#" className="text-sm text-blue-600 hover:underline">
          Xem tất cả
        </a>
      </div>
      <div className="grid grid-cols-2 gap-3 laptop:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <a key={i} href="#" className="rounded border p-3 hover:shadow">
            <div className="aspect-square w-full overflow-hidden rounded bg-gray-50">
              <img
                src="/images/gift.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-2 line-clamp-2 text-sm">Quà tặng #{i}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
