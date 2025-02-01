/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useEffect, useRef } from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import gsap from "gsap";

const Philosophy = () => {
  const cardRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      const delay = index * 2;
      gsap.fromTo(
        card,
        {
          x: -100,
          y: 100,
          opacity: 0,
        },
        {
          x: 0,
          y: 50,
          opacity: 1,
          duration: 1.5, 
          ease: "power2.out", 
          delay: delay, 
        }
      );
    });
  }, []);


  return (
    <section className="screen_size">
      <SectionTitle
        title="OUR PHILOSOPHY"
        mainTitle="Human-centred innovation"
      />
      <figure className="w-full mt-[32px]">
        <Image
          src="https://cdn.sanity.io/images/6jywt20u/production/50bc481601f8adb912da12788f7d0143eb5b5eb3-1710x1965.png?w=960&auto=format"
          alt="Philosophy"
          width={440}
          height={360}
          className="md:hidden"
        />
        <Image
          src="https://cdn.sanity.io/images/6jywt20u/production/2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727.png?w=2206&auto=format"
          alt="Philosophy"
          width={1440}
          height={720}
          className="hidden md:block"
        />
      </figure>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
      {/* ref={(el: any) => el && iconRefs.current.push(el)} */}
        <li ref={(el:any) => el && cardRefs.current.push(el)} className="translate-y-[20%] z-20 h-full md:space-y-sm space-y-[8px] bg-[#F8FCFF] rounded-[20px] md:p-md p-[32px] ">
          <figure className="w-fit rounded-full">
            <Image
              src="https://cdn.sanity.io/images/6jywt20u/production/28029da89383a59e47420ee46b7e4c364051b45f-50x50.svg?auto=format"
              width="50"
              height="50"
              sizes="50px"
              alt="Full suite solutions"
              className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]"
              loading="lazy"
            />
          </figure>{" "}
          <h4 className=" font-Montserrat text-blue-text common-text">
            Full-suite solutions
          </h4>{" "}
          <p className="text-body-1">
            Experience the ease of integration across various banking and
            payment functions with our comprehensive suite of solutions.
          </p>
        </li>
        <li ref={(el:any) => el && cardRefs.current.push(el)} className="translate-y-[20%] z-20 h-full md:space-y-sm space-y-[8px] bg-[#F8FCFF] rounded-[20px] md:p-md p-[32px] ">
          <figure className="w-fit rounded-full">
            <Image
              src="https://cdn.sanity.io/images/6jywt20u/production/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51.png?w=50&auto=format"
              width="50"
              height="50"
              sizes="50px"
              alt="Full suite solutions"
              className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]"
              loading="lazy"
            />
          </figure>{" "}
          <h4 className=" font-Montserrat text-blue-text common-text">
            Simplify the complex
          </h4>{" "}
          <p className="text-body-1">
            Simplify complex processes and optimise your financial operations by
            leveraging the power of AI, Blockchain, Cloud Computing, and Big
            Data.
          </p>
        </li>
        <li ref={(el:any) => el && cardRefs.current.push(el)} className="translate-y-[20%] z-20 h-full md:space-y-sm space-y-[8px] bg-[#F8FCFF] rounded-[20px] md:p-md p-[32px] ">
          <figure className="w-fit rounded-full">
            <Image
              src="https://cdn.sanity.io/images/6jywt20u/production/1966d94a29ffe1673fd510327ba0eb409f82b680-50x50.svg?w=50&auto=format"
              width="50"
              height="50"
              sizes="50px"
              alt="Full suite solutions"
              className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]"
              loading="lazy"
            />
          </figure>{" "}
          <h4 className=" font-Montserrat text-blue-text common-text">
            Cutting-edge tech
          </h4>{" "}
          <p className="text-body-1">
            We seamlessly combine cutting-edge technologies, resulting in an
            unparalleled fintech experience for financial institutions.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Philosophy;
