"use client";

import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/components/LanguageContext";
import styles from "@/styles/FloatingActions.module.scss";

export default function LanguageToggle() {
  const { language, toggleLanguage, mounted } = useLanguage();

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <motion.button
      className={styles.toggleBtn}
      onClick={toggleLanguage}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      aria-label="Toggle language"
    >
      {language === "ru" ? "EN" : "RU"}
    </motion.button>
  );
}
