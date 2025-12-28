"use client";

import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/shared/components/ui/select";

interface BasicSelectorProps {
   basicValue: string;
   values: string[];
   value?: string;
   onValueChange?: (value: string) => void;
}

export function BasicSelector({ basicValue, values, value, onValueChange }: BasicSelectorProps) {
   const handleValueChange = (selectedValue: string) => {
      if (onValueChange) {
         // Если выбрано "None", передаем undefined чтобы сбросить селектор
         if (selectedValue === "none") {
            onValueChange("");
         } else {
            onValueChange(selectedValue);
         }
      }
   };

   return (
      <Select
         value={value} // value может быть undefined
         onValueChange={handleValueChange}
      >
         <SelectTrigger className="w-full">
            <SelectValue placeholder={basicValue} />
         </SelectTrigger>
         <SelectContent>
            <SelectGroup>
               {/* None с фиксированным значением */}
               <SelectItem value="none">None</SelectItem>
               {values.map((value) => (
                  <SelectItem value={value} key={value}>
                     {value}
                  </SelectItem>
               ))}
            </SelectGroup>
         </SelectContent>
      </Select>
   );
}
