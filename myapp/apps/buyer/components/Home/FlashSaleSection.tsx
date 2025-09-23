// src/components/Home/FlashSaleSection.tsx
"use client";

import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Bình nước vòi",
    price: "₫9.000",
    image: "/images/product1.jpg",
    label: "CHỈ CÒN 1",
  },
  {
    id: 2,
    name: "Ốp lưng iPhone",
    price: "₫1.000",
    image: "/images/product2.jpg",
    label: "ĐANG BÁN CHẠY",
  },
  {
    id: 3,
    name: "Túi rác khử mùi",
    price: "₫9.000",
    image: "/images/product3.jpg",
    label: "ĐANG BÁN CHẠY",
  },
  {
    id: 4,
    name: "Đồng hồ nữ",
    price: "₫109.000",
    image: "/images/product4.jpg",
    label: "ĐANG BÁN CHẠY",
  },
  {
    id: 5,
    name: "Dao gọt inox",
    price: "₫1.000",
    image: "/images/product5.jpg",
    label: "ĐANG BÁN CHẠY",
  },
  {
    id: 6,
    name: "Đầm đen nữ tính",
    price: "₫196.560",
    image: "/images/product6.jpg",
    label: "ĐANG BÁN CHẠY",
  },
];

const FlashSaleSection = () => {
  return (
    <Box className="bg-white p-4 rounded-lg shadow-sm my-6">
      {/* Header */}
      <Box className="flex justify-between items-center mb-4">
        <Typography
          variant="h6"
          className="flex items-center gap-2 text-red-600 font-bold"
        >
          <Image
            src="/home/flasesale/flash-sale-icon.png"
            alt="Flash Sale"
            width={24}
            height={24}
          />
        </Typography>
        <Box className="flex items-center gap-1 text-sm text-black font-semibold bg-gray-100 px-2 py-1 rounded">
          <AccessTimeIcon fontSize="small" />
          02 : 47 : 49
        </Box>
      </Box>

      {/* Product list */}
      <Box className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
        {products.map((product) => (
          <Card
            key={product.id}
            className="min-w-[140px] max-w-[140px] rounded-xl border border-gray-200 shadow hover:shadow-md"
          >
            <CardMedia
              component="img"
              image={product.image}
              alt={product.name}
              className="h-24 object-contain p-2"
            />
            <CardContent className="p-2">
              <Typography variant="body2" className="truncate">
                {product.name}
              </Typography>
              <Typography
                variant="subtitle2"
                className="text-red-600 font-bold"
              >
                {product.price}
              </Typography>
              <Chip
                label={product.label}
                size="small"
                className="mt-2 bg-gradient-to-r from-orange-400 to-pink-400 text-white font-semibold"
                icon={<FlashOnIcon fontSize="small" className="text-white" />}
              />
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default FlashSaleSection;
