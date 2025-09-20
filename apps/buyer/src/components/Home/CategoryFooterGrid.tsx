// src/components/Home/CategoryFooterGrid.tsx
'use client';

import { Box, Typography } from '@mui/material';
import React from 'react';

const categories = {
  'Thời Trang Nam': ['Áo khoác', 'Quần jeans', 'Áo sơ mi', 'Phụ kiện'],
  'Thời Trang Nữ': ['Đầm', 'Áo kiểu', 'Chân váy', 'Túi xách'],
  'Điện Thoại': ['iPhone 15', 'Samsung A54', 'Oppo', 'Xiaomi'],
  'Mẹ & Bé': ['Sữa', 'Tã bỉm', 'Đồ chơi trẻ em'],
  'Thiết bị điện tử': ['Tai nghe', 'Loa bluetooth', 'Camera hành trình'],
};

const CategoryFooterGrid = () => {
  return (
    <Box className="bg-gray-50 py-10 px-4 mt-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {Object.entries(categories).map(([title, items], idx) => (
          <div key={idx}>
            <Typography variant="subtitle2" className="font-semibold mb-2 text-gray-800">
              {title}
            </Typography>
            <ul className="text-sm text-gray-600 space-y-1">
              {items.map((item, index) => (
                <li key={index} className="hover:text-black hover:underline cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default CategoryFooterGrid;
