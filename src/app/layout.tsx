import { Toaster } from "@/shared/components/ui/sonner";
import type { ReactNode } from "react";
import "./styles/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
   return (
      <html lang="en">
         <head>
            <title>Shop</title>
         </head>
         <body>
            <main>{children}</main>
            <Toaster position="top-right" />
         </body>
      </html>
   );
}
