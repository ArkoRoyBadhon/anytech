import Image from "next/image";
import React from "react";

const PoweringFinance = () => {
  return (
    <section className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[15px] mx-[120px] p-[31px] mt-[40px]">
        <div className="">
          <h6 className="lg:text-[16px] leading-[1.5] tracking-[2.56px] font-bold uppercase font-Montserrat">
            POWERING THE FUTURE OF FINANCE
          </h6>
          <h2 className=" font-Montserrat text-[56px] leading-[110%] font-semibold whitespace-pre-line w-[561px] my-[24px]">
            Uncovering new ways to delight customers
          </h2>

          <div className="lg:pt-2 w-[561px]">
            <div className="text-body-1">
              <p>
                <strong>
                  AnyTech is revolutionising financial technology by introducing
                  innovative and real-time transaction account processing
                  capabilities, specifically designed for retail financial
                  services.
                </strong>
              </p>
            </div>
            <div className="text-body-1">
              <p>
                <br />
                Our modern approach surpasses traditional banking and card
                processing systems, empowering you with the most advanced
                technology for lasting success.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[561px] h-[517px] relative">
          <figure className="w-[76%] h-[518px] shadow-card mx-auto z-10">
            <Image
              width={427}
              height={518}
              className="object-cover w-full h-full overflow-visible"
              loading="lazy"
              src="https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=1124&auto=format"
              alt=""
            />
          </figure>
          <figure className="absolute top-[-32px] w-full h-full">
            <Image
              width={1000}
              height={1000}
              className="object-cover w-full h-full overflow-visible"
              loading="lazy"
              src="https://anytxn.com/backgrounds/home/futureOfFinance/background.svg"
              alt="background frame"
            />
          </figure>
          <figure className="absolute bottom-[-100px]">
            <Image
              width={1000}
              height={1000}
              className="object-cover w-full h-full overflow-visible"
              loading="lazy"
              src="https://anytxn.com/backgrounds/home/futureOfFinance/foreground.png"
              alt="background frame"
            />
          </figure>

          {/* positioned img  */}
          <figure className="absolute z-20 top-[20%] left-[8%]">
            <Image
              width={73}
              height={73}
              className="object-cover w-[73px] h-[73px] overflow-visible"
              loading="lazy"
              src="https://cdn.sanity.io/images/6jywt20u/production/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg?w=74&auto=format"
              alt="background frame"
            />
          </figure>
          <figure className="absolute z-20 top-[40%] left-[28%]">
            <Image
              width={89}
              height={89}
              className="object-cover w-[73px] h-[73px] overflow-visible"
              loading="lazy"
              src="https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg?w=89&auto=format"
              alt="background frame"
            />
          </figure>
          <figure className="absolute z-20 top-[10%] right-[6%]">
            <Image
              width={115}
              height={114}
              className="object-cover w-[115px] h-[114px] overflow-visible"
              loading="lazy"
              src="https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg?w=116&auto=format"
              alt="background frame"
            />
          </figure>

          <Image
            width={1000}
            height={1000}
            alt="img"
            src="/pick/poweringBottom.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default PoweringFinance;
