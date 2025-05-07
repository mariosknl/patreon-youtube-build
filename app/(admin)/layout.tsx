import Header from "@/components/Header";
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Patreon Youtube Clone Clerk - Admin",
  description: "Patreon Youtube Clerk - Admin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
