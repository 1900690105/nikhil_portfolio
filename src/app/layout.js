import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PortfolioHeader from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nikhil Kandhare",
  description: "Here you can know about nikhil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PortfolioHeader />

        {children}
        <Footer />
      </body>
    </html>
  );
}
