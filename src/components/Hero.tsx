"use client";

import React from "react";
import { Typography, Button } from "antd";
import { motion } from "motion/react";
import { useLanguage } from "@/components/LanguageContext";
import Canvas3D from "@/components/Canvas3D";
import styles from "@/styles/Hero.module.scss";

const { Title, Paragraph } = Typography;

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className={styles.heroSection}>
      <div className={styles.canvasContainer}>
        <Canvas3D />
      </div>
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Title level={1} className={styles.title}>
            {t("hero", "greeting")} <span className={styles.accent}>MOLTEA</span>
          </Title>
          <Paragraph className={styles.subtitle}>
            {t("hero", "role")}
          </Paragraph>
          <div className={styles.actions}>
            <Button type="primary" size="large" shape="round" href="#projects">
              {t("hero", "buttonWork")}
            </Button>
            <Button size="large" shape="round" type="default" href="#contact">
              {t("hero", "buttonContact")}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
