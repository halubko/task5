import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/shadcn/card";
import { Separator } from "@/shared/ui/shadcn/separator";
import { Button } from "@/shared/ui/shadcn/button";
import { CreditCard, Shield, ShoppingBag } from "lucide-react";
import type { CartInfo } from "@/widgets/shopCart/interfaces/ShopCart";
import { calculateCartTotals } from "@/widgets/shopCart/hooks/useSumCalculation";

export const ShopCartInfo = ({ items }: CartInfo) => {
   const { subtotal, savings, shipping, total } = calculateCartTotals(items);

   return (
      <>
         <div className="w-full space-y-4 lg:w-96">
            <Card className="sticky top-4 gap-0">
               <CardHeader className="pb-4">
                  <CardTitle className="text-xl">Order Summary</CardTitle>
               </CardHeader>
               <CardContent className="space-y-4">
                  <div className="space-y-3">
                     <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                     </div>
                     <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Shipping</span>
                        <span className={shipping === 0 ? "text-green-600" : ""}>
                           {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                        </span>
                     </div>
                     {savings > 0 && (
                        <div className="flex justify-between text-sm font-medium">
                           <span>You Save</span>
                           <span>-${savings.toFixed(2)}</span>
                        </div>
                     )}
                  </div>

                  <Separator className="my-2" />

                  <div className="flex items-center justify-between text-base font-medium">
                     <span>Total</span>
                     <div className="text-end">
                        <p className="text-xl font-bold">${total.toFixed(2)}</p>
                        <p className="text-muted-foreground text-xs">
                           including VAT, if applicable
                        </p>
                     </div>
                  </div>

                  <Button
                     size="lg"
                     className="mt-4 w-full cursor-pointer text-base font-medium"
                     disabled={items.length === 0}
                     variant="outline"
                  >
                     <ShoppingBag className="me-2 size-5" />
                     Proceed to Checkout
                  </Button>

                  <div className="text-muted-foreground flex items-center justify-center gap-2 text-xs">
                     <CreditCard className="size-3.5" />
                     <span>Secure payment with SSL encryption</span>
                  </div>
               </CardContent>
            </Card>

            <Card className="border-dashed py-4">
               <CardContent className="px-4">
                  <div className="flex items-start gap-3">
                     <div className="flex size-10 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                        <Shield className="size-5" />
                     </div>
                     <div>
                        <h4 className="font-medium">Secure Checkout</h4>
                        <p className="text-muted-foreground mt-1 text-xs">
                           Your payment information is encrypted and secure.
                        </p>
                     </div>
                  </div>
               </CardContent>
            </Card>
         </div>
      </>
   );
};
