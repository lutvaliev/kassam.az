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
import Service from "@/elements/service/service";

const TopServices = () => {
  const partners: any = [
    {
      title: "Bakcell",
      icon: "https://seeklogo.com/images/B/bakcell-logo-C27FDDF060-seeklogo.com.png",
      href: "a1",
      isImg: true,
    },
    {
      title: "Azercell",
      icon: "https://www.azercell.com/theme/images/common/applogo512.png",
      href: "a2",
      isImg: true,
    },
    {
      title: "Nar",
      icon: "https://img.day.az/2019/06/28/nar_log_rgb.png",
      href: "a3",
      isImg: true,
    },
    {
      title: "Azərışıq",
      icon: "https://lh3.googleusercontent.com/Aky3hBxnrCYPR-cbmpn5yi27zBvJJz9m7nHUplSoM5VTn1GHcnqWI_ZCNtftK0bZNA",
      href: "a4",
      isImg: true,
    },
    {
      title: "Kapital Bank",
      icon: "https://www.kapitalbank.az/assets/static/img/menu/bblogo.png",
      href: "a5",
      isImg: true,
    },
    {
      title: "Təhsil",
      icon: "data:image/jpeg;base64,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",
      href: "a6",
      isImg: true,
    },
    {
      title: "Təhsil",
      icon: "https://seeklogo.com/images/U/unibank-logo-04080E55D7-seeklogo.com.png",
      href: "a7",
      isImg: true,
    },
    {
      title: "Bakcell",
      icon: "https://seeklogo.com/images/B/bakcell-logo-C27FDDF060-seeklogo.com.png",
      href: "a8",
      isImg: true,
    },
    {
      title: "Azercell",
      icon: "https://www.azercell.com/theme/images/common/applogo512.png",
      href: "a9",
      isImg: true,
    },
    {
      title: "Nar",
      icon: "https://img.day.az/2019/06/28/nar_log_rgb.png",
      href: "a10",
      isImg: true,
    },
    {
      title: "Azərışıq",
      icon: "https://lh3.googleusercontent.com/Aky3hBxnrCYPR-cbmpn5yi27zBvJJz9m7nHUplSoM5VTn1GHcnqWI_ZCNtftK0bZNA",
      href: "a11",
      isImg: true,
    },
    {
      title: "Kapital Bank",
      icon: "https://www.kapitalbank.az/assets/static/img/menu/bblogo.png",
      href: "a12",
      isImg: true,
    },
    {
      title: "Təhsil",
      icon: "data:image/jpeg;base64,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",
      href: "a13",
      isImg: true,
    },
    {
      title: "Təhsil",
      icon: "https://seeklogo.com/images/U/unibank-logo-04080E55D7-seeklogo.com.png",
      href: "a14",
      isImg: true,
    },
  ];
  return (
    <section className="topServices_section">
      <Swiper
        className="mySwiper"
        slidesPerView={7}
        spaceBetween={16}
        navigation={true}
        speed={2000}
        loopedSlides={7}
        loop={false}
        autoplay={{
          delay: 1000,
        }}
      >
        {partners?.map((partner: any) => (
          <SwiperSlide
            key={partner.href}
            className="flex items-center justify-between"
          >
            <Service {...partner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TopServices;
