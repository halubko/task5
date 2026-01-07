import ProductsList from "@/widgets/productsList/ui/ProductsList";
import type { MainPageInterface } from "@/pages/main/interfaces/mainPage";
import { getProducts } from "@/widgets/productsList/services/getProducts";

const MainPage = async ({ searchParams }: MainPageInterface) => {
   const initProducts = await getProducts(0, searchParams);

   if (!initProducts) {
      return "no products found";
   }

   return <ProductsList initialProducts={initProducts.products} />;
};

export default MainPage;
