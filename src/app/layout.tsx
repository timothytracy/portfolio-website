import type { Metadata } from "next";
import "./globals.css";
import Bio from "./Bio";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Montserrat } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const montserrat =Montserrat({ subsets: ['latin'], weight:'variable', variable:"--font-montserrat" })

export const metadata: Metadata = {
  title: "Timothy Tracy",
  description: "Timothy Tracy's software engineering portfolio website",
  icons: {icon:'/pug.jpeg'},
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`${montserrat.className} antialiased bg-neutral-900 overflow-scroll lg:overflow-clip`}>
      <main className={`${montserrat.className} `}>
      <Analytics/>
      <SpeedInsights/>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="flex flex-col lg:flex-row w-full h-full min-h-full bg-neutral-900  max-w-[1400px]">
          
            <div className="flex flex-col w-full h-full max-h-screen lg:w-2/5 lg:min-w-[500px] lg:h-screen ">
              <Bio></Bio>
            </div>
            <div className='flex flex-col px-8 lg:h-screen lg:w-3/5 lg:overflow-scroll'>
              {children}
              
            </div>
          
        </div>
        </div>
        </main>
      </body>
    </html>
  );
}
