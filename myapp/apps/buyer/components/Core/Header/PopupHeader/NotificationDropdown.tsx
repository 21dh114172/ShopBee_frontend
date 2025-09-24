"use client";
import Image from "next/image";
import { useState } from "react";

export default function NotificationDropdown() {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowNotifications(true)}
      onMouseLeave={() => setShowNotifications(false)}
    >
      <a
        href="#"
        className="flex items-center space-x-1 hover:opacity-70 transition-opacity"
      >
        <Image
          src="/iconNavbar/thong_bao.svg"
          alt="Thông Báo"
          width={16}
          height={16}
          className="white-icon"
        />
        <span
          className={`transition-colors duration-200 ${showNotifications ? "text-gray-300" : "text-white"}`}
        >
          Thông Báo
        </span>
      </a>

      {/* Notification Popup */}
      <div
        className={`absolute right-0 top-full mt-2 w-[400px] bg-white shadow-xl z-50 border border-gray-200 transition-all duration-300 ease-in-out transform ${
          showNotifications
            ? "opacity-100 translate-y-0 scale-100 visible"
            : "opacity-0 translate-y-[-10px] scale-95 invisible"
        }`}
      >
        {/* Arrow */}
        <div className="absolute -top-2 right-6 w-4 h-4 bg-white transform rotate-45 border-l border-t border-gray-200"></div>

        {/* Content */}
        <div className="text-center flex flex-col items-center justify-center h-[270px]">
          {/* Avatar */}
          <div className="flex items-center justify-center">
            <Image
              src="/header/notification.png"
              width={100}
              height={100}
              alt="Thông báo"
            />
          </div>

          {/* Message */}
          <p className="text-gray-600 text-sm mb-6 mt-5">
            Đăng nhập để xem Thông báo
          </p>
        </div>

        {/* Buttons */}
        <div className="flex h-[40px] transition-all">
          <button className="flex-1 w-[50%] pt-[1px] pb-[1px] pl-1.5 pr-1.5 bg-[#f5f5f5] text-black hover:bg-util-line-o hover:text-primary">
            Đăng ký
          </button>
          <button className="flex-1 w-[50%] pt-[1px] pb-[1px] pl-1.5 pr-1.5 bg-[#f5f5f5] text-black hover:bg-util-line-o hover:text-primary">
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
}
