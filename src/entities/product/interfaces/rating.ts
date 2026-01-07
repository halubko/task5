import type { InputHTMLAttributes } from "react";

export interface ProductRatingInterface extends InputHTMLAttributes<HTMLDivElement> {
   rating: number;
   onRate?: (rating: number) => void;
   editable?: boolean;
}
