"use client";
import Image from "next/image";

const quickLinks = [
  "Quạt Cầm Tay",
  "Dép",
  "Áo Khoác Hoodie Zip Dày",
  "Sale 1k Điện Thoại iPhone",
  "Romand Juicy 24",
  "Quần Bò Ống Rộng Cạp Cao",
  "Váy Đẹp",
];

export default function HeaderBot() {
  return (
    <div>
      <div className="container-responsive">
        <div className="px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo/shopbee_logo.svg"
              alt="Shopee Logo"
              width={40}
              height={40}
            />
            <span className="text-[36px] !text-white ml-2">ShopBee</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 mx-8">
            <div className="bg-white rounded flex items-center">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="flex-1 px-4 py-3 text-gray-700 outline-none rounded-l"
              />
              <button className="bg-[#fb5533] px-6 py-3 rounded-r">
                <span className="text-white">🔍</span>
              </button>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-2 mt-2 text-sm">
              {quickLinks.map((link, i) => (
                <span key={i} className="hover:underline cursor-pointer">
                  {link}
                </span>
              ))}
            </div>
          </div>

          {/* Cart & User */}
          <div className="flex items-center space-x-6">
            <div className="text-center cursor-pointer">
              <span className="text-2xl">🛒</span>
              <div className="text-xs">Giỏ hàng</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
