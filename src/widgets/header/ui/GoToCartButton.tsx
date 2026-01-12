"use client";

import { Button } from "@/shared/ui/shadcn/button";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/shared/ui/shadcn/badge";
import { useShopCartStore } from "@/entities/shopCart/stores/shopCart";

const GoToCartButton = () => {
   const { cartItems } = useShopCartStore();
   return (
      <Link href="/shopCart">
         <Button>
            <ShoppingCartIcon />
            Cart
            <Badge>{cartItems.length}</Badge>
         </Button>
      </Link>
   );
};

export default GoToCartButton;
