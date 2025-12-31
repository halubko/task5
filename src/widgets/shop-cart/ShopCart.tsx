"use client";

import { useState } from "react";
import { CreditCard, Shield, ShoppingBag } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Separator } from "@/shared/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { cartData } from "@/widgets/shop-cart/data/mock-data";
import { ShopCartItem } from "@/entities/shop-cart/components/ShopCartItem";
import type { CartItem } from "@/widgets/shop-cart/interfaces/ShopCart.Interfaces";

export default function ShopCart() {
   const [items, setItems] = useState<CartItem[]>(cartData.items);
   const [isRemoving, setIsRemoving] = useState<string | null>(null);

   const updateQuantity = (id: string, increment: boolean) => {
      setItems((currentItems) =>
         currentItems.map((item) =>
            item.id === id
               ? { ...item, quantity: Math.max(1, item.quantity + (increment ? 1 : -1)) }
               : item
         )
      );
   };

   const removeItem = (id: string) => {
      setIsRemoving(id);
      setTimeout(() => {
         setItems((currentItems) => currentItems.filter((item) => item.id !== id));
         setIsRemoving(null);
      }, 300);
   };

   const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
   const savings = items.reduce(
      (sum, item) => sum + (item.originalPrice - item.price) * item.quantity,
      0
   );
   const shipping = subtotal >= cartData.shipping.freeThreshold ? 0 : 15.99;
   const total = subtotal + shipping;

   return (
      <div className="container mx-auto max-w-7xl px-4 py-8">
         <div className="mb-8 space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Your Shopping Cart</h1>
            <p className="text-muted-foreground">
               {items.length} {items.length === 1 ? "item" : "items"} in your cart •{" "}
               <span className="text-foreground font-semibold">${subtotal.toFixed(2)}</span>
            </p>
         </div>

         <div className="flex flex-col gap-8 lg:flex-row">
            <div className="flex-1 space-y-6">
               {items.length === 0 ? (
                  <Card className="border-dashed">
                     <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                        <ShoppingBag className="text-muted-foreground/50 mb-4 size-12" />
                        <h3 className="text-lg font-medium">Your cart is empty</h3>
                        <p className="text-muted-foreground mt-1 text-sm">
                           Add some items to get started
                        </p>
                        <Button className="mt-4 cursor-pointer" variant="outline">
                           Continue Shopping
                        </Button>
                     </CardContent>
                  </Card>
               ) : (
                  <ShopCartItem
                     items={items}
                     isRemoving={isRemoving}
                     removeItem={removeItem}
                     updateQuantity={updateQuantity}
                  />
               )}
            </div>

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
         </div>
      </div>
   );
}
