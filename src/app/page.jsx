"use client";

import LeafletMap from "@/components/LeafletMap";
import styles from "./page.module.css";
import Header from "@/components/header/Header";
import { useTheme } from "next-themes";

const HomePage = () => {
  const { theme } = useTheme();
  return (
    <div className={styles.container + " " + styles[theme]}>
      <Header />
      <LeafletMap />
    </div>
  );
};

export default HomePage;
