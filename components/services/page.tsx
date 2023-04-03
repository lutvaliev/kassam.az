import React from "react";
import "./style.css";
import Service from "@/elements/service/service";

const Services = () => {
  const services = [
    {
      title: "Kommunal",
      icon: "./services/kommunal.svg",
      href: "a",
    },
    {
      title: "Kommunal",
      icon: "./services/kommunal.svg",
      href: "a",
    },
    {
      title: "Kommunal",
      icon: "./services/kommunal.svg",
      href: "a",
    },
    {
      title: "Kommunal",
      icon: "./services/kommunal.svg",
      href: "a",
    },
    {
      title: "Kommunal",
      icon: "./services/kommunal.svg",
      href: "a",
    },
    {
      title: "Kommunal",
      icon: "./services/kommunal.svg",
      href: "a",
    },
    {
      title: "Kommunal",
      icon: "./services/kommunal.svg",
      href: "a",
    },
    {
      title: "Kommunal",
      icon: "./services/kommunal.svg",
      href: "a",
    },
    {
      title: "Kommunal",
      icon: "./services/kommunal.svg",
      href: "a",
    },
    {
      title: "Kommunal",
      icon: "./services/kommunal.svg",
      href: "a",
    },
    {
      title: "Kommunal",
      icon: "./services/kommunal.svg",
      href: "a",
    },
    {
      title: "Kommunal",
      icon: "./services/kommunal.svg",
      href: "a",
    },
    {
      title: "Kommunal",
      icon: "./services/kommunal.svg",
      href: "a",
    },
    {
      title: "Kommunal",
      icon: "./services/kommunal.svg",
      href: "a",
    },
    {
      title: "Kommunal",
      icon: "./services/kommunal.svg",
      href: "a",
    },
  ];
  return (
    <div className="services mx-auto grid grid-cols-5 gap-5">
      {services.map((service) => (
        <Service key={service.title} {...service} />
      ))}
    </div>
  );
};

export default Services;
