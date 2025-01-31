import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#002045] ">
      <div className="flex items-center justify-between mx-[120px] py-[32px]">
        <Image
          width={1440}
          height={720}
          src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&fm=webp"
          alt="hero"
          className="w-[217px] h-[34px]"
        />
        <div className="hidden items-center text-[#00E9EA] lg:flex">
          <p className="border-r border-blue-dark px-6 py-4 text-res-body-p1-semibold lg:text-body-p1-semibold">
            Our Solutions
          </p>
          <ul className="flex items-center">
            <li>
              <a
                className="px-6 py-4 text-res-body-p1 transition-colors duration-300 last:pr-0 hover:text-blue-main lg:text-body-p1"
                href="/en/solutions/anycaas"
              >
                AnyCaaS
              </a>
            </li>
            <li>
              <a
                className="px-6 py-4 text-res-body-p1 transition-colors duration-300 last:pr-0 hover:text-blue-main lg:text-body-p1"
                href="/en/solutions/anybaas"
              >
                AnyBaaS
              </a>
            </li>
            <li>
              <a
                className="px-6 py-4 text-res-body-p1 transition-colors duration-300 last:pr-0 hover:text-blue-main lg:text-body-p1"
                href="/en/solutions/anypaas"
              >
                AnyPaaS
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#00152D] px-[120px]">
        <div className="container flex flex-col items-center justify-between py-6 text-res-body-p2 text-blue-main lg:flex-row lg:text-body-p2">
          <p>
            <strong>©2023 All rights reserved</strong>. Any Technology Pte Ltd.
          </p>
          <div className="flex items-center gap-[14px] max-lg:mt-4">
            <div>
              <a
                className="transition-colors duration-300 hover:text-blue-highlight"
                href="/en/privacy-policy"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
