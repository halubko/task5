import { Card, CardContent } from "@/shared/components/ui/card";
import type { ReviewInterface } from "@/entities/product/interfaces/review.interface";
import ProductReview from "@/entities/product/components/ui/ProductReview";
import { cn } from "@/shared/lib/utils";

interface ProductReviewCardProps {
   reviews: ReviewInterface[];
}

const ProductReviewsCard = ({ reviews }: ProductReviewCardProps) => {
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
