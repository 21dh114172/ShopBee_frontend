export default function SeoContent({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8 rounded-lg bg-white p-4 shadow">
      <h2 className="mb-3 text-base font-semibold">{title}</h2>
      <article className="prose max-w-none prose-p:leading-7 prose-li:leading-7">
        {children}
      </article>
    </section>
  );
}
