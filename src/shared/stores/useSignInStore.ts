import { create } from "zustand/react";
import type { InitialStateData, SignInDataResponse } from "@/shared/interfaces/signIn";
import { toast } from "sonner";

export const useSignInStore = create<InitialStateData>((set) => ({
   isLoggedIn: false,
   user: null,

   setUser: (userData: SignInDataResponse) =>
      set({
         user: userData,
         isLoggedIn: !!userData,
      }),

   signOut: async () => {
      set({ isLoggedIn: false, user: null });
      toast.success("Signed Out");
   },
}));
