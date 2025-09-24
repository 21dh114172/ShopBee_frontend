"use client";
import Image from "next/image";
import { useState } from "react";

export default function CartDropdown() {
  const [showCartDropdown, setShowCartDropdown] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowCartDropdown(true)}
      onMouseLeave={() => setShowCartDropdown(false)}
    >
      <div className="text-center cursor-pointer">
        <Image
          src="/header/shopping-cart.svg"
          alt="Shopping Cart"
          width={26}
          height={26}
          className="filter brightness-0 invert"
        />
      </div>

      {/* Cart Dropdown */}
      {showCartDropdown && (
        <div className="absolute -right-5 top-full mt-3 w-[400px] bg-white shadow-xl z-50 border border-gray-200 rounded-[2px] transition-all duration-300 ease-in-out transform opacity-100 translate-y-0 scale-100 visible">
          {/* Arrow */}
          <div className="absolute -top-2.5 right-6 w-4 h-4 bg-white transform rotate-45 border-l border-t border-gray-200"></div>

          {/* Content */}
          <div className="text-center flex flex-col items-center justify-center  h-[250px]">
            {/* Empty Cart Image */}
            <div className="flex items-center justify-center mb-4">
              <Image
                src="/header/cart.png"
                width={80}
                height={80}
                alt="Empty Cart"
                className="opacity-60"
              />
            </div>

            {/* Message */}
            <p className="text-gray-600 text-sm mb-6">Chưa Có Sản Phẩm</p>
          </div>
        </div>
      )}
    </div>
  );
}
