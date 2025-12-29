import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import type { ProductInterface } from "@/widgets/product-cards/interfaces/product.interfaces";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/shared/components/ui/carousel";
import Image from "next/image";

const ProductImagesCard = ({ title, images }: ProductInterface) => {
   return (
      <Card className="w-full max-w-4xl">
         <CardHeader>
            <CardTitle>{title}</CardTitle>
         </CardHeader>
         <CardContent>
            <Carousel className="w-full">
               <CarouselContent>
                  {images.map((image, index) => (
                     <CarouselItem key={index} className="flex justify-center items-center">
                        <div className="relative w-full h-[500px]  md:h-[600px]">
                           <Image
                              src={image}
                              alt={title + index}
                              fill
                              sizes="contain"
                              loading="eager"
                              className="object-contain mx-auto max-w-xs md:max-w-xl h-fit"
                           />
                        </div>
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
         </CardContent>
      </Card>
   );
};

export default ProductImagesCard;
