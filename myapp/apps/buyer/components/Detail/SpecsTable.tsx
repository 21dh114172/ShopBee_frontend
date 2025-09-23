export default function SpecsTable({ rows }: { rows: [string, string][] }) {
  return (
    <section className="rounded-lg bg-white p-4 shadow">
      <h2 className="mb-3 text-base font-semibold">CHI TIẾT SẢN PHẨM</h2>
      <div className="divide-y">
        {rows.map(([k, v]) => (
          <div
            key={k}
            className="grid grid-cols-[180px_1fr] gap-4 py-2 text-sm"
          >
            <div className="text-gray-500">{k}</div>
            <div className="text-gray-900">{v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
