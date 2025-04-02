import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.scss";
import Heading from "./components/heading/Heading";
import { CSSProperties } from "react";

const radh = Rajdhani({
  variable: "--fontM",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NERVACORP",
  description:
    "We are dedicated to unlocking the extraordinary potential of the human mind. Through cutting-edge advancements in neuroscience, neural prosthetics, and cognitive engineering, our mission is to enhance life, thought, and human capability. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${radh.variable} `}
        style={{ "--fontM": radh.style.fontFamily } as CSSProperties}
      >
        <Heading />
        {children}
      </body>
    </html>
  );
}
