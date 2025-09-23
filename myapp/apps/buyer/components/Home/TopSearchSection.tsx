// src/components/Home/TopSearchSection.tsx
"use client";

import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";
import React from "react";

const topSearchItems = [
  {
    id: 1,
    name: "Quần Kaki Nam",
    sales: "12k+/tháng",
    image: "/images/top1.jpg",
  },
  { id: 2, name: "Bao Cao Su", sales: "54k+/tháng", image: "/images/top2.jpg" },
  {
    id: 3,
    name: "Quần Jogger Nam",
    sales: "11k+/tháng",
    image: "/images/top3.jpg",
  },
  {
    id: 4,
    name: "Jean Rách Gối",
    sales: "23k+/tháng",
    image: "/images/top4.jpg",
  },
  {
    id: 5,
    name: "Tóp Mỡ Mắm Tỏi",
    sales: "12k+/tháng",
    image: "/images/top5.jpg",
  },
];

const TopSearchSection = () => {
  return (
    <Box className="my-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-red-600 uppercase">
          Tìm kiếm hàng đầu
        </h2>
        <a href="#" className="text-sm text-red-500 hover:underline">
          Xem tất cả &gt;
        </a>
      </div>

      <Box className="flex gap-4 overflow-x-auto scrollbar-hide">
        {topSearchItems.map((item) => (
          <Card
            key={item.id}
            className="min-w-[110px] max-w-[110px] rounded-xl border border-gray-200 shadow-sm"
          >
            <CardMedia
              component="img"
              image={item.image}
              alt={item.name}
              className="h-24 object-contain p-2"
            />
            <CardContent className="p-2 text-center">
              <Chip label="TOP" size="small" color="error" className="mb-1" />
              <Typography variant="body2" className="text-xs truncate">
                {item.name}
              </Typography>
              <Typography variant="caption" className="text-gray-500">
                {item.sales}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default TopSearchSection;
