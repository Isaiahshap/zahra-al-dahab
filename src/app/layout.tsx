import type { Metadata } from "next";
import { Raleway, Montserrat } from "next/font/google";
import { baseMetadata } from "@/lib/metadata";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ToastProvider } from "@/components/ui/Toast";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${montserrat.variable} 
        font-sans antialiased bg-white text-black dark:bg-secondary dark:text-gray-50
        selection:bg-primary selection:text-white`}
      >
        <ToastProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ToastProvider>
      </body>
    </html>
  );
}
