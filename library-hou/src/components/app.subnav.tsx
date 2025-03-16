"use client";

import React, { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ChevronDown, Menu, X } from "lucide-react";

const navigationItems = [
  {
    id: "home",
    label: "Trang chủ",
    href: "/",
  },
  {
    id: "intro",
    label: "Giới thiệu",
    href: "/gioi-thieu",
    submenu: [
      {
        id: "intro-1",
        label: "Viện CN sinh học và CN thực phẩm",
        href: "/gioi-thieu/vien-cn",
      },
      {
        id: "intro-2",
        label: "Chức năng nhiệm vụ",
        href: "/gioi-thieu",
      },
      {
        id: "intro-3",
        label: "Cơ cấu tổ chức",
        href: "/gioi-thieu",
      },
    ],
  },
  {
    id: "search",
    label: "Tra cứu",
    href: "/tra-cuu",
    submenu: [
      {
        id: "search-1",
        label: "Tìm từ khóa",
        href: "/tra-cuu",
      },
      { id: "search-2", label: "Tài Liệu mới", href: "/tra-cuu" },
      {
        id: "search-3",
        label: "Tra cuu liên thư viện",
        href: "/tra-cuu",
      },
    ],
  },
  {
    id: "journal",
    label: "Tạp chí",
    href: "/tap-chi",
    submenu: [
      {
        id: "journal-1",
        label: "Tạp chí khoa học",
        href: "/tap-chi",
      },
      { id: "journal-2", label: "Tạp chí luật", href: "/tap-chi" },
      {
        id: "journal-3",
        label: "Tạp chí kinh tế ",
        href: "/tap-chi",
      },
    ],
  },
  {
    id: "user",
    label: "Người dùng",
    href: "/nguoi-dung",
    submenu: [
      {
        id: "user-1",
        label: "Thông tin độc giả",
        href: "/nguoi-dung/research",
      },
      {
        id: "user-2",
        label: "Hướng dẫn sử dụng",
        href: "/nguoi-dung/innovation",
      },
      {
        id: "user-3",
        label: "Thông tin độc giả",
        href: "/nguoi-dung/research",
      },
      {
        id: "user-4",
        label: "Hướng dẫn sử dụng",
        href: "/nguoi-dung/innovation",
      },
    ],
  },
  {
    id: "internal",
    label: "Liên kết nội bộ",
    href: "/lien-ket",
    submenu: [
      { id: "internal-1", label: "Khoa luật", href: "/lien-ket/" },
      { id: "internal-2", label: "Khoa Điện - Điện tử", href: "/lien-ket/" },
      { id: "internal-3", label: "Khoa CN thông tin", href: "/lien-ket/" },
      {
        id: "internal-4",
        label: "Khoa Khoa tạo dáng công nghiệp",
        href: "/lien-ket/",
      },
    ],
  },
  {
    id: "resources",
    label: "Học liệu điện tử",
    href: "/hoc-lieu",
  },
];

export default function SubNav(): React.ReactElement {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're in a mobile viewport
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Close all expanded items when closing the menu
    if (mobileMenuOpen) {
      setExpandedMobileItems([]);
    }
  };

  const toggleMobileSubmenu = (itemId: string) => {
    setExpandedMobileItems((prev) => {
      if (prev.includes(itemId)) {
        return prev.filter((id) => id !== itemId);
      } else {
        return [...prev, itemId];
      }
    });
  };

  return (
    <div className="flex flex-col items-center bg-[#2973ac] px-4 sm:px-6 md:px-8 lg:px-20 xl:px-[360px] py-0 relative z-40">
      {/* Mobile Menu Button */}
      <div className="md:hidden w-full flex justify-end py-2">
        <button className="text-white p-2" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex w-full max-w-[1200px] flex-col items-start">
        <NavigationMenu className="w-full relative">
          <NavigationMenuList className="flex w-full justify-end gap-1 md:gap-2 lg:gap-3">
            {navigationItems.map((item) => {
              const isHovered = openMenu === item.id;
              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseOver={() => setOpenMenu(item.id)}
                  onMouseOut={() => setOpenMenu(null)}
                >
                  <NavigationMenuItem>
                    {item.submenu ? (
                      <button className="inline-flex  items-center px-2 md:px-3 lg:px-4 py-2 md:py-3 text-xs md:text-sm font-sans text-white transition-colors whitespace-nowrap hover:bg-[#1d4a6c]">
                        {item.label}
                        <ChevronDown
                          className={`ml-1 md:ml-2 h-3 w-3 md:h-[14px] md:w-4 transition-transform duration-300 ${
                            isHovered ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>
                    ) : (
                      <NavigationMenuLink
                        href={item.href}
                        className="inline-flex whitespace-nowrap items-center px-2 md:px-3 lg:px-4 py-2 md:py-3 text-xs md:text-sm font-sans text-white transition-colors hover:bg-[#1d4a6c]"
                      >
                        {item.label}
                      </NavigationMenuLink>
                    )}

                    {isHovered && item.submenu && (
                      <div
                        className="absolute top-full left-0 mt-1 w-40 md:w-48 bg-[#1c4e74] shadow-lg rounded-lg 
                          transition-all duration-300 ease-in-out opacity-100 translate-y-0 z-50"
                      >
                        <ul className="flex flex-col p-2">
                          {item.submenu.map((sub) => (
                            <li key={sub.id}>
                              <NavigationMenuLink
                                href={sub.href}
                                className="block px-3 py-2 text-xs md:text-sm text-white hover:underline rounded"
                              >
                                {sub.label}
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </NavigationMenuItem>
                </div>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-[#2973ac]">
          <nav className="flex flex-col w-full">
            {navigationItems.map((item) => (
              <div key={item.id} className="border-b border-[#1d4a6c]">
                {item.submenu ? (
                  <>
                    <button
                      className="flex justify-between items-center w-full text-white text-sm py-3 px-4"
                      onClick={() => toggleMobileSubmenu(item.id)}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          expandedMobileItems.includes(item.id)
                            ? "rotate-180"
                            : "rotate-0"
                        }`}
                      />
                    </button>

                    {expandedMobileItems.includes(item.id) && (
                      <div className="bg-[#1c4e74] pl-4">
                        {item.submenu.map((sub) => (
                          <a
                            key={sub.id}
                            href={sub.href}
                            className="block text-white text-sm py-2 px-4 border-t border-[#1c4e74]"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block text-white text-sm py-3 px-4"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
