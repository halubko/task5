"use client";

import ProductShortCard from "@/widgets/productCards/ui/ProductShortCard";
import type { ProductInterface } from "@/widgets/productCards/interfaces/product";
import { useEffect, useState } from "react";
import { getProducts } from "@/widgets/productsList/services/getProducts";
import { NUMBER_OF_USERS_TO_FETCH } from "@/widgets/productsList/constants/constants";
import { useInView } from "react-intersection-observer";
import { Spinner } from "@/shared/ui/shadcn/spinner";

interface IProductsList {
   initialProducts: ProductInterface[];
}

const ProductsList = ({ initialProducts }: IProductsList) => {
   const [products, setProducts] = useState<ProductInterface[]>(initialProducts);
   const [skip, setSkip] = useState(NUMBER_OF_USERS_TO_FETCH);
   const { ref, inView } = useInView();

   const loadMoreUsers = async () => {
      return await getProducts(skip);
   };

   useEffect(() => {
      if (inView) {
         loadMoreUsers().then((apiProducts) => {
            if (apiProducts) {
               setProducts((products) => [...products, ...apiProducts.products]);
               setSkip((skip) => skip + NUMBER_OF_USERS_TO_FETCH);
            }
         });
      }
   }, [inView]);

   return (
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 row-auto p-2 gap-2 max-w-7xl mx-auto">
         {products.map((product) => (
            <ProductShortCard key={product.id} {...product} />
         ))}
         <div ref={ref} className="col-span-full flex justify-center ">
            <Spinner />
         </div>
      </div>
   );
};

export default ProductsList;
