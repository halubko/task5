import { useState, useCallback } from "react";
import type { CartItem } from "@/widgets/shop-cart/interfaces/ShopCart.Interfaces";

export function useCartActions(initialItems: CartItem[]) {
   const [items, setItems] = useState<CartItem[]>(initialItems);
   const [isRemoving, setIsRemoving] = useState<string | null>(null);

   const removeItem = useCallback((id: string) => {
      setIsRemoving(id);
      setTimeout(() => {
         setItems((currentItems) => currentItems.filter((item) => item.id !== id));
         setIsRemoving(null);
      }, 300);
   }, []);

   const updateQuantity = useCallback((id: string, increment: boolean) => {
      setItems((currentItems) =>
         currentItems.map((item) =>
            item.id === id
               ? {
                    ...item,
                    quantity: Math.max(1, item.quantity + (increment ? 1 : -1)),
                 }
               : item
         )
      );
   }, []);

   return {
      items,
      setItems,
      isRemoving,
      updateQuantity,
      removeItem,
   };
}
