import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "@/app/globals.css";
import Header from "@/app/_component/common/header";
import MainContextComponent from "@/app/_component/common/main-contextApi";
import { cn } from "./_lib";
import Footer from "@/app/_component//common/footer";

const inter = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "codekit",
  description: "codekit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("overflow-x-hidden bg-slate-100", inter.className)}>
        <MainContextComponent>
          <Header />
          {children}
          <Footer />
        </MainContextComponent>
      </body>
    </html>
  );
}
