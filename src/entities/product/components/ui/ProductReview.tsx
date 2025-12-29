import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/shared/components/ui/card";
import type { ReviewInterface } from "@/entities/product/interfaces/review.interface";
import { formatDate } from "@/entities/product/utils/formatters";
import { ProductRating } from "@/entities/product/components/ProductRating";

interface ProductReviewProps {
   review: ReviewInterface;
}

const ProductReview = ({ review }: ProductReviewProps) => {
   const { reviewerName, date, comment, rating } = review;
   return (
      <Card>
         <CardHeader className="flex justify-between">
            <CardTitle>{reviewerName}</CardTitle>
            <ProductRating rating={rating} />
         </CardHeader>
         <CardContent>
            <CardDescription>{comment}</CardDescription>
         </CardContent>
         <CardFooter>{formatDate(date)}</CardFooter>
      </Card>
   );
};

export default ProductReview;
