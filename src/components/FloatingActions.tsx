"use client";

import React from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import styles from "@/styles/FloatingActions.module.scss";

export default function FloatingActions() {
  return (
    <div className={styles.container}>
      <LanguageToggle />
      <ThemeToggle />
    </div>
  );
}
