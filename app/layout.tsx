import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Client from "./client";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Persistent Learning | Smart Online Education Platform",
  description:
    "Persistent Learning is a smart online education platform offering structured courses, assessments, assignments, and progress tracking for students, parents, and tutors.",
  keywords: [
    "online learning",
    "education platform",
    "student learning",
    "courses for students",
    "online education system",
    "learning management system",
  ],
  icons: {
    icon: "/images/logoAdmin.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Client>
          {children}
        </Client>
      </body>
    </html>
  );
}
