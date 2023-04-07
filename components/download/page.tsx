/* eslint-disable @next/next/no-img-element */
import React from "react";
import Subtitle from "@/elements/subtitle/page";
import Title from "@/elements/title/page";
import "./style.css";
import Link from "next/link";

const Download = () => {
  return (
    <section className="download_section pb-8 my-8 flex flex-col items-center">
      <Title title="Mobil tətbiqi yükləyin" />
      <Subtitle subtitle="Skan et və tətbiqi yüklə" />
      <img src="./qr.png" alt="" className="my-12" />
      <div className="download_app flex">
        <Link href="" className="download_app-link mr-8">
          <img src="./playstore.png" alt="" />
        </Link>
        <Link href="" className="download_app-link">
          <img src="./appstore.png" alt="" />
        </Link>
      </div>
    </section>
  );
};

export default Download;
