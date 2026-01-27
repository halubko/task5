"use client";

import { Label } from "@/shared/ui/shadcn/label";
import { Separator } from "@/shared/ui/shadcn/separator";
import type { SheetItemInterface } from "@/widgets/productsFilter/interfaces/productFilter";

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
