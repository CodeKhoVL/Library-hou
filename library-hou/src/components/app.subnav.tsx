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
    label: "Trang chủ",
    href: "https://www.adelaide.edu.au/study",
  },
  {
    label: "Giới thiệu",
    href: "https://www.adelaide.edu.au/study",
    submenu: [
      { label: "Viện CN sinh học và CN thực phẩm", href: "https://www.adelaide.edu.au/study/undergraduate" },
      { label: "Postgraduate", href: "https://www.adelaide.edu.au/study/postgraduate" },
      { label: "International Students", href: "https://www.adelaide.edu.au/study/international" },
    ],
  },
  {
    label: "Tra cứu",
    href: "https://www.adelaide.edu.au/study",
    submenu: [
      { label: "Undergraduate", href: "https://www.adelaide.edu.au/study/undergraduate" },
      { label: "Postgraduate", href: "https://www.adelaide.edu.au/study/postgraduate" },
      { label: "International Students", href: "https://www.adelaide.edu.au/study/international" },
    ],
  },
  {
    label: "Tạp chí",
    href: "https://www.adelaide.edu.au/study",
    submenu: [
      { label: "Undergraduate", href: "https://www.adelaide.edu.au/study/undergraduate" },
      { label: "Postgraduate", href: "https://www.adelaide.edu.au/study/postgraduate" },
      { label: "International Students", href: "https://www.adelaide.edu.au/study/international" },
    ],
  },
  {
    label: "Người dùng",
    href: "https://www.adelaide.edu.au/research",
    submenu: [
      { label: "Research Degrees", href: "https://www.adelaide.edu.au/research/degrees" },
      { label: "Innovation", href: "https://www.adelaide.edu.au/research/innovation" },
    ],
  },
  {
    label: "Liên kết nội bộ",
    href: "https://www.adelaide.edu.au/engage",
    submenu: [
      { label: "Events", href: "https://www.adelaide.edu.au/engage/events" },
      { label: "Alumni", href: "https://www.adelaide.edu.au/engage/alumni" },
    ],
  },
  {
    label: "Học liệu điện tử",
    href: "https://www.adelaide.edu.au/about",
    submenu: [
      { label: "Our History", href: "https://www.adelaide.edu.au/about/history" },
      { label: "Leadership", href: "https://www.adelaide.edu.au/about/leadership" },
    ],
  },
];

export default function subnav(): React.ReactElement {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center bg-[#2973ac] px-[360px] py-0">
      <div className="flex w-[1200px] max-w-[1200px] flex-col items-start bg-[#2973ac] pl-[187.5px]">
        <NavigationMenu className="w-full relative">
          <NavigationMenuList className="flex w-full justify-end gap-3 bg-blue">
            {navigationItems.map((item) => {
              const isHovered = openMenu === item.label;
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseOver={() => setOpenMenu(item.label)}
                  onMouseOut={() => setOpenMenu(null)}
                >
                  <NavigationMenuItem>
                    {item.submenu ? (
                      <button className="inline-flex items-center px-4 py-3 text-sm font-sans text-white transition-colors hover:bg-[#1d4a6c]">
                        {item.label}
                        <ChevronDown
                          className={`ml-2 h-[14px] w-4 transition-transform duration-300 ${isHovered ? "rotate-180" : "rotate-0"}`}
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
                            <li key={sub.href}>
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
