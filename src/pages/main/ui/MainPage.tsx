import ProductsList from "@/widgets/productsList/ui/ProductsList";
import type { MainPageInterface } from "@/pages/main/interfaces/mainPage";
import { getProducts } from "@/widgets/productsList/services/getProducts";
import { ProductsFilter } from "@/widgets/productsFilter/ui/ProductsFilter";

const MainPage = async ({ searchParams }: MainPageInterface) => {
   const initProducts = await getProducts(0, searchParams);

   if (!initProducts) {
      return "no products found";
   }

   return (
      <div className="grid grid-cols-1 md:grid-cols-5 max-w-360 mx-auto">
         <ProductsFilter />
         <div className="md:col-span-4 col-span-5">
            <ProductsList initialProducts={initProducts.products} />
         </div>
      </div>
   );
};

export default MainPage;
