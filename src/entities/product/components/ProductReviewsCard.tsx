import { Card, CardContent } from "@/shared/components/ui/card";
import type { ProductReviewsCardInterface } from "@/entities/product/interfaces/review.interface";
import ProductReview from "@/entities/product/components/ui/ProductReview";

const ProductReviewsCard = ({ reviews }: ProductReviewsCardInterface) => {
   return (
      <Card>
         <CardContent className={"flex flex-col gap-2 max-h-screen overflow-y-auto"}>
            {reviews.map((review, index) => (
               <ProductReview review={review} key={review.comment + index} />
            ))}
         </CardContent>
      </Card>
   );
};

export default ProductReviewsCard;
