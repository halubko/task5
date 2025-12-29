"use client";

import { Label } from "@/shared/components/ui/label";
import type { ReactNode } from "react";
import { SidebarGroup } from "@/shared/components/ui/sidebar";

interface SidebarItemProps {
   label: string;
   children: ReactNode;
}

const SidebarItem = ({ label, children }: SidebarItemProps) => (
   <div className="w-full max-w-sm space-y-2 p-2">
      <Label htmlFor="search-input">{label}</Label>
      <div className="relative">{children}</div>
   </div>
);

export default SidebarItem;
