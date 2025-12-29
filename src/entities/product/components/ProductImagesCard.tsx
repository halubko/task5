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
                        <div className="relative w-full h-[500px] md:h-[600px]">
                           <Image
                              src={image}
                              alt={title + index}
                              fill
                              priority={index === 0}
                              className="object-contain"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
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
