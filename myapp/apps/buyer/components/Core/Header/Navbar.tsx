// apps/buyer/src/components/home/Navbar.tsx
"use client";
import Image from "next/image";
import NotificationDropdown from "./PopupHeader/NotificationDropdown";
import AppDownloadDropdown from "./PopupHeader/AppDownloadDropdown";
import LanguageDropdown from "./PopupHeader/LanguageDropdown";

export default function Navbar() {
  return (
    <div className="text-[#ffffff] text-[13px] p-1 font-description">
      <div className="container-responsive">
        <div className="flex items-center justify-between">
          {/* Left side */}
          <div className="flex items-center">
            <a href="#" className="hover:opacity-70 transition-opacity p-1">
              Kênh Người Bán
            </a>
            <span className="mx-0.5 opacity-30 transition-opacity">|</span>
            <a href="#" className="hover:opacity-70 transition-opacity p-1">
              Trở thành Người bán Shopee
            </a>
            <span className="mx-0.5 opacity-30 transition-opacity">|</span>
            <AppDownloadDropdown />
            <span className="mx-0.5 opacity-30 transition-opacity">|</span>
            <a href="#" className="flex items-center p-1">
              Kết nối{" "}
              <span className="ml-1 flex items-center">
                <Image
                  src="/iconNavbar/facebook.svg"
                  alt="Facebook"
                  width={18}
                  height={18}
                  className="white-icon mr-2"
                />
                <Image
                  src="/iconNavbar/instagram.svg"
                  alt="Instagram"
                  width={18}
                  height={18}
                  className="white-icon"
                />
              </span>
            </a>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-3">
            <NotificationDropdown />

            <a
              href="#"
              className="flex items-center space-x-1 hover:opacity-70 transition-opacity"
            >
              <Image
                src="/iconNavbar/ho_tro.svg"
                alt="Hỗ Trợ"
                width={16}
                height={16}
                className="white-icon"
              />
              <span>Hỗ Trợ</span>
            </a>

            <LanguageDropdown />

            <a href="#" className="hover:opacity-70 transition-opacity">
              Đăng Ký
            </a>
            <span className="mx-0.5 opacity-30 transition-opacity">|</span>
            <a href="#" className="hover:opacity-70 transition-opacity">
              Đăng Nhập
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
