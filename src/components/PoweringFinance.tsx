/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PoweringFinance: React.FC = () => {
  const powerRef = useRef<HTMLDivElement | null>(null);
  const upperRef = useRef<HTMLDivElement | null>(null);
  const iconRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const powerAnim = powerRef.current;
    const upperElement = upperRef.current;

    if (!powerAnim || !upperElement) return;

    const hoverTimeline = gsap.timeline({ paused: true });
    hoverTimeline.to(upperElement, {
      y: 20,
      duration: 1,
      ease: "power1.out",
    });

    const playAnimation = () => hoverTimeline.play();
    const reverseAnimation = () => hoverTimeline.reverse();

    let lastScrollTop = 0;

    iconRefs.current.forEach((icon, index) => {
      const delay = index * 1.5;
      gsap.to(icon, {
        y: -5,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
        delay: delay,
      });
    });

    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        playAnimation();
      } else if (currentScrollTop < lastScrollTop) {
        reverseAnimation();
      }

      lastScrollTop = Math.max(0, currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ImageElement = () => {
    return (
      <div className="w-full lg:w-[400px] xl:w-[561px] h-[335px] lg:h-[517px] relative my-[60px] lg:my-0">
        <figure className="w-[76%] h-full shadow-card mx-auto">
          <Image
            width={427}
            height={518}
            className="object-cover  h-full  z-20 overflow-hidden"
            loading="lazy"
            src="https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=1124&auto=format"
            alt=""
          />
        </figure>
        <figure
          ref={upperRef}
          className="absolute top-[-20px] lg:top-[-32px] z-10 w-full h-full"
        >
          <Image
            width={1000}
            height={1000}
            className="object-cover w-full h-full overflow-visible"
            loading="lazy"
            src="https://anytxn.com/backgrounds/home/futureOfFinance/background.svg"
            alt="background frame"
          />
        </figure>

        <figure className="absolute right-[10px] lg:right-auto bottom-[-50px] lg:bottom-[-100px]">
          <Image
            width={1000}
            height={1000}
            className="object-cover w-full h-full overflow-visible"
            loading="lazy"
            src="https://anytxn.com/backgrounds/home/futureOfFinance/foreground.png"
            alt="background frame"
          />
        </figure>

        <figure
          ref={(el: any) => el && iconRefs.current.push(el)}
          className="absolute z-30 top-[20%] left-[8%]"
        >
          <Image
            width={73}
            height={73}
            className="object-cover w-[73px] h-[73px] overflow-visible"
            loading="lazy"
            src="https://cdn.sanity.io/images/6jywt20u/production/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg?w=74&auto=format"
            alt="icon"
          />
        </figure>
        <figure
          ref={(el: any) => el && iconRefs.current.push(el)}
          className="absolute z-30 top-[40%] left-[28%]"
        >
          <Image
            width={89}
            height={89}
            className="object-cover w-[73px] h-[73px] overflow-visible"
            loading="lazy"
            src="https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg?w=89&auto=format"
            alt="icon"
          />
        </figure>
        <figure
          ref={(el: any) => el && iconRefs.current.push(el)}
          className="absolute z-30 top-[10%] right-[6%]"
        >
          <Image
            width={115}
            height={114}
            className="object-cover w-[115px] h-[114px] overflow-visible"
            loading="lazy"
            src="https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg?w=116&auto=format"
            alt="icon"
          />
        </figure>
      </div>
    );
  };

  return (
    <section ref={powerRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px] screen_size lg:mt-[20px]">
        <div>
          <h6 className="text-[12px] lg:text-[16px] leading-[1.5] tracking-[2.56px] font-bold uppercase font-Montserrat text-blue-main">
            POWERING THE FUTURE OF FINANCE
          </h6>
          <h2 className="font-Montserrat text-[24px] lg:text-[56px] leading-[110%] font-semibold whitespace-pre-line lg:w-[561px] my-[24px] text-text-col">
            Uncovering new ways to delight customers
          </h2>
          <div className="flex flex-col-reverse lg:flex-row text-text-col">
            <div className="lg:pt-2 lg:w-[561px]">
              <p className="text-body-1">
                <strong>
                  AnyTech is revolutionising financial technology by introducing
                  innovative and real-time transaction account processing
                  capabilities, specifically designed for retail financial
                  services.
                </strong>
              </p>
              <p className="text-body-1 mt-4">
                Our modern approach surpasses traditional banking and card
                processing systems, empowering you with the most advanced
                technology for lasting success.
              </p>
            </div>
            <div className="md:hidden">
              <ImageElement />
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <ImageElement />
        </div>
      </div>
    </section>
  );
};

export default PoweringFinance;
