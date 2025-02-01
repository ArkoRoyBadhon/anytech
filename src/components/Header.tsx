"use client";
import React, { useEffect, useRef, useState } from "react";
import ButtonHeader from "./ButtonHeader";
import Image from "next/image";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMouseOver, setIsMouseOver] = useState(true);
  const [isTransparent, setIsTransparent] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
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
      className={`fixed top-0 z-50 left-1/2 -translate-x-1/2 w-full drop-shadow-custom2 bg-[#1f80f0] ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isTransparent
          ? " lg:bg-transparent text-white"
          : "lg:bg-white lg:text-black"
      }  `}
    >
      <div
        className={` screen_size  h-[92px] pt-[17px] pb-[25px] flex items-center justify-between transition-all duration-300 `}
      >
        <figure className="">
          <Image
            src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&auto=format"
            alt="logo"
            width={170}
            height={100}
            className="w-[130px] lg:w-[170px] lg:hidden"
          />
          {isTransparent ? (
            <Image
              src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&auto=format"
              alt="logo"
              width={170}
              height={100}
              className="w-[130px] lg:w-[170px] hidden lg:block"
            />
          ) : (
            <Image
              src="https://cdn.sanity.io/images/6jywt20u/production/70e2228631883a893695c64b637b99dc8661871c-171x28.svg?w=171&auto=format"
              alt="logo"
              width={170}
              height={100}
              className="w-[130px] lg:w-[170px] hidden lg:block"
            />
          )}
        </figure>
        <div className={` `}>
          <nav className="ml-auto hidden lg:block">
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
                  className={`absolute rounded-[3px] top-[50px] left-5 bg-white text-black w-[200px] ${
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
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.25 4.25H4.10156C4.45312 2.16406 5.25 0.6875 6.1875 0.6875C7.10156 0.6875 7.92188 2.16406 8.25 4.25ZM3.9375 6.5C3.9375 5.98438 3.96094 5.49219 4.00781 5H8.34375C8.39062 5.49219 8.41406 5.98438 8.41406 6.5C8.41406 7.03906 8.39062 7.53125 8.34375 8H4.00781C3.96094 7.53125 3.9375 7.03906 3.9375 6.5ZM11.5312 4.25H9C8.78906 2.9375 8.41406 1.74219 7.82812 0.945312C9.51562 1.4375 10.875 2.67969 11.5312 4.25ZM4.52344 0.945312C3.9375 1.74219 3.5625 2.9375 3.35156 4.25H0.820312C1.47656 2.67969 2.83594 1.4375 4.52344 0.945312ZM11.7891 5C11.9062 5.49219 11.9766 5.98438 11.9766 6.5C11.9766 7.03906 11.9062 7.53125 11.7891 8H9.09375C9.14062 7.50781 9.1875 7.01562 9.1875 6.5C9.1875 6.00781 9.14062 5.49219 9.09375 5H11.7891ZM3.1875 6.5C3.1875 7.01562 3.21094 7.50781 3.25781 8H0.5625C0.445312 7.53125 0.375 7.03906 0.375 6.5C0.375 5.98438 0.445312 5.49219 0.5625 5H3.25781C3.21094 5.49219 3.1875 6.00781 3.1875 6.5ZM4.10156 8.75H8.25C7.92188 10.8594 7.10156 12.3125 6.1875 12.3125C5.25 12.3125 4.45312 10.8594 4.10156 8.75ZM7.82812 12.0781C8.41406 11.2812 8.8125 10.0859 9 8.75H11.5312C10.875 10.3438 9.51562 11.5859 7.82812 12.0781ZM0.820312 8.75H3.35156C3.5625 10.0859 3.9375 11.2812 4.52344 12.0781C2.83594 11.5859 1.47656 10.3438 0.820312 8.75Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span>En</span>{" "}
                  <div className="rotate-90">
                    <svg
                      className={`group-hover:translate-x-1 transition-transform duration-300 hover:scale-105 fill-white`}
                      width="6"
                      height="9"
                      viewBox="0 0 6 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.25 4.89844L2.0625 8.08594C1.82812 8.32031 1.47656 8.32031 1.26562 8.08594L0.726562 7.57031C0.515625 7.33594 0.515625 6.98438 0.726562 6.77344L3 4.52344L0.726562 2.25C0.515625 2.03906 0.515625 1.6875 0.726562 1.45312L1.26562 0.914062C1.47656 0.703125 1.82812 0.703125 2.0625 0.914062L5.25 4.10156C5.46094 4.33594 5.46094 4.6875 5.25 4.89844Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div
          className={`hidden lg:block ${
            isTransparent
              ? "lg:bg-transparent text-white"
              : "lg:bg-white lg:text-black"
          } `}
        >
          <ButtonHeader title="Contact Us" isTransparent={isTransparent} />
        </div>

        {/* mobile menu  */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          {isOpen ? (
            <svg
              className="fill-white"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.41401 6.99998L13.707 1.70695C14.098 1.31695 14.098 0.683006 13.707 0.293006C13.316 -0.0979941 12.684 -0.0979941 12.293 0.293006L7.00001 5.58597L1.70701 0.293006C1.31601 -0.0979941 0.684006 -0.0979941 0.293006 0.293006C-0.0979941 0.683006 -0.0979941 1.31695 0.293006 1.70695L5.58601 6.99998L0.293006 12.293C-0.0979941 12.683 -0.0979941 13.3169 0.293006 13.7069C0.488006 13.9019 0.744007 14 1.00001 14C1.25601 14 1.51201 13.9019 1.70701 13.7069L7.00001 8.41398L12.293 13.7069C12.488 13.9019 12.744 14 13 14C13.256 14 13.512 13.9019 13.707 13.7069C14.098 13.3169 14.098 12.683 13.707 12.293L8.41401 6.99998Z"></path>
            </svg>
          ) : (
            <svg
              className="fill-white"
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 2C0 0.895431 0.895431 0 2 0H18V2H0Z"></path>
              <rect y="7" width="18" height="2"></rect>
              <path d="M0 14H18V16H2C0.89543 16 0 15.1046 0 14Z"></path>
            </svg>
          )}
        </button>
        <div
          className={`absolute lg:hidden top-[92px] h-fit w-full bg-[#1b76e9] transition-all duration-500 ease-in-out text-white ${
            isOpen ? "left-0" : "left-[-100%]"
          }`}
        >
          <ul className="flex flex-col gap-6 p-4">
            <li className="relative group px-6 py-3">
              <div
                onClick={() => setIsMouseOver(!isMouseOver)}
                className="flex items-center justify-between cursor-pointer"
              >
                <span>Solutions</span>
                <div
                  className={`transition-all ease-in-out ${
                    isMouseOver ? "rotate-90" : "rotate-[-90deg]"
                  }`}
                >
                  <svg
                    className=""
                    width="6"
                    height="9"
                    viewBox="0 0 6 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.25 4.89844L2.0625 8.08594C1.82812 8.32031 1.47656 8.32031 1.26562 8.08594L0.726562 7.57031C0.515625 7.33594 0.515625 6.98438 0.726562 6.77344L3 4.52344L0.726562 2.25C0.515625 2.03906 0.515625 1.6875 0.726562 1.45312L1.26562 0.914062C1.47656 0.703125 1.82812 0.703125 2.0625 0.914062L5.25 4.10156C5.46094 4.33594 5.46094 4.6875 5.25 4.89844Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <ul
                className={`mt-2 text-[14px] font-light text-white ${
                  isMouseOver ? "block" : "hidden"
                }`}
              >
                <li className="px-4 py-3 ">
                  <a href="#">AnyCaaS</a>
                </li>
                <li className="px-4 py-3 ">
                  <a href="#">AnyBaaS</a>
                </li>
                <li className="px-4 py-3 ">
                  <a href="#">AnyPaaS</a>
                </li>
              </ul>
            </li>

            <li className="px-6 py-3">
              <a href="#">Services</a>
            </li>

            <li className="px-6 py-3">
              <a href="#">About Us</a>
            </li>

            <li className="flex justify-center">
              <button className="px-6 py-2 border rounded-3xl flex items-center gap-2">
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.25 4.25H4.10156C4.45312 2.16406 5.25 0.6875 6.1875 0.6875C7.10156 0.6875 7.92188 2.16406 8.25 4.25ZM3.9375 6.5C3.9375 5.98438 3.96094 5.49219 4.00781 5H8.34375C8.39062 5.49219 8.41406 5.98438 8.41406 6.5C8.41406 7.03906 8.39062 7.53125 8.34375 8H4.00781C3.96094 7.53125 3.9375 7.03906 3.9375 6.5ZM11.5312 4.25H9C8.78906 2.9375 8.41406 1.74219 7.82812 0.945312C9.51562 1.4375 10.875 2.67969 11.5312 4.25ZM4.52344 0.945312C3.9375 1.74219 3.5625 2.9375 3.35156 4.25H0.820312C1.47656 2.67969 2.83594 1.4375 4.52344 0.945312ZM11.7891 5C11.9062 5.49219 11.9766 5.98438 11.9766 6.5C11.9766 7.03906 11.9062 7.53125 11.7891 8H9.09375C9.14062 7.50781 9.1875 7.01562 9.1875 6.5C9.1875 6.00781 9.14062 5.49219 9.09375 5H11.7891ZM3.1875 6.5C3.1875 7.01562 3.21094 7.50781 3.25781 8H0.5625C0.445312 7.53125 0.375 7.03906 0.375 6.5C0.375 5.98438 0.445312 5.49219 0.5625 5H3.25781C3.21094 5.49219 3.1875 6.00781 3.1875 6.5ZM4.10156 8.75H8.25C7.92188 10.8594 7.10156 12.3125 6.1875 12.3125C5.25 12.3125 4.45312 10.8594 4.10156 8.75ZM7.82812 12.0781C8.41406 11.2812 8.8125 10.0859 9 8.75H11.5312C10.875 10.3438 9.51562 11.5859 7.82812 12.0781ZM0.820312 8.75H3.35156C3.5625 10.0859 3.9375 11.2812 4.52344 12.0781C2.83594 11.5859 1.47656 10.3438 0.820312 8.75Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>English</span>
                <svg
                  className="rotate-90 transition-transform duration-300"
                  width="6"
                  height="9"
                  viewBox="0 0 6 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.25 4.89844L2.0625 8.08594C1.82812 8.32031 1.47656 8.32031 1.26562 8.08594L0.726562 7.57031C0.515625 7.33594 0.515625 6.98438 0.726562 6.77344L3 4.52344L0.726562 2.25C0.515625 2.03906 0.515625 1.6875 0.726562 1.45312L1.26562 0.914062C1.47656 0.703125 1.82812 0.703125 2.0625 0.914062L5.25 4.10156C5.46094 4.33594 5.46094 4.6875 5.25 4.89844Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </li>
            <div className="mx-4">
              <ButtonHeader title="Contact Us" isTransparent={true} />
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
