import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Tabs from "@/components/Tabs/Tabs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "friend xyz",
  description: "friend xyz",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div>
          <Tabs />
        </div>
      </body>
    </html>
  );
}
