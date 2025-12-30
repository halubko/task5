import type { ProductInterface } from "@/entities/product/interfaces/product.interfaces";

export interface ProductsListResponseInterface {
   products: ProductInterface[];
   total: number;
   skip: number;
   limit: number;
}
