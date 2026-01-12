import { create } from "zustand/react";
import type { InitialStoreInterface } from "@/widgets/productsList/interfaces/productsList";
import type { ProductInterface } from "@/widgets/productCards/interfaces/product";

export const useProductList = create<InitialStoreInterface>((set) => ({
   products: [],
   skip: 0,
   stopLoading: false,

   updateProducts: (products: ProductInterface[]) =>
      set((state) => ({ products: [...state.products, ...products] })),

   updateSkip: (arg: number) => set((state) => ({ skip: state.skip + arg })),

   reset: () => set(() => ({ products: [], skip: 0, stopLoading: false })),

   setStopLoading: (arg: boolean) => set(() => ({ stopLoading: arg })),
}));
