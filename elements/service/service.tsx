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
    <Link href={href} className="service">
      <div className="service_icon">
        <img className="mx-auto" src={icon} alt="" />
      </div>
      <h6 className="service_title">{title}</h6>
    </Link>
  );
};

export default Service;
