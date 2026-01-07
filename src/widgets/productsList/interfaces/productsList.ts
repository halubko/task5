import type { ProductInterface } from "@/widgets/productCards/interfaces/product";

export interface ProductsListResponseInterface {
   products: ProductInterface[];
   total: number;
   skip: number;
   limit: number;
}

export interface ProductParamsInterface {
   sortBy?: string;
   order?: string;
   q?: string;
   limit?: number;
   skip?: number;
}

export interface InitialStoreInterface {
   products: ProductInterface[];
   skip: number;
   stopLoading: boolean;
   updateProducts: (products: ProductInterface[]) => void;
   updateSkip: (skip: number) => void;
   clearStates: () => void;
   setLoading: (value: boolean) => void;
}
