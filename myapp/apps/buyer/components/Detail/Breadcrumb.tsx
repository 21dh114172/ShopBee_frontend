type Crumb = { label: string; href?: string };

export default function Breadcrumb({
  items = [],
  current,
}: {
  items: Crumb[]; // các cấp trước (có/không có href)
  current: string; // tên sản phẩm hiện tại
}) {
  return (
    <div className="border-t-4 border-[#ff5722] bg-white">
      <nav className="container mx-auto px-3 py-3 text-sm laptop:px-0">
        <ol className="flex flex-wrap items-center gap-1 text-gray-500">
          {items.map((c, i) => (
            <li key={i} className="flex items-center">
              {c.href ? (
                <a href={c.href} className="text-[#1273eb] hover:underline">
                  {c.label}
                </a>
              ) : (
                <span className="text-[#1273eb]">{c.label}</span>
              )}
              <span className="mx-2 text-gray-400">›</span>
            </li>
          ))}
          <li className="text-gray-800">{current}</li>
        </ol>
      </nav>
    </div>
  );
}
