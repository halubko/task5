import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetFooter,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "@/shared/ui/shadcn/sheet";
import { Button } from "@/shared/ui/shadcn/button";
import { ListFilterPlus } from "lucide-react";
import SheetItem from "@/widgets/productsFilter/ui/mobile/SheetItem";
import ProductSearchInput from "@/entities/product/ui/ProductSearchInput";
import { BasicSelector } from "@/shared/ui/BasicSelector";
import { sortValues } from "@/widgets/productsFilter/data/sortValues";
import ProductCategories from "@/widgets/productsFilter/ui/ProductCategories";
import type { FilterInterface } from "@/widgets/productsFilter/interfaces/productFilter";

const ProductsMobileFilters = ({
   searchValue,
   categoryValue,
   handleSearchChange,
   handleCategoryChange,
   handleSortChange,
   sortValue,
   handleClear,
   handleCategoryClear,
}: FilterInterface) => {
   return (
      <Sheet>
         <SheetTrigger asChild>
            <Button size="icon" className="p-2 backdrop-blur-2xl">
               <ListFilterPlus />
            </Button>
         </SheetTrigger>
         <SheetContent side="left">
            <SheetHeader>
               <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            {/*for solution aria-describedby warning*/}
            <SheetDescription className="hidden">Filters</SheetDescription>
            <SheetItem label="Search">
               <ProductSearchInput
                  searchValue={searchValue}
                  handleSearchChange={handleSearchChange}
               />
            </SheetItem>
            <SheetItem label="Price sort by">
               <BasicSelector
                  basicValue="Order"
                  values={sortValues}
                  value={sortValue}
                  onValueChange={handleSortChange}
               />
            </SheetItem>
            <div className="overflow-y-auto">
               <SheetItem label="Category">
                  <ProductCategories onValueChange={handleCategoryChange} value={categoryValue} />
               </SheetItem>
            </div>
            <SheetFooter className="flex">
               <Button onClick={handleCategoryClear} className="mt-2 w-full" variant="outline">
                  Clear category
               </Button>
               <Button onClick={handleClear}>Clear all</Button>
            </SheetFooter>
         </SheetContent>
      </Sheet>
   );
};

export default ProductsMobileFilters;
