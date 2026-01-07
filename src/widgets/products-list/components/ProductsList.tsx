import ProductShortCard from "@/widgets/productCards/ui/ProductShortCard";
import { getProducts } from "@/widgets/products-list/services/getProducts";
import type { ProductsListInterface } from "@/widgets/products-list/interfaces/productsList.interfaces";

const ProductsList = async ({ searchParams }: ProductsListInterface) => {
   const { products } = await getProducts(searchParams);

   return (
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 row-auto p-2 gap-2">
         {products.map((product) => (
            <ProductShortCard key={product.id} {...product} />
         ))}
      </div>
   );
};

export default ProductsList;
