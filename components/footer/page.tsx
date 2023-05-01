/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = (props: any): JSX.Element => {
  const pathname = usePathname();
  return pathname !== "/login" && pathname !== "/register" ? (
    <footer
      className={`footer ${props.className}`}
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
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.1"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                  fill="white"
                />
                <path
                  d="M22.2281 20.625L22.9375 16H18.5V13C18.5 11.7344 19.1188 10.5 21.1063 10.5H23.125V6.5625C23.125 6.5625 21.2938 6.25 19.5438 6.25C15.8875 6.25 13.5 8.46563 13.5 12.475V16H9.4375V20.625H13.5V31.8062C14.3156 31.9344 15.15 32 16 32C16.85 32 17.6844 31.9344 18.5 31.8062V20.625H22.2281Z"
                  fill="white"
                />
              </svg>
            </Link>
            <Link
              className="social_media inline-block rounded-full mr-4"
              href=""
              style={{ backgroundColor: "#23252f" }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.1"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.0008 7.46667C13.6833 7.46667 13.3924 7.47681 12.4822 7.51823C11.5737 7.55983 10.9536 7.70366 10.4111 7.91468C9.84981 8.13264 9.37372 8.4242 8.8994 8.89869C8.42473 9.37301 8.13317 9.8491 7.9145 10.4102C7.70294 10.9529 7.55894 11.5732 7.51805 12.4813C7.47734 13.3915 7.46667 13.6826 7.46667 16.0001C7.46667 18.3176 7.47699 18.6076 7.51823 19.5178C7.56001 20.4263 7.70383 21.0464 7.91468 21.589C8.13282 22.1502 8.42437 22.6263 8.89887 23.1006C9.37301 23.5753 9.8491 23.8676 10.41 24.0855C10.9529 24.2965 11.5732 24.4404 12.4815 24.482C13.3917 24.5234 13.6824 24.5335 15.9997 24.5335C18.3175 24.5335 18.6074 24.5234 19.5176 24.482C20.4261 24.4404 21.0469 24.2965 21.5898 24.0855C22.1509 23.8676 22.6263 23.5753 23.1004 23.1006C23.5751 22.6263 23.8667 22.1502 24.0853 21.5891C24.2951 21.0464 24.4391 20.4261 24.4818 19.518C24.5227 18.6078 24.5333 18.3176 24.5333 16.0001C24.5333 13.6826 24.5227 13.3917 24.4818 12.4815C24.4391 11.573 24.2951 10.9529 24.0853 10.4103C23.8667 9.8491 23.5751 9.37301 23.1004 8.89869C22.6258 8.42402 22.1511 8.13246 21.5893 7.91468C21.0453 7.70366 20.4249 7.55983 19.5164 7.51823C18.6062 7.47681 18.3164 7.46667 15.9981 7.46667H16.0008ZM15.2353 9.00444C15.4625 9.00409 15.716 9.00444 16.0008 9.00444C18.2792 9.00444 18.5492 9.01262 19.449 9.05351C20.281 9.09156 20.7326 9.23058 21.0334 9.34738C21.4316 9.50205 21.7155 9.68694 22.014 9.98561C22.3127 10.2843 22.4976 10.5687 22.6526 10.967C22.7694 11.2674 22.9086 11.719 22.9464 12.551C22.9873 13.4505 22.9962 13.7208 22.9962 15.9981C22.9962 18.2755 22.9873 18.5457 22.9464 19.4453C22.9084 20.2773 22.7694 20.7288 22.6526 21.0293C22.4979 21.4275 22.3127 21.7111 22.014 22.0096C21.7153 22.3082 21.4318 22.4931 21.0334 22.6478C20.7329 22.7651 20.281 22.9038 19.449 22.9418C18.5494 22.9827 18.2792 22.9916 16.0008 22.9916C13.7222 22.9916 13.4521 22.9827 12.5526 22.9418C11.7205 22.9034 11.269 22.7644 10.968 22.6476C10.5698 22.4929 10.2853 22.3081 9.98666 22.0094C9.68799 21.7107 9.5031 21.427 9.34808 21.0286C9.23128 20.7281 9.09208 20.2766 9.05421 19.4446C9.01332 18.545 9.00514 18.2748 9.00514 15.996C9.00514 13.7172 9.01332 13.4484 9.05421 12.5488C9.09226 11.7168 9.23128 11.2653 9.34808 10.9645C9.50275 10.5662 9.68799 10.2818 9.98666 9.98312C10.2853 9.68445 10.5698 9.49956 10.968 9.34454C11.2688 9.2272 11.7205 9.08853 12.5526 9.05031C13.3398 9.01476 13.6448 9.00409 15.2353 9.00231V9.00444ZM20.5558 10.4214C19.9905 10.4214 19.5318 10.8795 19.5318 11.445C19.5318 12.0103 19.9905 12.469 20.5558 12.469C21.1212 12.469 21.5799 12.0103 21.5799 11.445C21.5799 10.8797 21.1212 10.4214 20.5558 10.4214ZM16.0008 11.6178C13.5807 11.6178 11.6186 13.58 11.6186 16.0001C11.6186 18.4202 13.5807 20.3815 16.0008 20.3815C18.4209 20.3815 20.3824 18.4202 20.3824 16.0001C20.3824 13.58 18.4209 11.6178 16.0008 11.6178ZM16.0008 13.1556C17.5717 13.1556 18.8453 14.429 18.8453 16.0001C18.8453 17.5709 17.5717 18.8445 16.0008 18.8445C14.4298 18.8445 13.1563 17.5709 13.1563 16.0001C13.1563 14.429 14.4298 13.1556 16.0008 13.1556Z"
                  fill="white"
                />
              </svg>
            </Link>
            <Link
              className="social_media inline-block rounded-full"
              href=""
              style={{ backgroundColor: "#23252f" }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.1"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                  fill="white"
                />
                <path
                  d="M11.5459 9.8818C11.5223 8.8136 10.7584 8 9.51803 8C8.27761 8 7.46667 8.8136 7.46667 9.8818C7.46667 10.9279 8.25365 11.7649 9.47096 11.7649H9.49413C10.7584 11.7649 11.5459 10.9279 11.5459 9.8818Z"
                  fill="white"
                />
                <path
                  d="M11.307 13.252H7.68109V24.1464H11.307V13.252Z"
                  fill="white"
                />
                <path
                  d="M20.2088 12.9961C22.5948 12.9961 24.3836 14.5535 24.3836 17.8998L24.3835 24.1464H20.7577V18.3178C20.7577 16.8538 20.233 15.8548 18.9204 15.8548C17.9186 15.8548 17.3219 16.5283 17.0599 17.1788C16.964 17.4119 16.9405 17.7367 16.9405 18.0623V24.1467H13.3141C13.3141 24.1467 13.3619 14.2745 13.3141 13.2522H16.9405V14.7953C17.4217 14.0535 18.2836 12.9961 20.2088 12.9961Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  ) : (
    <></>
  );
};

export default Footer;
