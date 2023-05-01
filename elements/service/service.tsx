/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Link from "next/link";
import "./style.css";

interface Props {
  title?: string;
  icon?: any;
  href: string;
  isImg: boolean;
  services: any;
  modal: boolean;
  setModal: any;
  modalInfo: any;
  setModalInfo: any;
}

const Service = ({
  title,
  icon,
  href,
  isImg,
  services,
  modal,
  setModal,
  modalInfo,
  setModalInfo,
}: Props): JSX.Element => {
  return (
    <Link
      href={href}
      className="service bg-white pt-12 px-2.5 pb-7"
      onClick={(e) => {
        e.preventDefault();
        setModal(!modal);
        setModalInfo({
          ...modalInfo,
          modalTitle: title,
          services: services,
        });
      }}
    >
      <div className="service_icon">
        {isImg ? (
          <img
            src={icon}
            alt=""
            className="mx-auto"
            style={{ width: 70, height: 50, objectFit: "contain" }}
          />
        ) : (
          icon
        )}
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
