import type { ReactNode } from "react";

export interface ProductCategoriesInterface {
   onValueChange: (value: string) => void;
   value: string;
}

export interface SheetItemInterface {
   label: string;
   children: ReactNode;
}
