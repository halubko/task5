"use client";

import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import { cartData } from "@/widgets/shop-cart/data/mock-data";
import { ShopCartItem } from "@/entities/shop-cart/components/ShopCartItem";
import type { CartItem } from "@/widgets/shop-cart/interfaces/ShopCart.Interfaces";
import { ShopCartInfo } from "@/widgets/shop-cart/components/ui/ShopCartInfo";

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

   return (
      <div className="container mx-auto max-w-7xl px-4 py-8">
         <div className="mb-8 space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Your Shopping Cart</h1>
            {/*<p className="text-muted-foreground">*/}
            {/*   {items.length} {items.length === 1 ? "item" : "items"} in your cart •{" "}*/}
            {/*   <span className="text-foreground font-semibold">${subtotal.toFixed(2)}</span>*/}
            {/*</p>*/}
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
            <ShopCartInfo
               items={items}
               isRemoving={isRemoving}
               removeItem={removeItem}
               updateQuantity={updateQuantity}
            />
         </div>
      </div>
   );
}
