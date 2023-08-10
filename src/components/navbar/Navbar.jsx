"use client";
import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";
import DarkMode from "../darkMode/DarkMode";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contacts",
    url: "/contacts",
  },

  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Mania
      </Link>

      <div className={styles.links}>
        <DarkMode />
        {links.map((e) => (
          <Link key={e.id} href={e.url} className={styles.link}>
            {e.title}
          </Link>
        ))}
        <button className={styles.logout} onClick={() => console.log("logout")}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
