import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/shadcn/card";
import type { ProductInterface } from "@/widgets/productCards/interfaces/product";
import ProductImages from "./ProductImages";

const ProductImagesCard = ({ title, images, id }: ProductInterface) => {
   return (
      <Card className="w-full max-w-4xl">
         <CardHeader>
            <CardTitle>{title}</CardTitle>
         </CardHeader>
         <CardContent>
            <ProductImages title={title} images={images} id={id} forCard />
         </CardContent>
      </Card>
   );
};

export default ProductImagesCard;
