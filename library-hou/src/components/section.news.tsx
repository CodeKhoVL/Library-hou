'use client'
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const featuredNews = {
  title: "Kiểm tra công tác thực hiện kế hoạch đào tạo và chúc mừng cán bộ, giảng viên, sinh viên nhân dịp năm mới",
  content:
    "Nhằm đảm bảo công tác tổ chức đào tạo được triển khai đúng kế hoạch và hiệu quả ngay từ những ngày đầu năm mới, ngày 05/02, Trường Đại học Mở Hà Nội tổ chức Đoàn công tác kiểm tra tình hình triển khai công tác đào tạo chính quy tại các đơn vị trong Trường...",
  image: "/images/news1.jpg",
  link: "http://thuvien.hou.edu.vn/ContentBrowser.aspx?author=1&contentid=8747&dmd_id=81960",
};

const newsCards = [
  {
    title: "Gặp mặt đầu năm mới Ất Tỵ 2025",
    content:
      "Ngày 03/2, Trường Đại học Mở Hà Nội tổ chức chương trình Gặp mặt đầu năm mới Ất Tỵ 2025. Chương trình nhận được sự quan tâm tham dự của Đồng chí Nguyễn Kim Sơn - Ủy viên BCH Trung ương Đảng, Bộ trưởng Bộ Giáo dục và Đào tạo cùng đại diện lãnh đạo một số đơn vị thuộc Bộ Giáo dục và Đào tạo...",
    image: "/images/news2.jpg",
    link: "http://thuvien.hou.edu.vn/ContentBrowser.aspx?catid=8001&contentid=8745&dmd_id=81368",
  },
  {
    title: "Thư chúc mừng năm mới Ất Tỵ 2025 của Hiệu trưởng Trường Đại học Mở Hà Nội",
    content: (
      <>
       Trong không khí của một mùa xuân mới, trân trọng gửi tới các thế hệ cán bộ, giảng viên, nghiên cứu sinh, học viên và sinh viên toàn văn Thư chúc mừng năm mới Ất Tỵ 2025 của PGS TS Nguyễn Thị Nhung – Hiệu trưởng Trường Đại học Mở Hà Nội.
      </>
    ),
    image: "/images/news3.jpg",
    link: "https://www.adelaide.edu.au/library/news/list/2024/11/11/applications-open-for-hugh-martin-weir-prize-2025",
  },
  {
    title: "Trường Đại học Mở Hà Nội tổ chức Chương trình Gặp mặt Tất niên - Chào xuân Ất Tỵ",
    content: (
      <>
        Ngày 20/01/2025, Trường Đại học Mở Hà Nội tổ chức gặp mặt cán bộ, giảng viên, người lao động tại Cơ sở Văn Giang, Hưng Yên của Nhà trường. Tại đây, cán bộ, giảng viên, người lao động đã được hòa mình vào không gian đậm chất văn hóa ...
      </>
    ),
    image: "/images/news4.jpg",
    link: "https://www.adelaide.edu.au/library/news/list/2024/11/05/images-of-learning-and-teaching-competition-winners-2024",
  },
];

export default function NewsAndEvents(): React.ReactElement {
  return (
    <section className="max-w-[1158px] mx-auto">
      <h2 className="text-[42px] font-semibold font-sans text-[#102535] leading-[52.8px] mb-[10px]">
        News &amp; Events
      </h2>

      {/* Featured news item */}
      <div className="flex flex-row gap-8 mb-8">
        <a className="flex-shrink-0 w-[500px]" href={featuredNews.link} target="_blank" rel="noopener noreferrer">
          <div
            className="w-full h-[375px] bg-cover bg-center"
            style={{ backgroundImage: `url(${featuredNews.image})` }}
          />
        </a>
        <div className="flex flex-col">
          <a className="text-[19px] leading-[26.4px] text-[#102535] font-bold hover:underline mb-7 " href={featuredNews.link} target="_blank" rel="noopener noreferrer">
            {featuredNews.title}
          </a>
          <p className="text-[15.8px] leading-[27px] text-[#102535] font-normal mb-6">
            {featuredNews.content}
          </p>
          <Button variant="outline" className="w-fit h-auto rounded-none border-black text-black text-[12.4px] px-[22.6px] py-[15px]" asChild>
            <a href={featuredNews.link} target="_blank" rel="noopener noreferrer">Read more</a>
          </Button>
        </div>
      </div>

      {/* News cards */}
      <div className="grid grid-cols-3 gap-[30px]">
        {newsCards.map(({ title, content, image, link }, index) => (
          <Card key={index} className="rounded-none border-0 bg-neutral-100">
            <a href={link} target="_blank" rel="noopener noreferrer" className="block">
              <div className="w-full h-[267px] bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
            </a>
            <CardContent className="p-8">
              <a className="text-[19px] leading-[30.4px] text-[#102535] font-bold hover:underline block mb-4 mt-5" href={link} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
              <div className="text-[15.8px] leading-[27px] text-[#102535] font-normal mb-6">{content}</div>
              <Button variant="outline" className="w-fit h-auto rounded-none border-black text-black text-[12.4px] px-[22.6px] py-[15px]" asChild>
                <a href={link} target="_blank" rel="noopener noreferrer">Read more</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
