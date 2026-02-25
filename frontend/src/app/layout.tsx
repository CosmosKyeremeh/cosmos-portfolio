import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cosmos Kyeremeh | Full Stack Developer",
  description: "Portfolio of Cosmos Kyeremeh - Full Stack Web Developer specializing in React, Next.js, Node.js, and modern web technologies",
  keywords: ["Cosmos Kyeremeh", "Full Stack Developer", "Web Developer", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Cosmos Kyeremeh" }],
  openGraph: {
    title: "Cosmos Kyeremeh | Full Stack Developer",
    description: "Full Stack Web Developer Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
