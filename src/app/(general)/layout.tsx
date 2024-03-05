import { Navbar } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home Page",
    description: "Generated with love by Vercel",
  };
  
  export default function GeneralLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
            <Navbar/>
            <main className="flex flex-col items-center p-24 ">
                <span className="text-lg">Hola Mundo</span>
                { children }
            </main>
        </>
    );
  }
  