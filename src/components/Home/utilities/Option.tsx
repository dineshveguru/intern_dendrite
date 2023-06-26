import React from "react";

interface OptionProps {
  url: string;
  name: string;
}

const Option: React.FC<OptionProps> = ({ url, name }) => {
  console.log(url);
  return (
    <span className="d-flex" style={{ width: "50px" }}>
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
