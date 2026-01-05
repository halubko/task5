"use client";

import { Star } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { forwardRef, useState } from "react";
import type { ProductRatingInterface } from "@/entities/product/interfaces/rating.interfaces";

export const ProductRating = forwardRef<HTMLDivElement, ProductRatingInterface>(
   ({ rating, onRate, editable = false, ...props }, ref) => {
      const [hoverRating, setHoverRating] = useState(0);
      const currentRating = hoverRating || rating;

      return (
         <div
            className="flex items-center gap-1"
            ref={ref}
            {...props}
            onMouseLeave={() => editable && setHoverRating(0)}
         >
            {[...Array(5)].map((_, i) => {
               const ratingValue = i + 1;
               return (
                  <Star
                     key={i}
                     size={18}
                     className={cn(
                        "cursor-pointer transition-colors",
                        currentRating >= ratingValue
                           ? "text-yellow-400 fill-yellow-400"
                           : "text-muted-foreground fill-muted-foreground opacity-50"
                     )}
                     onClick={() => onRate?.(ratingValue)}
                     onMouseEnter={() => editable && setHoverRating(ratingValue)}
                  />
               );
            })}
         </div>
      );
   }
);

ProductRating.displayName = "ProductRating";
