'use client'
import Header from '@components/app.header';
import Navbar from '@components/app.navbar';
import Subnav from '@components/app.subnav';
import News from '@components/section.news';
import Search from '@components/section.search';
const AppHeader = () => {
  return (
    <div>
      <Navbar />
      <Subnav />
      <Header />
      <Search />
      <News />
      {/* <main className="p-8">
        <p>Welcome to the University Library!</p>
      </main> */}
    </div>
  
    );
  };
export default AppHeader;