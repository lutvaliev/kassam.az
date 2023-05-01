/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "./style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination } from "swiper";

import { DM_Sans } from "next/font/google";

const dm_sans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

SwiperCore.use([Autoplay]);

const Slider = (): JSX.Element => {
  return (
    <section className={`main_slider ${dm_sans.className}`}>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        slidesPerView={1}
        speed={900}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="flex items-center justify-between">
          <div className="slider_text w-7/12">
            <h1>MasterPass</h1>
            <p>Find and book a great experience.</p>
            <Link href="" className="slider_link mt-6">
              Start your search
            </Link>
          </div>
          <div className="slider_img w-5/12">
            <img src="./slider.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-between">
          <div className="slider_text w-7/12">
            <h1>MasterPass 2</h1>
            <p>Find and book a great experience.</p>
            <Link href="" className="slider_link mt-6">
              Start your search
            </Link>
          </div>
          <div className="slider_img w-5/12">
            <img src="./slider.png" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
