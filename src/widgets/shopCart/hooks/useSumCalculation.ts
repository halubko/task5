import type { CartItem } from "@/widgets/shopCart/interfaces/ShopCart";
import { cartData } from "@/widgets/shopCart/data/mockData";

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
