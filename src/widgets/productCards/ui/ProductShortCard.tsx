import {
   Card,
   CardAction,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/shared/ui/shadcn/card";
import type { ProductInterface } from "@/widgets/productCards/interfaces/product";
import { ProductRating } from "@/entities/product/ui/ProductRating";
import Link from "next/link";
import AddToCartButton from "@/features/addToCart/ui/AddToCartButton";
import ProductImages from "@/entities/product/ui/ProductImages";

const ProductShortCard = ({ title, price, images, rating, id }: ProductInterface) => {
   return (
      <Card>
         <CardHeader>
            <Link href={`/${id}`}>
               <CardTitle className="text-ellipsis overflow-hidden line-clamp-1">{title}</CardTitle>
            </Link>
         </CardHeader>
         <CardContent>
            <ProductImages images={images} id={id} title={title} />
            <Link href={`/${id}`}>
               <div className="w-full flex justify-between">
                  <div className="mt-2">{price}$</div>
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
