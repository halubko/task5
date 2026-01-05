export interface ReviewInterface {
   rating: number;
   comment: string;
   date: string;
   reviewerName: string;
}

export interface ProductReviewsCardInterface {
   reviews: ReviewInterface[];
}

export interface ProductSingleReviewInterface {
   review: ReviewInterface;
}
