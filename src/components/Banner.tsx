"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Banner: React.FC = () => {
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const image1Ref = useRef<HTMLImageElement | null>(null);
  const image2Ref = useRef<HTMLImageElement | null>(null);
  const imageContainerRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const banner = bannerRef.current;

    if (!banner || !image1Ref.current || !image2Ref.current) return;

    const hoverTimeline = gsap.timeline({ paused: true });

    hoverTimeline
      .to(image1Ref.current, { y: 20, duration: 1, ease: "power1.out" })
      .to(image2Ref.current, { y: -20, duration: 1, ease: "power1.out" }, "<");

    const playAnimation = () => hoverTimeline.play();
    const reverseAnimation = () => hoverTimeline.reverse();

    banner.addEventListener("mouseenter", playAnimation);
    banner.addEventListener("mouseleave", reverseAnimation);

    return () => {
      banner.removeEventListener("mouseenter", playAnimation);
      banner.removeEventListener("mouseleave", reverseAnimation);
    };
  }, []);

  useEffect(() => {
    if (imageContainerRef.current) {
      gsap.fromTo(
        imageContainerRef.current,
        { x: 50 },
        { x: 0, duration: 2, ease: "power1" }
      );
    }
    gsap.fromTo(
      image1Ref.current,
      { x: 100 },
      { x: 0, duration: 2, ease: "power1" }
    );
    gsap.fromTo(
      image2Ref.current,
      { x: -100 },
      { x: 0, duration: 2, ease: "power1" }
    );
  }, []);

  return (
    <section
      ref={bannerRef}
      className="h-[92vh] bg-hero-gradient hero-path relative overflow-hidden"
    >
      <Image
        ref={image1Ref}
        src="/backgrounds/WaveLinesDesktop1.svg"
        width={1920}
        height={1080}
        className="w-full h-full absolute left-[-26px] bottom-14 z-10"
        alt="Banner"
      />
      <Image
        ref={image2Ref}
        src="/backgrounds/WaveLinesDesktop2.svg"
        width={1920}
        height={1080}
        className="w-full h-full absolute left-[-26px] top-[-400px] scale-[2] z-10"
        alt="Banner"
      />

      <div className="absolute top-0 xl:left-[35%] xl:w-[65%] h-full hero-img-path">
        <Image
          ref={imageContainerRef}
          width={1014}
          height={1024}
          src="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=1600&auto=format"
          alt="banner-img"
          className="h-full w-full "
        />
      </div>
      <div className="container relative z-10 w-full h-full md:flex md:items-center md:justify-center mx-[120px] p-[31px]">
        <div className="h-fit lg:flex-[65] xl:flex-[75]">
          <header className="max-w-2xl lg:space-y-sm space-y-[16px] mb-[32px]">
            <h1 className="text-[80px] text-white leading-[115%] tracking-[-1.6px] font-semibold">
              Embrace the future of finance
            </h1>{" "}
            <h5 className="!text-white max-w-[37rem] lg:mr-5  font-Montserrat">
              Reimagine financial services with AnyTech’s open platform,
              distributed banking solution that powers transformation
            </h5>
          </header>{" "}
          <div className="flex lg:flex-row flex-col lg:space-x-[16px] space-y-4 lg:space-y-0 w-full lg:mb-0 mb-md max-w-xl">
            <a
              className="md:py-[15.5px] py-[14px] px-[42px] rounded-xs shadow-button-primary text-link text-white flex items-center justify-center space-x-[8px] bg-[#fe8b53] false rounded-[3px]"
              href="/en/contact-us"
            >
              <span>Reach Out to Us</span>{" "}
              <svg
                width="6"
                height="9"
                viewBox="0 0 6 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.25 4.89844L2.0625 8.08594C1.82812 8.32031 1.47656 8.32031 1.26562 8.08594L0.726562 7.57031C0.515625 7.33594 0.515625 6.98438 0.726562 6.77344L3 4.52344L0.726562 2.25C0.515625 2.03906 0.515625 1.6875 0.726562 1.45312L1.26562 0.914062C1.47656 0.703125 1.82812 0.703125 2.0625 0.914062L5.25 4.10156C5.46094 4.33594 5.46094 4.6875 5.25 4.89844Z"
                  fill="white"
                ></path>
              </svg>
            </a>
          </div>
        </div>{" "}
        <div className="lg:flex-[35] xl:flex-[25] lg:block hidden"></div>
      </div>
    </section>
  );
};

export default Banner;
