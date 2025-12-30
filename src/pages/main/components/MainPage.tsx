import ProductsList from "@/widgets/products-list/components/ProductsList";

interface MainPageProps {
   searchParams?: { [key: string]: string | undefined };
}

const MainPage = ({ searchParams }: MainPageProps) => {
   return <ProductsList searchParams={searchParams} />;
};

export default MainPage;
