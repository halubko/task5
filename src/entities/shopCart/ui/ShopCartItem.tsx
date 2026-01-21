import { Card, CardFooter } from "@/shared/ui/shadcn/card";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/shadcn/button";
import type { Props } from "@/entities/shopCart/interfaces/ShopCart";
import { Minus, Package, Plus, Trash2 } from "lucide-react";
import Image from "next/image";

export const ShopCartItem = ({ items, isRemoving, removeItem, updateQuantity }: Props) => {
   return (
      <>
         {items.map((item) => (
            <Card
               key={item.id}
               className={cn("gap-0 overflow-hidden py-0", {
                  "opacity-50": isRemoving === item.id,
               })}
            >
               <div className="flex flex-col sm:flex-row">
                  <div className="relative h-auto w-full sm:w-40">
                     <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="h-36 w-full object-cover object-center"
                     />
                  </div>

                  <div className="flex-1 p-4">
                     <div className="flex items-start justify-between">
                        <div>
                           <h3 className="text-foreground text-lg font-medium">{item.name}</h3>
                           <p className="text-muted-foreground mt-1 text-sm">
                              {item.color} {item.size && `• ${item.size}`}
                           </p>
                        </div>
                        <Button
                           variant="ghost"
                           size="icon"
                           className="text-muted-foreground hover:bg-destructive/10 hover:text-destructive size-8 cursor-pointer"
                           onClick={() => removeItem(item.id)}
                        >
                           <Trash2 className="size-4" />
                        </Button>
                     </div>

                     <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                           <Button
                              variant="outline"
                              size="icon"
                              className="size-8 cursor-pointer"
                              onClick={() => updateQuantity(item.id, false)}
                              disabled={item.quantity <= 1}
                           >
                              <Minus className="size-3" />
                           </Button>
                           <span className="w-8 text-center text-sm font-medium">
                              {item.quantity}
                           </span>
                           <Button
                              variant="outline"
                              size="icon"
                              className="size-8 cursor-pointer"
                              onClick={() => updateQuantity(item.id, true)}
                           >
                              <Plus className="size-3" />
                           </Button>
                        </div>

                        <div className="text-end">
                           <p className="text-lg font-semibold">
                              ${(item.price * item.quantity).toFixed(2)}
                           </p>
                           {item.originalPrice > item.price && (
                              <p className="text-muted-foreground text-xs line-through">
                                 ${item.originalPrice.toFixed(2)}
                              </p>
                           )}
                        </div>
                     </div>
                  </div>
               </div>

               <CardFooter className="bg-muted/20 border-t px-4 py-2!">
                  <div className="text-muted-foreground flex items-center text-sm">
                     <Package className="me-2 size-4" />
                     <span>Estimated delivery: {item.estimatedDelivery}</span>
                  </div>
               </CardFooter>
            </Card>
         ))}
      </>
   );
};
