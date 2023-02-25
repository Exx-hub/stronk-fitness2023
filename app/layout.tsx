import "./globals.css";
import { Montserrat } from "@next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={`${montserrat.className}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
