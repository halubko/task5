"use client";

import { Label } from "@/shared/components/ui/label";
import type { ReactNode } from "react";
import { Separator } from "@/shared/components/ui/separator";

interface SheetItemProps {
   label: string;
   children: ReactNode;
}

const SheetItem = ({ label, children }: SheetItemProps) => (
   <>
      <div className="w-full max-w-sm space-y-2 p-2">
         <Label htmlFor="search-input">{label}</Label>
         <div className="relative">{children}</div>
      </div>
      <Separator />
   </>
);

export default SheetItem;
