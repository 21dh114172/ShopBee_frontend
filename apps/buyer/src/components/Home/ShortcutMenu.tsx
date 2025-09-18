// apps/buyer/src/components/home/ShortcutMenu.tsx
"use client";
import Image from "next/image";

const shortcuts = [
  { label: "Deal Từ 1.000Đ", icon: "/banner/menu/deal1k.png", isImage: true },
  { label: "Mã Giảm Giá", icon: "/banner/menu/maGG.png", isImage: true },
  { label: "Shopee Xử Lý", icon: "/banner/menu/shopStyle.png", isImage: true },
  {
    label: "Deal Hot Giờ Vàng",
    icon: "/banner/menu/dealHot.png",
    isImage: true,
  },
  {
    label: "Shopee Style Voucher 30%",
    icon: "/banner/menu/shopStyle.png",
    isImage: true,
  },
  {
    label: "Săn Ngay 100.000 Xu",
    icon: "/banner/menu/sanXu.png",
    isImage: true,
  },
  {
    label: "Khách Hàng Thân Thiết",
    icon: "/banner/menu/khachHangThanThiet.png",
    isImage: true,
  },
];

export default function ShortcutMenu() {
  return (
    <div className="bg-white py-4">
      <div className="container mx-auto grid grid-cols-7 gap-4 text-center text-sm">
        {shortcuts.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center space-y-2 cursor-pointer hover:opacity-80"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              {item.isImage ? (
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={45}
                  height={45}
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="text-2xl">{item.icon}</span>
              )}
            </div>
            <span className="text-xs text-gray-700">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
