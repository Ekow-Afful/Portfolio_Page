import { Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Hero from "@/sections/Hero";

const roboto = Outfit({
  subsets: ["latin"],
  variable: "--font-roboto",
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
        className={`bg-[#030014] overflow-x-clip w-full ${roboto.variable} font-Sans `}
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
