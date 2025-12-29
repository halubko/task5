"use client";

import { SidebarInput } from "@/shared/components/ui/sidebar";
import SheetItem from "@/widgets/products-filter/components/ui/SheetItem";
import { ListFilterPlus, Search } from "lucide-react";
import { BasicSelector } from "@/shared/components/BasicSelector";
import { sortValues } from "@/widgets/products-filter/data/sort-values";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import { useDebouncedCallback } from "use-debounce";
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "@/shared/components/ui/sheet";
import { Button } from "@/shared/components/ui/button";

export function ProductsFilter() {
   const router = useRouter();
   const pathname = usePathname();

   const preSearchParams = useSearchParams();
   const searchParams = useMemo(() => preSearchParams ?? new URLSearchParams(), [preSearchParams]);

   const searchValue = searchParams.get("search") || "";
   const sortValue = searchParams.get("sort") || "";

   const createQueryString = useCallback(
      (name: string, value: string) => {
         const params = new URLSearchParams(searchParams.toString());

         if (value) {
            params.set(name, value);
         } else {
            params.delete(name);
         }

         return params.toString();
      },
      [searchParams]
   );

   const handleSortChange = (value: string) => {
      const queryString = createQueryString("sort", value);
      router.push(`${pathname}?${queryString}`);
   };

   const handleSearchChange = useDebouncedCallback((value: string) => {
      const queryString = createQueryString("search", value);
      router.push(`${pathname}?${queryString}`);
   }, 500);

   return (
      <Sheet>
         <SheetTrigger asChild>
            <Button variant="outline" size="icon">
               <ListFilterPlus />
            </Button>
         </SheetTrigger>
         <SheetContent side="left">
            <SheetHeader>
               <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            {/*for area-desirability*/}
            <SheetDescription className="hidden">Filters</SheetDescription>
            <SheetItem label="Search">
               <Search className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 text-muted-foreground" />
               <SidebarInput
                  className="bg-background pl-9"
                  id="search-input"
                  placeholder="Search..."
                  type="search"
                  defaultValue={searchValue}
                  onChange={(e) => handleSearchChange(e.target.value)}
               />
            </SheetItem>
            <SheetItem label="Sort by">
               {/* add real data */}
               <BasicSelector
                  basicValue="Sort by"
                  values={sortValues}
                  value={sortValue}
                  onValueChange={handleSortChange}
               />
            </SheetItem>
         </SheetContent>
      </Sheet>
   );
}
