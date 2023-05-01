/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import { Poppins } from "next/font/google";
import "./style.css";
import Link from "next/link";
import "react-phone-number-input/style.css";

const poppins = Poppins({
  weight: ["200", "300", "400", "500"],
  subsets: ["latin"],
});

interface InputValues {
  mobile: string;
  password: string;
  pin: string;
}

const Register = (): JSX.Element => {
  const [random, setRandomCode] = useState("");
  const [rotate, setRotate] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [inputValues, setInputValues] = useState<InputValues>({
    mobile: `+994${mobileNumber}`,
    password: "",
    pin: "",
  });
  const [isCorrect, setIsCorrect] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleMobileNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMobileNumber(event.target.value.replace("+994", "").replace(/\D/g, ""));
    setInputValues({
      ...inputValues,
      mobile: `+994${event.target.value
        .replace("+994", "")
        .replace(/\D/g, "")}`,
    });
  };

  const formatMobileNumber = (mobileNumber: string) => {
    // Format the mobileNumber value with xx-xxx-xx-xx pattern
    const formattedValue = mobileNumber.replace(
      /^(\d{2})(\d{3})(\d{2})(\d{2})$/,
      "$1–$2-$3-$4"
    );
    return formattedValue;
  };

  // function that generate 7 symbol random pin
  const generateRandomCode = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";
    for (let i = 0; i < 7; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters[randomIndex];
    }
    return code;
  };

  // Change random pin onclick to button
  const handleClick = () => {
    setRotate(!rotate);
    const randomCode = generateRandomCode();
    setRandomCode(randomCode);
  };

  // Handle inputs onchange
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  useEffect(() => {
    handleClick(); // Call handleClick once on page load
  }, []); // Empty dependency array to run only on mount

  return (
    <section
      className={`${poppins.className} logIn flex justify-center mx-auto w-full container py-20`}
    >
      <div className="login_img w-full m-auto">
        <img src="./register.png" alt="" />
      </div>
      <div className="login_form-section w-full items-center">
        <div className="w-3/5 mx-auto">
          <h5 className="font-semibold text-3xl pb-2.5">Qeydiyyatdan keç</h5>
          <p className="text-sm" style={{ color: "#A1A1A1" }}>
            Hesabınız var?{" "}
            <Link className="font-semibold" href="/login">
              Daxil olun.
            </Link>
          </p>
          <div className="login_social my-6 flex a-center">
            <Link
              href=""
              className="mr-2.5 social_media py-3.5 rounded-lg w-full"
            >
              <svg
                className="items-center justify-center mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M5.90154 15.6616L5.01389 18.9753L1.76955 19.0439C0.799964 17.2456 0.25 15.188 0.25 13.0015C0.25 10.8872 0.764202 8.89332 1.67566 7.1377H1.67636L4.56474 7.66724L5.83002 10.5383C5.5652 11.3103 5.42086 12.1391 5.42086 13.0015C5.42096 13.9375 5.5905 14.8342 5.90154 15.6616Z"
                  fill="#FBBB00"
                />
                <path
                  d="M25.5276 10.6187C25.6741 11.39 25.7504 12.1865 25.7504 13.0006C25.7504 13.9135 25.6544 14.8039 25.4716 15.6628C24.8509 18.5856 23.2291 21.1378 20.9824 22.9439L20.9817 22.9432L17.3436 22.7575L16.8287 19.5433C18.3195 18.669 19.4846 17.3007 20.0983 15.6628H13.2803V10.6187H20.1977H25.5276Z"
                  fill="#518EF8"
                />
                <path
                  d="M20.9836 22.9429L20.9843 22.9436C18.7992 24.6999 16.0235 25.7507 13.0019 25.7507C8.14623 25.7507 3.92458 23.0367 1.771 19.0428L5.90299 15.6604C6.97976 18.5341 9.75194 20.5798 13.0019 20.5798C14.3988 20.5798 15.7076 20.2022 16.8305 19.543L20.9836 22.9429Z"
                  fill="#28B446"
                />
                <path
                  d="M21.1392 3.1854L17.0086 6.56706C15.8463 5.84058 14.4725 5.42091 13.0006 5.42091C9.67705 5.42091 6.85302 7.56045 5.83019 10.5372L1.67648 7.13665H1.67578C3.79784 3.04529 8.07273 0.25 13.0006 0.25C16.0943 0.25 18.9309 1.35202 21.1392 3.1854Z"
                  fill="#F14336"
                />
              </svg>
            </Link>
            <Link href="" className="social_media py-3.5 rounded-lg w-full">
              <svg
                className="items-center justify-center mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M25.8164 12.9781C25.8164 5.91189 20.0783 0.183594 13 0.183594C5.92169 0.183594 0.183594 5.91189 0.183594 12.9781C0.183594 19.3642 4.87037 24.6573 10.9974 25.6172V16.6765H7.74327V12.9781H10.9974V10.1593C10.9974 6.95269 12.9108 5.18145 15.8384 5.18145C17.2406 5.18145 18.7073 5.43134 18.7073 5.43134V8.57999H17.0912C15.4991 8.57999 15.0026 9.56625 15.0026 10.5781V12.9781H18.5571L17.9889 16.6765H15.0026V25.6172C21.1296 24.6573 25.8164 19.3642 25.8164 12.9781Z"
                  fill="#1877F2"
                />
              </svg>
            </Link>
          </div>
          <div
            className="line h-px w-full relative flex justify-center"
            style={{ background: "#DEDDE4" }}
          >
            <p
              className="mx-auto flex justify-center absolute px-2.5"
              style={{
                background: "white",
                marginTop: "-10px",
              }}
            >
              və ya
            </p>
          </div>
          <form className="login_form pt-10 m-auto">
            <div className="flex flex-col">
              <label htmlFor="phoneNumber">Mobil nömrə</label>
              <input
                className="login_form-input p-3.5 my-2 rounded-lg"
                type="text"
                maxLength={16}
                id="mobileNumberInput"
                name="mobileNumber"
                value={`(+994) ${formatMobileNumber(mobileNumber)}`}
                onChange={handleMobileNumberChange}
                placeholder="+994"
                required
              />
            </div>
            <div className="flex flex-col my-4">
              <label htmlFor="">Şifrə</label>
              <input
                required
                type="password"
                className="login_form-input p-3.5 my-2 rounded-lg"
                placeholder="Şifrə"
                id="password"
                name="password"
                onChange={handleInputChange}
                value={inputValues.password}
              />
            </div>
            <div className="flex flex-col my-4">
              <label htmlFor="">Simvolu daxil et</label>
              <div className="flex items-center justify-between">
                <input
                  required
                  type="text"
                  className="login_form-input p-3.5 my-2 rounded-lg"
                  placeholder=""
                  maxLength={7}
                  id="pin"
                  name="pin"
                  onChange={handleInputChange}
                  value={inputValues.pin}
                />
                <div
                  className="font-semibold text-2xl italic"
                  style={{ color: "#ACACAC" }}
                >
                  {random}
                </div>
                <div
                  onClick={handleClick}
                  className={rotate ? "changePin" : "changePinReverse"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M13.7857 6.5L14.5807 8.50215C13.8273 8.07761 12.9442 7.83333 12 7.83333C9.23858 7.83333 7 9.92267 7 12.5C7 12.9149 7.058 13.3171 7.16686 13.7M10.2143 18.5L9.41931 16.4978C10.1727 16.9224 11.0558 17.1667 12 17.1667C14.7614 17.1667 17 15.0773 17 12.5C17 12.0851 16.942 11.6829 16.8331 11.3"
                      stroke="#ACACAC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="12.5"
                      r="10"
                      stroke="#ACACAC"
                      stroke-width="1.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <button
              className={`${
                disabled
                  ? "login_button w-full py-4 my-2 rounded-lg text-white"
                  : "login_button w-full py-4 my-2 rounded-lg text-white disabledBtn"
              }`}
              disabled={isCorrect ? false : true}
            >
              Qeydiyyatı yarat
            </button>
            <div className="flex justify-between py-5">
              <div className="policy_acceptance flex">
                <input
                  type="checkbox"
                  style={{ width: 18, height: 18 }}
                ></input>
                <h6 className="font-semibold text-sm pl-2">
                  Sözləşməni qəbul edirəm
                </h6>
              </div>
              <Link href="" className="text-sm">
                Şifrəni unutmusan?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
