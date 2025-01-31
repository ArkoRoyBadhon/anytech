import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { logos } from "@/mock/Logo";

const Trusted = () => {
  

  return (
    <section className="mx-[120px]">
      <SectionTitle title="TRUSTED BY THE BEST" />
      <div className="grid grid-cols-3">
        <div className="text-center">
          <h2
            className="text-[64px] max-[280px]:text-[40px] lg:text-[96px] font-Montserrat font-semibold tracking-[-0.02em]  leading-none bg-gradient-to-b from-blue-main to-[#0057BB] text-transparent bg-clip-text
  "
          >
            &gt;<span>20</span>
          </h2>
          <p className="text-right text-[#151D2F] lg:text-center max-lg:text-res-link lg:text-lg lg:mt-[19px]">
            Years of Experience
          </p>
        </div>
        <div className="text-center">
          <h2
            className="text-[64px] max-[280px]:text-[40px] lg:text-[96px] font-Montserrat font-semibold tracking-[-0.02em]  leading-none bg-gradient-to-b from-blue-main to-[#0057BB] text-transparent bg-clip-text
  "
          >
            <span>40+</span>
          </h2>
          <p className="text-right text-[#151D2F] lg:text-center max-lg:text-res-link lg:text-lg lg:mt-[19px]">
            Financial Institutions
          </p>
        </div>
        <div className="text-center">
          <h2
            className="text-[64px] max-[280px]:text-[40px] lg:text-[96px] font-Montserrat font-semibold tracking-[-0.02em]  leading-none bg-gradient-to-b from-blue-main to-[#0057BB] text-transparent bg-clip-text
  "
          >
            &gt;<span>200m</span>
          </h2>
          <p className="text-right text-[#151D2F] lg:text-center max-lg:text-res-link lg:text-lg lg:mt-[19px]">
            Customers Each
          </p>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-x-[16px] gap-y-[34px] mt-[128px] items-center">
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
