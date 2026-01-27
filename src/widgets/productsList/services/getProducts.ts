import {
   getAllProducts,
   getProductsByCategory,
   getSearchedProducts,
} from "@/widgets/productsList/api/api";
import type { GetProductsParams } from "@/widgets/productsList/interfaces/productsList";

export async function getProducts(skip: number = 0, searchParams?: GetProductsParams) {
   const params: Record<string, string | number> = {
      limit: 12,
      skip: skip,
   };

   if (searchParams?.order) {
      params.sortBy = "price";
      params.order = searchParams.order;
   }

   if (searchParams?.q) {
      params.q = searchParams.q;
   }

   if (searchParams?.q) {
      return await getSearchedProducts(params);
   } else if (searchParams?.category) {
      return await getProductsByCategory(params, searchParams.category);
   } else {
      return await getAllProducts(params);
   }
}
