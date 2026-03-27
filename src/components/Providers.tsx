"use client";

import React from "react";
import { ConfigProvider, theme } from "antd";
import { ThemeProvider, useTheme } from "@/components/ThemeContext";
import { LanguageProvider } from "@/components/LanguageContext";
import FloatingActions from "@/components/FloatingActions";

function AntdConfig({ children }: { children: React.ReactNode }) {
  const { theme: currentTheme, mounted } = useTheme();

  return (
    <ConfigProvider
      theme={{
        algorithm: !mounted || currentTheme === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: "#00c9a7", // A vibrant prismarine for premium look
          fontFamily: "var(--font-inter)",
          borderRadius: 12, // Softer curves for modern touch
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AntdConfig>
          {children}
          <FloatingActions />
        </AntdConfig>
      </LanguageProvider>
    </ThemeProvider>
  );
}
