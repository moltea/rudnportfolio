"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import styles from "./Header.module.scss";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
    >
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          MOLTEA
        </a>
        <nav className={styles.nav}>
          <a href="#about" className={styles.navLink}>Обо мне</a>
          <a href="#projects" className={styles.navLink}>Проекты</a>
          <a href="#contact" className={styles.navLink}>Контакты</a>
        </nav>
      </div>
    </motion.header>
  );
}
