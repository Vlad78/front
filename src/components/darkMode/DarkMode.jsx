"use client";
import React, { useContext } from "react";
import styles from "./DarkMode.module.css";
import { ThemeContext } from "../../context/ThemeContext";

const DarkMode = () => {
  const { themeMode, toggle } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🌞</div>
      <div className={styles.ball} style={themeMode === "light" ? { left: 2 } : { right: 2 }} />
    </div>
  );
};

export default DarkMode;
