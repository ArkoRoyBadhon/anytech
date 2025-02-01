import Banner from "@/components/Banner";
import ContractUs from "@/components/ContractUs";
import Footer from "@/components/Footer";
import FutureFinance from "@/components/FutureFinance";
import Header from "@/components/Header";
import Philosophy from "@/components/Philosophy";
import PoweringFinance from "@/components/PoweringFinance";
import Trusted from "@/components/Trusted";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <main className="relative">
      <div className="">
        <Header />
      </div>
      <Banner />
      <PoweringFinance />
      <Image
        width={1440}
        height={720}
        src="/pick/bottomSvg.svg"
        alt="hero"
        priority={true}
      />
      <Philosophy />
      <FutureFinance />
      <Image
        width={1440}
        height={720}
        src="/pick/bottomSvg.svg"
        alt="hero"
        priority={true}
      />
      <Trusted />
      <ContractUs />
      <Footer />
    </main>
  );
};

export default HomePage;
