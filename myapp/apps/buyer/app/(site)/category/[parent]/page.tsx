import BrandStrip from "../../../../components/Category/BrandStrip";
import CategoryPageShell from "../../../../components/Category/CategoryPageShell";
import FilterSidebar from "../../../../components/Category/FilterSidebar";
import HeroBanner from "../../../../components/Category/HeroBanner";
import ProductGrid from "../../../../components/Category/ProductGrid";
import SectionRail from "../../../../components/Category/SectionRail";
import SeoContent from "../../../../components/Category/SeoContent";
import SortBar from "../../../../components/Category/SortBar";


export default function MenCategoryPage() {
  const brands = ["coolmate","guzado","jbagy","roway","onoff","teelab","pealo","5s"].map((n,i)=>({
    id:String(i), logo:`/images/brands/${n}.png`
  }));

  const hotShops = Array.from({length:6}).map((_,i)=>({
    id:"hs"+i, image:"/images/hotshop.jpg", title:"SIÊU SHOP THỊNH HÀNH", priceFrom:2000
  }));

  const trends = Array.from({length:6}).map((_,i)=>({
    id:"tr"+i, image:"/images/trend.jpg", title:"Kiểu cách thịnh hành", priceFrom:4000
  }));

  const products = Array.from({length:18}).map((_,i)=>({
    id:"p"+i, image:"/images/item.jpg",
    title:`Áo sơ mi nam ${i+1}`, price: 125000 + i*1000, sold: (i*2+1)+"k", badge: i%3===0 ? "-30%" : undefined
  }));

  return (
    <CategoryPageShell
      variant="parent"
      right={
        <>
          <HeroBanner image="/images/men-hero.jpg" />
          <div className="mt-4 space-y-4">
            <BrandStrip items={brands} />
            <SectionRail title="SIÊU SHOP THỊNH HÀNH - BUNG DEAL SIÊU PHẨM" items={hotShops} />
            <SectionRail title="KIỂU CÁCH THỊNH HÀNH - DIỆN BẢNH MẶC SANG" items={trends} />
          </div>
        </>
      }
      left={<FilterSidebar />}
    >
      <SortBar />
      <div className="mt-3">
        <ProductGrid items={products} />
      </div>

      <SeoContent title="Top Bán Chạy Sản Phẩm Thời Trang Nam">
        <ul>
          <li>1. Set bộ quần áo sơ mi...</li>
          <li>2. Quần Tây Nam co giãn…</li>
          {/* … danh sách mock … */}
        </ul>
        <h3 className="mt-6 text-lg font-semibold">Có Thể Bạn Đang Tìm Kiếm</h3>
        <p>thời trang thu đông 2023 | áo len nam trung niên | quần jogger…</p>
        <h3 className="mt-6 text-lg font-semibold">Quần áo thời trang nam nổi bật…</h3>
        <p>… nội dung SEO dài theo mẫu của bạn …</p>
      </SeoContent>
    </CategoryPageShell>
  );
}
