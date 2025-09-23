"use client";
import { useState } from "react";

export default function ProductMain({ product }: { product: any }) {
  const [thumb, setThumb] = useState(0);
  const [color, setColor] = useState<string | null>(null);
  const [variant, setVariant] = useState<string | null>(null);
  const [qty, setQty] = useState(1);

  return (
    <section className="grid gap-6 laptop:grid-cols-2">
      {/* Gallery */}
      <div className="rounded-lg bg-white p-3 shadow">
        <div className="aspect-square w-full overflow-hidden rounded">
          <img
            src={product.images[thumb]}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mt-3 grid grid-cols-5 gap-2">
          {product.images.map((url: string, i: number) => (
            <button
              key={url}
              onClick={() => setThumb(i)}
              className={`aspect-square overflow-hidden rounded border ${
                thumb === i ? "border-red-500" : "border-gray-200"
              }`}
            >
              <img src={url} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Buy box */}
      <div className="rounded-lg bg-white p-4 shadow">
        <h1 className="text-xl font-semibold">{product.name}</h1>
        <div className="mt-1 text-sm text-gray-600">
          ⭐ {product.rating} • {product.sold} đánh giá
        </div>

        <div className="mt-3 flex items-end gap-3">
          <span className="text-2xl font-bold text-red-600">
            {product.priceFrom.toLocaleString("vi-VN")}đ -{" "}
            {product.priceTo.toLocaleString("vi-VN")}đ
          </span>
        </div>

        {/* Màu sắc */}
        <div className="mt-4">
          <div className="mb-2 text-sm font-medium">Màu sắc</div>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((c: string) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                className={`rounded border px-3 py-1 text-sm ${
                  color === c
                    ? "border-red-500 text-red-600 font-medium"
                    : "border-gray-300 text-gray-700"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Phân loại */}
        <div className="mt-4">
          <div className="mb-2 text-sm font-medium">Phân loại</div>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((v: string) => (
              <button
                key={v}
                onClick={() => setVariant(v)}
                className={`rounded border px-3 py-1 text-sm ${
                  variant === v
                    ? "border-red-500 text-red-600 font-medium"
                    : "border-gray-300 text-gray-700"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        {/* Số lượng + nút */}
        <div className="mt-5 flex items-center gap-3">
          <div className="inline-flex items-center rounded border">
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="px-3 py-2"
            >
              −
            </button>
            <input
              value={qty}
              onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))}
              className="w-12 border-x py-2 text-center outline-none"
            />
            <button onClick={() => setQty((q) => q + 1)} className="px-3 py-2">
              +
            </button>
          </div>
          <button className="rounded border border-red-600 px-5 py-2 font-medium text-red-600 hover:bg-red-50">
            Thêm vào giỏ
          </button>
          <button className="rounded bg-red-600 px-6 py-2 font-semibold text-white hover:bg-red-700">
            Mua ngay
          </button>
        </div>
      </div>
    </section>
  );
}
