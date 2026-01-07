import {
   getAllProducts,
   getProductsByCategory,
   getSearchedProducts,
} from "@/widgets/productsList/api/api";

interface GetProductsParams {
   sortBy?: string;
   order?: string;
   q?: string;
   [key: string]: string | undefined;
}

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
      return await getSearchedProducts(params);
   } else if (searchParams?.category) {
      return await getProductsByCategory(params, searchParams.category);
   } else {
      return await getAllProducts(params);
   }
}
