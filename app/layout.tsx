import type { Metadata } from "next";
import Image from "next/image";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saras AI Journey",
  description: "Interactive learning journey",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[url('/assets/ai-journey-bg.svg')] bg-[length:100%]">
        <div className="px-8 py-4">
          <Image
            src="/assets/logo.svg"
            alt="Saras AI"
            width={120}
            height={40}
            className="mb-8"
          />
          {children}
        </div>
      </body>
    </html>
  );
}
