import axios, { type AxiosResponse } from "axios";
import { BASE_URL } from "@/shared/constants/constants";

const axiosInstance = axios.create({
   baseURL: BASE_URL + "products",
});

export const getProductCategoryList = async () => {
   const response: AxiosResponse<string[]> = await axiosInstance.get("/category-list");
   return response.data;
};
