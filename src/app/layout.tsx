import { ThemeProvider } from "@/components/utils/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { NextAuthProvider } from "@/components/utils/auth-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PassForte",
  description:
    "Your All-in-One Password Management Solution for Keeping Your Digital World Secure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("bg-[#161616]", inter.className)}>
        <NextAuthProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
