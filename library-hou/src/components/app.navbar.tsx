"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { ChevronDown, Search, Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const navigationLinks = [
  {
    text: "LMS HOU",
    href: "https://cas.hou.edu.vn/cas/login?service=https%3A%2F%2Flms.hou.edu.vn%2Flogin%2Findex.php",
  },
  {
    text: "SINH VIÊN",
    href: "https://cas.hou.edu.vn/cas/login?service=https://accounts.hou.edu.vn/index.php",
  },
];

export default function Navbar(): React.ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 flex flex-col items-center bg-[#102535] w-full transition-all duration-300 z-50 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-16 md:h-auto">
        {/* Logo */}
        <a
          className="flex items-center py-2"
          href="https://hou.edu.vn/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            src="/images/logo.png"
            alt="HOU Logo"
            width={120}
            height={40}
            className="h-auto w-auto max-h-10 md:max-h-12"
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center space-x-1">
              {navigationLinks.map((link) => (
                <NavigationMenuItem key={link.text}>
                  <NavigationMenuLink
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-xs lg:text-sm font-medium px-3 py-2 hover:bg-[#1d3040] rounded transition-colors"
                  >
                    {link.text}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="https://cas.hou.edu.vn/cas/login?service=http://thuvien.hou.edu.vn/Login.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xs lg:text-sm font-medium px-3 py-2 hover:bg-[#1d3040] rounded transition-colors"
                >
                  ĐĂNG NHẬP
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden w-full bg-[#102535] overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-screen border-t border-gray-700" : "max-h-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-2">
          {navigationLinks.map((link) => (
            <a
              key={link.text}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white text-sm py-3 border-b border-gray-700/30"
            >
              {link.text}
            </a>
          ))}
          <a
            href="https://cas.hou.edu.vn/cas/login?service=http://thuvien.hou.edu.vn/Login.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-white text-sm py-3"
          >
            ĐĂNG NHẬP
          </a>
        </nav>
      </div>
    </header>
  );
}
