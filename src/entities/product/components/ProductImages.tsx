import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/shared/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";

interface ProductImagesProps {
   images: string[];
   id: number;
   title: string;
}

const ProductImages = ({ images, id, title }: ProductImagesProps) => {
   return (
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
                        loading="eager"
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
   );
};

export default ProductImages;
