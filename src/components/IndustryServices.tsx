"use client";

import Slider, { Settings } from "react-slick";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import service1 from "#/static/images/industry/1.png";
import service2 from "#/static/images/industry/2.png";
import service3 from "#/static/images/industry/3.png";
import service4 from "#/static/images/industry/4.png";
import service5 from "#/static/images/industry/5.png";
import service6 from "#/static/images/industry/6.png";
import Image from "next/image";

export default function IndustryServices() {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    slidesToScroll: 1,
  };

  return (
    <section className="py-20">
      <MaxWidthWrapper className="max-w-screen-2xl px-5">
        <h2 className="text-md text-center font-bold lg:text-lg">
          Industri yang kami Layani
        </h2>

        <div className="relative mt-10 rounded-md bg-[#7accc3] px-10 py-2">
          <div className="absolute -bottom-3 left-5 -z-10 h-10 w-[90%] rounded-md bg-[#7accc3] opacity-60 lg:left-10 lg:h-28 lg:w-[95%]" />
          <div className="absolute -bottom-6 left-10 -z-10 h-10 w-[80%] rounded-md bg-[#7accc3] opacity-40 lg:left-28 lg:h-28 lg:w-[85%]" />
          <Slider {...settings}>
            <div className="cursor-pointer opacity-50 transition duration-300 hover:opacity-100">
              <Image src={service1} alt="Medical and Healtcare" />
            </div>
            <div className="cursor-pointer opacity-50 transition duration-300 hover:opacity-100">
              <Image src={service2} alt="Pharmaceuticals & Biotech" />
            </div>
            <div className="cursor-pointer opacity-50 transition duration-300 hover:opacity-100">
              <Image src={service3} alt="Manufactures" />
            </div>
            <div className="cursor-pointer opacity-50 transition duration-300 hover:opacity-100">
              <Image src={service4} alt="Industrial Oil & Gas" />
            </div>
            <div className="cursor-pointer opacity-50 transition duration-300 hover:opacity-100">
              <Image src={service5} alt="Commercial Laboratory" />
            </div>
            <div className="cursor-pointer opacity-50 transition duration-300 hover:opacity-100">
              <Image src={service6} alt="Goverment and Institution" />
            </div>
          </Slider>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
