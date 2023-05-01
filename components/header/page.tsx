"use client";
import { useState } from "react";
import Link from "next/link";
import "./style.css";
import Button from "@/elements/button/page";
import dynamic from "next/dynamic";

const Header = (props: any): JSX.Element => {
  const [search, setSearch] = useState(false);
  const menu = [
    {
      title: "Əsas",
      href: "/404",
    },
    {
      title: "Xidmətlərimiz",
      href: "/2",
    },
    {
      title: "Partnyorlar",
      href: "/3",
    },
    {
      title: "Haqqımızda",
      href: "/4",
    },
  ];
  const DynamicSearch = dynamic(() => import("../../elements/search/page"), {
    loading: () => <p>Loading...</p>,
  });
  return (
    <header className={`header bg-white ${props.className}`}>
      <div className="container mx-auto text-white flex items-center justify-between py-10 px-6">
        <Link href="/" className="header_logo flex items-center">
          <svg
            width="154"
            height="26"
            viewBox="0 0 154 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.8429 13.0584H37.6252C38.3495 13.0584 38.871 12.8315 39.1897 12.3776L43.9412 5.48214C44.2212 5.11516 44.5206 4.86406 44.8393 4.72886C45.1677 4.584 45.5733 4.51156 46.0561 4.51156H50.3151L44.0571 13.0439C43.6128 13.633 43.1348 14.058 42.6229 14.3187C42.9899 14.4539 43.3231 14.6422 43.6225 14.8837C43.9218 15.1251 44.2019 15.439 44.4627 15.8253L50.8366 25.6179H46.4618C46.1817 25.6179 45.9403 25.5986 45.7374 25.56C45.5443 25.5214 45.3753 25.4634 45.2304 25.3862C45.0856 25.3089 44.96 25.2172 44.8538 25.1109C44.7476 24.995 44.6462 24.8647 44.5496 24.7198L39.7691 17.3753C39.5953 17.1049 39.3732 16.9166 39.1028 16.8103C38.842 16.6945 38.4847 16.6365 38.0308 16.6365H36.8429V25.6179H31.9466V4.51156H36.8429V13.0584Z"
              fill="#28303F"
            />
            <path
              d="M64.5711 17.5491L62.6154 11.7691C62.4706 11.4022 62.3161 10.9724 62.1519 10.4799C61.9877 9.97769 61.8235 9.43687 61.6594 8.85742C61.5145 9.44653 61.36 9.99217 61.1958 10.4944C61.0316 10.9966 60.8771 11.4311 60.7322 11.7981L58.7911 17.5491H64.5711ZM72.3502 25.6179H68.5548C68.1299 25.6179 67.787 25.5214 67.5263 25.3282C67.2655 25.1254 67.0675 24.8695 66.9323 24.5605L65.6865 20.881H57.6612L56.4154 24.5605C56.3091 24.8309 56.116 25.0771 55.8359 25.2993C55.5655 25.5117 55.2275 25.6179 54.8219 25.6179H50.9975L59.1677 4.51156H64.18L72.3502 25.6179Z"
              fill="#28303F"
            />
            <path
              d="M86.6897 8.79948C86.5448 9.03126 86.3903 9.20509 86.2261 9.32098C86.0716 9.43687 85.8688 9.49481 85.6177 9.49481C85.3956 9.49481 85.1542 9.42721 84.8934 9.29201C84.6423 9.14714 84.3526 8.9878 84.0242 8.81396C83.7055 8.64013 83.3385 8.48561 82.9233 8.35041C82.508 8.20554 82.0348 8.13311 81.5036 8.13311C80.5862 8.13311 79.9005 8.33109 79.4466 8.72705C79.0023 9.11335 78.7802 9.63968 78.7802 10.306C78.7802 10.731 78.9154 11.0835 79.1858 11.3635C79.4562 11.6436 79.8087 11.885 80.2433 12.0878C80.6876 12.2906 81.1898 12.479 81.7499 12.6528C82.3197 12.817 82.8991 13.0053 83.4882 13.2178C84.0773 13.4206 84.652 13.662 85.2121 13.9421C85.7819 14.2221 86.2841 14.5795 86.7187 15.0141C87.1629 15.4486 87.5202 15.9798 87.7906 16.6075C88.061 17.2256 88.1963 17.9741 88.1963 18.8529C88.1963 19.8283 88.0272 20.7409 87.6892 21.5908C87.3512 22.4406 86.8587 23.1843 86.2116 23.8217C85.5742 24.4494 84.7823 24.9468 83.8359 25.3137C82.8991 25.6711 81.832 25.8497 80.6345 25.8497C79.9777 25.8497 79.3066 25.7821 78.6209 25.6469C77.9449 25.5117 77.2881 25.3234 76.6508 25.082C76.0134 24.8309 75.4146 24.5363 74.8545 24.1983C74.2943 23.8603 73.8066 23.4836 73.3914 23.0684L74.84 20.7796C74.9559 20.6154 75.1056 20.4802 75.2891 20.3739C75.4822 20.2581 75.6898 20.2001 75.912 20.2001C76.2017 20.2001 76.4914 20.2919 76.7811 20.4753C77.0805 20.6588 77.4137 20.8616 77.7807 21.0838C78.1573 21.3059 78.5871 21.5087 79.0699 21.6922C79.5528 21.8757 80.1226 21.9674 80.7793 21.9674C81.6678 21.9674 82.3583 21.7743 82.8508 21.388C83.3434 20.992 83.5896 20.3691 83.5896 19.5193C83.5896 19.0267 83.4544 18.6259 83.184 18.3169C82.9136 18.0079 82.5563 17.7519 82.1121 17.5491C81.6775 17.3463 81.1801 17.1677 80.62 17.0131C80.0598 16.8586 79.4852 16.6896 78.8961 16.5061C78.307 16.313 77.7324 16.0812 77.1723 15.8108C76.6121 15.5307 76.1099 15.1686 75.6657 14.7243C75.2311 14.2704 74.8786 13.7103 74.6082 13.0439C74.3378 12.3679 74.2026 11.5374 74.2026 10.5523C74.2026 9.76039 74.3619 8.9878 74.6806 8.23452C74.9993 7.48123 75.4677 6.81004 76.0858 6.22093C76.7039 5.63183 77.462 5.16344 78.3601 4.81577C79.2583 4.45845 80.2868 4.27979 81.4457 4.27979C82.0927 4.27979 82.7205 4.3329 83.3289 4.43913C83.947 4.53571 84.5312 4.6854 85.0817 4.8882C85.6322 5.08135 86.144 5.31796 86.6173 5.59803C87.1001 5.86844 87.5299 6.17748 87.9065 6.52514L86.6897 8.79948Z"
              fill="#28303F"
            />
            <path
              d="M103.746 8.79948C103.601 9.03126 103.447 9.20509 103.282 9.32098C103.128 9.43687 102.925 9.49481 102.674 9.49481C102.452 9.49481 102.211 9.42721 101.95 9.29201C101.699 9.14714 101.409 8.9878 101.081 8.81396C100.762 8.64013 100.395 8.48561 99.9796 8.35041C99.5644 8.20554 99.0912 8.13311 98.56 8.13311C97.6425 8.13311 96.9569 8.33109 96.503 8.72705C96.0587 9.11335 95.8366 9.63968 95.8366 10.306C95.8366 10.731 95.9718 11.0835 96.2422 11.3635C96.5126 11.6436 96.8651 11.885 97.2997 12.0878C97.7439 12.2906 98.2461 12.479 98.8063 12.6528C99.376 12.817 99.9555 13.0053 100.545 13.2178C101.134 13.4206 101.708 13.662 102.268 13.9421C102.838 14.2221 103.34 14.5795 103.775 15.0141C104.219 15.4486 104.577 15.9798 104.847 16.6075C105.117 17.2256 105.253 17.9741 105.253 18.8529C105.253 19.8283 105.084 20.7409 104.746 21.5908C104.408 22.4406 103.915 23.1843 103.268 23.8217C102.631 24.4494 101.839 24.9468 100.892 25.3137C99.9555 25.6711 98.8883 25.8497 97.6908 25.8497C97.0341 25.8497 96.3629 25.7821 95.6772 25.6469C95.0012 25.5117 94.3445 25.3234 93.7071 25.082C93.0697 24.8309 92.471 24.5363 91.9108 24.1983C91.3507 23.8603 90.863 23.4836 90.4477 23.0684L91.8963 20.7796C92.0122 20.6154 92.1619 20.4802 92.3454 20.3739C92.5386 20.2581 92.7462 20.2001 92.9683 20.2001C93.258 20.2001 93.5478 20.2919 93.8375 20.4753C94.1369 20.6588 94.4701 20.8616 94.837 21.0838C95.2137 21.3059 95.6434 21.5087 96.1263 21.6922C96.6092 21.8757 97.179 21.9674 97.8357 21.9674C98.7242 21.9674 99.4147 21.7743 99.9072 21.388C100.4 20.992 100.646 20.3691 100.646 19.5193C100.646 19.0267 100.511 18.6259 100.24 18.3169C99.97 18.0079 99.6127 17.7519 99.1684 17.5491C98.7338 17.3463 98.2365 17.1677 97.6763 17.0131C97.1162 16.8586 96.5416 16.6896 95.9525 16.5061C95.3634 16.313 94.7888 16.0812 94.2286 15.8108C93.6685 15.5307 93.1663 15.1686 92.7221 14.7243C92.2875 14.2704 91.935 13.7103 91.6646 13.0439C91.3942 12.3679 91.2589 11.5374 91.2589 10.5523C91.2589 9.76039 91.4183 8.9878 91.737 8.23452C92.0557 7.48123 92.5241 6.81004 93.1422 6.22093C93.7602 5.63183 94.5183 5.16344 95.4165 4.81577C96.3146 4.45845 97.3431 4.27979 98.502 4.27979C99.1491 4.27979 99.7768 4.3329 100.385 4.43913C101.003 4.53571 101.588 4.6854 102.138 4.8882C102.689 5.08135 103.2 5.31796 103.674 5.59803C104.156 5.86844 104.586 6.17748 104.963 6.52514L103.746 8.79948Z"
              fill="#28303F"
            />
            <path
              d="M119.814 17.5491L117.859 11.7691C117.714 11.4022 117.559 10.9724 117.395 10.4799C117.231 9.97769 117.067 9.43687 116.903 8.85742C116.758 9.44653 116.603 9.99217 116.439 10.4944C116.275 10.9966 116.12 11.4311 115.976 11.7981L114.034 17.5491H119.814ZM127.593 25.6179H123.798C123.373 25.6179 123.03 25.5214 122.77 25.3282C122.509 25.1254 122.311 24.8695 122.176 24.5605L120.93 20.881H112.904L111.659 24.5605C111.552 24.8309 111.359 25.0771 111.079 25.2993C110.809 25.5117 110.471 25.6179 110.065 25.6179H106.241L114.411 4.51156H119.423L127.593 25.6179Z"
              fill="#28303F"
            />
            <path
              d="M154 4.51156V25.6179H149.683V13.4785C149.683 13.1985 149.688 12.8942 149.698 12.5659C149.717 12.2375 149.746 11.9044 149.785 11.5663L144.178 22.4165C144.005 22.7545 143.768 23.0104 143.469 23.1843C143.179 23.3581 142.846 23.445 142.469 23.445H141.803C141.426 23.445 141.088 23.3581 140.789 23.1843C140.499 23.0104 140.267 22.7545 140.093 22.4165L134.487 11.5374C134.516 11.885 134.54 12.2279 134.56 12.5659C134.579 12.8942 134.589 13.1985 134.589 13.4785V25.6179H130.272V4.51156H134.009C134.222 4.51156 134.405 4.51639 134.56 4.52605C134.724 4.53571 134.869 4.56468 134.994 4.61297C135.12 4.66125 135.231 4.73851 135.327 4.84475C135.434 4.94132 135.535 5.08135 135.632 5.26485L141.064 15.9701C141.257 16.3371 141.44 16.7186 141.614 17.1146C141.798 17.5105 141.972 17.9161 142.136 18.3314C142.3 17.9065 142.469 17.4912 142.643 17.0856C142.826 16.68 143.019 16.2937 143.222 15.9267L148.64 5.26485C148.737 5.08135 148.833 4.94132 148.93 4.84475C149.036 4.73851 149.152 4.66125 149.278 4.61297C149.403 4.56468 149.543 4.53571 149.698 4.52605C149.862 4.51639 150.05 4.51156 150.263 4.51156H154Z"
              fill="#28303F"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.7579 0H5.10317C2.96151 0 1.12798 1.31928 0.370937 3.18949H17.4902C16.7331 1.31928 14.8996 0 12.7579 0ZM25.5159 12.7579V17.8611L20.4127 17.8611C19.0035 17.8611 17.8611 16.7187 17.8611 15.3095C17.8611 13.9003 19.0035 12.7579 20.4127 12.7579H25.5159ZM-3.05527e-05 5.10318H23.0663C24.4192 5.10318 25.5159 6.19987 25.5159 7.55271L25.5159 10.8443H20.4127C17.9466 10.8443 15.9474 12.8434 15.9474 15.3095C15.9474 17.7756 17.9466 19.7748 20.4127 19.7748H25.5159L25.5159 23.0664C25.5159 24.4192 24.4192 25.5159 23.0663 25.5159H2.4495C1.09666 25.5159 -3.05527e-05 24.4192 -3.05527e-05 23.0664V5.10318Z"
              fill="#28303F"
            />
          </svg>
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
          <button className="header_search" onClick={() => setSearch(!search)}>
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
          <Button className="dark" title="Daxil ol" id="login" href="login" />
          <Button
            className="white"
            title="Qeydiyyat"
            id="register"
            href="register"
          />
        </div>
      </div>
      {search && <DynamicSearch />}
    </header>
  );
};

export default Header;
