import React from "react";
import { Button } from "@/shared/ui/shadcn/button";
import { Minus, Plus } from "lucide-react";

interface QuantityChangerInterface {
   quantity: number;
   setQuantity: (quantity: number) => void;
   className?: string;
   onRemove: () => void;
}

const QuantityChanger = ({
   quantity,
   setQuantity,
   className,
   onRemove,
}: QuantityChangerInterface) => {
   const handleMinus = () => {
      if (quantity > 1) {
         setQuantity(quantity - 1);
      } else {
         onRemove();
      }
   };

   const handlePlus = () => {
      setQuantity(quantity + 1);
   };

   return (
      <div className={"flex items-center gap-2 " + className}>
         <Button
            variant="outline"
            size="icon"
            className="size-8 cursor-pointer"
            onClick={handleMinus}
         >
            <Minus className="size-3" />
         </Button>
         <span className="w-8 text-center text-sm font-medium">{quantity}</span>
         <Button
            variant="outline"
            size="icon"
            className="size-8 cursor-pointer"
            onClick={handlePlus}
         >
            <Plus className="size-3" />
         </Button>
      </div>
   );
};

export default QuantityChanger;
