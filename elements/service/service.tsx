/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import "./style.css";

interface Props {
  title?: string;
  icon?: string;
  href: string;
}

const Service = ({ title, icon, href }: Props) => {
  return (
    <Link href={href} className="service bg-white pt-12 px-2.5 pb-7">
      <div className="service_icon">
        <img className="mx-auto" src={icon} alt="" />
      </div>
      <h6
        className="service_title text-sm pt-4 text-center hover:overflow-hidden"
        style={{ color: "#616161" }}
      >
        {title}
      </h6>
    </Link>
  );
};

export default Service;
