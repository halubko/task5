//fake data for cart
import type { CartData } from "@/widgets/shopCart/interfaces/ShopCart";

export const cartData: CartData = {
   items: [
      {
         id: "1",
         name: "Premium Wool Cardigan",
         color: "Sage Green",
         size: "M",
         price: 129.99,
         originalPrice: 159.99,
         quantity: 1,
         image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800",
         estimatedDelivery: "2-4 business days",
      },
      {
         id: "2",
         name: "Designer Leather Bag",
         color: "Vintage Brown",
         size: "One Size",
         price: 299.99,
         originalPrice: 349.99,
         quantity: 1,
         image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800",
         estimatedDelivery: "3-5 business days",
      },
      {
         id: "3",
         name: "Smart Watch Pro",
         color: "Space Grey",
         size: "One Size",
         price: 199.99,
         originalPrice: 249.99,
         quantity: 1,
         image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop",
         estimatedDelivery: "1-3 business days",
      },
   ],
   shipping: {
      freeThreshold: 500,
      message: "Free shipping on orders over $500",
   },
};
