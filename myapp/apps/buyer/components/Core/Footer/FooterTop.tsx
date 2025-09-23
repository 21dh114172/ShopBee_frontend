import Image from "next/image";
import {
  paymentMethods,
  shippingProviders,
  socialLinks,
  downloadApps,
  customerServices,
  aboutShopee,
} from "./FooterData";

export default function FooterTop() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 p-6 max-w-7xl mx-auto">
      {/* Dịch vụ khách hàng */}
      <div>
        <h3 className="font-semibold mb-2">DỊCH VỤ KHÁCH HÀNG</h3>
        <ul className="space-y-1">
          {customerServices.map((service, i) => (
            <li
              key={i}
              className="hover:text-orange-500 cursor-pointer text-sm"
            >
              {service}
            </li>
          ))}
        </ul>
      </div>

      {/* Shopee Việt Nam */}
      <div>
        <h3 className="font-semibold mb-2">SHOPEE VIỆT NAM</h3>
        <ul className="space-y-1">
          {aboutShopee.map((item, i) => (
            <li
              key={i}
              className="hover:text-orange-500 cursor-pointer text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Thanh toán và vận chuyển */}
      <div>
        <h3 className="font-semibold mb-2">THANH TOÁN</h3>
        <div className="flex flex-wrap gap-2">
          {paymentMethods.map((item, i) => (
            <Image
              key={i}
              src={item.src}
              alt={item.alt}
              width={52}
              height={22}
              className="object-contain"
            />
          ))}
        </div>

        <h3 className="font-semibold mt-4 mb-2">ĐƠN VỊ VẬN CHUYỂN</h3>
        <div className="flex flex-wrap gap-2">
          {shippingProviders.map((item, i) => (
            <Image
              key={i}
              src={item.src}
              alt={item.alt}
              width={52}
              height={22}
              className="object-contain"
            />
          ))}
        </div>
      </div>

      {/* Theo dõi Shopee */}
      <div>
        <h3 className="font-semibold mb-2">THEO DÕI SHOPEE</h3>
        <ul className="space-y-1">
          {socialLinks.map((social, i) => (
            <li
              key={i}
              className="flex items-center space-x-2 hover:text-orange-500 cursor-pointer text-sm"
            >
              <Image
                src={social.src}
                alt={social.alt}
                width={20}
                height={20}
                className="object-contain"
              />
              <span>{social.alt}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tải ứng dụng */}
      <div>
        <h3 className="font-semibold mb-2">TẢI ỨNG DỤNG SHOPEE</h3>
        <div className="flex space-x-2">
          <Image
            src="/footer/download/qr.png"
            alt="QR Code"
            width={80}
            height={80}
            className="object-contain"
          />
          <div className="flex flex-col space-y-1">
            {downloadApps.map((item, i) => (
              <Image
                key={i}
                src={item.src}
                alt={item.alt}
                width={52}
                height={22}
                className="object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
