"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { Filter, Book, BarChart2, FileText, BookOpen, ChevronLeft, Search } from "lucide-react";

// Giả lập dữ liệu kết quả tìm kiếm
const mockSearchResults = [
  {
    id: 1,
    title: "Giáo trình Kinh tế Vĩ mô",
    author: "Nguyễn Văn A",
    year: 2022,
    type: "Giáo trình",
    availability: true,
    location: "Khu A - Tầng 2",
  },
  {
    id: 2,
    title: "Luận văn: Phân tích thị trường tài chính Việt Nam",
    author: "Trần Thị B",
    year: 2021,
    type: "Luận văn",
    availability: false,
    location: "Khu B - Tầng 1",
  },
  {
    id: 3,
    title: "Bài giảng Công nghệ thông tin cơ bản",
    author: "Lê Văn C",
    year: 2023,
    type: "Bài giảng",
    availability: true,
    location: "Khu C - Tầng 3",
  },
  {
    id: 4,
    title: "Đổi mới sáng tạo trong doanh nghiệp số",
    author: "Phạm Thị D",
    year: 2022,
    type: "Sách",
    availability: true,
    location: "Khu A - Tầng 1",
  },
  {
    id: 5,
    title: "Nghiên cứu về trí tuệ nhân tạo và ứng dụng",
    author: "Hoàng Văn E",
    year: 2023,
    type: "Kết quả NCKH",
    availability: true,
    location: "Khu D - Tầng 2",
  }
];

