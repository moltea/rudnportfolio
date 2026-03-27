"use client";

import React from "react";
import { Typography, Row, Col, Card, Tag } from "antd";
import { motion } from "motion/react";
import styles from "./About.module.scss";

const { Title, Paragraph } = Typography;

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "NestJS", "PostgreSQL", "Docker", "Ant Design", "Three.js", "SCSS", "Framer Motion", "Git"
];

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Title level={2} className={styles.sectionTitle}>
            Обо мне
          </Title>
          <Row gutter={[32, 32]} align="stretch">
            <Col xs={24} md={12} style={{ display: 'flex' }}>
              <Card className={styles.aboutCard} variant="borderless" style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                <Paragraph className={styles.text}>
                  Привет! Я Fullstack разработчик, специализирующийся на создании современных,
                  масштабируемых и интерактивных веб-приложений. Я создаю надежные серверные решения и
                  уделяю особое внимание UX/UI и производительности на стороне клиента.
                </Paragraph>
                <Paragraph className={styles.text} style={{ flexGrow: 1 }}>
                  Мой основной стек — экосистема React (включая Next.js) в связке с TypeScript, Node.js и базами данных.
                  Я использую лучшие инженерные практики при разработке API и люблю экспериментировать
                  с 3D-графикой для WOW-эффекта на фронтенде.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={12} style={{ display: 'flex' }}>
              <Card title={<span style={{color: 'var(--foreground)'}}>Мои Навыки</span>} className={styles.skillsCard} variant="borderless" style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className={styles.tagsContainer}>
                  {skills.map((skill) => (
                    <Tag key={skill} color="cyan" className={styles.tag}>
                      {skill}
                    </Tag>
                  ))}
                </div>
              </Card>
            </Col>
          </Row>
        </motion.div>
      </div>
    </section>
  );
}
