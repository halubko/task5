"use client";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/components/ui/button";
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/shared/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { useSignInStore } from "@/shared/stores/useSignInStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function SignInForm({ className, ...props }: React.ComponentProps<"div">) {
   const { isLoggedIn, signIn, me } = useSignInStore();
   const [isLoading, setIsLoading] = useState(true);
   const router = useRouter();

   const [email, setEmail] = useState("emilys");
   const [password, setPassword] = useState("emilyspass");

   useEffect(() => {
      const init = async () => {
         setIsLoading(true);
         await me();
         setIsLoading(false);
         if (isLoggedIn) {
            router.push("/");
            setIsLoading(false);
         }
      };
      init();
   }, [isLoggedIn, router, me]);

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      try {
         const success = await signIn(email, password);
         if (success) {
            router.push("/");
         }
      } catch (error) {
         console.log(error);
      }
   };

   if (isLoading) {
      return (
         <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
               <p>Checking authentication...</p>
            </div>
         </div>
      );
   }

   if (isLoggedIn) {
      return (
         <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
               <p>Redirecting...</p>
            </div>
         </div>
      );
   }

   return (
      <div
         className={cn("flex flex-col gap-6 w-full max-w-md mx-auto mt-[150px]", className)}
         {...props}
      >
         <Card>
            <CardHeader>
               <CardTitle>Login to your account</CardTitle>
               <CardDescription>Enter your email below to login to your account</CardDescription>
            </CardHeader>
            <CardContent>
               <form onSubmit={handleSubmit}>
                  <FieldGroup>
                     <Field>
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        <Input
                           id="email"
                           type="text"
                           placeholder="m@example.com"
                           required
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                        />
                     </Field>
                     <Field>
                        <div className="flex items-center">
                           <FieldLabel htmlFor="password">Password</FieldLabel>
                           <a
                              href="@/entities/sign-in/components/SignIn-form#"
                              className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                           >
                              Forgot your password?
                           </a>
                        </div>
                        <Input
                           id="password"
                           type="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           required
                        />
                     </Field>
                     <Field>
                        <Button variant="outline" type="submit">
                           Login
                        </Button>
                        <FieldDescription className="text-center">
                           Don&apos;t have an account? <Link href="/auth/signUp">Sign up</Link>
                        </FieldDescription>
                     </Field>
                  </FieldGroup>
               </form>
            </CardContent>
         </Card>
      </div>
   );
}
