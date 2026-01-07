import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/shared/ui/shadcn/card";
import type { ProductSingleReviewInterface } from "@/entities/product/interfaces/review";
import { formatDate } from "@/entities/product/utils/formatters";
import { ProductRating } from "@/entities/product/ui/ProductRating";

const ProductReview = ({ review }: ProductSingleReviewInterface) => {
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
