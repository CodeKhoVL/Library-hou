"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Header(): React.ReactElement {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const trendingTopics = ["Giáo Trình", "Bài Giảng", "Luận Văn"];

  const handleSearch = () => {
    router.push(
      `/search${searchQuery ? `?q=${encodeURIComponent(searchQuery)}` : ""}`
    );
  };

  const handleTopicClick = (topic: string) => {
    router.push(`/search?q=${encodeURIComponent(topic)}`);
  };

  return (
    <main className="relative flex flex-col items-center justify-center min-h-[50vh] sm:min-h-[70vh] md:min-h-screen w-full px-3 sm:px-4 py-8 sm:py-12 md:py-20 bg-white bg-opacity-30">
      <Image
        src="/images/bg-library.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="-z-10"
      />

      <div className="max-w-[85vw] sm:max-w-[90vw] md:max-w-[850px] w-full flex flex-col items-center">
        <h2 className="font-inter font-bold text-sm sm:text-lg md:text-xl text-[#102039] text-center mb-3 sm:mb-6 tracking-wide uppercase drop-shadow-md">
          Trường đại học Mở Hà Nội
        </h2>

        <div className="text-center mb-5 sm:mb-8 md:mb-10">
          <h1 className="font-inter text-[#102039] text-xl sm:text-2xl md:text-3xl font-bold leading-tight tracking-wider drop-shadow-lg">
            Library HOU <br /> Thư viện đại học Mở
          </h1>
        </div>

        <p className="font-inter text-[#413c3c] text-sm sm:text-base md:text-lg text-center leading-relaxed mb-5 sm:mb-8 md:mb-10 italic opacity-90">
          Mở ra cơ hội học tập cho mọi người <br className="hidden sm:block" />{" "}
          Mở tương lai, Mở cơ hội, Mở trái tim, Mở Tầm nhìn, Mở Trí Tuệ
        </p>

        {/* Search card với hiệu ứng mờ tốt hơn */}
        <Card className="w-full bg-white/50 rounded-[15px] sm:rounded-[20px] border border-solid border-[#4c53a5aa] backdrop-blur-md shadow-lg mb-5 sm:mb-8 flex justify-center items-center">
          <CardContent className="p-3 sm:p-4 md:p-6 w-full flex flex-col items-center">
            <div className="w-full max-w-[90vw] sm:max-w-[600px] mt-2 sm:mt-4 md:mt-7 flex flex-col sm:flex-row items-center bg-white/60 rounded-[30px] sm:rounded-[60px] mb-4 sm:mb-6 relative shadow-lg">
              <div className="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 sm:py-5 md:py-7 text-[#102039] text-sm sm:text-base md:text-lg font-semibold text-center sm:text-left">
                Search
              </div>
              <div className="flex-1 w-full sm:w-auto border-t sm:border-t-0 sm:border-l border-[#e9e9e9] rounded-b-[30px] sm:rounded-b-none sm:rounded-r-[40px] overflow-hidden">
                <Input
                  className="border-none h-[40px] sm:h-[50px] md:h-[60px] pl-4 sm:pl-7 text-[#1d1d1d] text-sm sm:text-base md:text-lg bg-transparent"
                  placeholder="Search here"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                />
              </div>
              <Button
                className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 p-1 sm:p-2 bg-transparent hover:bg-gray-100 rounded-full"
                onClick={handleSearch}
                variant="ghost"
              >
                <Search className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[23px] md:h-[23px] text-[#102039]" />
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center">
              <span className="text-[#102039] text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-0">
                Chủ đề :
              </span>
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-5 sm:ml-2 justify-center">
                {trendingTopics.map((topic, index) => (
                  <Button
                    key={index}
                    variant="link"
                    className="p-0 text-[#102039] text-sm sm:text-base md:text-lg"
                    onClick={() => handleTopicClick(topic)}
                  >
                    {topic}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Button
          className="bg-[#c3161c] hover:bg-[#a51217] text-white rounded-[3px] px-4 sm:px-6 md:px-8 py-[10px] sm:py-[14px] md:py-[18px] text-sm sm:text-base md:text-lg font-semibold"
          onClick={handleSearch}
        >
          Tìm Kiếm
        </Button>
      </div>
    </main>
  );
}
