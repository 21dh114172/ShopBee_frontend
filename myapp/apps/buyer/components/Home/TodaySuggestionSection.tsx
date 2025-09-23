// src/components/Home/TodaySuggestionSection.tsx
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

const suggestions = [
  {
    id: 1,
    name: "Balo đi học Nam",
    price: "₫119.000",
    image: "/images/sug1.jpg",
    discount: "-56%",
  },
  {
    id: 2,
    name: "Set đồ hot 2025",
    price: "₫48.400",
    image: "/images/sug2.jpg",
    discount: "-30%",
  },
  {
    id: 3,
    name: "Áo sweater nữ",
    price: "₫136.740",
    image: "/images/sug3.jpg",
    discount: "-47%",
  },
  {
    id: 4,
    name: "Giày đốc nam đế mềm",
    price: "₫76.000",
    image: "/images/sug4.jpg",
    discount: "-50%",
  },
  {
    id: 5,
    name: "Quần kaki nữ",
    price: "₫136.998",
    image: "/images/sug5.jpg",
    discount: "-35%",
  },
  {
    id: 6,
    name: "Áo babydoll xinh",
    price: "₫35.000",
    image: "/images/sug6.jpg",
    discount: "-46%",
  },
  // thêm sản phẩm tuỳ ý...
];

const TodaySuggestionSection = () => {
  return (
    <Box className="my-6">
      <Typography
        variant="h6"
        className="text-red-600 mb-4 font-bold uppercase"
      >
        Gợi ý hôm nay
      </Typography>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {suggestions.map((product) => (
          <Card
            key={product.id}
            className="rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
          >
            <CardMedia
              component="img"
              image={product.image}
              alt={product.name}
              className="h-32 object-contain p-2"
            />
            <CardContent className="p-2">
              <Typography variant="body2" className="text-xs truncate">
                {product.name}
              </Typography>
              <Typography
                variant="subtitle2"
                className="text-red-600 font-bold"
              >
                {product.price}
              </Typography>
              <Chip
                label={product.discount}
                size="small"
                className="mt-1 bg-orange-400 text-white"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </Box>
  );
};

export default TodaySuggestionSection;
