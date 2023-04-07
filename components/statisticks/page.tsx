import Stat from "@/elements/stat/page";
import Subtitle from "@/elements/subtitle/page";
import Title from "@/elements/title/page";
import React from "react";
import "./style.css";

const Statisticks = () => {
  const stats = [
    {
      num: 9500,
      title: "Aktiv müştəri",
    },
    {
      num: 95000,
      title: "Tətbiq yükləməsi",
    },
    {
      num: 7500,
      title: "Gündəlik tətbiqdən istifadə",
    },
    {
      num: 6300,
      title: "Gündəlik əməliyyat sayı",
    },
  ];
  return (
    <section className="statisticks_section mt-11">
      <div className="statisticks_inner py-12">
        <Title title="Statistika" />
        <Subtitle subtitle="Çoxsaylı ödəniş kartlarından, mobil tətbiqlərindən və arzuolunmaz nağd pul təmasından qurtulmaq istəyirsiniz? Bu mümkündür!" />
        <div className="statisticks flex items-center justify-around">
          {stats?.map((stat) => (
            <Stat key={stat.title} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statisticks;
