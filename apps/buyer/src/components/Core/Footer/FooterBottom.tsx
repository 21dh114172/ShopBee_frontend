// components/footer/FooterBottom.tsx
export default function FooterBottom() {
  return (
    <div className="bg-gray-100 py-6 text-center text-xs text-gray-500 space-y-2">
      <div className="flex flex-wrap justify-center gap-4 font-medium">
        <span>CHÍNH SÁCH BẢO MẬT</span>
        <span>QUY CHẾ HOẠT ĐỘNG</span>
        <span>CHÍNH SÁCH VẬN CHUYỂN</span>
        <span>CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</span>
      </div>

      <div className="max-w-xl mx-auto text-center leading-relaxed text-xs">
        Công ty TNHH Shopee <br />
        Địa chỉ: Tầng 4-5-6, Toà nhà Capital Place, số 29 đường Liễu Giai,
        Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. <br />
        Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch và Đầu tư TP Hà Nội cấp
        lần đầu ngày 10/02/2015 <br />© 2015 – Bản quyền thuộc về Công ty TNHH
        Shopee
      </div>
    </div>
  );
}
