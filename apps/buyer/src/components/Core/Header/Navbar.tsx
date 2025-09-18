// apps/buyer/src/components/home/Navbar.tsx
"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-[#ee4d2d] text-white text-sm px-4 py-2 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <a href="#" className="hover:underline">
          Kênh Người Bán
        </a>
        <span>|</span>
        <a href="#" className="hover:underline">
          Trở thành Người bán Shopee
        </a>
        <span>|</span>
        <a href="#" className="hover:underline">
          Tải ứng dụng
        </a>
        <span>|</span>
        <a href="#" className="hover:underline">
          Kết nối{" "}
          <i className="ml-1">
            <span>
              <Image
                src="/iconNavbar/facebook.svg"
                alt="Facebook"
                width={16}
                height={16}
              />
            </span>
            <span>
              <Image
                src="/iconNavbar/instagram.svg"
                alt="Instagram"
                width={16}
                height={16}
              />
            </span>
          </i>
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="flex items-center space-x-1 hover:underline">
          <span>
            <Image
              src="/iconNavbar/thong_bao.svg"
              alt="Thông Báo"
              width={16}
              height={16}
            />
            Thông Báo
          </span>
        </a>
        <a href="#" className="flex items-center space-x-1 hover:underline">
          <span>
            {" "}
            <Image
              src="/iconNavbar/ho_tro.svg"
              alt="Hỗ Trợ"
              width={16}
              height={16}
            />{" "}
            Hỗ Trợ
          </span>
        </a>
        <a href="#" className="flex items-center space-x-1 hover:underline">
          <span>
            <Image
              src="/iconNavbar/ngon_ngu.svg"
              alt="Tiếng Việt"
              width={16}
              height={16}
            />{" "}
            Tiếng Việt
          </span>
        </a>
        <a href="#" className="hover:underline">
          Đăng Ký
        </a>
        <a href="#" className="hover:underline">
          Đăng Nhập
        </a>
      </div>
    </header>
  );
}
