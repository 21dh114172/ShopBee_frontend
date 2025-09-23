"use client";
import Image from "next/image";
import CartDropdown from "./CartDropdown";

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
        <div className="flex items-center justify-between pt-4 pb-2">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/header/logo/shopbee_logo.svg"
              alt="Shopee Logo"
              width={40}
              height={40}
            />
            <span className="text-3xl text-white ml-2">ShopBee</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 mx-8">
            <div className="bg-white rounded-[2px] flex items-center w-[840px] h-[40px] p-1">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="flex-1 px-4 py-0 text-gray-700 outline-none rounded-l h-full text-sm"
              />
              <button className="bg-[#fb5333] px-5 py-2.5 rounded-[2px] flex items-center justify-center">
                <Image
                  src="/header/search.svg"
                  alt="Search"
                  width={14}
                  height={14}
                  className="filter brightness-0 invert"
                />
              </button>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-2 text-[13px]">
              {quickLinks.map((link, i) => (
                <span key={i} className="my-[5px] cursor-pointer">
                  {link}
                </span>
              ))}
            </div>
          </div>

          {/* Cart */}
          <div className="flex items-center w-[140px] justify-center">
            <CartDropdown />
          </div>
        </div>
      </div>
    </div>
  );
}
