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
import { ListFilterPlus, Search } from "lucide-react";
import SheetItem from "@/widgets/productsFilter/ui/mobile/SheetItem";
import { BasicSelector } from "@/shared/ui/BasicSelector";
import { SORT_VALUES } from "@/widgets/productsFilter/constants/sortValues";
import ProductCategories from "@/widgets/productsFilter/ui/ProductCategories";
import type { FilterInterface } from "@/widgets/productsFilter/interfaces/productFilter";
import { Input } from "@/shared/ui/shadcn/input";
import InputWithIcon from "@/shared/ui/InputWithIcon";

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
         <SheetTrigger asChild className="p-2 backdrop-blur-2xl">
            <Button size="icon">
               <ListFilterPlus />
            </Button>
         </SheetTrigger>
         <SheetContent side="right">
            <SheetHeader>
               <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            {/*for solution aria-describedby warning*/}
            <SheetDescription className="hidden">Filters</SheetDescription>
            <SheetItem label="Search">
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
            </SheetItem>
            <SheetItem label="Price sort by">
               <BasicSelector
                  basicValue="Order"
                  values={SORT_VALUES}
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
