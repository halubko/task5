import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export const useProductsFilters = () => {
   const router = useRouter();
   const pathname = usePathname();

   const preSearchParams = useSearchParams();
   const searchParams = useMemo(() => preSearchParams ?? new URLSearchParams(), [preSearchParams]);

   const [searchValue, setSearchValue] = useState<string>(searchParams.get("q") || "");
   const [sortValue, setSortValue] = useState(searchParams.get("order") || "");
   const [categoryValue, setCategoryValue] = useState<string>(searchParams.get("category") || "");

   const createQueryString = useCallback(
      (newParams: { [key: string]: string }) => {
         const params = new URLSearchParams(searchParams.toString());

         Object.entries(newParams).forEach(([name, value]) => {
            if (value) {
               params.set(name, value);
            } else {
               params.delete(name);
            }
         });

         return params.toString();
      },
      [searchParams]
   );

   const handleSortChange = (value: string) => {
      const queryString = createQueryString({ order: value });
      setSortValue(value);
      router.push(`${pathname}?${queryString}`);
   };

   const debouncedSearch = useDebouncedCallback((value: string) => {
      const queryString = createQueryString({ q: value, category: "" });
      router.push(`${pathname}?${queryString}`);
   }, 300);

   const handleSearchChange = (value: string) => {
      setSearchValue(value);

      if (value && categoryValue) {
         setCategoryValue("");
      }

      debouncedSearch(value);
   };

   const handleCategoryChange = (value: string) => {
      const queryString = createQueryString({ category: value, q: "" });
      setCategoryValue(value);
      setSearchValue("");
      router.push(`${pathname}?${queryString}`);
   };

   const handleCategoryClear = () => {
      const queryString = createQueryString({ category: "" });
      setCategoryValue("");
      router.push(`${pathname}?${queryString}`);
   };

   const handleClear = () => {
      setSearchValue("");
      setCategoryValue("");
      setSortValue("");
      router.push("/");
   };

   return {
      categoryValue,
      sortValue,
      searchValue,
      handleCategoryChange,
      handleSortChange,
      handleSearchChange,
      handleClear,
      handleCategoryClear,
   };
};
