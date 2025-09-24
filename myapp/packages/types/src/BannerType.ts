export interface BannerItem {
  id: number;
  src: string;
  alt: string;
  link?: string;
  title?: string;
  description?: string;
}

export interface BannerData {
  mainBanners: BannerItem[];
  subBanners: BannerItem[];
}

// Banner data
export const bannerData: BannerData = {
  mainBanners: [
    {
      id: 1,
      src: "/banner/banner1.png",
      alt: "Main Banner 1",
      title: "Flash Sale 50%",
      description: "Khuyến mãi lớn cuối năm",
      link: "/flash-sale",
    },
    {
      id: 2,
      src: "/banner/banner2.png",
      alt: "Main Banner 2",
      title: "Siêu Sale Điện Tử",
      description: "Giảm giá điện thoại, laptop",
      link: "/electronics-sale",
    },
    {
      id: 3,
      src: "/banner/banner3.png",
      alt: "Main Banner 3",
      title: "Thời Trang Trending",
      description: "Xu hướng thời trang mới nhất",
      link: "/fashion-trend",
    },
  ],
  subBanners: [
    {
      id: 4,
      src: "/banner/banner2.png",
      alt: "Sub Banner 1",
      title: "Mỹ Phẩm Sale",
      description: "Giảm 30% các sản phẩm làm đẹp",
      link: "/beauty-sale",
    },
    {
      id: 5,
      src: "/banner/banner3.png",
      alt: "Sub Banner 2",
      title: "Gia Dụng Tiện Ích",
      description: "Đồ gia dụng thông minh",
      link: "/home-appliances",
    },
  ],
};

// Types for banner configuration
export interface BannerConfig {
  autoSlideInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  infiniteLoop?: boolean;
}

export const defaultBannerConfig: BannerConfig = {
  autoSlideInterval: 4000,
  showDots: true,
  showArrows: true,
  infiniteLoop: true,
};
