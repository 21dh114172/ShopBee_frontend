// apps/buyer/src/components/home/CategoryGrid.tsx
"use client";
import Image from "next/image";

const categories = [
  { alt: "Thời Trang Nam", src: "/home/category/thoitrangnam.png" },
  { alt: "Điện Thoại & Phụ Kiện", src: "/home/category/dienthoai&phukien.png" },
  { alt: "Thiết Bị Điện Tử", src: "/home/category/thietbidientu.png" },
  { alt: "Máy Ảnh & Quay Phim", src: "/home/category/mayanh.png" },
  { alt: "Đồng Hồ", src: "/home/category/dongho.png" },
  { alt: "Giày Dép Nam", src: "/home/category/giaydepnam.png" },
  { alt: "Thiết Bị Gia Dụng", src: "/home/category/thietbigiadung.png" },
  { alt: "Thể Thao & Du Lịch", src: "/home/category/thethao.png" },
  { alt: "Ô Tô & Xe Máy", src: "/home/category/xemay.png" },
  { alt: "Thời Trang Nữ", src: "/home/category/thoitrangnu.png" },
  { alt: "Mẹ & Bé", src: "/home/category/me&be.png" },
  { alt: "Nhà Cửa & Đời Sống", src: "/home/category/nhacua.png" },
  { alt: "Sắc Đẹp", src: "/home/category/sacdep.png" },
  { alt: "Sức Khỏe", src: "/home/category/suckhoe.png" },
  { alt: "Giày Dép Nữ", src: "/home/category/giaydepnu.png" },
  { alt: "Túi Ví Nữ", src: "/home/category/tuivinu.png" },
  { alt: "Trang Sức", src: "/home/category/trangsuc.png" },
  { alt: "Bách Hóa Online", src: "/home/category/bachhoaonline.png" },
  { alt: "Nhà Sách Online", src: "/home/category/nhasachonline.png" },
  { alt: "Balo & Túi ví nam", src: "/home/category/balo.png" },
  { alt: "Đồ Chơi", src: "/home/category/dochoi.png" },
  { alt: "Chăm Sóc Thú Cưng", src: "/home/category/chamsocthucung.png" },
  {
    alt: "Dụng cụ và thiết Bị Tiện Ích",
    src: "/home/category/thietbitienich.png",
  },
  { alt: "Thời Trang Trẻ Em", src: "/home/category/thoitrangtreem.png" },
  { alt: "Giặt giũ & Chăm sóc nhà cửa", src: "/home/category/giatgiu.png" },
  { alt: "VVoucher & Chăm sóc cửa hàng", src: "/home/category/voucher.png" },
];

export default function CategoryGrid() {
  return (
    <div className="bg-white py-6 mt-4">
      <div className="container mx-auto">
        <h2 className="text-lg font-semibold mb-4">DANH MỤC</h2>
        <div className="grid grid-cols-9 gap-4 text-center text-xs">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex flex-col items-center space-y-1 hover:scale-105 transition"
            >
              <Image src={cat.src} alt={cat.alt} width={48} height={48} />
              <span>{cat.alt}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
