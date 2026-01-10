import type { TDateISO } from "@/entities/product/interfaces/date";

export const formatDate = (date: TDateISO) => {
   return new Date(date).toLocaleDateString([], {
      day: "numeric",
      month: "long",
      year: "numeric",
   });
};
