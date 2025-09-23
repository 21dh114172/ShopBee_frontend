export default function FilterSidebar() {
  return (
    <div className="rounded-lg bg-white p-3 shadow">
      <h4 className="mb-3 text-sm font-semibold">Tất Cả Danh Mục</h4>
      <ul className="space-y-2 text-sm">
        {[
          "Thời Trang Nam",
          "Áo Khoác",
          "Áo Vest & Blazer",
          "Áo Hoodie, Áo Len & Áo Nỉ",
          "Quần Jeans",
          "Quần Dài/Quần Âu",
        ].map((x, i) => (
          <li
            key={x}
            className={`pl-2 ${i === 0 ? "text-red-600 font-medium" : ""}`}
          >
            • {x}
          </li>
        ))}
      </ul>

      <h4 className="mt-4 text-sm font-semibold">Nơi Bán</h4>
      <div className="mt-2 space-y-1 text-sm">
        {["Hà Nội", "Hồ Chí Minh", "Đà Nẵng"].map((p) => (
          <label key={p} className="flex items-center gap-2">
            <input type="checkbox" />
            <span>{p}</span>
          </label>
        ))}
      </div>

      <h4 className="mt-4 text-sm font-semibold">Khoảng Giá</h4>
      <div className="mt-2 flex gap-2">
        <input
          className="h-9 w-full rounded border px-2 text-sm"
          placeholder="TỪ"
        />
        <input
          className="h-9 w-full rounded border px-2 text-sm"
          placeholder="ĐẾN"
        />
      </div>
      <button className="mt-2 w-full rounded bg-red-600 py-2 text-sm font-semibold text-white">
        ÁP DỤNG
      </button>
    </div>
  );
}
