import axios from "axios";
import { BASE_URL } from "@/shared/constants/constants";

const axiosInstance = axios.create({
   baseURL: BASE_URL + "products",
});

export const getProductCategoryList = async () => {
   const response = await axiosInstance.get("/category-list");
   return response.data;
};
