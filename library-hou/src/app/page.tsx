"use client";
import { useState, useEffect } from "react";
import Header from "@components/app.header";
import Navbar from "@components/app.navbar";
import Subnav from "@components/app.subnav";
import Categories from "@components/section.categories";
import News from "@components/section.news";
import Books from "@/components/section.books";
import Books2 from "@/components/section.books2";
import TopFooter from "@/components/app.topfooter";
import BotFooter from "@/components/app.botfooter";

// Component Preloader nâng cao
const EnhancedPreloader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Mô phỏng thời gian tải trang
    const timer = setTimeout(() => {
      // Bắt đầu animation fade out
      setFadeOut(true);

      // Hoàn toàn ẩn preloader sau khi animation hoàn tất
      setTimeout(() => {
        setLoading(false);
      }, 800); // Thời gian cho animation fade out
    }, 2500);

    // Xử lý sự kiện khi trang đã tải xong
    const handleLoad = () => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
      }, 800);
      clearTimeout(timer);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-white z-50 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ transition: "opacity 0.8s ease-in-out" }}
    >
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24">
          <div className="absolute w-full h-full border-4 border-t-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <div
            className="absolute w-full h-full border-4 border-t-4 border-blue-300 border-opacity-50 border-t-transparent rounded-full animate-spin"
            style={{ animationDuration: "1.5s" }}
          ></div>
        </div>
        <p className="mt-4 text-lg font-medium text-gray-800">Đang tải...</p>
      </div>
    </div>
  );
};

const AppHeader = () => {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    // Đặt trạng thái pageLoaded thành true sau khi preloader hoàn tất
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 3300); // Thời gian preloader + thời gian fade out

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <EnhancedPreloader />

      {/* Hiển thị nội dung trang với animation fade-in sau khi preloader hoàn tất */}
      <div
        className={`transition-opacity duration-1000 ${
          pageLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ visibility: pageLoaded ? "visible" : "hidden" }}
      >
        <Navbar />
        <Subnav />
        <Header />
        <Books />
        <Books2 />
        <Categories />
        <News />
        <TopFooter />
        <BotFooter />
      </div>
    </div>
  );
};

export default AppHeader;
