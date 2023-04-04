import React from "react";
import "./style.css";
interface Props {
  title?: string;
  subtitle?: string;
  icon?: string;
  color?: string;
}

const Step = ({ title, subtitle, icon, color }: Props) => {
  return (
    <div className="step">
      <div className="step_icon" style={{ background: `${color}` }}>
        <img src={icon} alt="" />
      </div>
      <div className="step_info">
        <h4 className="step_info-title">{title}</h4>
        <p className="step_info-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default Step;
