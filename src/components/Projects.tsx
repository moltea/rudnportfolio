"use client";

import React from "react";
import { Typography, Row, Col, Card, Button } from "antd";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react";
import styles from "./Projects.module.scss";

const { Title, Paragraph } = Typography;

const projectsData = [
  {
    title: "E-Commerce Платформа",
    description: "Полноценный интернет-магазин с корзиной, оплатой и панелью администратора.",
    tech: ["Next.js", "TypeScript", "Ant Design", "Stripe", "Prisma"],
    codeLink: "https://github.com/vercel/commerce",
    liveLink: "https://demo.vercel.store/"
  },
  {
    title: "Task Tracker",
    description: "Канбан-доска для управления задачами с возможностью drag-and-drop.",
    tech: ["React", "Redux Toolkit", "SCSS", "Firebase"],
    codeLink: "https://github.com/oldboyxx/jira_clone",
    liveLink: "https://jira.ivorreic.com/"
  },
  {
    title: "3D Портфолио",
    description: "Интерактивное веб-портфолио с WebGL и кастомными анимациями.",
    tech: ["Three.js", "React Three Fiber", "Framer Motion"],
    codeLink: "https://github.com/pmndrs/react-three-fiber",
    liveLink: "https://react-three-fiber-demo.web.app/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <Title level={2} className={styles.sectionTitle}>
          Мои Проекты
        </Title>
        <Row gutter={[32, 32]}>
          {projectsData.map((project, index) => (
            <Col xs={24} md={12} lg={8} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ height: "100%" }}
              >
                <Card className={styles.projectCard} variant="borderless">
                  <Title level={4} className={styles.projectTitle}>
                    {project.title}
                  </Title>
                  <Paragraph className={styles.projectDesc}>
                    {project.description}
                  </Paragraph>
                  <div className={styles.techStack}>
                    {project.tech.map((t) => (
                      <span key={t} className={styles.techBadge}>{t}</span>
                    ))}
                  </div>
                  <div className={styles.cardActions}>
                    <Button type="primary" icon={<ExternalLink size={16} />} href={project.liveLink} target="_blank">
                      Demo
                    </Button>
                    <Button icon={<FaGithub size={16} />} href={project.codeLink} target="_blank">
                      Code
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
