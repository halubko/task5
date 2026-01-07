import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/shadcn/card";
import type { ProductInterface } from "@/widgets/productCards/interfaces/product";
import ProductImagesCardCarousel from "@/entities/product/ui/ProductImagesCardCarousel";

const ProductImagesCard = ({ title, images }: ProductInterface) => {
   return (
      <Card className="w-full max-w-4xl">
         <CardHeader>
            <CardTitle>{title}</CardTitle>
         </CardHeader>
         <CardContent>
            <ProductImagesCardCarousel title={title} images={images} />
         </CardContent>
      </Card>
   );
};

export default ProductImagesCard;
