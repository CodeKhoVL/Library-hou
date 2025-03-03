import { Facebook, Instagram, Linkedin, MessageCircle, Twitter, Youtube } from "lucide-react";
import React from "react";

const Footer = (): React.ReactElement => {
  // Dữ liệu cho các liên kết
  const infoAboutLinks = [
    { text: "The University", href: "https://www.adelaide.edu.au/about/" },
    { text: "Campuses & Maps", href: "https://www.adelaide.edu.au/campuses/" },
    { text: "Degrees & Courses", href: "https://www.adelaide.edu.au/degree-finder/" },
    { text: "Working at Adelaide", href: "https://www.adelaide.edu.au/jobs/" },
    { text: "Giving to Adelaide", href: "https://www.adelaide.edu.au/give/how/" },
    { text: "Safer Campus Community", href: "https://www.adelaide.edu.au/safer-campus-community/" },
    { text: "University Contacts", href: "https://www.adelaide.edu.au/about/university-contacts" },
  ];

  const infoForLinks = [
    { text: "Future Students", href: "https://www.adelaide.edu.au/study/" },
    { text: "International Students", href: "https://international.adelaide.edu.au/" },
    { text: "Current Students", href: "https://www.adelaide.edu.au/student" },
    { text: "Current Staff", href: "https://www.adelaide.edu.au/staff/" },
    { text: "Future Staff", href: "https://www.adelaide.edu.au/jobs/" },
    { text: "Alumni", href: "https://www.adelaide.edu.au/alumni/" },
    { text: "Business & Community", href: "https://www.adelaide.edu.au/engage/" },
  ];

  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      href: "https://www.facebook.com/uniofadelaide",
      ariaLabel: "Facebook",
    },
    {
      icon: <Twitter size={20} />,
      href: "https://twitter.com/uniofadelaide",
      ariaLabel: "Twitter",
    },
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/uniofadelaide/",
      ariaLabel: "Instagram",
    },
    {
      icon: <Youtube size={20} />,
      href: "https://www.youtube.com/user/universityofadelaide",
      ariaLabel: "YouTube",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/school/uniofadelaide/",
      ariaLabel: "LinkedIn",
    },
    {
      icon: <MessageCircle size={20} />,
      href: "https://mp.weixin.qq.com/s/Ukwljz8sWpw6idGRvvHEKA",
      ariaLabel: "WeChat",
    },
  ];

  const legalLinks = [
    { text: "Disclaimer", href: "https://www.adelaide.edu.au/legals/disclaimer/" },
    { text: "Copyright", href: "https://www.adelaide.edu.au/legals/copyright/" },
    { text: "Privacy Policy", href: "https://www.adelaide.edu.au/legals/privacy/" },
  ];

  // SECTION 1: Logo, Make History và Acknowledge
  const TopSection = () => (
    <section className="w-full max-w-[1200px] py-4">
      <div className="flex flex-wrap gap-8 md:gap-[100px] px-4 py-4 w-full">
        <a
          className="flex items-center"
          href="https://www.adelaide.edu.au/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src="/images/logo.png" alt="Logo HOU" className="w-[220px] h-[265px] object-cover" />
        </a>
        
        <a
          className="flex items-center"
          href="https://www.adelaide.edu.au/make-history"
          rel="noopener noreferrer"
          target="_blank"
        >
            <img src="/images/lghou.png" alt="Logo HOU" className="w-[250px] h-[65px] object-cover" />
        </a>
        
        <div className="flex-1 min-w-[300px]">
          <div className="w-full md:w-[561px]">
            <p className="text-base leading-[27px] font-normal">
              <a
                className="text-white"
                href="https://www.adelaide.edu.au/wirltu-yarlu/reconciliation"
                rel="noopener noreferrer"
                target="_blank"
              >

              </a>{" "}
              Địa chỉ: - Nhà B101 Phố Nguyễn Hiền, Bách Khoa, Hai Bà Trưng, Hà Nội. - Trường ĐH Mở Hà Nội, Long Hưng, Văn Giang, Hưng Yên. - Phòng đọc: Nhà C Khu giảng đường 422 Vĩnh Hưng, Hoàng Mai, Hà Nội.
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  // SECTION 2: Information about, Information for, Partner Logos, Social Links và Contact
  const MiddleSection = () => (
    <section className="w-full max-w-[1200px]">
      <div className="flex flex-wrap w-full">
        {/* Information about */}
        <div className="flex flex-col w-full sm:w-[300px] gap-4 p-4">
          <h4 className="font-semibold text-lg">Information about</h4>
          <nav className="flex flex-col gap-2">
            {infoAboutLinks.map((link, index) => (
              <a
                key={index}
                className="text-base leading-[27px] text-white hover:underline"
                href={link.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>

        {/* Information for */}
        <div className="flex flex-col w-full sm:w-[300px] gap-4 p-4">
          <h4 className="font-semibold text-lg">Information for</h4>
          <nav className="flex flex-col gap-2">
            {infoForLinks.map((link, index) => (
              <a
                key={index}
                className="text-base leading-[27px] text-white hover:underline"
                href={link.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-col w-full sm:w-[285px] gap-4 p-4">
          <a
            className="flex items-center"
            href="https://go8.edu.au/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src="/images/banner1.png" alt="Brand SA" className="w-[300px] h-[69px] object-cover" />
          </a>
          
          <a
            className="flex items-center"
            href="https://southaustralia.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src="/images/banner1.png" alt="Brand SA" className="w-[300px] h-[69px] object-cover" />
          </a>
          
          <a
            className="flex items-center"
            href="https://apru.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src="/images/banner1.png" alt="Brand SA" className="w-[300px] h-[69px] object-cover" />
          </a>
        </div>

        {/* Contact and Social Links */}
        <div className="flex flex-col w-full sm:w-[315px] p-4">
          <div className="flex gap-2 mb-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                className="flex items-center justify-center w-[30px] h-[30px] bg-transparent hover:opacity-80"
                href={link.href}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={link.ariaLabel}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="mb-4">
            <a
              className="text-[15.5px] leading-[27px] font-normal text-white"
              href="https://www.adelaide.edu.au/"
              rel="noopener noreferrer"
              target="_blank"
            >
              HaNoi Open Univesity
            </a>
            <p className="text-[15.5px] leading-[27px]">
              422 Vinh Hung, HaNoi, VietNam  <br /> Hottline: 0246.6838.866
            </p>
          </div>
          
          <div className="text-[10.9px] leading-[19.2px] mb-4">
            VietNam University 
          </div>
          
          <div className="flex flex-wrap gap-2 text-[11px]">
            {legalLinks.map((link, index) => (
              <React.Fragment key={index}>
                <a
                  className="text-white hover:underline"
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.text}
                </a>
                {index < legalLinks.length - 1 && <span>|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  // SECTION 3: Authorizations
  const BottomSection = () => (
    <section className="w-full max-w-[1200px] pt-4 pb-8 px-4">
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className="text-[11.5px] leading-[21.6px]">Authorised by:</span>
          <a
            className="ml-1 text-white hover:underline"
            href="mailto:libraryfeedback@adelaide.edu.au"
            rel="noopener noreferrer"
            target="_blank"
          >
            Open Library
          </a>
        </div>
        
        <div className="flex items-center">
          <span className="text-[11.5px] leading-[21.6px]">Maintained by:</span>
          <a
            className="ml-1 text-white hover:underline"
            href="mailto:libraryfeedback@adelaide.edu.au"
            rel="noopener noreferrer"
            target="_blank"
          >
            Library Web 
          </a>
        </div>
        
  
      </div>
    </section>
  );

  // Main render với 3 section riêng biệt
  return (
    <footer className="flex flex-col items-center px-4 md:px-8 lg:px-[150px] py-4 bg-[#102535] text-white">
      {/* Section 1: Phần trên cùng - logo, make history và acknowledgment */}
      <TopSection />
      
      {/* Section 2: Phần giữa - thông tin, liên kết và logos */}
      <MiddleSection />
      
      {/* Section 3: Phần dưới cùng - thông tin authorization */}
      <BottomSection />
    </footer>
  );
};

export default Footer;