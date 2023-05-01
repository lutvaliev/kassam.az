import React from "react";
import Link from "next/link";
import "./style.css";
interface Props {
  img?: string;
  href: string;
}

const Partner = ({ img, href }: Props): JSX.Element => {
  return (
    <Link href={href} className="partner">
      <img src={img} alt="" />
    </Link>
  );
};

export default Partner;
