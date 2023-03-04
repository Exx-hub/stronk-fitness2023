import "./globals.css";
import { Montserrat, Permanent_Marker } from "@next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Provider from "./components/Provider";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={`${montserrat.className}`}>
        <Provider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
