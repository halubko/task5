"use client";
import { type ReactNode, useEffect } from "react";
import { useSignInStore } from "@/shared/stores/useSignInStore";
import { authMe } from "@/entities/signIn/api/api";

export default function AuthProvider({ children }: { children: ReactNode }) {
   const { setUser } = useSignInStore();

   useEffect(() => {
      async function getUser() {
         const data = await authMe();
         if (data && "username" in data) {
            setUser(data);
         }
      }
      getUser();
   }, [setUser]);

   return children;
}
