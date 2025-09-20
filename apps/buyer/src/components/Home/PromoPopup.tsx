"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type Props = {
  imageUrl: string;
  ctaText?: string;
  ctaHref?: string;
  widthClass?: string;
};

export default function PromoPopup({
  imageUrl,
  ctaText = "MUA NGAY",
  ctaHref = "/",
  widthClass = "w-[680px] max-w-[90vw]",
}: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Mở popup khi ở trang chủ (mỗi lần reload)
  useEffect(() => {
    if (pathname === "/") {
      const t = setTimeout(() => setOpen(true), 50);
      return () => clearTimeout(t);
    }
  }, [pathname]);

  // ===== Scroll lock theo trạng thái `open` =====
  const prevOverflow = useRef<string>("");
  const prevPaddingRight = useRef<string>("");

  useEffect(() => {
    if (!open) {
      // mở khóa
      document.body.style.overflow = prevOverflow.current || "";
      document.body.style.paddingRight = prevPaddingRight.current || "";
      return;
    }
    // khóa
    prevOverflow.current = document.body.style.overflow;
    prevPaddingRight.current = document.body.style.paddingRight;

    const scrollbarW = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarW > 0) {
      document.body.style.paddingRight = `${scrollbarW}px`; // tránh layout shift
    }
    document.body.style.overflow = "hidden";

    // cleanup khi unmount
    return () => {
      document.body.style.overflow = prevOverflow.current || "";
      document.body.style.paddingRight = prevPaddingRight.current || "";
    };
  }, [open]);

  // Đóng bằng ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!open || pathname !== "/") return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60">
      <div className="absolute inset-0" onClick={() => setOpen(false)} />
      <div
        role="dialog"
        aria-modal="true"
        className={`relative rounded-2xl bg-white shadow-2xl ${widthClass} animate-in fade-in zoom-in-95 duration-200`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute right-2 top-2 rounded-full bg-black/60 p-1 text-white hover:bg-black/80"
          aria-label="Đóng"
        >
          ✕
        </button>

        <img
          src={imageUrl}
          alt="Khuyến mãi"
          className="block w-full rounded-t-2xl"
        />
        <div className="flex items-center justify-center p-4">
          <a
            href={ctaHref}
            className="inline-flex min-w-40 items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white hover:bg-blue-700"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </div>
  );
}
