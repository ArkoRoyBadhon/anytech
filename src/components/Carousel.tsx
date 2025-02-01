"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const CarouselWithMenu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<number>(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  const menuItems = [
    "Customer focused",
    "Agile and adaptable",
    "Compliance ready",
    "Secure and safe",
  ];

  const handleMenuClick = (index: number) => {
    setActiveMenu(index);
    swiperRef.current?.slideToLoop(index);
  };

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveMenu(swiper.realIndex);
  };

  const CarouselData = [
    {
      subTitle: "Customer focused",
      title: "Purpose-built financial services",
      img: "https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=960&auto=format",
      para1:
        "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
      para2:
        "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    },
    {
      subTitle: "Agile and adaptable",
      title: "Agile and adaptable for growth",
      img: "https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=960&auto=format",
      para1:
        "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
      para2:
        "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
    },
    {
      subTitle: "Compliance ready",
      title: "Manage compliance with ease",
      img: "https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png?w=960&auto=format",
      para1:
        "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
      para2:
        "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
    },
    {
      subTitle: "Secure and safe",
      title: "Highly secure and safe",
      img: "https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=960&auto=format",
      para1:
        "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
      para2:
        "Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",
    },
  ];

  return (
    <div className="w-full">
      <div className="lg:flex justify-center hidden space-x-4 my-8">
        {menuItems.map((menu, index) => (
          <button
            key={index}
            onClick={() => handleMenuClick(index)}
            className={`py-2 px-6 rounded-3xl text-base font-semibold transition-all ease-in ${
              activeMenu === index
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-100 text-gray-700"
            }`}
          >
            {menu}
          </button>
        ))}
      </div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="rounded-lg w-full mx-auto drop-shadow-md"
      >
        {CarouselData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-[32px] bg-white rounded-lg p-[24px] lg:p-[64px]">
              <div className="">
                <h6 className="text-[12px] lg:text-[16px] leading-[150%] tracking-[2.56px] font-bold uppercase text-blue-main font-Montserrat">
                  {item.subTitle}
                </h6>
                <h3 className="undefined text-blue-text text-[24px] lg:text-[40px] leading-[120%] font-semibold font-Montserrat my-[16px] lg:my-[32px]">
                  {item.title}
                </h3>
                <figure className="lg:hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={489}
                  height={130}
                  className="w-full h-[130px] mb-6 rounded-md object-cover"
                />
              </figure>
                <p className="text-[16px] leading-[160%] font-normal mb-4">
                  <strong>{item.para1}</strong>
                </p>
                <p className="text-[16px] leading-[160%] font-normal">
                  {item.para2}
                </p>
              </div>
              <figure className="hidden lg:block">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={489}
                  height={425}
                  className="w-full h-[425px] mb-6 rounded-md object-cover"
                />
              </figure>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselWithMenu;
