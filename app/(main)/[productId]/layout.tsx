import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
   title: "Shop",
};

export default function MainLayout({ children }: { children: ReactNode }) {
   return (
      <>
         <main>{children}</main>
      </>
   );
}
