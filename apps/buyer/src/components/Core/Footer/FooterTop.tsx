import Image from "next/image";

export default function FooterTop() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 p-6 max-w-7xl mx-auto">
      {/* Dịch vụ khách hàng */}
      <div>
        <h3 className="font-semibold mb-2">DỊCH VỤ KHÁCH HÀNG</h3>
        <ul className="space-y-1">
          <li>Trung Tâm Trợ Giúp Shopee</li>
          <li>Shopee Blog</li>
          <li>Shopee Mall</li>
          <li>Hướng Dẫn Mua Hàng/Đặt Hàng</li>
          <li>Hướng Dẫn Bán Hàng</li>
          <li>Ví ShopeePay</li>
          <li>Shopee Xu</li>
          <li>Đơn Hàng</li>
          <li>Trả Hàng/Hoàn Tiền</li>
          <li>Liên Hệ Shopee</li>
          <li>Chính Sách Bảo Hành</li>
        </ul>
      </div>

      {/* Shopee Việt Nam */}
      <div>
        <h3 className="font-semibold mb-2">SHOPEE VIỆT NAM</h3>
        <ul className="space-y-1">
          <li>Về Shopee</li>
          <li>Tuyển Dụng</li>
          <li>Điều Khoản Shopee</li>
          <li>Chính Sách Bảo Mật</li>
          <li>Shopee Mall</li>
          <li>Kênh Người Bán</li>
          <li>Flash Sale</li>
          <li>Tiếp Thị Liên Kết</li>
          <li>Liên Hệ Truyền Thông</li>
        </ul>
      </div>

      {/* Thanh toán */}
      <div>
        <h3 className="font-semibold mb-2">THANH TOÁN</h3>
        <div className="flex flex-wrap gap-2">
          {['visa', 'mastercard', 'amex', 'spay', 'installment'].map((src, i) => (
            <Image
              key={i}
              src={`/images/payment/${src}.png`}
              alt={src}
              width={40}
              height={24}
              className="object-contain"
            />
          ))}
        </div>

        <h3 className="font-semibold mt-4 mb-2">ĐƠN VỊ VẬN CHUYỂN</h3>
        <div className="flex flex-wrap gap-2">
          {['spx', 'viettel', 'vnpost', 'jtexpress', 'grab', 'ninjavan', 'ahamove'].map((src, i) => (
            <Image
              key={i}
              src={`/images/shipping/${src}.png`}
              alt={src}
              width={48}
              height={24}
              className="object-contain"
            />
          ))}
        </div>
      </div>

      {/* Theo dõi Shopee */}
      <div>
        <h3 className="font-semibold mb-2">THEO DÕI SHOPEE</h3>
        <ul className="space-y-1">
          <li>📘 Facebook</li>
          <li>📸 Instagram</li>
          <li>💼 LinkedIn</li>
        </ul>
      </div>

      {/* Tải ứng dụng */}
      <div>
        <h3 className="font-semibold mb-2">TẢI ỨNG DỤNG SHOPEE</h3>
        <div className="flex space-x-2">
          <Image src="/images/qr-code.png" alt="QR" width={80} height={80} />
          <div className="flex flex-col space-y-1">
            <Image src="/images/store/appstore.png" alt="App Store" width={96} height={32} />
            <Image src="/images/store/googleplay.png" alt="Google Play" width={96} height={32} />
            <Image src="/images/store/appgallery.png" alt="App Gallery" width={96} height={32} />
          </div>
        </div>
      </div>
    </div>
  );
}
