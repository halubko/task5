import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/shared/ui/shadcn/carousel";
import Link from "next/link";
import Image from "next/image";
import type { ProductImagesInterface } from "@/entities/product/interfaces/images";

const ProductImages = ({ images, id, title, forCard = false }: ProductImagesInterface) => {
   return (
      <Carousel className="w-full">
         <CarouselContent className="mx-auto">
            {images.map((image, index) => (
               <CarouselItem key={image}>
                  {forCard ? (
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
                  ) : (
                     <Link href={`/${id}`}>
                        <Image
                           src={image}
                           alt={title}
                           width={300}
                           height={300}
                           loading="eager"
                           className="object-cover mx-auto"
                        />
                     </Link>
                  )}
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

export default ProductImages;
