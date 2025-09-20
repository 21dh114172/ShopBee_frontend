export default function DescriptionBox({ text }: { text: string }) {
  return (
    <section className="rounded-lg bg-white p-4 shadow">
      <h2 className="mb-3 text-base font-semibold">MÔ TẢ SẢN PHẨM</h2>
      <pre className="whitespace-pre-wrap text-sm leading-6 text-gray-800">
        {text}
      </pre>
    </section>
  );
}
