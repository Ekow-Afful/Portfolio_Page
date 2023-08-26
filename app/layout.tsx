import { Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Hero from "@/sections/Hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michael.dev",
  description: "Welcome to my Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-[#030014] overflow-x-clip w-full ${inter.className} `}
      >
        <div>
          {/* <Navbar /> */}
          <Hero />
        </div>
        {children}
      </body>
    </html>
  );
}
