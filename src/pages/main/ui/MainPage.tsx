import ProductsList from "@/widgets/productsList/ui/ProductsList";
import type { MainPageInterface } from "@/pages/main/interfaces/mainPage";

const MainPage = ({ searchParams }: MainPageInterface) => {
   return <ProductsList searchParams={searchParams} />;
};

export default MainPage;
