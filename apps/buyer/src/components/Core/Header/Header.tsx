"use client";

// import { FaSearch, FaShoppingCart } from 'react-icons/fa'
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

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-[#f53d2d] to-[#f63] text-white">
      {/* Middle nav - Logo + Search + Cart */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo/shopbee_logo.svg"
            alt="Shopee Logo"
            width={40}
            height={40}
          />
          <span className="text-[36px] text-white">ShopBee</span>
        </div>

        {/* Search bar */}
        <div className="flex-1 mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Shopee bao ship 0Đ - Đăng ký ngay!"
              className="w-full h-10 rounded-sm px-4 pr-12 text-black text-sm outline-none"
            />
            <button className="absolute top-1 right-1 bg-[#fb5533] hover:bg-[#ec381d] text-white px-3 py-2 rounded-sm">
              {/* <FaSearch size={14} /> */}
            </button>
          </div>

          {/* Quick links */}
          <div className="text-xs mt-1 flex flex-wrap gap-3 text-white/90">
            {quickLinks.map((text, idx) => (
              <a key={idx} href="#" className="hover:underline">
                {text}
              </a>
            ))}
          </div>
        </div>

        {/* Cart */}
        <div>
          <a href="#" className="text-white text-xl">
            {/* <FaShoppingCart /> */}
          </a>
        </div>
      </div>
    </div>
  );
}
