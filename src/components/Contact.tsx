"use client";

import React from "react";
import { Typography, Row, Col, Card, Form, Input, Button, message } from "antd";
import { Mail, MessageCircle, Send, Briefcase } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react";
import styles from "./Contact.module.scss";

const { Title, Paragraph } = Typography;

export default function Contact() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    // Fake form submission for static site
    message.success("Спасибо за сообщение! Я отвечу вам в ближайшее время.");
    form.resetFields();
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <Title level={2} className={styles.sectionTitle}>Свяжитесь со мной</Title>
          <Row gutter={[48, 48]} justify="center">
            <Col xs={24} md={10}>
              <Card variant="borderless" className={styles.infoCard}>
                <Title level={3} className={styles.cardTitle}>Контакты</Title>
                <Paragraph className={styles.text}>
                  Я всегда открыт для новых предложений, интересных проектов и коллабораций. Напишите мне любым удобным способом!
                </Paragraph>
                <div className={styles.socialLinks}>
                  <a href="mailto:moltea@notreal.com" className={styles.socialLink}>
                    <Mail size={24} /> moltea@notreal.com
                  </a>
                  <a href="https://t.me/molt3a" target="_blank" rel="noreferrer" className={styles.socialLink}>
                    <MessageCircle size={24} /> @molt3a
                  </a>
                  <a href="https://github.com/moltea" target="_blank" rel="noreferrer" className={styles.socialLink}>
                    <FaGithub size={24} /> GitHub Профиль
                  </a>
                </div>
              </Card>
            </Col>
            <Col xs={24} md={14}>
               <Card variant="borderless" className={styles.formCard}>
                <Form form={form} layout="vertical" onFinish={onFinish} size="large">
                  <Form.Item name="name" label={<span className={styles.formLabel}>Ваше имя</span>} rules={[{ required: true, message: 'Введите имя' }]}>
                    <Input placeholder="Иван Иванов" />
                  </Form.Item>
                  <Form.Item name="email" label={<span className={styles.formLabel}>Email</span>} rules={[{ required: true, type: 'email', message: 'Введите корректный email' }]}>
                    <Input placeholder="email@example.com" />
                  </Form.Item>
                  <Form.Item name="message" label={<span className={styles.formLabel}>Сообщение</span>} rules={[{ required: true, message: 'Введите сообщение' }]}>
                    <Input.TextArea rows={4} placeholder="Привет! Я хочу обсудить проект..." />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" icon={<Send size={16} />} className={styles.submitBtn}>
                      Отправить
                    </Button>
                  </Form.Item>
                </Form>
               </Card>
            </Col>
          </Row>
        </motion.div>
      </div>
    </section>
  );
}
