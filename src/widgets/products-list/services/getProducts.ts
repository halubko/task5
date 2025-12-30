import { getAllProducts, getSearchedProducts } from "@/widgets/products-list/api/api";

interface GetProductsParams {
   sortBy?: string;
   order?: string;
   q?: string;
   [key: string]: string | undefined;
}

export async function getProducts(searchParams?: GetProductsParams) {
   const params: Record<string, string> = {};

   if (searchParams?.order) {
      params.sortBy = "price";
      params.order = searchParams.order;
   }

   if (searchParams?.q) {
      params.q = searchParams.q;
      return await getSearchedProducts(params);
   } else {
      return await getAllProducts(params);
   }
}