export default function SearchPage() {
  // Lấy tham số tìm kiếm từ URL
  const searchParams = useSearchParams();
  const queryFromUrl = searchParams.get("q") || "";
  
  const [searchQuery, setSearchQuery] = useState(queryFromUrl);
  const [activeTab, setActiveTab] = useState("all");
  const [results, setResults] = useState(mockSearchResults);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  // Mô phỏng việc tìm kiếm khi tham số URL thay đổi
  useEffect(() => {
    setSearchQuery(queryFromUrl);
    
    // Ở đây bạn sẽ gọi API thực tế, hiện tại chỉ mô phỏng
    if (queryFromUrl) {
      const filteredResults = mockSearchResults.filter(item => 
        item.title.toLowerCase().includes(queryFromUrl.toLowerCase()) ||
        item.author.toLowerCase().includes(queryFromUrl.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults(mockSearchResults);
    }
  }, [queryFromUrl]);

  const handleSearch = () => {
    // Trong ứng dụng thực, đây là nơi bạn sẽ thực hiện tìm kiếm API
    console.log("Searching for:", searchQuery);
    
    // Hiện tại chỉ lọc dữ liệu giả lập
    if (searchQuery.trim() === "") {
      setResults(mockSearchResults);
    } else {
      const filteredResults = mockSearchResults.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filteredResults);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Thanh tìm kiếm phía trên */}
      <div className="bg-white border-b">
        <div className="container mx-auto py-4 px-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center text-blue-600">
              <ChevronLeft className="w-4 h-4 mr-1" />
              <span>Quay lại trang chủ</span>
            </Link>
            
            <div className="flex-1 flex">
              <Input
                className="flex-1 rounded-r-none"
                placeholder="Tìm kiếm sách, tài liệu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <Button 
                className="rounded-l-none bg-[#d40000] hover:bg-[#b30000]"
                onClick={handleSearch}
              >
                <Search className="w-4 h-4 mr-2" />
                Tìm kiếm
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar bộ lọc */}
          <div className={`w-full md:w-64 bg-white rounded-lg shadow-sm border p-4 ${isFiltersOpen ? 'block' : 'hidden md:block'}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Bộ lọc tìm kiếm</h3>
              <Button variant="outline" size="sm" className="md:hidden" onClick={() => setIsFiltersOpen(false)}>
                Đóng
              </Button>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Loại tài liệu</h4>
                <div className="space-y-2">
                  {["Tất cả", "Giáo trình", "Bài giảng", "Luận văn", "Luận án", "Sách"].map((type) => (
                    <div key={type} className="flex items-center">
                      <input type="checkbox" id={type} className="mr-2" />
                      <label htmlFor={type} className="text-sm">{type}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Năm xuất bản</h4>
                <div className="space-y-2">
                  {["2023", "2022", "2021", "2020", "Trước 2020"].map((year) => (
                    <div key={year} className="flex items-center">
                      <input type="checkbox" id={year} className="mr-2" />
                      <label htmlFor={year} className="text-sm">{year}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Tình trạng</h4>
                <div className="space-y-2">
                  {["Có sẵn", "Đã mượn"].map((status) => (
                    <div key={status} className="flex items-center">
                      <input type="checkbox" id={status} className="mr-2" />
                      <label htmlFor={status} className="text-sm">{status}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button className="w-full">Áp dụng</Button>
            </div>
          </div>

          {/* Nội dung chính */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm border p-4 mb-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold">Kết quả tìm kiếm</h2>
                  <p className="text-gray-500 text-sm">Tìm thấy {results.length} kết quả{queryFromUrl ? ` cho "${queryFromUrl}"` : ""}</p>
                </div>
                
                <div className="flex items-center">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="md:hidden mr-2"
                    onClick={() => setIsFiltersOpen(true)}
                  >
                    <Filter className="w-4 h-4 mr-1" />
                    Bộ lọc
                  </Button>
                  
                  <select className="border rounded px-2 py-1 text-sm">
                    <option>Sắp xếp theo liên quan</option>
                    <option>Mới nhất</option>
                    <option>Cũ nhất</option>
                    <option>A-Z</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Tabs */}
            <Tabs defaultValue="all" className="w-full mb-4" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full md:w-auto bg-white border">
                <TabsTrigger value="all" className="flex-1">Tất cả</TabsTrigger>
                <TabsTrigger value="books" className="flex-1">Sách</TabsTrigger>
                <TabsTrigger value="journals" className="flex-1">Tạp chí</TabsTrigger>
                <TabsTrigger value="theses" className="flex-1">Luận văn</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-0">
                {results.length > 0 ? (
                  <div className="space-y-4">
                    {results.map((result) => (
                      <Card key={result.id} className="overflow-hidden">
                        <CardHeader className="p-4 pb-2">
                          <CardTitle className="text-lg font-medium text-blue-700 hover:underline cursor-pointer">
                            {result.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm">
                                <span className="font-medium">Tác giả:</span> {result.author}
                              </p>
                              <p className="text-sm">
                                <span className="font-medium">Năm xuất bản:</span> {result.year}
                              </p>
                              <p className="text-sm">
                                <span className="font-medium">Loại:</span> {result.type}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm">
                                <span className="font-medium">Trạng thái:</span>{" "}
                                <span className={result.availability ? "text-green-600" : "text-red-600"}>
                                  {result.availability ? "Có sẵn" : "Đã mượn"}
                                </span>
                              </p>
                              <p className="text-sm">
                                <span className="font-medium">Vị trí:</span> {result.location}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0 flex justify-end gap-2">
                          <Button variant="outline" size="sm">Chi tiết</Button>
                          <Button 
                            size="sm" 
                            className={result.availability ? "bg-blue-600" : "bg-gray-400 cursor-not-allowed"}
                            disabled={!result.availability}
                          >
                            {result.availability ? "Đặt mượn" : "Không có sẵn"}
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="p-8 text-center">
                      <p className="text-gray-500">Không tìm thấy kết quả phù hợp. Vui lòng thử lại với từ khóa khác.</p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
              
              <TabsContent value="books" className="mt-0">
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-gray-500">Hiển thị danh sách sách ở đây.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="journals" className="mt-0">
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-gray-500">Hiển thị danh sách tạp chí ở đây.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="theses" className="mt-0">
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-gray-500">Hiển thị danh sách luận văn ở đây.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            {/* Phân trang */}
            {results.length > 0 && (
              <Pagination className="mt-4">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationLink href="#" className="cursor-not-allowed opacity-50">
                      Trước
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">
                      Tiếp
                    </PaginationLink>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}