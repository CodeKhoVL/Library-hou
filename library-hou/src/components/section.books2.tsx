"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const books = [
  {
    id: 1,
    category: "Design Low Book",
    title: "How Deal With Very\nBad BOOK",
    image: "/images/book2.png",
  },
  {
    id: 2,
    category: "Design Low Book",
    title: "The Hidden Mystery\nBehind",
    image: "/images/book1.jpg",
  },
  {
    id: 3,
    category: "Design Low Book",
    title: "Qple GPad With Retina\nSisplay",
    image: "/images/book2.png",
  },
  {
    id: 4,
    category: "Design Low Book",
    title: "Flovely And Unicom\nErna",
    image: "/images/book1.jpg",
  },
  {
    id: 5,
    category: "Design Low Book",
    title: "Simple Things You To\nSave BOOK",
    image: "/images/book2.png",
  },
];

export default function SectionBook(): React.ReactElement {
  return (
    <section className="flex flex-col mt-5 w-full items-center pb-[100px] px-4 md:px-8 lg:px-16">
      <div className="flex flex-col w-full max-w-[1595px] items-start gap-2.5 px-3 relative">
        <div className="relative w-full flex justify-between items-center mb-4">
          <h2
            className="font-extrabold"
            style={{
              color:
                "var(--gramentheme-com-prussian-blue, var(--color-azure-15, #012E4A))",
              textAlign: "center",
              fontFamily: "var(--font-family-Font-1, Inter)",
              fontSize: "var(--font-size-40, 40px)",
              fontStyle: "normal",
              fontWeight: "var(--font-weight-700, 700)",
              lineHeight: "var(--font-size-40, 40px)", // 100%
              textTransform: "capitalize",
            }}
          >
            Giáo trình
          </h2>
          <Button className="bg-transparent text-[#070707] font-bold text-base px-10 py-5 h-auto">
            Explore More <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          speed={1000}
          className="w-full"
        >
          {books.map((book) => (
            <SwiperSlide key={book.id} className="p-4">
              <Card className="border-none shadow-none">
                <CardContent className="p-0 flex flex-col">
                  <div className="bg-neutral-100 rounded-[10px] p-[30px] flex items-center justify-center h-[292px]">
                    <div
                      className="h-[216px] w-[155px] bg-cover bg-center"
                      style={{ backgroundImage: `url(${book.image})` }}
                    />
                  </div>
                  <div className="flex flex-col gap-[5px] mt-5 text-center">
                    <p className="text-[#4f536c] text-lg font-semibold">
                      {book.category}
                    </p>
                    <h3 className="text-[#012e4a] text-lg font-bold whitespace-pre-line">
                      {book.title}
                    </h3>
                  </div>
                  <Button className="mt-5 rounded-full bg-[#237c9c] text-[#036280] font-bold hover:bg-[#c0d6de]">
                    Xoem Soách
                  </Button>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
