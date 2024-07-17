import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ashlands Exports",
  description: "Ashlands Exports - Farming the future",
  image: "/images/logo.png",
  favicon: "/favicon.ico",
  url: "https://ashlands-exports.vercel.app",
  type: "website",
  keywords: ["agriculture", "export", "farming", "food", "markets", "medicinal seeds", "seeds", "spices"],
  icons: [
    { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
    { rel: "manifest", href: "/site.webmanifest" },
    { rel: "mask-icon", color: "#5bbad5", href: "/safari-pinned-tab.svg" },
    { rel: "shortcut icon", href: "/favicon.ico" },
  ],
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
