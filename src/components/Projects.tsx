"use client";

import React from "react";
import { Typography, Row, Col, Card, Button } from "antd";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react";
import { useLanguage } from "@/components/LanguageContext";
import styles from "@/styles/Projects.module.scss";

const { Title, Paragraph } = Typography;

const projectsData = [
  {
    key: "p1",
    tech: ["Next.js", "TypeScript", "Ant Design", "Stripe", "Prisma"],
    codeLink: "https://github.com/vercel/commerce",
    liveLink: "https://demo.vercel.store/"
  },
  {
    key: "p2",
    tech: ["React", "Redux Toolkit", "SCSS", "Firebase"],
    codeLink: "https://github.com/oldboyxx/jira_clone",
    liveLink: "https://jira.ivorreic.com/"
  },
  {
    key: "p3",
    tech: ["Three.js", "React Three Fiber", "Framer Motion"],
    codeLink: "https://github.com/pmndrs/react-three-fiber",
    liveLink: "https://react-three-fiber-demo.web.app/"
  }
];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <Title level={2} className={styles.sectionTitle}>
          {t("projects", "title")}
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
                    {t("projects", `${project.key}_title`)}
                  </Title>
                  <Paragraph className={styles.projectDesc}>
                    {t("projects", `${project.key}_desc`)}
                  </Paragraph>
                  <div className={styles.techStack}>
                    {project.tech.map((techItem) => (
                      <span key={techItem} className={styles.techBadge}>{techItem}</span>
                    ))}
                  </div>
                  <div className={styles.cardActions}>
                    <Button type="primary" icon={<ExternalLink size={16} />} href={project.liveLink} target="_blank">
                      {t("projects", "demo")}
                    </Button>
                    <Button icon={<FaGithub size={16} />} href={project.codeLink} target="_blank">
                      {t("projects", "code")}
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
