"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer style={{ textAlign: 'center', padding: '24px', backgroundColor: 'var(--background)', borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)', fontFamily: 'var(--font-inter), sans-serif', transition: 'background 0.3s, color 0.3s, border 0.3s' }}>
      {t("footer", "text")}
    </footer>
  );
}
