import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-react";
import React from "react";

export default function Search() {
  const searchLinks = [
    { text: "Tất cả", url: "http://thuvien.hou.edu.vn/Opac/default.aspx?mnuid=146&collection_id=0&material_type=1" },
    { text: "Giáo trình", url: "http://thuvien.hou.edu.vn/Opac/default.aspx?mnuid=146&collection_id=1&material_type=1" },
    { text: "Bài giảng", url: "http://thuvien.hou.edu.vn/Opac/default.aspx?mnuid=146&collection_id=4&material_type=1" },
    { text: "Báo, tạp chí", url: "http://thuvien.hou.edu.vn/Opac/default.aspx?mnuid=146&collection_id=6&material_type=1" },
    { text: "Luận văn", url: "http://thuvien.hou.edu.vn/Opac/default.aspx?mnuid=146&collection_id=7&material_type=1 " },
    { text: "Luận án", url: "http://thuvien.hou.edu.vn/Opac/default.aspx?mnuid=146&collection_id=8&material_type=1", hasExternalIcon: true },
    { text: "Đồ án", url: "http://thuvien.hou.edu.vn/Opac/default.aspx?mnuid=146&collection_id=13&material_type=1" },
    { text: "Khóa luận", url: "http://thuvien.hou.edu.vn/Opac/default.aspx?mnuid=146&collection_id=8&material_type=1" },
    { text: "Kết quả NCKH", url: "http://thuvien.hou.edu.vn/Opac/default.aspx?mnuid=146&collection_id=8&material_type=1" },
    { text: "Bài giảng", url: "http://thuvien.hou.edu.vn/Opac/default.aspx?mnuid=146&collection_id=4&material_type=1",  },
    { text: "Sách TK ngoại văn", url: "http://thuvien.hou.edu.vn/Opac/default.aspx?mnuid=146&collection_id=3&material_type=1" }
    
    
  ];

  const quickLinks = [

    { text: "Login to MyLibrary", url: "", color: "blue" },
    { text: "Book a study space", url: "", hasExternalIcon: true, color: "blue" },
    { text: "Online chat", url: "", color: "red" },
    { text: "Ask Library", url: "", color: "red" }
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-4">
      <div className="flex flex-col md:flex-row items-start gap-6 p-6 bg-white shadow-lg rounded-lg">
        {/* Search Section */}
        <Card className="w-[735px] bg-neutral-100 px-8 py-12 border-none shadow-none">
          <CardContent className="p-0 flex flex-wrap gap-y-6">
            <h2 className="text-[#102535] text-4xl font-semibold leading-[52.8px]">
              Library Search
            </h2>
            <div className="w-full flex">
              <Input
                className="flex-1 h-14 px-4 rounded-none bg-white border-gray-400 shadow-sm"
                placeholder="Find books, music, ebooks, videos and more..."
              />
              <Button className="h-14 px-6 bg-[#d40000] hover:bg-[#b30000] text-white">
                Search
              </Button>
            </div>
            <div className="w-full flex flex-wrap gap-2 items-center">
              {searchLinks.map((link, index) => (
                <React.Fragment key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm underline whitespace-nowrap"
                  >
                    {link.text} {link.hasExternalIcon && <ExternalLink className="inline ml-1 w-3.5 h-3.5" />}
                  </a>
                  {index < searchLinks.length - 1 && <Separator orientation="vertical" className="h-5 mx-2 bg-gray-400 w-px" />}
                </React.Fragment>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Links Section */}
        <Card className="w-[361px] bg-neutral-100 px-8 pt-12 pb-8 border-none shadow-none">
          <CardContent className="p-0 flex flex-col gap-4">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center py-4 w-full text-white text-center rounded-md ${
                  link.color === "blue" ? "bg-blue-600" : "bg-red-600"
                } hover:opacity-90`}
              >
                {link.text} {link.hasExternalIcon && <ExternalLink className="ml-2 w-4 h-4" />}
              </a>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
