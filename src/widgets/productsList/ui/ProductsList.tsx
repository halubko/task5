"use client";

import ProductShortCard from "@/widgets/productCards/ui/ProductShortCard";
import type { ProductInterface } from "@/widgets/productCards/interfaces/product";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { getProducts } from "@/widgets/productsList/services/getProducts";
import { NUMBER_OF_PRODUCTS_TO_FETCH } from "@/widgets/productsList/constants/constants";
import { useInView } from "react-intersection-observer";
import { Spinner } from "@/shared/ui/shadcn/spinner";
import { useSearchParams } from "next/navigation";
import { useProductList } from "@/widgets/productsList/store/productList";
import NotFoundCard from "@/entities/product/ui/NotFoundCard";

interface IProductsList {
   initialProducts: ProductInterface[];
}

const ProductsList = ({ initialProducts }: IProductsList) => {
   const { products, skip, updateProducts, updateSkip, reset, setStopLoading, stopLoading } =
      useProductList();
   const { ref, inView } = useInView();
   const searchParams = useSearchParams();
   const searchParamsString = searchParams?.toString() ?? "";
   const params = useMemo(
      () => (searchParams ? Object.fromEntries(searchParams.entries()) : {}),
      [searchParams]
   );
   const prevSearchParams = useRef(searchParamsString);

   useEffect(() => {
      if (prevSearchParams.current !== searchParamsString) {
         reset();
         getProducts(0, params).then((response) => {
            if (response) {
               updateProducts(response.products);
               updateSkip(NUMBER_OF_PRODUCTS_TO_FETCH);
            }
         });
         prevSearchParams.current = searchParamsString;
      } else if (!searchParamsString && products.length === 0) {
         updateProducts(initialProducts);
         updateSkip(NUMBER_OF_PRODUCTS_TO_FETCH);
      }
   }, [initialProducts, params, reset, searchParamsString, updateProducts, updateSkip]);

   const loadMoreProducts = useCallback(async () => {
      if (searchParams) {
         const response = await getProducts(skip, params);
         if (response) {
            updateProducts(response.products);
            updateSkip(NUMBER_OF_PRODUCTS_TO_FETCH);
            if (response.products.length < NUMBER_OF_PRODUCTS_TO_FETCH) {
               setStopLoading(true);
            }
         } else {
            setStopLoading(true);
         }
      }
   }, [params, searchParams, skip, updateProducts, updateSkip, setStopLoading]);

   useEffect(() => {
      if (inView && skip > 0) {
         loadMoreProducts();
      }
   }, [inView, loadMoreProducts, skip]);

   return (
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 row-auto p-2 gap-2 max-w-7xl mx-auto">
         {products.length > 0 ? (
            products.map((product) => <ProductShortCard key={product.id} {...product} />)
         ) : (
            <NotFoundCard />
         )}
         {products.length > 0 && !stopLoading && (
            <div ref={ref} className="col-span-full flex justify-center ">
               <Spinner />
            </div>
         )}
      </div>
   );
};

export default ProductsList;
