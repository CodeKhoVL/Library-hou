"use client";
import Header from "@components/app.header";
import Navbar from "@components/app.navbar";
import Subnav from "@components/app.subnav";
import Categories from "@components/section.categories";
import News from "@components/section.news";
import Books from "@/components/section.books";
import TopFooter from "@/components/app.topfooter";
import BotFooter from "@/components/app.botfooter";
const AppHeader = () => {
  return (
    <div>
      <Navbar />
      <Subnav />
      <Header />
      <Books />
      <Categories />
      <News />
      <TopFooter />
      <BotFooter />
      {/* <main className="p-8">
        <p>Welcome to the University Library!</p>
      </main> */}
    </div>
  );
};
export default AppHeader;
