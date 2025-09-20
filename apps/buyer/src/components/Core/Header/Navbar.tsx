// apps/buyer/src/components/home/Navbar.tsx
"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="text-[#ffffff] text-[13px]">
      <div className="container-responsive">
        <div className="flex items-center justify-between">
          {/* Left side */}
          <div className="flex items-center space-x-3 laptop">
            <a href="#" className="hover:opacity-70 transition-opacity">
              Kênh Người Bán
            </a>
            <span className="ml-[10px] mr-[10px] opacity-30 transition-opacity">
              |
            </span>
            <a href="#" className="hover:opacity-70 transition-opacity">
              Trở thành Người bán Shopee
            </a>
            <span className="ml-[10px] mr-[10px] opacity-30 transition-opacity">
              |
            </span>
            <a href="#" className="hover:opacity-70 transition-opacity">
              Tải ứng dụng
            </a>
            <span className="ml-[10px] mr-[10px] opacity-30 transition-opacity">
              |
            </span>
            <a href="#" className="flex items-center">
              Kết nối{" "}
              <span className="ml-1 flex items-center space-x-1">
                <Image
                  src="/iconNavbar/facebook.svg"
                  alt="Facebook"
                  width={16}
                  height={16}
                  className="white-icon"
                />
                <Image
                  src="/iconNavbar/instagram.svg"
                  alt="Instagram"
                  width={16}
                  height={16}
                  className="white-icon"
                />
              </span>
            </a>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
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
              <span>Thông Báo</span>
            </a>
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
            <a
              href="#"
              className="flex items-center space-x-1 hover:opacity-70 transition-opacity"
            >
              <Image
                src="/iconNavbar/ngon_ngu.svg"
                alt="Tiếng Việt"
                width={16}
                height={16}
                className="white-icon"
              />
              <span>Tiếng Việt</span>
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              Đăng Ký
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              Đăng Nhập
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
