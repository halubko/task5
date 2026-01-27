"use client";

import { useSignInStore } from "@/shared/stores/useSignInStore";
import Link from "next/link";
import { Button } from "@/shared/ui/shadcn/button";
import { deleteTokens } from "@/features/authButton/utils/cookie";

const AuthButton = () => {
   const { isLoggedIn, signOut } = useSignInStore();

   const handleSigOut = () => {
      signOut();
      deleteTokens();
   };

   if (!isLoggedIn) {
      return (
         <Link href="/auth/signIn">
            <Button variant="secondary">Log in</Button>
         </Link>
      );
   }

   return (
      <Button onClick={handleSigOut} variant="secondary">
         Log out
      </Button>
   );
};

export default AuthButton;
