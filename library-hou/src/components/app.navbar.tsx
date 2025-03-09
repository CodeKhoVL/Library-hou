'use client'
import { 
    NavigationMenu, 
    NavigationMenuItem, 
    NavigationMenuLink, 
    NavigationMenuList 
  } from "@/components/ui/navigation-menu";
  
  import { ChevronDown, Search } from "lucide-react";
  import Image from "next/image";
  import React from "react";
  
  const navigationLinks = [
    { text: "LMS HOU", href: "https://cas.hou.edu.vn/cas/login?service=https%3A%2F%2Flms.hou.edu.vn%2Flogin%2Findex.php" },
    { text: "SINH VIÊN", href: "https://cas.hou.edu.vn/cas/login?service=https://accounts.hou.edu.vn/index.php" },

  ];
  
  export default function navbar(): React.ReactElement {
    return (
      <header className="flex flex-col items-center bg-[#102535] px-[360px] pt-0">
        <div className="flex flex-col max-w-[1200px] w-full items-start relative bg-[#102535] ">
          
          {/* Logo */}
          <a 
            className="absolute top-0 left-0 p-6 w-[188px] flex items-center" 
            href="https://hou.edu.vn/" 
            rel="noopener noreferrer" 
            target="_blank"
          >
          </a>
  
          {/* Navigation Menu */}
          <NavigationMenu className="self-end pt-0">
            <NavigationMenuList className="flex items-end gap-2">
              {navigationLinks.map((link) => (
                <NavigationMenuItem key={link.text}>
                  <NavigationMenuLink 
                    href={link.href} 
                    className="text-white text-[12.6px] font-normal px-4 py-3 whitespace-nowrap"
                  >
                    {link.text}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
  
              {/* Quicklinks */}
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="https://cas.hou.edu.vn/cas/login?service=http://thuvien.hou.edu.vn/Login.aspx" 
                  className="relative flex items-center text-[12.6px] font-sans px-4 py-3  text-white"
                >
                  <span>ĐĂNG NHẬP</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
  

            </NavigationMenuList>
          </NavigationMenu>
  
        </div>
      </header>
    );
  }
  