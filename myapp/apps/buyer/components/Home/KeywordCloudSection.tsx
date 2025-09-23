// src/components/Home/KeywordCloudSection.tsx
'use client';

import React from 'react';
import { Box, Typography, Chip } from '@mui/material';

const keywords = [
  'tai nghe bluetooth', 'sữa tắm', 'váy baby doll', 'iphone 17', 'dép sandal', 'gọng kính', 'quạt cầm tay', 'sáp vuốt tóc', 'sách hay', 'quần kaki',
  // ... bạn thêm theo nhu cầu
];

const KeywordCloudSection = () => {
  return (
    <Box className="my-10 px-4">
      <Typography variant="subtitle1" className="font-semibold text-gray-800 mb-2">
        Có thể bạn đang tìm kiếm
      </Typography>
      <div className="flex flex-wrap gap-2">
        {keywords.map((word, i) => (
          <Chip key={i} label={word} size="small" className="bg-gray-100 hover:bg-gray-200 cursor-pointer" />
        ))}
      </div>
    </Box>
  );
};

export default KeywordCloudSection;
