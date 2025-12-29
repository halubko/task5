import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/widgets/header/components/Header";

export const metadata: Metadata = {
   title: "Shop",
};

export default function MainLayout({ children }: { children: ReactNode }) {
   return (
      <>
         <Header isMainPage />
         <main>{children}</main>
      </>
   );
}
