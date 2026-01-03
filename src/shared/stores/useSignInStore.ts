import { create } from "zustand/react";
import type { InitialStateData } from "@/shared/stores/interfaces";
import { BASE_URL } from "@/shared/constants/constants";
import axios from "axios";

const axiosInstance = axios.create({
   baseURL: BASE_URL,
});

export const useSignInStore = create<InitialStateData>((set) => ({
   isLoggedIn: false,
   user: null,

   me: async () => {
      try {
         const token = localStorage.getItem("authToken");

         if (!token) {
            set({ isLoggedIn: false, user: null });
            return;
         }

         const response = await axiosInstance.get("auth/me", {
            method: "GET",
            headers: {
               Authorization: `Bearer ${token}`,
               "Content-Type": "application/json",
            },
         });
         set({
            isLoggedIn: true,
            user: response.data,
         });
      } catch (error) {
         console.log(error);
      }
   },
}));
