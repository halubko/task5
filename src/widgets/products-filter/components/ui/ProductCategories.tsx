import { RadioGroup, RadioGroupItem } from "@/shared/components/ui/radio-group";
import { getProductCategoryList } from "@/widgets/products-filter/api/api";
import { useEffect, useState } from "react";
import { Label } from "@/shared/components/ui/label";

interface ProductCategoriesProps {
   onValueChange: (value: string) => void;
   value: string;
}

const ProductCategories = ({ onValueChange, value }: ProductCategoriesProps) => {
   const [categories, setCategories] = useState<string[]>();

   useEffect(() => {
      // Should be cached (sending request every sheet open). SSG?
      getProductCategoryList().then((categories) => {
         setCategories(categories);
      });
   }, []);

   if (!categories) {
      return <div>Error loading categories</div>;
   }

   return (
      <RadioGroup value={value} onValueChange={onValueChange}>
         {categories.map((category) => (
            <div className="flex items-center gap-2" key={category}>
               <RadioGroupItem value={category} id={category} />
               <Label htmlFor={category}>{category}</Label>
            </div>
         ))}
      </RadioGroup>
   );
};

export default ProductCategories;
