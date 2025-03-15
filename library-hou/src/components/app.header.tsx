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

  // Trending topics data
  const trendingTopics = ["Giáo Trình", "Bài Giảng", "Luận Văn"];

  // Handle search button click
  const handleSearch = () => {
    // Navigate to search page with query parameter if there's a search query
    router.push(
      `/search${searchQuery ? `?q=${encodeURIComponent(searchQuery)}` : ""}`
    );
  };

  // Handle topic click
  const handleTopicClick = (topic: string) => {
    router.push(`/search?q=${encodeURIComponent(topic)}`);
  };

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen w-full px-4 py-12 md:py-20">
      {/* Background Image */}
      <Image
        src="/images/bg-library.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="-z-10"
      />

      <div className="max-w-[850px] w-full flex flex-col items-center">
        {/* Tagline */}
        <h2 className="font-inter font-bold text-lg md:text-xl text-[#102039] text-center mb-6 tracking-wide uppercase drop-shadow-md">
          Trường đại học Mở Hà Nội
        </h2>

        {/* Main heading */}
        <div className="text-center mb-10">
          <h1 className="font-inter text-[#102039] text-2xl md:text-3xl font-bold leading-tight tracking-wider drop-shadow-lg">
            Library HOU <br /> Thư viện đại học Mở
          </h1>
        </div>

        {/* Description */}
        <p className="font-inter text-[#413c3c] text-base md:text-lg text-center leading-relaxed mb-10 italic opacity-90">
          Mở ra cơ hội học tập cho mọi người <br /> Mở tương lai, Mở cơ hội, Mở
          trái tim, Mở Tầm nhìn, Mở Trí Tuệ
        </p>

        {/* Search card */}
        <Card className="w-full bg-[rgba(255,255,255,0.3)] rounded-[20px] border border-solid border-[#4c53a5aa] backdrop-blur-[10px] backdrop-brightness-[100%] mb-8 flex justify-center items-center">
          <CardContent className="p-6 w-full flex flex-col items-center">
            {/* Search input */}
            <div className="w-full max-w-[600px] mt-7 flex items-center bg-gradient-to-t from-[#f8f8f8] to-[#ffffff] bg-opacity-70 rounded-[60px] mb-6 relative">
              <div className="px-8 py-7 text-[#102039] text-base md:text-lg font-semibold">
                Search
              </div>
              <div className="flex-1 border-l border-[#e9e9e9] rounded-r-[40px] overflow-hidden">
                <Input
                  className="border-none h-[60px] pl-7 text-[#1d1d1d] text-base md:text-lg bg-transparent"
                  placeholder="Search here"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                />
              </div>
              <Button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-transparent hover:bg-gray-100 rounded-full"
                onClick={handleSearch}
                variant="ghost"
              >
                <Search className="w-[23px] h-[23px] text-[#102039]" />
              </Button>
            </div>

            {/* Trending section */}
            <div className="flex items-center justify-center flex-wrap">
              <span className="text-[#102039] text-base md:text-lg font-semibold">
                Chủ đề :
              </span>
              <div className="flex gap-5 ml-2">
                {trendingTopics.map((topic, index) => (
                  <Button
                    key={index}
                    variant="link"
                    className="p-0 text-[#102039] text-base md:text-lg"
                    onClick={() => handleTopicClick(topic)}
                  >
                    {topic}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Browse button */}
        <Button
          className="bg-[#c3161c] hover:bg-[#a51217] text-white rounded-[3px] px-8 py-[18px] text-base md:text-lg font-semibold"
          onClick={handleSearch}
        >
          Tìm Kiếm
        </Button>
      </div>
    </main>
  );
}
