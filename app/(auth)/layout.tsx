import type { Metadata } from "next";
import localFont from "next/font/local";


export const metadata: Metadata = {
  title: "Horizon",
  description: "horizon is a  modern banking platform for everyone",
  icons : {
    icon : '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
    </main>
  );
}
