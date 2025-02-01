"use client";
import React, { useEffect, useState, useRef } from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { logos } from "@/mock/Logo";
import CountUp from "react-countup";

const Trusted = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5, 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="screen_size" ref={sectionRef}>
      <SectionTitle title="TRUSTED BY THE BEST" />
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="text-center flex justify-between items-center lg:flex-col py-[16px] lg:py-0 border-b border-dotted border-blue-main lg:border-none">
          {startCount && (
            <CountUp start={0} end={20} delay={0}>
              {({ countUpRef }) => (
                <div>
                  <h2
                    className="text-[64px] max-[280px]:text-[40px] lg:text-[96px] font-Montserrat font-semibold tracking-[-0.02em]  leading-none bg-gradient-to-b from-blue-main to-[#0057BB] text-transparent bg-clip-text"
                  >
                    &gt;<span ref={countUpRef}></span>
                  </h2>
                </div>
              )}
            </CountUp>
          )}
          <p className="text-right text-[#151D2F] lg:text-center max-lg:text-res-link lg:text-lg lg:mt-[19px] font-semibold">
            Years of Experience
          </p>
        </div>
        <div className="text-center flex justify-between items-center lg:flex-col py-[16px] lg:py-0 border-b border-dotted border-blue-main lg:border-none">
          {startCount && (
            <CountUp start={0} end={40} delay={0}>
              {({ countUpRef }) => (
                <div>
                  <h2
                    className="text-[64px] max-[280px]:text-[40px] lg:text-[96px] font-Montserrat font-semibold tracking-[-0.02em]  leading-none bg-gradient-to-b from-blue-main to-[#0057BB] text-transparent bg-clip-text"
                  >
                    <span ref={countUpRef}></span>+
                  </h2>
                </div>
              )}
            </CountUp>
          )}
          <p className="text-right text-[#151D2F] lg:text-center max-lg:text-res-link lg:text-lg lg:mt-[19px] font-semibold">
            Financial Institutions
          </p>
        </div>
        <div className="text-center flex justify-between items-center lg:flex-col py-[16px] lg:py-0 border-b border-dotted border-blue-main lg:border-none">
          {startCount && (
            <CountUp start={0} end={200} delay={0}>
              {({ countUpRef }) => (
                <div>
                  <h2
                    className="text-[64px] max-[280px]:text-[40px] lg:text-[96px] font-Montserrat font-semibold tracking-[-0.02em]  leading-none bg-gradient-to-b from-blue-main to-[#0057BB] text-transparent bg-clip-text"
                  >
                    &gt;<span ref={countUpRef}></span>m
                  </h2>
                </div>
              )}
            </CountUp>
          )}
          <p className="text-right text-[#151D2F] lg:text-center max-lg:text-res-link lg:text-lg lg:mt-[19px] font-semibold">
            Customers Each
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-x-[16px] gap-y-[34px] mt-[128px] items-center">
        {logos.map((logo, index) => (
          <div className="col-span-1" key={index}>
            <Image
              width={176}
              height={121}
              className="w-[176px]"
              src={logo.logo}
              alt="logo"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trusted;
