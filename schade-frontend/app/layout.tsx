import type { Metadata } from "next";
import { Chivo } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import Newsletter from "@/components/newsletter";

const font = Chivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "schade",
  description: "Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={font.className}>
        <ModalProvider/>
        <ToastProvider/>
        <Navbar/>
        <div>
          {children}
        </div>
        <Newsletter/>
        <Footer/>
      </body>
    </html>
  );
}
