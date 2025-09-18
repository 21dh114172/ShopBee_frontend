// apps/buyer/src/components/home/CategoryGrid.tsx
'use client'

const categories = [
  { label: 'Thời Trang Nam', icon: '/icons/men-clothes.png' },
  { label: 'Điện Thoại & Phụ Kiện', icon: '/icons/phone.png' },
  { label: 'Thiết Bị Điện Tử', icon: '/icons/laptop.png' },
  { label: 'Máy Ảnh & Quay Phim', icon: '/icons/camera.png' },
  { label: 'Đồng Hồ', icon: '/icons/watch.png' },
  { label: 'Giày Dép Nam', icon: '/icons/shoes-men.png' },
  { label: 'Thiết Bị Gia Dụng', icon: '/icons/fridge.png' },
  { label: 'Thể Thao & Du Lịch', icon: '/icons/ball.png' },
  { label: 'Ô Tô & Xe Máy', icon: '/icons/scooter.png' },
  { label: 'Thời Trang Nữ', icon: '/icons/women-clothes.png' },
  { label: 'Mẹ & Bé', icon: '/icons/mom-baby.png' },
  { label: 'Nhà Cửa & Đời Sống', icon: '/icons/home.png' },
  { label: 'Sắc Đẹp', icon: '/icons/beauty.png' },
  { label: 'Sức Khỏe', icon: '/icons/health.png' },
  { label: 'Giày Dép Nữ', icon: '/icons/women-shoes.png' },
  { label: 'Túi Ví Nữ', icon: '/icons/handbag.png' },
  { label: 'Trang Sức', icon: '/icons/jewelry.png' },
  { label: 'Bách Hóa Online', icon: '/icons/grocery.png' },
  { label: 'Nhà Sách Online', icon: '/icons/bookstore.png' },
]

export default function CategoryGrid() {
  return (
    <div className="bg-white py-6 mt-4">
      <div className="container mx-auto">
        <h2 className="text-lg font-semibold mb-4">DANH MỤC</h2>
        <div className="grid grid-cols-9 gap-4 text-center text-xs">
          {categories.map((cat, i) => (
            <div key={i} className="flex flex-col items-center space-y-1 hover:scale-105 transition">
              <img src={cat.icon} alt={cat.label} className="w-12 h-12 object-contain" />
              <span>{cat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
