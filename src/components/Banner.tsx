"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ButtonUi from "./Button";

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
      { x: 160, y:160 },
      { x: 0, y: 0, duration: 2, ease: "power1" }
    );
    gsap.fromTo(
      image2Ref.current,
      { x: -160, y:-160 },
      { x: 0, y: 0, duration: 2, ease: "power1" }
    );
  }, []);

  const BannerImg = () => {
    return (
      <figure className="absolute top-0 xl:left-[35%] xl:w-[65%] h-full hero-img-path">
        <Image
          ref={imageContainerRef}
          width={1014}
          height={1024}
          src="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=1600&auto=format"
          alt="banner-img"
          className="h-full w-full "
        />
        <div className="bg-deep-gradient w-full h-full absolute top-0 right-0 z-20"></div>
      </figure>
    );
  };

  return (
    <section
      ref={bannerRef}
      className="h-[148vh] md:h-[160vh] lg:h-[92vh] bg-hero-gradient hero-path relative overflow-hidden pt-[100px] lg:pt-0"
    >
      <div className="screen_size lg:h-[80vh]">
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
        <div className="hidden lg:block">
          <BannerImg />
        </div>
        <div className=" relative z-10 w-full h-full md:flex md:items-center md:justify-center">
          <div className="h-full flex flex-col justify-center">
            <header className="max-w-2xl lg:space-y-sm space-y-[16px] mb-[32px]">
              <h1 className="text-[56px] lg:text-[80px] text-white leading-[115%] tracking-[-1.6px] font-semibold">
                Embrace the future of finance
              </h1>{" "}
              <h5 className="!text-white max-w-[37rem] lg:mr-5  font-Montserrat">
                Reimagine financial services with AnyTech’s open platform,
                distributed banking solution that powers transformation
              </h5>
            </header>{" "}
            <ButtonUi title="Reach Out to Us" />
          </div>{" "}
          <div className="lg:flex-[35] xl:flex-[25] lg:block hidden"></div>
        </div>
        <figure className="absolute bottom-[100px] md:bottom-[40px] left-0 w-[100vw] h-[283px] md:h-[425px] mobile-banner-path lg:hidden">
          <Image
            width={1014}
            height={1024}
            src="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=1600&auto=format"
            alt="banner-img"
            className="h-full w-full"
          />
        </figure>
      </div>
    </section>
  );
};

export default Banner;
