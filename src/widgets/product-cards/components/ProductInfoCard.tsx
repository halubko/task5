import {
   Card,
   CardAction,
   CardContent,
   CardDescription,
   CardFooter,
} from "@/shared/components/ui/card";
import { ProductRating } from "@/entities/product/components/ProductRating";
import AddToCartButton from "@/features/add-to-cart/components/AddToCartButton";

interface ProductInfoCardProps {
   description: string;
   rating: number;
   price: number;
}

const ProductInfoCard = ({ description, rating, price }: ProductInfoCardProps) => {
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
