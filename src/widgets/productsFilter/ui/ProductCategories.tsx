import { RadioGroup, RadioGroupItem } from "@/shared/ui/shadcn/radio-group";
import { getProductCategoryList } from "@/widgets/productsFilter/api/api";
import { useEffect, useState } from "react";
import { Label } from "@/shared/ui/shadcn/label";
import { capitalizeFirstLetter } from "@/shared/utils/helpers";
import { Spinner } from "@/shared/ui/shadcn/spinner";
import type { ProductCategoriesInterface } from "@/widgets/productsFilter/interfaces/productFilter";

const ProductCategories = ({ onValueChange, value }: ProductCategoriesInterface) => {
   const [categories, setCategories] = useState<string[]>();

   useEffect(() => {
      // Should be cached (sending request every sheet open). SSG?
      getProductCategoryList().then((categories) => {
         setCategories(categories);
      });
   }, []);

   if (!categories) {
      return <Spinner />;
   }

   return (
      <RadioGroup value={value} onValueChange={onValueChange}>
         {categories.map((category) => (
            <div className="flex items-center gap-2" key={category}>
               <RadioGroupItem value={category} id={category} />
               <Label htmlFor={category}>{capitalizeFirstLetter(category)}</Label>
            </div>
         ))}
      </RadioGroup>
   );
};

export default ProductCategories;
