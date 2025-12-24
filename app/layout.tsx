import type { Metadata } from "next";
import { Toaster } from "@/shared/components/ui/sonner";
import type { ReactNode } from "react";

export const metadata: Metadata = {
   title: "Shop",
};

export default function RootLayout({ children }: { children: ReactNode }) {
   return (
      <html lang="en">
         <body>
            {children}
            <Toaster position="top-right" />
         </body>
      </html>
   );
}
