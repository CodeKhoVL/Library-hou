import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

// Định nghĩa kiểu dữ liệu cho props của BookCard
interface BookCardProps {
  coverUrl: string;
  bookUrl: string;
  width: number;
  actionText: string;
  actionUrl: string;
}

const BookCard: React.FC<BookCardProps> = ({ coverUrl, bookUrl, width, actionText, actionUrl }) => {
  return (
    <Card className="flex flex-col items-center justify-center gap-3 p-2 w-[180px] border-none shadow-none bg-transparent">
      <CardContent className="p-0 w-full flex flex-col items-center justify-center">
        <a
          className="block w-full h-[240px] rounded-[3px] bg-center bg-contain bg-no-repeat"
          href={bookUrl}
          rel="noopener noreferrer"
          target="_blank"
          style={{ backgroundImage: `url(${coverUrl})` }}
        />
        <div className="mt-3 w-full flex justify-center">
          <Button className="w-full bg-[#0376b8] text-center rounded-[5px] h-auto py-2 flex justify-center items-center" asChild>
            <a href={actionUrl} rel="noopener noreferrer" target="_blank">
              {actionText}
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Khai báo kiểu dữ liệu cho mảng books
const books: BookCardProps[] = [
  {
    coverUrl: "/images/book1.jpg",
    bookUrl: "https://openlibrary.org/works/OL5684586W",
    width: 119.59,
    actionText: "Read",
    actionUrl: "https://openlibrary.org/borrow/ia/mrincoulsmisadve00saltuoft",
  },
  {
    coverUrl: "/images/book1.jpg",
    bookUrl: "https://openlibrary.org/works/OL7008877W",
    width: 119.59,
    actionText: "Read",
    actionUrl: "https://openlibrary.org/borrow/ia/historypompeyli00covegoog",
  },
  {
    coverUrl: "/images/book1.jpg",
    bookUrl: "https://openlibrary.org/works/OL1526746W",
    width: 119.59,
    actionText: "Read",
    actionUrl: "https://openlibrary.org/borrow/ia/makerofmoons00chamrich",
  },
  {
    coverUrl: "/images/book1.jpg",
    bookUrl: "https://openlibrary.org/works/OL1158943W",
    width: 119.59,
    actionText: "Borrow",
    actionUrl: "https://openlibrary.org/borrow/ia/lespleendeparisp0000unse",
  },
  {
    coverUrl: "/images/book1.jpg",
    bookUrl: "https://openlibrary.org/works/OL1102991W",
    width: 119.59,
    actionText: "Read",
    actionUrl: "https://openlibrary.org/borrow/ia/brontslifelett01shoruoft",
  },
  {
    coverUrl: "/images/book1.jpg",
    bookUrl: "https://openlibrary.org/works/OL11293636W",
    width: 119.59,
    actionText: "Borrow",
    actionUrl: "https://openlibrary.org/borrow/ia/commanddecision0000hain",
  },
  {
    coverUrl: "/images/book1.jpg",
    bookUrl: "https://openlibrary.org/works/OL1158943W",
    width: 119.59,
    actionText: "Borrow",
    actionUrl: "https://openlibrary.org/borrow/ia/lespleendeparisp0000unse",
  },
  {
    coverUrl: "/images/book1.jpg",
    bookUrl: "https://openlibrary.org/works/OL1102991W",
    width: 119.59,
    actionText: "Read",
    actionUrl: "https://openlibrary.org/borrow/ia/brontslifelett01shoruoft",
  },
  {
    coverUrl: "/images/book1.jpg",
    bookUrl: "https://openlibrary.org/works/OL11293636W",
    width: 119.59,
    actionText: "Borrow",
    actionUrl: "https://openlibrary.org/borrow/ia/commanddecision0000hain",
  },
];

export default function Books() {
  return (
    <div className="flex flex-col items-center w-full h-auto py-8">
      <div className="relative max-w-[1168px] w-full">
        <div className="bg-[#0376b8] text-white py-3 text-center rounded-t-lg">
          <h2 className="text-xl font-semibold">Tài liệu số</h2>
        </div>

        {/* Vùng chứa danh sách sách */}
        <div className="w-full h-auto bg-[#d7e3f3] rounded-b-lg px-2 py-8 flex justify-center items-center">
          <Carousel className="w-full overflow-hidden">
            <CarouselContent className="ml-0 flex justify-center items-center gap-4 px-8">
              {books.map((book, index) => (
                <CarouselItem key={index} className="basis-1/5 shrink-0 snap-align-start flex justify-center">
                  <BookCard {...book} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 h-8 w-[35px] bg-transparent bg-white border-none">
              <ChevronLeft className="h-5 w-[40px]" />
            </CarouselPrevious>
            <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 h-8 w-[35px] bg-transparent bg-white border-none">
              <ChevronRight className="h-5 w-[40px]" />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

