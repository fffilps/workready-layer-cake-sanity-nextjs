import "@/app/globals.css";
import { Metadata } from "next";
import { SanityLive } from '@/sanity/lib/live'
import { Header } from "@/components/Header";


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
    <>
      <Header />
      {children}
      <SanityLive />
    </>
  );
}