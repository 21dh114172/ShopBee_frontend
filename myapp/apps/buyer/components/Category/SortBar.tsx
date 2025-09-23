export default function SortBar() {
  return (
    <div className="sticky top-14 z-10 -mt-2 rounded border bg-white p-2 shadow-sm laptop:top-20">
      <div className="flex flex-wrap items-center gap-2">
        <span className="px-2 text-sm text-gray-600">Sắp xếp theo</span>
        {["Phổ biến", "Mới nhất", "Bán chạy", "Giá"].map((t, i) => (
          <button
            key={t}
            className={`rounded px-3 py-1 text-sm ${i === 0 ? "bg-red-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          >
            {t}
          </button>
        ))}
        <span className="ml-auto text-xs text-gray-500">1/8</span>
      </div>
    </div>
  );
}
