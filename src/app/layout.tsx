import "@/app/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layer Caker",
  description: "Layer Caker",
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