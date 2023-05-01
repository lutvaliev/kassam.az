import React from "react";
import "./style.css";
interface Props {
  title?: string;
  subtitle?: string;
  icon?: any;
  color?: string;
}

const Step = ({ title, subtitle, icon, color }: Props): JSX.Element => {
  return (
    <div className="step">
      <div className="step_icon" style={{ background: `${color}` }}>
        {icon}
      </div>
      <div className="step_info">
        <h4 className="step_info-title">{title}</h4>
        <p className="step_info-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default Step;
