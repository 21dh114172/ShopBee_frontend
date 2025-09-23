export default function ShopCard({ shop }: { shop: any }) {
  return (
    <aside className="rounded-lg bg-white p-4 shadow">
      <div className="flex items-center gap-3">
        <img
          src={shop.logo}
          alt={shop.name}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <div className="font-semibold">{shop.name}</div>
          <div className="text-sm text-gray-600">
            ⭐ {shop.rating} • {shop.followers} theo dõi
          </div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
        <div className="rounded bg-gray-50 p-2">
          Sản phẩm: <b>{shop.products}</b>
        </div>
        <div className="rounded bg-gray-50 p-2">
          Tỉ lệ phản hồi: <b>{shop.responseRate}</b>
        </div>
        <div className="rounded bg-gray-50 p-2">
          Tham gia: <b>{shop.joined}</b>
        </div>
        <div className="rounded bg-gray-50 p-2">
          Hoạt động: <b>{shop.online}</b>
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <button className="flex-1 rounded border px-4 py-2 font-medium hover:bg-gray-50">
          Xem Shop
        </button>
        <button className="flex-1 rounded bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700">
          Chat Ngay
        </button>
      </div>
    </aside>
  );
}
