import React from "react";

const Footer = () => {
  return (
    <div className="pt-10 px-4 md:px-20 lg:px-32 mt-8 border-t-2 w-full overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start text-center md:text-left">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <span className=" text-xl font-bold bg-gradient-to-r from-[#5F0F40] to-[#310E68] bg-clip-text text-transparent">
            ReviewHarvester
          </span>

          <p className="text-black mt-4 text-justify">
            Our ReviewHarvester simplifies the way you collect and organize SaaS
            product feedback. With reliable support for sources like G2,
            Capterra, and beyond, we deliver clean, structured review data ready
            for analysis, reporting, or integration into your workflows. Built
            for accuracy, speed, and ease of use, so you can focus on insights,
            not manual scraping.
          </p>
        </div>

        {/* Center Section - Company Links */}
        <div className="w-full md:w-1/5 mb-8 md:mb-0 flex justify-center ">
          <div>
            <h3 className="bg-gradient-to-r from-[#5F0F40] to-[#310E68] bg-clip-text text-transparent text-lg font-bold mb-4">Company</h3>
            <ul className="flex flex-col gap-2 text-black">
              <a href="#Home" className="hover:text-white">
                Home
              </a>
              <a href="#About" className="hover:text-white">
                About Us
              </a>
              <a href="#Contact" className="hover:text-white">
                Contact Us
              </a>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </ul>
          </div>
        </div>

        {/* Right Section - Newsletter */}
        <div className="w-full md:w-1/3 ">
          <h3 className="bg-gradient-to-r from-[#5F0F40] to-[#310E68] bg-clip-text text-transparent text-lg font-bold mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-black mb-4 max-w-80 flex items-center ">
            Get the latest news, articles, and resources delivered to your inbox
            weekly.
          </p>
          <div className="flex">
            <input
              className="p-2 rounded-l-xl bg-[#aa9bc4] text-black placeholder:text-black border border-grey-700 focus:ouline-none w-full md:auto"
              type="email"
              placeholder="Enter your email"
            />
            <button className=" bg-[#aa9bc4] text-[#310E68] text-sm px-2 py-1 rounded-r-xl cursor-pointer ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className=" border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright 2025 © ReviewHarvester. All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;
