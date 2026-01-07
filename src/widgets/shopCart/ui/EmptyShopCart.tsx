import { Button } from "@/shared/ui/shadcn/button";
import { ShoppingBag } from "lucide-react";
import { Card, CardContent } from "@/shared/ui/shadcn/card";

export const EmptyShopCart = () => {
   return (
      <>
         <Card className="border-dashed">
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
               <ShoppingBag className="text-muted-foreground/50 mb-4 size-12" />
               <h3 className="text-lg font-medium">Your cart is empty</h3>
               <p className="text-muted-foreground mt-1 text-sm">Add some items to get started</p>
               <Button className="mt-4 cursor-pointer" variant="outline">
                  Continue Shopping
               </Button>
            </CardContent>
         </Card>
      </>
   );
};
