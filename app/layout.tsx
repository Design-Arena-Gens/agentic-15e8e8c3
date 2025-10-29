import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3D Portfolio - Interactive Design",
  description: "A stunning 3D portfolio showcasing modern web development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
