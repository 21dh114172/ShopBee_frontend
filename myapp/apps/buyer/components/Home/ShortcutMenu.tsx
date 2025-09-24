// apps/buyer/src/components/home/ShortcutMenu.tsx
"use client";
import Image from "next/image";

const shortcuts = [
  { label: "Deal Từ 1.000Đ", icon: "/banner/menu/deal1k.png", isImage: true },
  { label: "Mã Giảm Giá", icon: "/banner/menu/maGG.png", isImage: true },
  { label: "Shopee Xử Lý", icon: "/banner/menu/shopStyle.png", isImage: true },
  {
    label: "Deal Hot\nGiờ Vàng",
    icon: "/banner/menu/dealHot.png",
    isImage: true,
  },
  {
    label: "Shopee Style\nVoucher 30%",
    icon: "/banner/menu/shopStyle.png",
    isImage: true,
  },
  {
    label: "Săn Ngay\n100.000 Xu",
    icon: "/banner/menu/sanXu.png",
    isImage: true,
  },
  {
    label: "Khách Hàng\nThân Thiết",
    icon: "/banner/menu/khachHangThanThiet.png",
    isImage: true,
  },
];

export default function ShortcutMenu() {
  return (
    <div className="bg-white py-4">
      <div className="container mx-auto flex justify-around text-center">
        {shortcuts.map((item, i) => (
          <div
            key={i}
            className="w-[150px] h-[108px] flex flex-col items-center cursor-pointer transition-transform duration-200 ease-in-out hover:-translate-y-1"
          >
            {/* Fixed icon container */}
            <div className="h-[60px] flex items-center justify-center">
              {item.isImage ? (
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              ) : (
                <span className="text-2xl">{item.icon}</span>
              )}
            </div>

            {/* Fixed text container */}
            <div className="h-[48px] flex items-center justify-center">
              <span className="text-center leading-tight px-1 text-[14px] whitespace-pre-line">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
