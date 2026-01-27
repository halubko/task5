export interface BasicSelectorInterface {
   basicValue: string;
   values: string[];
   value?: string;
   onValueChange?: (value: string) => void;
   className?: string;
}
