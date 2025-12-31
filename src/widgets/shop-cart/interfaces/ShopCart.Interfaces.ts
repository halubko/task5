export interface CartItem {
   id: string;
   name: string;
   color: string;
   size: string;
   price: number;
   originalPrice: number;
   quantity: number;
   image: string;
   estimatedDelivery: string;
}

export interface CartData {
   items: CartItem[];
   shipping: {
      freeThreshold: number;
      message: string;
   };
}
