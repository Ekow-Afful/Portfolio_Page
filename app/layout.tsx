import { Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Hero from "@/sections/Hero";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600"],
  variable: "--font-poppins",
});

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
        className={`bg-[#030014] overflow-x-hidden overflow-y-scroll ${poppins.className} `}
      >
        <div className="bg-[url('/banner-bg.png')]">
          <Navbar />
          <Hero />
        </div>
        {children}
      </body>
    </html>
  );
}
