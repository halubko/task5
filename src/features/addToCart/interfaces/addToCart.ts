import type { ButtonHTMLAttributes } from "react";

export interface AddToCartButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
   productId: number;
}
