import { create } from "zustand/react";
import type { InitialState } from "@/entities/shopCart/interfaces/ShopCart";

export const useShopCartStore = create<InitialState>((set, get) => ({
   cartItems: [],

   updateQuantity: (id: number, quantity: number) =>
      set((state) => {
         const index = state.cartItems.findIndex((el) => el.productId === id);

         if (index > -1) {
            const products = [...state.cartItems];
            products[index] = { ...products[index], quantity };
            return { cartItems: products };
         } else {
            return { cartItems: [...state.cartItems, { productId: id, quantity }] };
         }
      }),

   removeProduct: (id: number) =>
      set((state) => ({
         cartItems: state.cartItems.filter((el) => el.productId !== id),
      })),
}));
