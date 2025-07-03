import React from "react";
import "98.css";

/// PROJECTS BUTTONS ///

const ProjectTag = ({ name, onClick, isSelected }) => {
  // Style for active/inactive button
  const buttonStyles = isSelected
    ? `bg-[#e5e5e5] border-2 border-[#50fd9a] shadow-[4px_4px_0_#888] text-[#121212] font-bold determination-mono-font relative after:content-[''] after:block after:h-1 after:bg-[#50fd9a] after:rounded-full after:mt-2` // Active: green border, 3D shadow, underline
    : `bg-[#e5e5e5] border-2 border-[#bdbdbd] shadow-[4px_4px_0_#888] text-[#7c7c78] font-bold determination-mono-font hover:border-[#50fd9a] hover:text-[#121212] hover:shadow-[2px_2px_0_#50fd9a] relative`;

  return (
    <button
      className={`${buttonStyles} rounded-full px-6 py-3 text-xl cursor-pointer transition-all duration-150 focus:outline-none`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
