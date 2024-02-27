import { Inter } from "next/font/google";
import 'remixicon/fonts/remixicon.css'
import "./globals.css";
import Nav from "@/Components/Nav";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Neville Records",
  description: "Raising The Next Generation of Legends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Nav />
      {children}
      <Footer />
      </body>
    </html>
  );
}
