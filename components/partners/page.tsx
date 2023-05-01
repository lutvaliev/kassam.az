"use client";
import React from "react";
import Partner from "@/elements/partner/page";
import Subtitle from "@/elements/subtitle/page";
import Title from "@/elements/title/page";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";
import "./style.css";
import Link from "next/link";

SwiperCore.use([Autoplay]);

const Partners = (): JSX.Element => {
  const partners = [
    {
      href: "1",
      img: "./Logo.svg",
    },
    {
      href: "2",
      img: "./Logo.svg",
    },
    {
      href: "3",
      img: "./Logo.svg",
    },
    {
      href: "4",
      img: "./Logo.svg",
    },
    {
      href: "5",
      img: "./Logo.svg",
    },
    {
      href: "6",
      img: "./Logo.svg",
    },
    {
      href: "7",
      img: "./Logo.svg",
    },
    {
      href: "8",
      img: "./Logo.svg",
    },
  ];
  return (
    <section className="partners_section py-6 my-8">
      <Title title="100+ Partnyor" />
      <Subtitle subtitle="Çoxsaylı ödəniş kartlarından, mobil tətbiqlərindən və arzuolunmaz nağd pul təmasından qurtulmaq istəyirsiniz?" />
      <div className="partners">
        <Swiper
          className="mySwiper"
          slidesPerView={6}
          spaceBetween={36}
          speed={3000}
          loopedSlides={7}
          loop={false}
          autoplay={{
            delay: 0,
          }}
        >
          {partners?.map((partner) => (
            <SwiperSlide
              key={partner.href}
              className="flex items-center justify-between"
            >
              <Partner {...partner} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
