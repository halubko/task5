"use client";

import { cartData } from "@/widgets/shopCart/data/mockData";
import { ShopCartItem } from "@/entities/shopCart/ui/ShopCartItem";
import { ShopCartInfo } from "@/widgets/shopCart/ui/ShopCartInfo";
import { useCartActions } from "@/widgets/shopCart/hooks/useCartActions";
import { calculateCartTotals } from "@/widgets/shopCart/hooks/useSumCalculation";
import { EmptyShopCart } from "@/widgets/shopCart/ui/EmptyShopCart";

export default function ShopCart() {
   const { items, isRemoving, updateQuantity, removeItem } = useCartActions(cartData.items);
   const { subtotal } = calculateCartTotals(cartData.items);

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
                  <EmptyShopCart />
               ) : (
                  <ShopCartItem
                     items={items}
                     isRemoving={isRemoving}
                     removeItem={removeItem}
                     updateQuantity={updateQuantity}
                  />
               )}
            </div>
            <ShopCartInfo items={items} />
         </div>
      </div>
   );
}
