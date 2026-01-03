import type { CartItem } from "@/widgets/shop-cart/interfaces/ShopCart.Interfaces";

export interface Props {
   items: CartItem[];
   isRemoving: string | null;
   removeItem: (id: string) => void;
   updateQuantity: (id: string, increment: boolean) => void;
}
