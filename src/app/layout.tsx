import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swipesy - Can't decide? Let the swipe help.",
  description: "Your fast, fun way to make decisions—powered by AI. Swipe through smart, silly, or surprising ideas and topics. Make shortlists, share with friends, and jump straight to Google or Amazon with a tap.",
  keywords: "decision making, AI, swipe, iOS app, mobile app, choices, recommendations",
  authors: [{ name: "Swipesy Team" }],
  openGraph: {
    title: "Swipesy - Can't decide? Let the swipe help.",
    description: "Your fast, fun way to make decisions—powered by AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
