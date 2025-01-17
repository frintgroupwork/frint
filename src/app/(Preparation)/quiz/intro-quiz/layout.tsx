import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../../globals.css";
import { Providers } from "../../../Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: "/frint_logo.svg",
  title: "FRINT - introduction quiz",
  description: "Your confidence is our confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Providers>{children}</Providers>
    </div>
  );
}
