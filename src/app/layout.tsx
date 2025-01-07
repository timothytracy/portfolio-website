import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Bio from "./Bio";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Timothy Tracy",
  description: "Timothy Tracy's software engineering portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-200 dark:bg-neutral-900 lg:overflow-clip`}>

        <div className="flex flex-col md:flex-row w-full h-full min-h-full justify-center bg-neutral-200 dark:bg-neutral-900 overflow-clip">
          <div className="lg:flex max-w-[1400px] ">
            <div className="flex flex-col w-full h-[500px] lg:w-2/5 lg:min-w-[500px] lg:h-full ">
              <Bio></Bio>
            </div>
            <div className='flex flex-col px-8 lg:h-screen lg:w-3/5 overflow-scroll'>
              {children}
              
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
