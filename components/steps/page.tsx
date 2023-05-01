import React from "react";
import Step from "@/elements/step/page";
import Title from "@/elements/title/page";
import Subtitle from "@/elements/subtitle/page";

const Steps = (): JSX.Element => {
  const steps = [
    {
      title: "Addım 1",
      subtitle:
        "Elektron pul kisəsinə saytdan və ya mobil proqram vasitəsilə daxil olun.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 9L9 12M9 12L12 15M9 12H21"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 7.5V7C15 4.79086 13.2091 3 11 3H7C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H11C13.2091 21 15 19.2091 15 17V16.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      color: "#3772FF",
    },
    {
      title: "Addım 2",
      subtitle: "Kommunal ödənişlər bölməsini seçin.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 8L22 8M8 15L22 15M8 8V22M22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18L2 6C2 3.79086 3.79086 2 6 2L18 2C20.2091 2 22 3.79086 22 6Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      color: "#9757D7",
    },
    {
      title: "Addım 3",
      subtitle: "Öz ödəniş kodunuzu və məbləği daxil edin.",
      icon: (
        <svg
          width="17"
          height="22"
          viewBox="0 0 17 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.99994 12L5.46961 12.5303C5.68411 12.7448 6.0067 12.809 6.28696 12.6929C6.56721 12.5768 6.74994 12.3033 6.74994 12H5.99994ZM9.99994 12H9.24994C9.24994 12.4142 9.58573 12.75 9.99994 12.75V12ZM4.58573 10.5858L4.0554 11.1161H4.0554L4.58573 10.5858ZM1.28522 12.8276L0.602444 13.138H0.602444L1.28522 12.8276ZM3.93413 18.6552L4.6169 18.3449L3.93413 18.6552ZM15.1516 18.9846L14.5004 18.6124L15.1516 18.9846ZM15.4729 18.4223L16.1241 18.7944L16.1241 18.7944L15.4729 18.4223ZM1.24994 7C1.24994 7.41421 1.58573 7.75 1.99994 7.75C2.41416 7.75 2.74994 7.41421 2.74994 7H1.24994ZM13.2499 7C13.2499 7.41421 13.5857 7.75 13.9999 7.75C14.4142 7.75 14.7499 7.41421 14.7499 7H13.2499ZM6.74994 12V6H5.24994V12H6.74994ZM9.24994 6V12H10.7499V6H9.24994ZM9.99994 12.75H11.9999V11.25H9.99994V12.75ZM11.6787 20.25H7.5756V21.75H11.6787V20.25ZM3.10595 10.75H3.17152V9.25H3.10595V10.75ZM4.0554 11.1161L5.46961 12.5303L6.53027 11.4697L5.11606 10.0555L4.0554 11.1161ZM0.602444 13.138L3.25136 18.9656L4.6169 18.3449L1.96799 12.5173L0.602444 13.138ZM15.8028 19.3567L16.1241 18.7944L14.8217 18.0502L14.5004 18.6124L15.8028 19.3567ZM16.7499 16.4377V16H15.2499V16.4377H16.7499ZM16.1241 18.7944C16.5342 18.0767 16.7499 17.2644 16.7499 16.4377H15.2499C15.2499 17.0033 15.1023 17.5591 14.8217 18.0502L16.1241 18.7944ZM3.17152 10.75C3.50304 10.75 3.82098 10.8817 4.0554 11.1161L5.11606 10.0555C4.60034 9.53973 3.90086 9.25 3.17152 9.25V10.75ZM3.10595 9.25C1.10591 9.25 -0.22518 11.3172 0.602444 13.138L1.96799 12.5173C1.5918 11.6896 2.19684 10.75 3.10595 10.75V9.25ZM11.6787 21.75C13.3832 21.75 14.9571 20.8366 15.8028 19.3567L14.5004 18.6124C13.9218 19.6251 12.8449 20.25 11.6787 20.25V21.75ZM11.9999 12.75C13.7949 12.75 15.2499 14.2051 15.2499 16H16.7499C16.7499 13.3766 14.6233 11.25 11.9999 11.25V12.75ZM7.99994 4.75C8.6903 4.75 9.24994 5.30964 9.24994 6H10.7499C10.7499 4.48122 9.51873 3.25 7.99994 3.25V4.75ZM7.5756 20.25C6.30113 20.25 5.14428 19.5051 4.6169 18.3449L3.25136 18.9656C4.02214 20.6613 5.71291 21.75 7.5756 21.75V20.25ZM6.74994 6C6.74994 5.30964 7.30959 4.75 7.99994 4.75V3.25C6.48116 3.25 5.24994 4.48122 5.24994 6H6.74994ZM2.74994 7C2.74994 4.10051 5.10045 1.75 7.99994 1.75V0.25C4.27202 0.25 1.24994 3.27208 1.24994 7H2.74994ZM7.99994 1.75C10.8994 1.75 13.2499 4.10051 13.2499 7H14.7499C14.7499 3.27208 11.7279 0.25 7.99994 0.25V1.75Z"
            fill="white"
          />
        </svg>
      ),
      color: "#EF466F",
    },
    {
      title: "Addım 4",
      subtitle: "Hazırdır! Ödəniş həyata keçirildi",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 0.25H8.96644C7.59472 0.249995 6.51929 0.249992 5.65494 0.320612C4.77479 0.392522 4.04769 0.541379 3.38955 0.876713C2.30762 1.42798 1.42798 2.30762 0.876713 3.38955C0.541379 4.04769 0.392522 4.77479 0.320612 5.65494C0.249992 6.51929 0.249995 7.59472 0.25 8.96644V9V13V13.0336C0.249995 14.4053 0.249992 15.4807 0.320612 16.3451C0.392522 17.2252 0.541379 17.9523 0.876713 18.6104C1.42798 19.6924 2.30762 20.572 3.38955 21.1233C4.04769 21.4586 4.77479 21.6075 5.65494 21.6794C6.51927 21.75 7.59469 21.75 8.96637 21.75H8.96642H9H15L15.0808 21.75C15.9328 21.7501 16.4518 21.7501 16.8995 21.6792C19.3599 21.2895 21.2895 19.3599 21.6792 16.8995C21.7501 16.4518 21.7501 15.9328 21.75 15.0808L21.75 15V14C21.75 13.5858 21.4142 13.25 21 13.25C20.5858 13.25 20.25 13.5858 20.25 14V15C20.25 15.9577 20.2477 16.3492 20.1977 16.6648C19.9096 18.4834 18.4834 19.9096 16.6648 20.1977C16.3492 20.2477 15.9577 20.25 15 20.25H9C7.58749 20.25 6.57322 20.2494 5.77708 20.1844C4.9897 20.12 4.48197 19.9964 4.07054 19.7868C3.27085 19.3793 2.62068 18.7291 2.21322 17.9295C2.00359 17.518 1.87996 17.0103 1.81563 16.2229C1.75058 15.4268 1.75 14.4125 1.75 13V9C1.75 7.58749 1.75058 6.57322 1.81563 5.77708C1.87996 4.9897 2.00359 4.48197 2.21322 4.07054C2.62068 3.27085 3.27085 2.62068 4.07054 2.21322C4.48197 2.00359 4.9897 1.87996 5.77708 1.81563C6.57322 1.75058 7.58749 1.75 9 1.75H14C14.4142 1.75 14.75 1.41421 14.75 1C14.75 0.585787 14.4142 0.25 14 0.25H9ZM20.5303 5.53033C20.8232 5.23744 20.8232 4.76256 20.5303 4.46967C20.2374 4.17678 19.7626 4.17678 19.4697 4.46967L10.9658 12.9735L7.49388 9.93557C7.18215 9.66281 6.70833 9.69439 6.43557 10.0061C6.16281 10.3178 6.19439 10.7917 6.50612 11.0644L10.5061 14.5644C10.8033 14.8244 11.2511 14.8095 11.5303 14.5303L20.5303 5.53033Z"
            fill="white"
          />
        </svg>
      ),
      color: "#45B26B",
    },
  ];
  return (
    <section className="steps_section my-8">
      <div className="steps_inner py-12">
        <Title title="Kommunal ödənişlər 4 sadə addım ilə" />
        <Subtitle subtitle="Çoxsaylı ödəniş kartlarından, mobil tətbiqlərindən və arzuolunmaz nağd pul təmasından qurtulmaq istəyirsiniz? Bu mümkündür!" />
        <div className="steps flex items-center pt-16">
          {steps?.map((step) => (
            <Step key={step.title} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
