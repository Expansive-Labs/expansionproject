import React from "react";
import { motion } from "framer-motion";

/// TAB BUTTON ///

const variants = {
  default: { width: 0 },
  active: { width: "100%" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "tab-button tab-button-active"
    : "tab-button tab-button-inactive";

  return (
    <div className="flex flex-col items-center">
      <button onClick={selectTab} className={buttonClasses}>
        {children}
      </button>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-[#50fd9a] mt-1"
      ></motion.div>
    </div>
  );
};

export default TabButton;
