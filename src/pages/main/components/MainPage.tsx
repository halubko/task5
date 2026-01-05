import ProductsList from "@/widgets/products-list/components/ProductsList";
import type { MainPageInterface } from "@/pages/main/interfaces/mainPage.interfaces";

const MainPage = ({ searchParams }: MainPageInterface) => {
   return <ProductsList searchParams={searchParams} />;
};

export default MainPage;
