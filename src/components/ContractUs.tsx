"use client";
import React, { useEffect, useRef } from "react";
import ButtonUi from "./Button";
import Image from "next/image";
import { gsap } from "gsap";

const ContractUs = () => {
  const contactRef = useRef<HTMLDivElement | null>(null);
  const conImg1Ref = useRef<HTMLImageElement | null>(null);
  const conImg2Ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const contactAnim = contactRef.current;

    if (!contactAnim || !conImg1Ref.current || !conImg2Ref.current) return;
    const hoverTimeline = gsap.timeline({ paused: true });
    hoverTimeline
      .to(conImg1Ref.current, {
        x: -80,
        y: 20,
        duration: 1,
        ease: "power1.out",
      })
      .to(
        conImg2Ref.current,
        { x: 80, y: -20, duration: 1, ease: "power1.out" },
        "<"
      );

    const playAnimation = () => hoverTimeline.play();
    const reverseAnimation = () => hoverTimeline.reverse();

    contactAnim.addEventListener("mouseenter", playAnimation);
    contactAnim.addEventListener("mouseleave", reverseAnimation);

    return () => {
      contactAnim.removeEventListener("mouseenter", playAnimation);
      contactAnim.removeEventListener("mouseleave", reverseAnimation);
    };
  }, []);

  useEffect(() => {
    
    gsap.fromTo(
      conImg1Ref.current,
      { x: 160, y:160 },
      { x: 0, y: 0, delay: 1, duration: 2, ease: "power1" }
    );
    gsap.fromTo(
      conImg2Ref.current,
      { x: -160, y:-160 },
      { x: 0, y: 0, delay: 1, duration: 2, ease: "power1" }
    );
  }, []);

  return (
    <section
      ref={contactRef}
      className="bg-footer-gradient h-[60vh] lg:h-[530px] footer footer-path relative overflow-hidden"
    >
      <figure className="">
        <Image
          ref={conImg1Ref}
          src="/backgrounds/WaveLinesDesktop4.svg"
          width={1920}
          height={1080}
          className="w-full h-full absolute left-[-26px] bottom-14 z-10"
          alt="Banner"
        />
      </figure>
      <figure className="">
        <Image
          ref={conImg2Ref}
          src="/backgrounds/WaveLinesDesktop1.svg"
          width={1920}
          height={1080}
          className="w-full h-full absolute left-[-26px] bottom-14 z-10"
          alt="Banner"
        />
      </figure>
      <div className=" flex items-start justify-center h-full relative z-10 flex-col mt-6 screen_size">
        <h2 className="font-Montserrat text-[32px] lg:text-[56px] leading-[110%] font-semibold text-white mb-[24px]">
          Legacy no longer
        </h2>{" "}
        <p className="text-white lg:text-lg 2xl:text-xl lg:whitespace-pre-line mb-[30px]">
          Talk to us to find out how we can transform your organisation for the
          future
        </p>{" "}
        <ButtonUi title="Contact Us" />
      </div>
    </section>
  );
};

export default ContractUs;
