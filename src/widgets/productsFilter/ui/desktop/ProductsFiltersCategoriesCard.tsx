import ProductCategories from "@/widgets/productsFilter/ui/ProductCategories";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/shadcn/card";
import type { ProductCategoriesInterface } from "@/widgets/productsFilter/interfaces/productFilter";

const ProductsFiltersCategoriesCard = ({ value, onValueChange }: ProductCategoriesInterface) => {
   return (
      <Card className="overflow-y-auto py-4">
         <CardHeader className="px-2">
            <CardTitle>Categories:</CardTitle>
         </CardHeader>
         <CardContent className="px-2">
            <ProductCategories onValueChange={onValueChange} value={value} />
         </CardContent>
      </Card>
   );
};

export default ProductsFiltersCategoriesCard;
