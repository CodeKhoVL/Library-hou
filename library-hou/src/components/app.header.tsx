"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [open, setOpen] = useState(false);

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

            {/* Menu with Sheet */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <div className="cursor-pointer">
                  <Menu className="h-6 w-6 text-white" />
                </div>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="bg-[#102535] text-white border-r-[#102535] w-64"
                style={{ backgroundColor: "#102535" }}
              >
                <SheetHeader className="mb-6">
                  <SheetTitle className="text-white">Library Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="/mylibrary"
                    className="text-white hover:text-gray-300 hover:underline py-2 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Login to MyLibrary
                  </Link>
                  <Link
                    href="/book-study-space"
                    className="text-white hover:text-gray-300 hover:underline py-2 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Book Study Space
                  </Link>
                  <Link
                    href="/online-chat"
                    className="text-white hover:text-gray-300 hover:underline py-2  transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Online Chat
                  </Link>
                  <Link
                    href="/ask-library"
                    className="text-white hover:text-gray-300 hover:underline py-2 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Ask Library
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Header;
