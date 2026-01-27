import InputWithIcon from "@/shared/ui/InputWithIcon";
import { ListOrdered, Search } from "lucide-react";
import { Input } from "@/shared/ui/shadcn/input";
import { BasicSelector } from "@/shared/ui/BasicSelector";
import { sortValues } from "@/widgets/productsFilter/data/sortValues";
import ProductsFiltersCategoriesCard from "@/widgets/productsFilter/ui/desktop/ProductsFiltersCategoriesCard";
import { Button } from "@/shared/ui/shadcn/button";
import type { FilterInterface } from "@/widgets/productsFilter/interfaces/productFilter";

const ProductsDesktopFilters = ({
   sortValue,
   categoryValue,
   searchValue,
   handleSearchChange,
   handleSortChange,
   handleCategoryChange,
   handleClear,
   handleCategoryClear,
}: FilterInterface) => {
   return (
      <div className="max-w-xs w-full mt-2 flex flex-col gap-2 h-[90vh] sticky top-14">
         <InputWithIcon Icon={Search}>
            <Input
               className="bg-background pl-9"
               id="search-input"
               placeholder="Search..."
               type="search"
               value={searchValue}
               onChange={(e) => handleSearchChange(e.target.value)}
            />
         </InputWithIcon>
         <InputWithIcon Icon={ListOrdered}>
            <BasicSelector
               className="pl-9"
               basicValue="Order"
               values={sortValues}
               value={sortValue}
               onValueChange={handleSortChange}
            />
         </InputWithIcon>
         <ProductsFiltersCategoriesCard
            value={categoryValue}
            onValueChange={handleCategoryChange}
         />
         <Button onClick={handleCategoryClear} className="mt-2 w-full" variant="outline">
            Clear category
         </Button>
         <Button onClick={handleClear}>Clear all</Button>
      </div>
   );
};

export default ProductsDesktopFilters;
