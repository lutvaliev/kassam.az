import React from "react";
import "./style.css";

interface Props {
  title?: string;
}

const Title = ({ title }: Props): JSX.Element => {
  return <h1 className="title mx-auto">{title}</h1>;
};

export default Title;
