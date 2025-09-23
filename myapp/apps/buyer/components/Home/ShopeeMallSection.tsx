// src/components/Home/ShopeeMallSection.tsx
import React from 'react';

const ShopeeMallSection = () => {
  return (
    <section className="bg-white p-4 rounded-lg shadow-sm my-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-red-500">🛍️ Shopee Mall</h2>
        <a href="#" className="text-sm text-red-500 hover:underline">
          Xem tất cả
        </a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div className="text-center">
          <img
            src="/images/brand1.jpg"
            alt="Unilever"
            className="w-20 h-20 object-contain mx-auto rounded"
          />
          <p className="text-sm mt-2">Mua 1 tặng 1</p>
        </div>
        <div className="text-center">
          <img
            src="/images/brand2.jpg"
            alt="L'Oreal"
            className="w-20 h-20 object-contain mx-auto rounded"
          />
          <p className="text-sm mt-2">Giảm đến 50%</p>
        </div>
        <div className="text-center">
          <img
            src="/images/brand3.jpg"
            alt="Deli"
            className="w-20 h-20 object-contain mx-auto rounded"
          />
          <p className="text-sm mt-2">Siêu sale</p>
        </div>
      </div>
    </section>
  );
};

export default ShopeeMallSection;
