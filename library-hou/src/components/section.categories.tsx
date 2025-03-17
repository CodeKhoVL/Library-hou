"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";

// Danh sách danh mục sách
const categories = [
  {
    id: "01",
    name: "Romance Books",
    count: 80,
    image: "/images/categories1.png",
    shape: "/shape-img.png",
  },
  {
    id: "02",
    name: "Design Low Book",
    count: 6,
    image: "/images/categories2.png",
    shape: "/shape-img-2.png",
  },
  {
    id: "03",
    name: "Safe Home",
    count: 5,
    image: "/images/categories3.png",
    shape: "/shape-img-3.png",
  },
  {
    id: "04",
    name: "Grow Flower",
    count: 7,
    image: "/images/categories4.png",
    shape: "/shape-img-4.png",
  },
  {
    id: "05",
    name: "Adventure Book",
    count: 4,
    image: "/images/categories5.png",
    shape: "/shape-img-5.png",
  },
  {
    id: "06",
    name: "Grow Flower",
    count: 7,
    image: "/images/categories4.png",
    shape: "/shape-img-4.png",
  },
  {
    id: "07",
    name: "Adventure Book",
    count: 4,
    image: "/images/categories5.png",
    shape: "/shape-img-5.png",
  },
];

export default function Categories(): React.ReactElement {
  return (
    <section className="flex flex-col mb-10 items-center py-24 px-4 md:px-8 lg:px-16 relative bg-[#d0e1e7]">
      <div className="container flex flex-col items-center relative">
        {/* Tiêu đề */}
        <h2 className="text-center font-extrabold text-4xl text-[#012E4A] mb-8">
          Top Categories Book
        </h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 5 },
          }}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          speed={1000}
          pagination={{ clickable: true }}
          className="w-full max-w-[1511px] relative pb-16" // Tạo khoảng trống dưới pagination
        >
          {categories.map((category) => (
            <SwiperSlide
              key={category.id}
              className="flex justify-center items-center"
            >
              <CategoryCard category={category} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Custom */}
        <div className="custom-swiper-pagination mt-6"></div>

        {/* Thêm CSS để chỉnh vị trí pagination */}
        <style jsx>{`
          .swiper-pagination {
            position: relative !important;
            bottom: -10px !important; /* Điều chỉnh vị trí xuống dưới */
          }

          .swiper-slide {
            display: flex !important;
            justify-content: center !important;
          }
        `}</style>
      </div>
    </section>
  );
}

// Component hiển thị danh mục sách
function CategoryCard({ category }: { category: (typeof categories)[0] }) {
  return (
    <div className="p-2 flex justify-center w-full">
      <Card className="border-none shadow-md w-full max-w-[250px]">
        <CardContent className="flex flex-col items-center p-4">
          <div className="relative flex flex-col items-center gap-5 pt-[30px]">
            {/* Huy hiệu ID */}
            <Badge className="absolute top-4 right-4 w-[34px] h-[34px] flex items-center justify-center bg-[#012e4a] text-white rounded-full z-10 p-0">
              <span className="font-bold">{category.id}</span>
            </Badge>

            {/* Ảnh danh mục */}
            <div className="relative w-[200px] h-[200px] flex items-center justify-center bg-white rounded-full">
              <img
                src={category.image}
                alt={category.name}
                className="w-[104px] h-36 object-contain"
              />
            </div>

            {/* Tên danh mục */}
            <p className="text-[#012e4a] font-semibold text-lg text-center">
              {category.name} ({category.count})
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
