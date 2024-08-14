import Hero from "@/components/Hero/Hero";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
});
export const metadata = {
  title: "Anime Vault",
  description: "The website from watching and explorer anime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Hero>{children}</Hero>
      </body>
    </html>
  );
}
