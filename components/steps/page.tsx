import React from "react";
import "./style.css";
import Step from "@/elements/step/page";
import Title from "@/elements/title/page";
import Subtitle from "@/elements/subtitle/page";

const Steps = () => {
  const steps = [
    {
      title: "Addım 1",
      subtitle:
        "Elektron pul kisəsinə saytdan və ya mobil proqram vasitəsilə daxil olun.",
      icon: "./steps/step1.svg",
      color: "#3772FF",
    },
    {
      title: "Addım 2",
      subtitle: "Kommunal ödənişlər bölməsini seçin.",
      icon: "./steps/step2.svg",
      color: "#9757D7",
    },
    {
      title: "Addım 3",
      subtitle: "Öz ödəniş kodunuzu və məbləği daxil edin.",
      icon: "./steps/step3.svg",
      color: "#EF466F",
    },
    {
      title: "Addım 4",
      subtitle: "Hazırdır! Ödəniş həyata keçirildi",
      icon: "./steps/step4.svg",
      color: "#45B26B",
    },
  ];
  return (
    <section className="steps_section mt-11">
      <div className="steps_inner py-20">
        <Title title="Kommunal ödənişlər 4 sadə addım ilə" />
        <Subtitle subtitle="Çoxsaylı ödəniş kartlarından, mobil tətbiqlərindən və arzuolunmaz nağd pul təmasından qurtulmaq istəyirsiniz? Bu mümkündür!" />
        <div className="steps flex items-center">
          {steps?.map((step) => (
            <Step key={step.title} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
