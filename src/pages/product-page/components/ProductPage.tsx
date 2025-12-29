import ProductImagesCard from "@/entities/product/components/ProductImagesCard";
import { getSingleProduct } from "@/widgets/product-cards/api/api";
import ProductInfoCard from "@/widgets/product-cards/components/ProductInfoCard";
import ProductReviewsCard from "@/entities/product/components/ProductReviewsCard";

interface ProductPageProps {
   productId: number;
}

const ProductPage = async ({ productId }: ProductPageProps) => {
   const product = await getSingleProduct(productId);

   return (
      <div className="w-full flex justify-center gap-2 xs:flex-col">
         <ProductImagesCard {...product} />
         <div className="flex flex-col gap-2">
            <ProductInfoCard {...product} />
            <ProductReviewsCard {...product} />
         </div>
      </div>
   );
};

export default ProductPage;
