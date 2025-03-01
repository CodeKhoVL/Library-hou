import { Button } from "@/components/ui/button";
import { FacebookIcon, TwitterIcon, InstagramIcon, RssIcon } from "lucide-react";
import React from "react";

export default function TopFooter(): React.ReactElement {
  // Social media links data
  const socialLinks = [
    { icon: <FacebookIcon size={30} />, url: "https://www.facebook.com/uofalib", label: "Facebook" },
    { icon: <TwitterIcon size={30} />, url: "https://twitter.com/uofalib", label: "Twitter" },
    { icon: <InstagramIcon size={30} />, url: "https://www.instagram.com/uofalib/", label: "Instagram" },
    { icon: <RssIcon size={30} />, url: "https://www.adelaide.edu.au/library/news/list", label: "RSS" },
  ];

  // Button links data
  const buttonLinks = [
    { text: "Contact us", url: "https://www.adelaide.edu.au/library/ask-library" },
    { text: "Locations & hours", url: "http://adelaide.libcal.com/hours/" },
    { text: "Feedback & suggestions", url: "https://www.adelaide.edu.au/library/ask-library/feedback-suggestions" },
  ];

  return (
    <footer className="mt-6 flex flex-col items-center py-6 px-4 md:px-8 lg:px-16 xl:px-[360px] bg-[#413fb4]">
      <div className="w-full max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-4">
          {/* University Library */}
          <div>
            <h2 className="text-white font-semibold text-lg">University Library</h2>
          </div>

          {/* Ask Library Section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Ask Library</h3>
            <div className="flex flex-col gap-1">
              <div className="flex items-center">
                <span className="text-white text-[17px]">Call us:</span>
                <span className="ml-1 text-white text-[14px]">08 8313 5759</span>
              </div>
              <a
                href="mailto:library@adelaide.edu.au"
                className="text-white text-[14px] hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                library@adelaide.edu.au
              </a>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="flex flex-col gap-4">
            {buttonLinks.map((link, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full border border-black bg-transparent hover:bg-gray-100 text-white"
                asChild
              >
                <a href={link.url} rel="noopener noreferrer" target="_blank">
                  {link.text}
                </a>
              </Button>
            ))}
          </div>

          {/* Social Media Section */}
          <div className="flex gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="text-white hover:text-[#0376b8] transition-colors"
                rel="noopener noreferrer"
                target="_blank"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
