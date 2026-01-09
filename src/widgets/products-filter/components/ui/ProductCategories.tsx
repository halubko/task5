import { RadioGroup, RadioGroupItem } from "@/shared/components/ui/radio-group";
import { getProductCategoryList } from "@/widgets/products-filter/api/api";
import { useEffect, useState } from "react";
import { Label } from "@/shared/components/ui/label";
import { capitalizeFirstLetter } from "@/shared/utils/helpers";
import { Spinner } from "@/shared/components/ui/spinner";
import type { ProductCategoriesInterface } from "@/widgets/products-filter/interfaces/productFilter.interfaces";

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
