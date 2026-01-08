"use server";

import { cookies } from "next/headers";
import axios, { type AxiosError, type AxiosResponse, isAxiosError } from "axios";
import { BASE_URL } from "@/shared/constants/constants";
import type { RefreshTokenInterface, SignInDataResponse } from "@/shared/interfaces/signIn";

const axiosInstance = axios.create({
   baseURL: BASE_URL,
   headers: {
      "Content-Type": "application/json",
   },
});

export const signIn = async (email: string, password: string) => {
   const cookieStore = await cookies();

   try {
      const response: AxiosResponse<SignInDataResponse> = await axiosInstance.post("/auth/login", {
         username: email,
         password: password,
         expiresInMins: 30,
      });

      if (response.data && response.data.accessToken) {
         cookieStore.set("accessToken", response.data.accessToken, {
            path: "/",
            httpOnly: true,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
         });

         cookieStore.set("refreshToken", response.data.refreshToken, {
            path: "/",
            httpOnly: true,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
         });

         return response.data;
      }
   } catch (error) {
      if (isAxiosError(error)) {
         return { status: error.status, message: error.message };
      }
   }
};

export const authMe = async (): Promise<SignInDataResponse | AxiosError | undefined> => {
   const cookieStore = await cookies();
   const accessToken = cookieStore.get("accessToken")?.value;

   try {
      const response: AxiosResponse<SignInDataResponse> = await axiosInstance.get("auth/me", {
         headers: {
            Authorization: `Bearer ${accessToken}`,
         },
      });

      return response.data;
   } catch (error) {
      if (isAxiosError(error)) {
         if (error.status === 401) {
            const refreshToken = cookieStore.get("refreshToken")?.value;

            const refreshResponse: AxiosResponse<RefreshTokenInterface> = await axiosInstance.post(
               BASE_URL + "auth/refresh",
               {
                  refreshToken: `${refreshToken}`,
                  expiresInMins: 30,
               }
            );

            const response: AxiosResponse<SignInDataResponse> = await axiosInstance.get("auth/me", {
               headers: {
                  Authorization: `Bearer ${refreshResponse.data.accessToken}`,
               },
            });

            return response.data;
         }
         return error;
      }
      throw error;
   }
};
