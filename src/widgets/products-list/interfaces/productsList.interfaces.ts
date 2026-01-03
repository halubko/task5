import type { ProductInterface } from "@/widgets/product-cards/interfaces/product.interfaces";

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
}
