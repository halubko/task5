import {
   Card,
   CardAction,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/shared/components/ui/card";
import type { ProductInterface } from "@/widgets/product-cards/interfaces/product.interfaces";
import { ProductRating } from "@/entities/product/components/ProductRating";
import Link from "next/link";
import AddToCartButton from "@/features/add-to-cart/components/AddToCartButton";
import ProductImages from "@/entities/product/components/ProductImages";

const ProductShortCard = ({ title, price, description, images, rating, id }: ProductInterface) => {
   return (
      <Card>
         <CardHeader>
            <Link href={`/${id}`}>
               <CardTitle>{title}</CardTitle>
            </Link>
         </CardHeader>
         <CardContent>
            <ProductImages images={images} id={id} title={title} />
            <Link href={`/${id}`}>
               <CardDescription className="text-ellipsis overflow-hidden line-clamp-3">
                  {description}
               </CardDescription>
               <div className="w-full flex justify-between">
                  <span className="mt-2">Price: {price}$</span>
                  <span className="mt-2 flex gap-1">{<ProductRating rating={rating} />}</span>
               </div>
            </Link>
         </CardContent>
         <CardFooter className="flex justify-center items-center">
            <CardAction className="w-full">
               <AddToCartButton className="w-full" />
            </CardAction>
         </CardFooter>
      </Card>
   );
};

export default ProductShortCard;
