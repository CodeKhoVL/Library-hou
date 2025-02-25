'use client';

import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="relative w-full">
      {/* Ảnh nền toàn màn hình */}
      <div className="relative w-screen h-auto">
        <Image 
          src="/images/banner.png" 
          alt="University Library Background" 
          width={1920} 
          height={500} 
          className="w-full h-auto object-cover"
          quality={90}
          priority
        />
      </div>

      {/* Card nằm dưới cùng của ảnh */}
      <div className="absolute bottom-0 left-1/2 w-full flex justify-center transform -translate-x-1/2">
        <Card className="w-[900px] shadow-lg bg-transparent border-0">
          <CardContent className="h-[90px] bg-[#102535] bg-opacity-70 backdrop-blur-sm flex items-center justify-between px-6 p-5 rounded-lg pt-5">
            {/* Library Title */}
            <h1 className="text-[40px] leading-[40px] text-gray-200 font-extrabold">
              Library HOU
            </h1>

            {/* Menu Icon */}
            <div className="cursor-pointer">
              <Menu className="h-6 w-6 text-white" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Header;