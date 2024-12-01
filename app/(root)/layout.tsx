
import MobileNav from "@/components/ui/MobileNav";
import Sidebar from "@/components/ui/Sidebar";
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
  const loggedIn = {
    user : 'adrian'
  }
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex size-full flex-col ">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt='logo '/>
          <div>
              <MobileNav user={loggedIn}/>
          </div>
        </div>

      {children}
      </div>
    </main>
  );
}
