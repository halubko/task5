import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import type { ProductInterface } from "@/widgets/product-cards/interfaces/product.interfaces";
import ProductImagesCardCarousel from "@/entities/product/components/ui/ProductImagesCardCarousel";

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
