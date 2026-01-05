"use client";

import { Label } from "@/shared/components/ui/label";
import { Separator } from "@/shared/components/ui/separator";
import type { SheetItemInterface } from "@/widgets/products-filter/interfaces/productFilter.interfaces";

const SheetItem = ({ label, children }: SheetItemInterface) => (
   <>
      <div className="w-full max-w-sm space-y-2 p-2">
         <Label htmlFor="search-input">{label}</Label>
         <div className="relative">{children}</div>
      </div>
      <Separator />
   </>
);

export default SheetItem;
