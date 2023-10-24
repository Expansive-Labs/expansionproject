"use client";
import { useTheme } from "next-themes";
import React from "react";
import { BsSun, BsMoon } from "react-icons/bs";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  return (
    <button
      className="bg-[#bababa] dark:bg-[#121212] py-1 px-1 rounded-xl"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <BsMoon className="h-8 w-8" />
      ) : (
        <BsSun className="h-8 w-8" />
      )}
    </button>
  );
}
