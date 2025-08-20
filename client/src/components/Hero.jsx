import React, { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 250);
  }, []);

  return (
    <div
      className={`flex flex-col item-center mt-6 lg:mt-10 transition-opacity duration-1000 ease-in-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide ransition-transform duration-1000 ease-in-out">
        Collect. Analyze. Automate. <br />
        <span className=" bg-gradient-to-t from-[#5F0F40] to-[#310E68] text-transparent bg-clip-text">
          All Your Reviews in One Place.
        </span>
      </h1>
      <div className=" flex justify-center transition-transform duration-1000 ease-in-out delay-300">
        <p className="mt-10 text-lg text-center text-black max-w-[97%]">
          Our Review Scraper makes gathering product feedback effortless. With
          support for G2, Capterra, and more, you can quickly collect reviews
          for any company within a chosen timeframe. Every review is structured,
          export-ready, and delivered in JSON perfect for research, reporting,
          and analytics. No more manual searching with pagination handling and
          smart filters, you get accurate datasets in seconds.
        </p>
      </div>
    </div>
  );
};

export default Hero;
