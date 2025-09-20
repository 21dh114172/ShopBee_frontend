"use client";
import Link from "next/link";
import Image from "next/image";

export default function AuthHeader() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container-responsive">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/ShopBee_Logo.png"
              alt="ShopBee"
              width={120}
              height={40}
            />
          </Link>
          
          {/* Navigation */}
          <div className="text-sm text-gray-600">
            Bạn cần giúp đỡ?
          </div>
        </div>
      </div>
    </header>
  );
}