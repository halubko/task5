import { getAllProducts } from "@/widgets/products-list/api/api";
import ProductShortCard from "@/widgets/product-cards/components/ProductShortCard";

interface ProductsListProps {
   searchParams?: { [key: string]: string | undefined };
}

const ProductsList = async ({ searchParams }: ProductsListProps) => {
   const { products } = await getAllProducts({
      search: searchParams?.search,
      sortBy: searchParams?.sort,
   });

   return (
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 row-auto p-2 gap-2">
         {products.map((product) => (
            <ProductShortCard key={product.id} {...product} />
         ))}
      </div>
   );
};

export default ProductsList;
