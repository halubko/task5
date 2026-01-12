"use client";

import { Button } from "@/shared/ui/shadcn/button";
import { useMemo } from "react";
import QuantityChanger from "@/shared/ui/QuantityChanger";
import { useShopCartStore } from "@/entities/shopCart/stores/shopCart";
import type { AddToCartButtonInterface } from "@/features/addToCart/interfaces/addToCart";

const AddToCartButton = ({ productId, ...props }: AddToCartButtonInterface) => {
   const { updateQuantity, cartItems, removeProduct } = useShopCartStore();

   const prevProduct = useMemo(
      () => cartItems.find((el) => el.productId === productId),
      [cartItems, productId]
   );

   const quantity = prevProduct?.quantity || 0;

   if (quantity > 0) {
      const handleOnRemove = () => {
         removeProduct(productId);
      };

      const handleQuantityChange = (newQuantity: number) => {
         if (newQuantity > 0) {
            updateQuantity(productId, newQuantity);
         } else {
            removeProduct(productId);
         }
      };

      return (
         <QuantityChanger
            quantity={quantity}
            setQuantity={handleQuantityChange}
            onRemove={handleOnRemove}
            className="justify-between p-0.5"
         />
      );
   }

   return (
      <Button onClick={() => updateQuantity(productId, 1)} {...props}>
         Add to cart
      </Button>
   );
};

export default AddToCartButton;
