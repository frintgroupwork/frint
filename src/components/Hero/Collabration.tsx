"use client";
import React, { useEffect, useState } from "react";
import Section from "../Section";
import Image from "next/image";

const Collabration = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640); // Tailwind's `max-sm` breakpoint
    };

    handleResize(); // Check screen size on initial render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Section className="flex flex-col items-center gap-4 w-full z-50 shadow-md bg-white py-5">
        <p className=" text-xl font-medium">
          COLLABORATION <span className="text-[#1d4ed8]">TEAM</span>
        </p>
        <div className="w-3/4 max-sm:pt-2">
          <div className="flex flex-row justify-between items-center max-sm:flex-col max-sm:gap-4 max-sm:py-2">
            <Image
              width={isSmallScreen ? 100 : 120}
              height={isSmallScreen ? 80 : 100}
              src="collabration/frint.svg"
              alt="frint"
            />
            <Image
              width={isSmallScreen ? 100 : 150}
              height={isSmallScreen ? 80 : 130}
              src="collabration/empoweru.svg"
              alt="empoweru"
            />
            <Image
              width={isSmallScreen ? 80 : 100}
              height={isSmallScreen ? 80 : 100}
              src="collabration/oppteens.svg"
              alt="oppteens"
            />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Collabration;
