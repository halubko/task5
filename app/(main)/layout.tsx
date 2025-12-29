import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SidebarProvider } from "@/shared/components/ui/sidebar";
import { ProductsFilter } from "@/widgets/products-filter/components/ProductsFilter";
import Header from "@/widgets/header/components/Header";

export const metadata: Metadata = {
   title: "Shop",
};

export default function MainLayout({ children }: { children: ReactNode }) {
   return (
      <SidebarProvider defaultOpen={true}>
         <ProductsFilter />
         <div>
            <Header isMainPage />
            <main>{children}</main>
         </div>
      </SidebarProvider>
   );
}
