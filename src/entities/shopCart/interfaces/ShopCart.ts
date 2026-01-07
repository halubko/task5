import type { CartItem } from "@/widgets/shopCart/interfaces/ShopCart";

export interface Props {
   items: CartItem[];
   isRemoving: string | null;
   removeItem: (id: string) => void;
   updateQuantity: (id: string, increment: boolean) => void;
}
