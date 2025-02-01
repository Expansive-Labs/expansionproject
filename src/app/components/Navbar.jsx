import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

/// NAVBAR ///

const navLinks = [
  {
    title: "About Us",
    path: "#about",
  },
  {
    title: "Shows",
    path: "#shows",
  },
  {
    title: "Music",
    path: "#music",
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
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-20 bg-[#121212] bg-opacity-100 determination-mono-font">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-1">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-[#f6f3ed] font-semibold"
        >
          <Image
            src="/images/infiniteLogo.webp"
            alt="Infinity logo"
            width={76}
            height={60}
          />
        </Link>

        <h2></h2>

        {/* Hamburger Menu */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-7 py-2 border rounded border-slate-200 text-slate-900 hover:text-[#f6f3ed] hover:border-[#f6f3ed]"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-7 py-2 border rounded border-slate-200 text-slate-900 hover:text-[#f6f3ed] hover:border-[#f6f3ed]"
            >
              <XMarkIcon className="h-5 w-5" />
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
