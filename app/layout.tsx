import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saras AI Journey Timeline",
  description: "Interactive learning journey timeline",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
