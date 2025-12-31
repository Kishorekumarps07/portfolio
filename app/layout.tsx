import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kishore | AI Full Stack Developer",
  description: "Senior Full Stack Engineer specializing in AI systems, scalable microservices, and product development. View my portfolio and case studies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          fontSans.variable,
          fontMono.variable,
          "antialiased min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary"
        )}
      >
        {children}
      </body>
    </html>
  );
}
