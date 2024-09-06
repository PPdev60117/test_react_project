import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Noto_Sans_Thai} from "@next/font/google"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const NotoSansThai = Noto_Sans_Thai({
  subsets: ['latin'],
  weight: ['400','700']
})

export const metadata: Metadata = {
  title: "test project",
  description: "test project nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${NotoSansThai.className} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
