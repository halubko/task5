export const formatDate = (date: string) => {
   return new Date(date).toLocaleDateString([], {
      day: "numeric",
      month: "long",
      year: "numeric",
   });
};
