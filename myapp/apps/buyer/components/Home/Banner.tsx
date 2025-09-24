// apps/buyer/src/components/home/Banner.tsx
"use client";
import { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Image from "next/image";
import {
  bannerData,
  BannerItem,
  defaultBannerConfig,
} from "../../../../packages/types/src/BannerType";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const mainBanners = bannerData.mainBanners;
  const subBanners = bannerData.subBanners;
  const config = defaultBannerConfig;

  // Auto slide với cấu hình
  useEffect(() => {
    if (!config.infiniteLoop || !config.autoSlideInterval) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mainBanners.length);
    }, config.autoSlideInterval);

    return () => clearInterval(interval);
  }, [mainBanners.length, config.autoSlideInterval, config.infiniteLoop]);

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + mainBanners.length) % mainBanners.length
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mainBanners.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full bg-white pt-4 container-responsive">
      <div className="mx-auto flex gap-[5px] h-[235px]">
        {/* Main Banner Carousel */}
        <Box
          sx={{
            flex: 1,
            height: "100%",
            position: "relative",
            overflow: "hidden",
            "&:hover .carousel-controls": {
              opacity: config.showArrows ? 1 : 0,
            },
          }}
        >
          {/* Banner Images Container */}
          <Box
            sx={{
              display: "flex",
              width: `${mainBanners.length * 100}%`,
              height: "100%",
              transform: `translateX(-${(currentSlide * 100) / mainBanners.length}%)`,
              transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {mainBanners.map((banner: BannerItem) => (
              <Box
                key={banner.id}
                sx={{
                  width: `${100 / mainBanners.length}%`,
                  height: "100%",
                  position: "relative",
                  flexShrink: 0,
                  cursor: banner.link ? "pointer" : "default",
                }}
                onClick={() =>
                  banner.link && window.open(banner.link, "_blank")
                }
              >
                <Image
                  src={banner.src}
                  alt={banner.alt}
                  fill
                  className="object-cover"
                  priority={banner.id === 1}
                />
              </Box>
            ))}
          </Box>

          {/* Navigation Arrows */}
          {config.showArrows && (
            <>
              <IconButton
                className="carousel-controls"
                onClick={handlePrevSlide}
                sx={{
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "35px",
                  height: "60px",
                  backgroundColor: "rgba(0, 0, 0, 0.18)",
                  color: "white",
                  opacity: 0,
                  transition: "all 0.3s ease",
                  borderRadius: "1px",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, .32)",
                  },
                  zIndex: 2,
                }}
              >
                <ChevronLeft sx={{ fontSize: "35px" }} />
              </IconButton>

              <IconButton
                className="carousel-controls"
                onClick={handleNextSlide}
                sx={{
                  position: "absolute",
                  right: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "35px",
                  height: "60px",
                  backgroundColor: "rgba(0, 0, 0, 0.18)",
                  color: "white",
                  opacity: 0,
                  transition: "all 0.3s ease",
                  borderRadius: "1px",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, .32)",
                  },
                  zIndex: 2,
                }}
              >
                <ChevronRight sx={{ fontSize: "35px" }} />
              </IconButton>
            </>
          )}

          {/* Dots Indicator */}
          {config.showDots && (
            <Box
              sx={{
                position: "absolute",
                bottom: 16,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: 1.5,
                zIndex: 2,
                padding: "8px 8px",
                borderRadius: "20px",
              }}
            >
              {mainBanners.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => handleDotClick(index)}
                  sx={{
                    width: currentSlide === index ? 8 : 8,
                    height: 8,
                    borderRadius: currentSlide === index ? "4px" : "50%",
                    backgroundColor:
                      currentSlide === index
                        ? "#ee4d2d"
                        : "rgba(255, 255, 255, 0.6)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor:
                        currentSlide === index
                          ? "#d73211"
                          : "rgba(255, 255, 255, 0.8)",
                    },
                  }}
                />
              ))}
            </Box>
          )}
        </Box>

        {/* Sub Banners */}
        <div className="w-1/3 flex flex-col gap-[5px] h-full">
          {subBanners.map((banner, index) => (
            <div
              key={banner.id}
              className="h-[115px] relative overflow-hidden cursor-pointer group"
              onClick={() => banner.link && window.open(banner.link, "_blank")}
            >
              <Image
                src={banner.src}
                alt={banner.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
