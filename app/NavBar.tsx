"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaChessKnight } from "react-icons/fa6";
import classNames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();

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
              className={classNames({
                "text-zinc-900": el.href === currentPath,
                "text-zinc-500": el.href !== currentPath,
                "hover:zinc-800 transition": true,
              })}
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
