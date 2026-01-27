import axios, { type AxiosResponse, isAxiosError } from "axios";
import { BASE_URL } from "@/shared/constants/constants";
import type {
   ProductParamsInterface,
   ProductsListResponseInterface,
} from "@/widgets/productsList/interfaces/productsList";
import { toast } from "sonner";

const axiosInstance = axios.create({
   baseURL: BASE_URL + "products",
});

export const getAllProducts = async (params: ProductParamsInterface) => {
   try {
      const response: AxiosResponse<ProductsListResponseInterface> = await axiosInstance.get("", {
         params,
      });
      return response.data;
   } catch (error) {
      if (isAxiosError(error)) {
         toast.error("Loading products error", { description: error.message });
      }
   }
};

export const getSearchedProducts = async (params: ProductParamsInterface) => {
   try {
      const response: AxiosResponse<ProductsListResponseInterface> = await axiosInstance.get(
         "/search",
         {
            params,
         }
      );
      return response.data;
   } catch (error) {
      if (isAxiosError(error)) {
         toast.error("Loading searched products error", { description: error.message });
      }
   }
};

export const getProductsByCategory = async (params: ProductParamsInterface, category: string) => {
   try {
      const response: AxiosResponse<ProductsListResponseInterface> = await axiosInstance.get(
         `/category/${category}`,
         {
            params,
         }
      );
      return response.data;
   } catch (error) {
      if (isAxiosError(error)) {
         toast.error("Loading products by category error", { description: error.message });
      }
   }
};
