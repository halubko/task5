import ProductPage from "@/pages/product-page/components/ProductPage";

interface ProductPageProps {
   params: Promise<{
      productId: string;
   }>;
}

const Page = async ({ params }: ProductPageProps) => {
   const { productId } = await params;
   return <ProductPage productId={Number(productId)} />;
};

Page.hideSidebar = true;
export default Page;
