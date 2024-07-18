import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ashlands Exports",
  description: "Ashlands Exports - Farming the future",
  image: "/images/logo.png",
  favicon: "/favicon.ico",
  url: "https://ashlands-exports.vercel.app",
  type: "website",
  keywords: ["agriculture", "export", "farming", "food", "markets", "medicinal seeds", "seeds", "spices"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
