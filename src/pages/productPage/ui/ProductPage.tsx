import ProductImagesCard from "@/entities/product/ui/ProductImagesCard";
import { getSingleProduct } from "@/widgets/productCards/api/api";
import ProductInfoCard from "@/widgets/productCards/ui/ProductInfoCard";
import ProductReviewsCard from "@/entities/product/ui/ProductReviewsCard";

interface ProductPageProps {
   productId: number;
}

const ProductPage = async ({ productId }: ProductPageProps) => {
   const product = await getSingleProduct(productId);

   return (
      <div className="w-full flex justify-center gap-2 flex-col md:flex-row px-2">
         <ProductImagesCard {...product} />
         <div className="flex flex-col gap-2">
            <ProductInfoCard {...product} />
            <ProductReviewsCard {...product} />
         </div>
      </div>
   );
};

export default ProductPage;
