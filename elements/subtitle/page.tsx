import React from "react";
import "./style.css";

interface Props {
  subtitle?: string;
}

const Subtitle = ({ subtitle }: Props) => {
  return <p className="subtitle mx-auto">{subtitle}</p>;
};

export default Subtitle;
