import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/shared/ui/shadcn/carousel";
import Image from "next/image";

const ProductImagesCardCarousel = ({ title, images }: { title: string; images: string[] }) => {
   return (
      <Carousel className="w-full">
         <CarouselContent>
            {images.map((image, index) => (
               <CarouselItem key={image} className="flex justify-center items-center">
                  <div className="relative w-full h-125  md:h-150">
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
   );
};

export default ProductImagesCardCarousel;
