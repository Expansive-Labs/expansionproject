"use client";
import { useTheme } from "next-themes";
import React from "react";
import { BsSun, BsMoon } from "react-icons/bs";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  console.log("Current theme:", theme);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  console.log("BsSun component:", BsSun);
  console.log("BsMoon component:", BsMoon);

  return (
    <button
      className="bg-[#bababa] dark:bg-[#121212] py-1 px-1 rounded-xl"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <BsMoon className="h-8 w-8" />
      ) : (
        <BsSun className="h-8 w-8" />
      )}
    </button>
  );
}
