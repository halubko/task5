import type { Metadata } from "next";
import { Toaster } from "@/shared/components/ui/sonner";
import type { ReactNode } from "react";
import "@/app/styles/globals.css";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
   title: "Shop",
   description: "Internet-shop, shop, marketplace, market",
};

export default function RootLayout({ children }: { children: ReactNode }) {
   return (
      <html lang="en">
         <body>
            <ThemeProvider
               attribute="class"
               defaultTheme="system"
               enableSystem
               disableTransitionOnChange
            >
               {children}
               <Toaster position="top-right" />
            </ThemeProvider>
         </body>
      </html>
   );
}
