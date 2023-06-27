import React from "react";
import { ViewOption } from "../../../store/types";
import "../home_styles.css";

interface OptionProps {
  url: string;
  name: string;
  handleViewChange: (view: ViewOption) => void;
}

const Option: React.FC<OptionProps> = ({ url, name, handleViewChange }) => {
  const selectedOption: ViewOption = name as ViewOption;
  return (
    <span
      className="d-flex"
      id="side-bar__option"
      style={{ minWidth: "110px" }}
      onClick={() => handleViewChange(selectedOption)}
    >
      <img
        src={require(`../../assets/${url}`)}
        alt={name}
        style={{ width: "20px", height: "20px", marginRight: "5px" }}
      />
      <p style={{ color: "#fff" }}>
        <strong>{name}</strong>
      </p>
    </span>
  );
};

export default Option;
