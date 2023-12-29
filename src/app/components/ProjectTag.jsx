import React from "react";
import "98.css";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-[black] border-[#50fd9a] ring-2 ring-[#50fd9a]"
    : "text-[grey] border-slate-600 hover:bg-slate-200";
  return (
    <button
      className={`${buttonStyles} rounded-full px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
