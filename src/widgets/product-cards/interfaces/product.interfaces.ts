import type { ReviewInterface } from "@/entities/product/interfaces/review.interface";

export interface ProductInterface {
   id: number;
   title: string;
   description: string;
   price: number;
   rating: number;
   images: string[];
   reviews: ReviewInterface[];
}

export interface ProductInfoCardInterface {
   description: string;
   rating: number;
   price: number;
}
