import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./style.css";
import Button from "@/elements/button/page";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500"],
  subsets: ["latin"],
});

const Header = () => {
  const menu = [
    {
      title: "Əsas",
      href: "/",
    },
    {
      title: "Xidmətlərimiz",
      href: "/",
    },
    {
      title: "Partnyorlar",
      href: "/",
    },
    {
      title: "Haqqımızda",
      href: "/",
    },
  ];
  return (
    <header className={`header bg-white ${poppins.className}`}>
      <div className="container mx-auto text-white flex items-center justify-between py-10 px-6">
        <Link href="/" className="header_logo flex items-center">
          <Image
            className="mr-2"
            width="154"
            height="25"
            src="/Logo.svg"
            alt="Logo"
          />
        </Link>
        <nav className="header_nav">
          <ul className="header_menu flex space-x-14">
            {menu.map((item) => (
              <li key={item.title} className="header_menu-item">
                <Link className="header_menu-item_link" href={item.href}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header_settings flex items-center space-x-4">
          <button className="header_search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                fill="#101010"
              />
              <path
                d="M21.9999 22.7499C21.8099 22.7499 21.6199 22.6799 21.4699 22.5299L19.4699 20.5299C19.1799 20.2399 19.1799 19.7599 19.4699 19.4699C19.7599 19.1799 20.2399 19.1799 20.5299 19.4699L22.5299 21.4699C22.8199 21.7599 22.8199 22.2399 22.5299 22.5299C22.3799 22.6799 22.1899 22.7499 21.9999 22.7499Z"
                fill="#101010"
              />
            </svg>
          </button>
          <Button className="dark" title="Daxil ol" id="login" />
          <Button className="white" title="Qeydiyyat" id="register" />
        </div>
      </div>
    </header>
  );
};

export default Header;
