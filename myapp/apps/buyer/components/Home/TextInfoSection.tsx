// src/components/Home/TextInfoSection.tsx
'use client';

import { Box, Typography } from '@mui/material';
import React from 'react';

const TextInfoSection = () => {
  return (
    <Box className="my-10 px-2 sm:px-4 md:px-10 text-[13px] leading-6 text-gray-800">
      <Typography variant="h6" className="text-red-600 font-bold uppercase mb-4">
        Shopee – Gì Cũng Có, Mua Hết Ở Shopee
      </Typography>
      <p className="mb-4">
        Shopee - ứng dụng mua sắm trực tuyến tiện lợi, uy tín, an toàn và miễn phí! Shopee là nền tảng giao dịch trực tuyến hàng đầu Đông Nam Á...
      </p>
      <p className="mb-4">
        MUA SẮM VÀ BÁN HÀNG ONLINE ĐƠN GIẢN, NHANH CHÓNG VÀ AN TOÀN: Bạn đang tìm kiếm một trang thương mại điện tử...
      </p>
      <p className="mb-4 font-semibold">
        MUA HÀNG HIỆU CAO CẤP GIÁ TỐT TẠI SHOPEE
      </p>
      <p className="mb-4">
        Shopee Premium chuyên cung cấp các thương hiệu nổi tiếng như MAC, Fossil, Estee Lauder, ...
      </p>
      {/* Có thể dùng <Typography> nếu bạn muốn đồng bộ hơn */}
    </Box>
  );
};

export default TextInfoSection;
