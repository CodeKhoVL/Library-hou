import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRightIcon, CalendarIcon, UserIcon } from "lucide-react";
import React from "react";

// News data for mapping
const newsItems = [
  {
    id: 1,
    date: "Feb 10, 2024",
    author: "Admin",
    title:
      "Kiểm tra công tác thực hiện kế hoạch đào tạo và chúc mừng cán bộ, giảng viên, sinh viên nhân dịp năm mới",
    image: "/images/news1.jpg",
  },
  {
    id: 2,
    date: "Mar 20, 2024",
    author: "Admin",
    title: "Gặp mặt đầu năm mới Ất Tỵ 2025",
    image: "/images/news2.jpg",
  },
  {
    id: 3,
    date: "Jun 14, 2024",
    author: "Admin",
    title:
      "Thư chúc mừng năm mới Ất Tỵ 2025 của Hiệu trưởng Trường Đại học Mở Hà Nội",
    image: "/images/news3.jpg",
  },
  {
    id: 4,
    date: "Mar 12, 2024",
    author: "Admin",
    title:
      "Trường Đại học Mở Hà Nội tổ chức Chương trình Gặp mặt Tất niên - Chào xuân Ất Tỵ",
    image: "/images/news4.jpg",
  },
];

const Section = (): React.ReactElement => {
  return (
    <section className="flex flex-col items-center py-24 px-4 md:px-8 lg:px-16 bg-[#d0e1e7]">
      <div className="container flex flex-col items-center max-w-7xl">
        {/* Section Header */}
        <header className="flex flex-col items-center gap-4 w-full mb-8">
          <h2 className="font-bold text-[#012e4a] text-4xl text-center">
            Tin Tức
          </h2>
          <p className="text-[#4f536c] text-center max-w-2xl">
            Được cập nhật liên tục thông tin trong trường và ngoài trường
          </p>
        </header>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {newsItems.map((item) => (
            <div key={item.id} className="flex flex-col">
              <Card className="overflow-hidden border border-solid border-[#5c707e33] rounded-2xl h-full">
                {/* Card Image Section */}
                <div className="relative">
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                </div>

                <CardContent className="flex flex-col gap-2 p-6">
                  {/* Date and Author */}
                  <div className="flex items-center gap-6 w-full">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-3 h-3.5" />
                      <span className="text-[#4f536c] text-sm">
                        {item.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <UserIcon className="w-3 h-3.5" />
                      <span className="text-[#4f536c] text-sm">
                        By {item.author}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-[#012e4a] text-lg leading-[26.1px]">
                    {item.title}
                  </h3>

                  {/* Read More Link */}
                  <div className="flex items-center gap-2.5 pt-1.5">
                    <span className="text-[#4f536c]">Đọc tiếp</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
