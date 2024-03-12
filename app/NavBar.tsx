import Link from "next/link";
import React from "react";
import { FaChessKnight } from "react-icons/fa6";

const NavBar = () => {
  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "issues",
      href: "/issues",
    },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <FaChessKnight />
      </Link>
      <ul className="flex space-x-6 text-zinc-500 ">
        {links.map((el) => (
          <li key={el.href}>
            <Link
              className="hover:text-zinc-800 transition"
              href={el.href}
            >
              {el.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
