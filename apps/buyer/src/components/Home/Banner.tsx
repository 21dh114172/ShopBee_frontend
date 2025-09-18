// apps/buyer/src/components/home/Banner.tsx
"use client";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full bg-white py-4">
      <div className="container mx-auto flex gap-4 px-4">
        <div className="flex-1">
          <Image
            src="/banner/banner1.png"
            alt="Main Banner"
            width={800}
            height={235}
            className="w-full h-auto rounded object-cover"
            priority
          />
        </div>
        <div className="w-1/3 flex flex-col gap-4">
          <Image
            src="/banner/banner2.png"
            alt="Sub Banner 1"
            width={400}
            height={115}
            className="w-full h-auto rounded object-cover"
          />
          <Image
            src="/banner/banner3.png"
            alt="Sub Banner 2"
            width={400}
            height={115}
            className="w-full h-auto rounded object-cover"
          />
        </div>
      </div>
    </div>
  );
}
