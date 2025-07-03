import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import AudioPlayer from "./AudioPlayer";

/// NAVBAR ///

const navLinks = [
  {
    title: "About EXP",
    path: "#about",
  },
  {
    title: "Music",
    path: "#music",
  },
  {
    title: "Tour",
    path: "#tour",
  },
  {
    title: "Videos",
    path: "#videos",
  },
  {
    title: "Merch",
    path: "#merch",
  },
  {
    title: "Contact",
    path: "#contact",
  },
  {
    title: "Blog",
    path: "/blog",
    openInNewTab: true,
    showArrow: true,
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <nav className="fixed mx-auto border-b border-[#33353F] top-0 left-0 right-0 z-20 bg-[#121212] bg-opacity-100 determination-mono-font">
      <div className="flex container items-center justify-between mx-auto px-2 py-2 gap-2">
        {/* Left side: Logo */}
        <Link href={"/"} className="flex-shrink-0">
          <Image
            src="/images/infiniteLogo.webp"
            alt="Infinity logo"
            width={76}
            height={60}
            className="w-8 h-8 md:w-[76px] md:h-[60px]"
          />
        </Link>

        {/* Middle: Audio Player */}
        <div className="flex-1 flex justify-center min-w-0">
          <AudioPlayer />
        </div>

        {/* Right side: Hamburger Menu */}
        <div className="mobile-menu block md:hidden flex-shrink-0">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center justify-center w-8 h-8 border rounded border-[#7c7c78] hover:border-[#f6f3ed] transition-colors duration-200"
            >
              <Bars3Icon className="h-4 w-4 text-[#f6f3ed]" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center justify-center w-8 h-8 border rounded border-[#7c7c78] hover:border-[#f6f3ed] transition-colors duration-200"
            >
              <XMarkIcon className="h-4 w-4 text-[#f6f3ed]" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <div
                  className="flex items-center"
                  onMouseEnter={() => setHoveredLink(link.title)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <NavLink
                    href={link.path}
                    title={link.title}
                    openInNewTab={link.openInNewTab}
                    color={link.color}
                  />
                  {link.showArrow && (
                    <svg
                      className={`w-5 h-5 ml-1 transition-colors duration-300 ${
                        hoveredLink === link.title
                          ? "text-green-400"
                          : "text-[#7c7c78]"
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17"></path>
                    </svg>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
