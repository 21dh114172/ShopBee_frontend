// components/footer/FooterMiddle.tsx
export default function FooterMiddle() {
  const countries = [
    'Singapore', 'Indonesia', 'Thái Lan', 'Malaysia', 'Việt Nam',
    'Philippines', 'Brazil', 'México', 'Colombia', 'Chile', 'Đài Loan'
  ]

  return (
    <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">
      © 2025 Shopee. Tất cả các quyền được bảo lưu. |
      <span className="block md:inline"> Quốc gia & Khu vực: {countries.join(' | ')}</span>
    </div>
  )
}
