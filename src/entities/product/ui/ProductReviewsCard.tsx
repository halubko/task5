import type { ProductReviewsCardInterface } from "@/entities/product/interfaces/review";
import ProductReview from "@/entities/product/ui/ProductReview";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/shadcn/card";

const ProductReviewsCard = ({ reviews }: ProductReviewsCardInterface) => {
   return (
      <Card className="h-full">
         {reviews ? (
            <CardContent className={"flex flex-col gap-2 max-h-screen overflow-y-auto"}>
               {reviews.map((review, index) => (
                  <ProductReview review={review} key={review.comment + index} />
               ))}
            </CardContent>
         ) : (
            <CardHeader>
               <CardTitle className="text-center">No reviews yet</CardTitle>
               <CardDescription className="text-center">They are yet to be added</CardDescription>
            </CardHeader>
         )}
      </Card>
   );
};

export default ProductReviewsCard;
