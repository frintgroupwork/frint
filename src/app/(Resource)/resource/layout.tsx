import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
import { Providers } from "../../Providers";
import { Nav } from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  title: "FRINT - Resource",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F8F8F8]`}
      >
        <div className="​flex flex-col justify-between min-h-screen ">
          <Providers>
            <div>
              <Nav className="sm:pt-2"  />
            </div>
            <div className="flex-grow flex flex-col  items-center">
              {children}
            </div>
            <div className="z-0">
              <Footer />
            </div>
          </Providers>
        </div>
      </body>
    </html>
  );
}
