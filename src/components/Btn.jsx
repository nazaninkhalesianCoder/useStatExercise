import React from "react";

const Btn = ({ title, onClick }) => {
  return (
    <button className="px-4 py-2 rounded-2xl bg-green-300" onClick={onClick}>
      {title}
    </button>
  );
};

export default Btn;
