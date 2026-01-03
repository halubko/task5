import type { CartItem } from "@/widgets/shop-cart/interfaces/ShopCart.Interfaces";
import { cartData } from "@/widgets/shop-cart/data/mock-data";

export function calculateCartTotals(items: CartItem[]) {
   const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
   const savings = items.reduce(
      (sum, item) => sum + (item.originalPrice - item.price) * item.quantity,
      0
   );
   const shipping = subtotal >= cartData.shipping.freeThreshold ? 0 : 15.99;
   const total = subtotal + shipping;

   return { subtotal, savings, shipping, total };
}
