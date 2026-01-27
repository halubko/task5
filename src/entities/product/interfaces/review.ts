import type { TDateISO } from "@/entities/product/interfaces/date";

export interface Review {
   rating: number;
   comment: string;
   date: TDateISO;
   reviewerName: string;
}

export interface ProductReviewsCardInterface {
   reviews: Review[];
}

export interface ProductSingleReviewInterface {
   review: Review;
}
