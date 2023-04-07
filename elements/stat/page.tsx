import React from "react";
import "./style.css";

interface Props {
  num: number;
  title: string;
}

const Stat = ({ num, title }: Props) => {
  return (
    <div className="stats">
      <h1 className="stat_number">{num} +</h1>
      <h6 className="stat_title">{title}</h6>
    </div>
  );
};

export default Stat;
