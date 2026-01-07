"use client";

import { useIsMobile } from "@/shared/hooks/use-mobile";
import ProductsDesktopFilters from "@/widgets/productsFilter/ui/desktop/ProductsDesktopFilters";
import { useProductsFilters } from "@/widgets/productsFilter/hooks/useProductsFilters";
import ProductsMobileFilters from "@/widgets/productsFilter/ui/mobile/ProductsMobileFilters";

export function ProductsFilter() {
   const filters = useProductsFilters();
   const isMobile = useIsMobile();

   if (!isMobile) {
      return (
         <div className="col-span-1">
            <ProductsDesktopFilters {...filters} />
         </div>
      );
   }

   return (
      <div className="fixed top-14 left-2">
         <ProductsMobileFilters {...filters} />
      </div>
   );
}
