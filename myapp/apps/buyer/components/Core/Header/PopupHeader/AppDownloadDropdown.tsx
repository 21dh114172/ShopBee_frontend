"use client";
import Image from "next/image";
import { useState } from "react";

export default function AppDownloadDropdown() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <a
        href="#"
        className={`hover:opacity-70 transition-opacity p-1 ${showDropdown ? "opacity-70" : ""}`}
      >
        Tải ứng dụng
      </a>

      {/* App Download Popup */}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-white shadow-xl z-50 border border-gray-200 transition-all duration-300 ease-in-out ${
          showDropdown
            ? "opacity-100 translate-y-0 scale-100 visible"
            : "opacity-0 translate-y-[-10px] scale-95 invisible"
        }`}
      >
        {/* QR Code */}
        <div className="text-center mb-1">
          <div className="w-[180px] h-[180px] mx-auto bg-white flex items-center justify-center">
            <Image
              src="/header/download/qr-code.png"
              width={180}
              height={180}
              alt="QR Code"
              className="object-contain"
            />
          </div>
        </div>

        {/* Download Links */}
        <div className="flex justify-between ml-[15px] mr-[15px] mb-1">
          <div>
            <div className="flex flex-col items-center">
              <Image
                src="/header/download/app-store.png"
                width={70}
                height={20}
                alt="App Store"
                className="object-contain hover:scale-105 transition-transform cursor-pointer"
              />
            </div>
            <div className="flex flex-col items-center mt-[5px]">
              <Image
                src="/header/download/app-gallery.png"
                width={70}
                height={20}
                alt="AppGallery"
                className="object-contain hover:scale-105 transition-transform cursor-pointer"
              />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/header/download/google-play.png"
              width={70}
              height={20}
              alt="Google Play"
              className="object-contain hover:scale-105 transition-transform cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
