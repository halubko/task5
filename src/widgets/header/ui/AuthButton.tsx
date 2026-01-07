"use client";

import { useSignInStore } from "@/shared/stores/useSignInStore";
import Link from "next/link";
import { Button } from "@/shared/ui/shadcn/button";

const AuthButton = () => {
   const { isLoggedIn, signOut } = useSignInStore();

   if (!isLoggedIn) {
      return (
         <Link href="/auth/signIn">
            <Button variant="secondary">Log in</Button>
         </Link>
      );
   }

   return (
      <Button onClick={signOut} variant="secondary">
         Log out
      </Button>
   );
};

export default AuthButton;
