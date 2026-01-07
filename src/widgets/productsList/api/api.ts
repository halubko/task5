import axios, { type AxiosResponse } from "axios";
import { BASE_URL } from "@/shared/constants/constants";
import type {
   ProductParamsInterface,
   ProductsListResponseInterface,
} from "@/widgets/productsList/interfaces/productsList";

const axiosInstance = axios.create({
   baseURL: BASE_URL + "products",
});

// Basic get posts. Should be changed for pagination / infinite scroll
export const getAllProducts = async (params: ProductParamsInterface) => {
   const response: AxiosResponse<ProductsListResponseInterface> = await axiosInstance.get("", {
      params,
   });
   return response.data;
};

export const getSearchedProducts = async (params: ProductParamsInterface) => {
   const response: AxiosResponse<ProductsListResponseInterface> = await axiosInstance.get(
      "/search",
      {
         params,
      }
   );
   return response.data;
};

export const getProductsByCategory = async (params: ProductParamsInterface, category: string) => {
   const response: AxiosResponse<ProductsListResponseInterface> = await axiosInstance.get(
      `/category/${category}`,
      {
         params,
      }
   );
   return response.data;
};
