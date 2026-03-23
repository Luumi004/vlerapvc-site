import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/language-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vlera PVC - Fenster und Türen",
  description:
    "Hochwertige PVC-Fenster und -Türen für Ihr Zuhause oder Ihr Unternehmen",
  generator: "v0.dev",
  icons: {
    icon: "/images/VleraLeoTab.jpg",
    shortcut: "/images/VleraLeoTab.jpg",
    apple: "/images/VleraLeoTab.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
