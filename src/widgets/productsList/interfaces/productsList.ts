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
