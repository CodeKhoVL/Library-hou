"use client";

import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ChevronDown } from "lucide-react";

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

  return (
    <div className="flex flex-col items-center bg-[#2973ac] px-[360px] py-0">
      <div className="flex w-[1200px] max-w-[1200px] flex-col items-start bg-[#2973ac] pl-[187.5px]">
        <NavigationMenu className="w-full relative">
          <NavigationMenuList className="flex w-full justify-end gap-3 bg-blue">
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
                      <button className="inline-flex items-center px-4 py-3 text-sm font-sans text-white transition-colors hover:bg-[#1d4a6c]">
                        {item.label}
                        <ChevronDown
                          className={`ml-2 h-[14px] w-4 transition-transform duration-300 ${
                            isHovered ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>
                    ) : (
                      <NavigationMenuLink
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-3 text-sm font-sans text-white transition-colors hover:bg-[#1d4a6c]"
                      >
                        {item.label}
                      </NavigationMenuLink>
                    )}

                    {isHovered && item.submenu && (
                      <div
                        className="absolute top-full left-0 mt-1 w-48 bg-[#1c4e74] shadow-lg rounded-lg 
                        transition-all duration-300 ease-in-out opacity-100 translate-y-0"
                      >
                        <ul className="flex flex-col p-2">
                          {item.submenu.map((sub) => (
                            <li key={sub.id}>
                              <NavigationMenuLink
                                href={sub.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-3 py-2 text-sm text-white hover:underline rounded"
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
    </div>
  );
}
