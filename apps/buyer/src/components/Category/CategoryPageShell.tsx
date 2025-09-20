export type CategoryVariant = "parent" | "child";

export default function CategoryPageShell({
  variant = "parent",
  left,
  right,
  children,
}: {
  variant?: CategoryVariant;
  left?: React.ReactNode; // sidebar
  right?: React.ReactNode; // banner/strip phía trên danh sách
  children: React.ReactNode; // lưới sp + nội dung khác
}) {
  return (
    <div className="container mx-auto px-3 py-4 laptop:px-0">
      {/* banner/strip trên cùng (nếu có) */}
      {right ? <div className="mb-4">{right}</div> : null}

      <div className="grid gap-4 laptop:grid-cols-[260px_1fr]">
        {/* sidebar trái (ẩn với child nếu muốn) */}
        {variant === "parent" ? <aside>{left}</aside> : null}

        {/* nội dung chính */}
        <section>{children}</section>
      </div>
    </div>
  );
}
