import type { Metadata } from "next";
import { Toaster } from "@/shared/ui/shadcn/sonner";
import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import "@/app/styles/global.css";

export const metadata: Metadata = {
   title: "Shop",
   description: "Internet-shop, shop, marketplace, market",
};

export default function RootLayout({ children }: { children: ReactNode }) {
   return (
      <html lang="en" suppressHydrationWarning>
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
