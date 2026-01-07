import {
   Card,
   CardAction,
   CardContent,
   CardDescription,
   CardFooter,
} from "@/shared/ui/shadcn/card";
import { ProductRating } from "@/entities/product/ui/ProductRating";
import AddToCartButton from "@/features/addToCart/ui/AddToCartButton";
import type { ProductInfoCardInterface } from "@/widgets/productCards/interfaces/product";

const ProductInfoCard = ({ description, rating, price }: ProductInfoCardInterface) => {
   return (
      <Card className="h-fit">
         <CardContent>
            <CardDescription className="max-w-100 text-justify">{description}</CardDescription>
            <span className="mt-2 flex gap-1">{<ProductRating rating={rating} />}</span>
         </CardContent>
         <CardFooter className="flex flex-col gap-2">
            <h2 className="w-full">Price: {price}$</h2>
            <CardAction className="w-full">
               <AddToCartButton className="w-full" />
            </CardAction>
         </CardFooter>
      </Card>
   );
};

export default ProductInfoCard;
