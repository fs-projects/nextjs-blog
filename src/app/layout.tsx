import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./providers";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <div className="container mx-auto px-4 max-w-6xl">
            <Provider>
              <Header />
              {children}
            </Provider>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
