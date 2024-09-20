"use client";
import React from "react";
import { useTheme } from "next-themes";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import styles from "./header.module.css";
const Header = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className={styles.topDiv}>
      <h1
        style={{
          color: theme === "light" ? "black" : "white",
        }}
      >
        Pintu Air Monitoring
      </h1>
      <div>
        {theme === "light" ? (
          <div className={styles.divIcon + " " + styles.light}>
            <MdOutlineNightlight
              onClick={toggleTheme}
              color="black"
              style={{
                color: "white",
                cursor: "pointer",
              }}
              size={24}
            />
          </div>
        ) : (
          <div className={styles.divIcon + " " + styles.dark}>
            <MdOutlineLightMode
              onClick={toggleTheme}
              color="white"
              style={{
                color: "black",
                cursor: "pointer",
              }}
              size={24}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
