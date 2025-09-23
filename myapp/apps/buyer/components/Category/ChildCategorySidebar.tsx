type Child = { slug: string; name: string; href?: string };

export default function ChildCategorySidebar({
  parentName,
  items,
  activeSlug,
}: {
  parentName: string;
  items: Child[];
  activeSlug?: string;
}) {
  return (
    <aside className="rounded-lg bg-white p-3 shadow">
      <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#ee4d2d]">
        <span className="text-lg leading-none">▸</span> {parentName}
      </h4>
      <ul className="space-y-2 text-sm">
        {items.map((c) => (
          <li key={c.slug}>
            <a
              href={c.href ?? `/category/${c.slug}`}
              className={`block truncate pl-2 hover:underline ${
                activeSlug === c.slug ? "text-[#ee4d2d] font-medium" : "text-gray-800"
              }`}
            >
              {c.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
