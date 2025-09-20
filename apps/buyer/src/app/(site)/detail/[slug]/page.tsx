import Breadcrumb from "@/components/Detail/Breadcrumb";
import DescriptionBox from "@/components/Detail/DescriptionBox";
import GiftStrip from "@/components/Detail/GiftStrip";
import ProductMain from "@/components/Detail/ProductMain";
import ProductRail from "@/components/Detail/ProductRail";
import ReviewsBox from "@/components/Detail/ReviewsBox";
import ShopCard from "@/components/Detail/ShopCard";
import SpecsTable from "@/components/Detail/SpecsTable";
import TopFeaturedSidebar from "@/components/Detail/TopFeaturedSidebar";
import { div } from "framer-motion/client";

export default function DetailPage() {
  const crumbs = [
    { label: "Shopee", href: "/" },
    { label: "Balo & Túi Ví Nam", href: "/c/balo-vi-nam" },
    { label: "Ba Lô Nam", href: "/c/balo-nam" },
  ];

  const product = {
    name: "DUYÊN CƯỜNG - Balo size 40 đi học, balo nam nữ",
    priceFrom: 50000,
    priceTo: 119000,
    rating: 4.5,
    sold: 242,
    images: [
      "/images/sample-1.jpg",
      "/images/sample-2.jpg",
      "/images/sample-3.jpg",
      "/images/sample-4.jpg",
      "/images/sample-5.jpg",
    ],
    colors: ["đen", "xám", "trắng", "hoa xanh", "quà tặng"],
    variants: ["balo quai đeo", "balo set", "balo chống sốc", "balo BB"],
  };

  const specs: [string, string][] = [
    ["Danh Mục", "Shopee > Balo & Túi Ví Nam > Balo > Balo Nam"],
    ["Dáng kiểu áo", "Oversized"],
    ["Cổ áo", "Cổ sơ mi"],
    ["Kiểu cổ áo", "Cổ áo truyền thống"],
    ["Phong cách", "Thể thao, Cơ bản, Hàn Quốc"],
    ["Chất liệu", "Cotton"],
    ["Mẫu", "Khác"],
    ["Chiều dài tay áo", "Tay ngắn"],
    ["Rất lớn", "Có"],
    ["Dip", "Công việc"],
    ["Gửi từ", "Thái Nguyên"],
  ];

  const shop = {
    name: "Xưởng Túi Duyên Cường 1993",
    logo: "/images/shop.png",
    rating: 4.5,
    responseRate: "93%",
    products: 440,
    joined: "5 năm trước",
    followers: "30,3k",
    online: "36 phút trước",
  };

  const desc = `- Đường may tỉ mỉ, sắc nét.
- Thiết kế hiện đại, trẻ trung, năng động.
- Size 40cm phù hợp cho đi học.
- Chất liệu da tổng hợp, chống bám bẩn.
  
🧼 HƯỚNG DẪN SỬ DỤNG
- Giặt tay, không vắt mạnh, phơi nơi thoáng mát.
- Tránh tiếp xúc trực tiếp ánh nắng gắt để giữ màu.

🔒 CHÍNH SÁCH
- Đổi trả trong 3 ngày nếu lỗi nhà sản xuất.`;

  const reviews = Array.from({ length: 5 }).map((_, i) => ({
    user: `khách hàng ${i + 1}`,
    star: 5,
    time: "2024-07-29 09:33",
    variant: "màu đen, size M",
    content: "Hàng đẹp đóng gói cẩn thận, giao nhanh, chất lượng tốt.",
    images: i % 2 ? ["/images/rev1.jpg", "/images/rev2.jpg"] : [],
  }));

  const sameShop = Array.from({ length: 8 }).map((_, i) => ({
    id: "s" + i,
    name: `SP cùng shop #${i + 1}`,
    image: "/images/prod.jpg",
    price: 69000 + i * 1000,
  }));

  const related = Array.from({ length: 12 }).map((_, i) => ({
    id: "r" + i,
    name: `Áo sơ mi nam phong cách Hàn Quốc #${i + 1}`,
    image: "/images/rel.jpg",
    price: 199000 + i * 1000,
  }));

  const topFeatured = [
    {
      id: "t1",
      name: "XẢ KHO FREE SHIP – Túi đeo chéo",
      image: "/images/top1.jpg",
      priceFrom: 69000,
    },
    {
      id: "t2",
      name: "Ví Nữ Mini Freeship – da mềm",
      image: "/images/top2.jpg",
      priceFrom: 18000,
      priceTo: 39000,
    },
    {
      id: "t3",
      name: "Ví cầm tay hot trend",
      image: "/images/top3.jpg",
      priceFrom: 35000,
      priceTo: 38000,
    },
  ];

  return (
    <div className="bg-[#f5f5f5]">
      <Breadcrumb items={crumbs} current={product.name} />
      <div className="container mx-auto px-3 py-4 laptop:px-0">
        {/* Khối chính */}
        <ProductMain product={product} />

        {/* Combo/Quà tặng */}
        <div className="mt-6">
          <GiftStrip />
        </div>

        <div className="mt-6 grid gap-4 laptop:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <SpecsTable rows={specs} />
            <DescriptionBox text={desc} />
          </div>

          <TopFeaturedSidebar items={topFeatured} />
        </div>

        {/* Đánh giá */}
        <div className="mt-6">
          <ReviewsBox
            rating={4.7}
            counts={{ 5: 394, 4: 51, 3: 13, 2: 6, 1: 14, cmt: 94 }}
            items={reviews}
          />
        </div>

        {/* Các sản phẩm khác của shop */}
        <div className="mt-8">
          <ProductRail
            title="Sản phẩm tương tự"
            subtitle="Gợi ý từ shop khác"
            items={[
              {
                id: "r1",
                name: "Áo sơ mi form Hàn Quốc vải mát",
                image: "/images/rel.jpg",
                price: 199000,
                originalPrice: 259000,
                discountPercent: 23,
                shopName: "Shop ABC",
                href: "/detail/ao-so-mi-hq",
              },
              // ...
            ]}
          />
        </div>

        {/* Sản phẩm liên quan */}
        <div className="mt-6">
          <ProductRail
            title="Sản phẩm liên quan"
            items={related}
            cols={{ base: 2, md: 3, lg: 6 }}
          />
        </div>
      </div>
    </div>
  );
}
