import {
   Card,
   CardAction,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/shared/components/ui/card";
import type { ProductInterface } from "@/entities/product/interfaces/product.interfaces";
import { Button } from "@/shared/components/ui/button";
import Image from "next/image";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/shared/components/ui/carousel";
import { RatingStars } from "@/shared/components/RatingStars";
import Link from "next/link";

const ProductCard = ({ title, price, description, images, rating, id }: ProductInterface) => {
   return (
      <Card>
         <CardHeader>
            <Link href={`/${id}`}>
               <CardTitle>{title}</CardTitle>
            </Link>
         </CardHeader>
         <CardContent>
            <Carousel className="w-full">
               <CarouselContent className="mx-auto">
                  {images.map((image) => (
                     <CarouselItem key={image}>
                        <Link href={`/${id}`}>
                           <Image
                              src={image}
                              alt={title}
                              width={300}
                              height={300}
                              className="object-cover mx-auto"
                           />
                        </Link>
                     </CarouselItem>
                  ))}
               </CarouselContent>
               {images.length > 1 && (
                  <>
                     <CarouselPrevious className="left-2" />
                     <CarouselNext className="right-2" />
                  </>
               )}
            </Carousel>
            <Link href={`/${id}`}>
               <CardDescription className="text-ellipsis overflow-hidden line-clamp-3">
                  {description}
               </CardDescription>
               <div className="w-full flex justify-between">
                  <span className="mt-2">Price: {price}$</span>
                  <span className="mt-2 flex gap-1">Rating: {<RatingStars rating={rating} />}</span>
               </div>
            </Link>
         </CardContent>
         <CardFooter className="flex justify-center items-center">
            <CardAction className="w-full">
               <Button className="w-full">Add to cart</Button>
            </CardAction>
         </CardFooter>
      </Card>
   );
};

export default ProductCard;
