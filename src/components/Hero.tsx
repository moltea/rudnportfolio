"use client";

import React from "react";
import { Typography, Button } from "antd";
import { motion } from "motion/react";
import Canvas3D from "./Canvas3D";
import styles from "./Hero.module.scss";

const { Title, Paragraph } = Typography;

export default function Hero() {
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
            Создаю <span className={styles.accent}>современные</span> веб-приложения
          </Title>
          <Paragraph className={styles.subtitle}>
            Fullstack Разработчик | Решения высшего качества
          </Paragraph>
          <div className={styles.actions}>
            <Button type="primary" size="large" shape="round" href="#projects">
              Смотреть проекты
            </Button>
            <Button size="large" shape="round" type="default" href="#contact">
              Связаться со мной
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
