"use client";
import React, { useEffect, useRef, useState } from "react";
import ButtonHeader from "./ButtonHeader";
import Image from "next/image";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMouseOver, setIsMouseOver] = useState(true);
  const [isTransparent, setIsTransparent] = useState(true);
  const solutionRef = useRef<HTMLLIElement | null>(null);

  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setIsTransparent(currentScrollY === 0);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    if (solutionRef.current) {
      solutionRef.current.addEventListener("mouseenter", () => {
        setIsMouseOver(false);
      });
      solutionRef.current.addEventListener("mouseleave", () => {
        setIsMouseOver(true);
      });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 left-1/2 -translate-x-1/2 w-full drop-shadow-custom2 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isTransparent ? "bg-transparent text-white" : "bg-white text-black"}`}
    >
      <div
        className={` screen_size  h-[92px] pt-[17px] pb-[25px] flex items-center justify-between transition-all duration-300  `}
      >
        <figure className="">
          {isTransparent ? (
            <Image
              src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&auto=format"
              alt="logo"
              width={100}
              height={100}
            />
          ) : (
            <Image
              src="https://cdn.sanity.io/images/6jywt20u/production/70e2228631883a893695c64b637b99dc8661871c-171x28.svg?w=171&auto=format"
              alt="logo"
              width={100}
              height={100}
            />
          )}
        </figure>
        <div className="">
          <nav className="ml-auto">
            <ul className="flex items-center space-x-4">
              <li ref={solutionRef} className="px-[24px] py-[12px] relative">
                <div className="flex">
                  <span className="">Solutions</span>
                  <div className="rotate-90">
                    <svg
                      className={`group-hover:translate-x-1 transition-transform duration-300 hover:scale-105 fill-white ${
                        isTransparent ? `hover:fill-slate-800` : ``
                      }`}
                      width="6"
                      height="9"
                      viewBox="0 0 6 9"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.25 4.89844L2.0625 8.08594C1.82812 8.32031 1.47656 8.32031 1.26562 8.08594L0.726562 7.57031C0.515625 7.33594 0.515625 6.98438 0.726562 6.77344L3 4.52344L0.726562 2.25C0.515625 2.03906 0.515625 1.6875 0.726562 1.45312L1.26562 0.914062C1.47656 0.703125 1.82812 0.703125 2.0625 0.914062L5.25 4.10156C5.46094 4.33594 5.46094 4.6875 5.25 4.89844Z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  className={`absolute rounded-[3px] top-[100%] left-5 bg-white text-black w-[140px] ${
                    isMouseOver ? "hidden" : "block"
                  }`}
                >
                  <li className="px-[24px] py-[12px] border-b hover:text-blue-main">
                    <a href="#">AnyCaaS</a>
                  </li>
                  <li className="px-[24px] py-[12px] border-b hover:text-blue-main">
                    <a href="#">AnyBaaS</a>
                  </li>
                  <li className="px-[24px] py-[12px] border-b hover:text-blue-main">
                    <a href="#">AnyPaaS</a>
                  </li>
                </ul>
              </li>
              <li className="px-[24px] py-[12px] hover:border-b hover:pb-[10px]">
                <a href="#">Services</a>
              </li>
              <li className="px-[24px] py-[12px] hover:border-b hover:pb-[10px]">
                <a href="#">About Us</a>
              </li>
              <li className="">
                <button className="px-[24px] py-[6px] border rounded-3xl flex justify-center items-center gap-2">
                  <span>En</span>{" "}
                  <div className="rotate-90">
                    <svg
                      className={`group-hover:translate-x-1 transition-transform duration-300 hover:scale-105 fill-white ${
                        isTransparent ? `hover:fill-slate-800` : ``
                      }`}
                      width="6"
                      height="9"
                      viewBox="0 0 6 9"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.25 4.89844L2.0625 8.08594C1.82812 8.32031 1.47656 8.32031 1.26562 8.08594L0.726562 7.57031C0.515625 7.33594 0.515625 6.98438 0.726562 6.77344L3 4.52344L0.726562 2.25C0.515625 2.03906 0.515625 1.6875 0.726562 1.45312L1.26562 0.914062C1.47656 0.703125 1.82812 0.703125 2.0625 0.914062L5.25 4.10156C5.46094 4.33594 5.46094 4.6875 5.25 4.89844Z"></path>
                    </svg>
                  </div>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <ButtonHeader title="Contact Us" isTransparent={isTransparent} />
        </div>
      </div>
    </header>
  );
};

export default Header;
