type Card = {
  id: string;
  image: string;
  title: string;
  price: number;
  sold?: string;
  badge?: string;
};

export default function ProductCard({ p }: { p: Card }) {
  return (
    <a
      href="#"
      className="group relative rounded-lg border bg-white p-2 hover:shadow"
    >
      {p.badge && (
        <span className="absolute left-2 top-2 rounded bg-yellow-400 px-1.5 py-0.5 text-[10px] font-bold text-white">
          {p.badge}
        </span>
      )}
      <div className="aspect-square w-full overflow-hidden rounded">
        <img
          src={p.image}
          alt={p.title}
          className="h-full w-full object-cover transition-transform group-hover:scale-[1.02]"
        />
      </div>
      <div className="mt-2 line-clamp-2 text-sm">{p.title}</div>
      <div className="mt-1 flex items-center justify-between">
        <div className="font-semibold text-red-600">
          {p.price.toLocaleString("vi-VN")}đ
        </div>
        {p.sold && <div className="text-xs text-gray-500">Đã bán {p.sold}</div>}
      </div>
    </a>
  );
}
