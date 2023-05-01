"use client";
import React from "react";
import Link from "next/link";
import "./style.css";
interface Props {
  className?: string;
  title?: string;
  href: string;
  id?: string;
}
const Button = ({ className, title, href, id }: Props): JSX.Element => {
  return (
    <Link
      id={id}
      href={href}
      className={`btn ${className === "dark" ? "darkBtn" : "whiteBtn"}`}
    >
      {title}
    </Link>
  );
};

export default Button;
