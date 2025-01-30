import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
import { Providers } from "../../Providers";
import Nav from "@/components/Navbar";

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
  title: "FRINT - Evaluating Skills",
  description: "Your confidence is our confidence.",
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
        <div className="​flex flex-col justify-between min-h-screen ">
          <Providers>
            <div>
              <Nav className="sm:pt-5" />
            </div>
            <div>{children}</div>
          </Providers>
        </div>
      </body>
    </html>
  );
}
