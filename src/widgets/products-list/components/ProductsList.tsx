import { getAllProducts } from "@/widgets/products-list/api/api";
import ProductCard from "@/entities/product/components/ProductCard";

interface ProductsListProps {
   searchParams?: { [key: string]: string | undefined };
}

const ProductsList = async ({ searchParams }: ProductsListProps) => {
   const { products } = await getAllProducts({
      search: searchParams?.search,
      sortBy: searchParams?.sort,
   });

   return (
      <div className="grid grid-cols-4 row-auto p-2 gap-2">
         {products.map((product) => (
            <ProductCard key={product.id} {...product} />
         ))}
      </div>
   );
};

export default ProductsList;
