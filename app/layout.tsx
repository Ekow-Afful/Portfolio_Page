import "./globals.css";
import type { Metadata } from "next";
import { Outfit, Work_Sans } from "next/font/google";

const roboto = Outfit({
  subsets: ["latin"],
  variable: "--font-roboto",
});

const workSans = Work_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Ekow.dev",
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
        className={`bg-[#272626] overflow-x-clip w-full ${roboto.variable} ${workSans.variable} font-Sans remove-scrollbar `}
      >
        {children}
      </body>
    </html>
  );
}
