import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/shared/ui/shadcn/select";
import { capitalizeFirstLetter } from "@/shared/utils/helpers";

interface BasicSelectorProps {
   basicValue: string;
   values: string[];
   value?: string;
   onValueChange?: (value: string) => void;
}

export function BasicSelector({ basicValue, values, value, onValueChange }: BasicSelectorProps) {
   const handleValueChange = (selectedValue: string) => {
      if (onValueChange) {
         if (selectedValue === "none") {
            onValueChange("");
         } else {
            onValueChange(selectedValue);
         }
      }
   };

   return (
      <Select value={value} onValueChange={handleValueChange}>
         <SelectTrigger className="w-full">
            <SelectValue placeholder={basicValue} />
         </SelectTrigger>
         <SelectContent>
            <SelectGroup>
               <SelectItem value="none">None</SelectItem>
               {values.map((value) => (
                  <SelectItem value={value} key={value}>
                     {capitalizeFirstLetter(value)}
                  </SelectItem>
               ))}
            </SelectGroup>
         </SelectContent>
      </Select>
   );
}
