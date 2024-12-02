import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";


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
    <main className="flex min-h-screen w-full">
      
      {children}
      <div className="auth-asset">
        <div>
          <Image src='/icons/auth-image.svg' width={500}  height={500} alt="auth image"/>
        </div>
      </div>

    </main>
  );
}
