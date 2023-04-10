/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer
      className={`footer ${poppins.className}`}
      style={{ backgroundColor: "#0B0D17" }}
    >
      <div className="container mx-auto text-white pt-10">
        <div className="footer_section mb-16 flex justify-between w-full">
          <div className="footer_links">
            <h6 className="text-lg">Company</h6>
            <ul className="pt-6">
              <li className="text-sm pb-3">
                <Link href="">About us</Link>
              </li>
              <li className="text-sm pb-3">
                <Link href="">Blog</Link>
              </li>
              <li className="text-sm pb-3">
                <Link href="">Careers</Link>
              </li>
              <li className="text-sm pb-3">
                <Link href="">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className="footer_links">
            <h6 className="text-lg">Support</h6>
            <ul className="pt-6">
              <li className="text-sm pb-3">
                <Link href="">Help Center</Link>
              </li>
              <li className="text-sm pb-3">
                <Link href="">Safety Center</Link>
              </li>
              <li className="text-sm pb-3">
                <Link href="">Community Guidelines</Link>
              </li>
            </ul>
          </div>
          <div className="footer_links">
            <h6 className="text-lg">Company</h6>
            <ul className="pt-6">
              <li className="text-sm pb-3">
                <Link href="">Cookies Policy</Link>
              </li>
              <li className="text-sm pb-3">
                <Link href="">Privacy Policy</Link>
              </li>
              <li className="text-sm pb-3">
                <Link href="">Terms of Service</Link>
              </li>
              <li className="text-sm pb-3">
                <Link href="">Law Enforcement</Link>
              </li>
            </ul>
          </div>
          <div className="footer_links">
            <h6 className="text-lg">Tətbiqi yüklə</h6>
            <ul className="pt-6">
              <li className="text-sm pb-3">
                <Link href="">
                  <img src="./playstore.png" alt="" />
                </Link>
              </li>
              <li className="text-sm pb-3">
                <Link href="">
                  <img src="./appstore.png" alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright py-7" style={{ borderTop: "1px solid #FFF" }}>
        <div className="container mx-auto flex items-center justify-between ">
          <h6>© 2022 kassam.az</h6>
          <div className="social_medias flex items-center">
            <Link
              className="social_media inline-block rounded-full mr-4"
              href=""
              style={{ backgroundColor: "#23252f" }}
            >
              <img src="./fb.svg" alt="" />
            </Link>
            <Link
              className="social_media inline-block rounded-full mr-4"
              href=""
              style={{ backgroundColor: "#23252f" }}
            >
              <img src="./insta.svg" alt="" />
            </Link>
            <Link
              className="social_media inline-block rounded-full"
              href=""
              style={{ backgroundColor: "#23252f" }}
            >
              <img src="./linkedin.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
