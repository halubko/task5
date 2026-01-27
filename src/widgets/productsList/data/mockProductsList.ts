import type { ProductInterface } from "@/widgets/productCards/interfaces/product";

export const mockProductsList: ProductInterface[] = [
   {
      id: 1,
      title: "Test 1",
      rating: 4,
      reviews: [
         {
            rating: 4,
            comment: "Test 1",
            date: "2024-05-34T34:24:53.124Z",
            reviewerName: "Test 1",
         },
      ],
      description: "Test 1",
      price: 1,
      images: ["Test 1"],
   },
];
