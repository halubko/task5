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

const ProductCard = ({ title, price, description, images, rating }: ProductInterface) => {
   return (
      <Card>
         <CardHeader>
            <CardTitle>{title}</CardTitle>
         </CardHeader>
         <CardContent>
            <Carousel className="w-full">
               <CarouselContent className="mx-auto">
                  {images.map((image) => (
                     <CarouselItem key={image}>
                        <Image
                           src={image}
                           alt={title}
                           width={300}
                           height={300}
                           className="object-cover mx-auto"
                        />
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
            <CardDescription className="text-ellipsis overflow-hidden line-clamp-3">
               {description}
            </CardDescription>
            <div className="w-full flex justify-between">
               <span className="mt-2">Price: {price}$</span>
               <span className="mt-2 flex gap-1">Rating: {<RatingStars rating={rating} />}</span>
            </div>
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
