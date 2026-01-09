import type { ReactNode } from "react";

export interface ProductCategoriesInterface {
   onValueChange: (value: string) => void;
   value: string;
}

export interface SheetItemInterface {
   label: string;
   children: ReactNode;
}

export interface FilterInterface {
   searchValue: string;
   sortValue: string;
   categoryValue: string;
   handleSearchChange: (value: string) => void;
   handleSortChange: (value: string) => void;
   handleCategoryChange: (value: string) => void;
   handleClear: () => void;
   handleCategoryClear: () => void;
}
