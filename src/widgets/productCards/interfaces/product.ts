import type { Review } from "@/entities/product/interfaces/review";

export interface ProductInterface {
   id: number;
   title: string;
   description: string;
   price: number;
   rating: number;
   images: string[];
   reviews: Review[];
}

export interface ProductInfoCardInterface {
   description: string;
   rating: number;
   price: number;
}
