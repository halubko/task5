export interface Review {
   rating: number;
   comment: string;
   date: string;
   reviewerName: string;
}

export interface ProductReviewsCardInterface {
   reviews: Review[];
}

export interface ProductSingleReviewInterface {
   review: Review;
}
