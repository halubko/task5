import axios, { type AxiosResponse } from "axios";
import { BASE_URL } from "@/shared/constants/constants";
import type { ProductInterface } from "@/widgets/product-cards/interfaces/product.interfaces";

const axiosInstance = axios.create({
   baseURL: BASE_URL + "products/",
});

export const getSingleProduct = async (productId: number) => {
   const response: AxiosResponse<ProductInterface> = await axiosInstance.get(`${productId}`);
   return response.data;
};
