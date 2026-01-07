"use client";

import { Button } from "@/shared/components/ui/button";
import { useSignInStore } from "@/shared/stores/useSignInStore";
import Link from "next/link";

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
