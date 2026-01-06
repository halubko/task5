import { create } from "zustand/react";
import type { InitialStateData } from "@/shared/stores/interfaces";
import axios from "axios";

const axiosInstance = axios.create({
   // baseURL: BASE_URL,
   baseURL: "https://dummyjson.com",
   headers: {
      "Content-Type": "application/json",
   },
});

export const useSignInStore = create<InitialStateData>((set, get) => ({
   isLoggedIn: false,
   user: null,

   me: async () => {
      try {
         const token = localStorage.getItem("authToken");

         if (!token) {
            set({ isLoggedIn: false, user: null });
            return false;
         }

         const response = await axiosInstance.get("/auth/me", {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         set({
            isLoggedIn: true,
            user: response.data,
         });
         return true;
      } catch (error) {
         console.log(error);
         localStorage.removeItem("authToken");
         set({ isLoggedIn: false, user: null });
         return false;
      }
   },

   signIn: async (email: string, password: string) => {
      try {
         const response = await axiosInstance.post("/auth/login", {
            username: email,
            password: password,
            expiresInMins: 30,
         });

         if (response.data && response.data.accessToken) {
            localStorage.setItem("authToken", response.data.accessToken);

            set({
               isLoggedIn: true,
               user: response.data,
            });
            return true;
         }
      } catch (error) {
         console.log(error);
         localStorage.removeItem("authToken");
         set({ isLoggedIn: false, user: null });
         return false;
      }
   },
   signOut: async () => {
      localStorage.removeItem("authToken");
      set({ isLoggedIn: false, user: null });
   },
   initialize: async () => {
      await get().me();
   },
}));
