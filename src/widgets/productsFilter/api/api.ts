import axios, { type AxiosResponse, isAxiosError } from "axios";
import { BASE_URL } from "@/shared/constants/constants";
import { toast } from "sonner";

const axiosInstance = axios.create({
   baseURL: BASE_URL + "products",
});

export const getProductCategoryList = async () => {
   try {
      const response: AxiosResponse<string[]> = await axiosInstance.get("/category-list");
      return response.data;
   } catch (error) {
      if (isAxiosError(error)) {
         toast.error("Loading categories error", { description: error.message });
      }
   }
};
