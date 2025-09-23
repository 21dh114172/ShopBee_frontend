"use client";
import { useState } from "react";

type Review = {
  user: string;
  star: number;
  time: string;
  variant: string;
  content: string;
  images?: string[];
};

export default function ReviewsBox({
  rating,
  counts,
  items,
}: {
  rating: number;
  counts: { [k: number | string]: number };
  items: Review[];
}) {
  const [page, setPage] = useState(1);

  return (
    <section className="rounded-lg bg-white p-4 shadow">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold">ĐÁNH GIÁ SẢN PHẨM</h2>
          <div className="text-sm text-gray-600">⭐ {rating} trên 5</div>
        </div>
        <div className="flex flex-wrap gap-2">
          <FilterPill label="Tất Cả" active />
          {[5, 4, 3, 2, 1].map((s) => (
            <FilterPill key={s} label={`${s} Sao (${counts[s] || 0})`} />
          ))}
          <FilterPill label={`Có Bình Luận (${counts.cmt || 0})`} />
        </div>
      </div>

      <ul className="space-y-4">
        {items.map((r, i) => (
          <li key={i} className="rounded border p-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gray-200" />
              <div className="text-sm font-medium">{r.user}</div>
            </div>
            <div className="mt-1 text-xs text-amber-500">
              {"★".repeat(r.star)}
              {"☆".repeat(5 - r.star)}
            </div>
            <div className="mt-1 text-xs text-gray-500">
              {r.time} | {r.variant}
            </div>
            <p className="mt-2 text-sm">{r.content}</p>
            {!!r.images?.length && (
              <div className="mt-2 grid grid-cols-5 gap-2">
                {r.images.map((img) => (
                  <img
                    key={img}
                    src={img}
                    alt=""
                    className="h-20 w-full rounded object-cover"
                  />
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center justify-center gap-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`h-8 w-8 rounded border text-sm ${
              page === i
                ? "border-red-600 bg-red-600 text-white"
                : "hover:bg-gray-50"
            }`}
          >
            {i}
          </button>
        ))}
      </div>
    </section>
  );
}

function FilterPill({ label, active }: { label: string; active?: boolean }) {
  return (
    <button
      className={`rounded-full px-3 py-1 text-xs ${
        active
          ? "bg-red-600 text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  );
}
