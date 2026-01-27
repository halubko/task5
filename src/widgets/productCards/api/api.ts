import axios, { type AxiosResponse } from "axios";
import { BASE_URL } from "@/shared/constants/constants";
import type { ProductInterface } from "@/widgets/productCards/interfaces/product";

const axiosInstance = axios.create({
   baseURL: BASE_URL + "products/",
});

export const getSingleProduct = async (productId: number) => {
   const response: AxiosResponse<ProductInterface> = await axiosInstance.get(`${productId}`);
   return response.data;
};
