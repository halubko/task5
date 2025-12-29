import axios, { type AxiosResponse } from "axios";
import { BASE_URL } from "@/shared/constants/constants";
import type { ProductsListResponseInterface } from "@/widgets/products-list/interfaces/productsList.interfaces";

const axiosInstance = axios.create({
   baseURL: BASE_URL + "products",
});

// Basic get posts. Should be changed for pagination / infinite scroll
export const getAllProducts = async ({ search, sortBy }: { search?: string; sortBy?: string }) => {
   const response: AxiosResponse<ProductsListResponseInterface> = await axiosInstance.get("", {
      params: {
         search,
         sortBy,
      },
   });
   return response.data;
};
