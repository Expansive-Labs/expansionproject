import Link from "next/link";

/// NAV LINK ///

const NavLink = ({ href, title, openInNewTab, color }) => {
  return (
    <Link
      href={href}
      className={`block py-2 pl-3 pr-4 ${
        color || "text-[#ADB7BE]"
      } sm:text-xl rounded md:p-0 hover:text-[#50fc99] transition-colors duration-300`}
      target={openInNewTab ? "_blank" : "_self"}
      rel={openInNewTab ? "noopener noreferrer" : ""}
    >
      {title}
    </Link>
  );
};

export default NavLink;