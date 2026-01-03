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
import { useEffect } from "react";

export function SignInForm({ className, ...props }: React.ComponentProps<"div">) {
   const { isLoggedIn, user, me } = useSignInStore();

   useEffect(() => {
      me();
   }, [me]);

   console.log(isLoggedIn, user);

   return (
      <div
         className={cn(
            "flex flex-col gap-6 w-full max-w-md mx-auto bg-slate-100 mt-[150px]",
            className
         )}
         {...props}
      >
         <Card>
            <CardHeader>
               <CardTitle>Login to your account</CardTitle>
               <CardDescription>Enter your email below to login to your account</CardDescription>
            </CardHeader>
            <CardContent>
               <form>
                  <FieldGroup>
                     <Field>
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        <Input id="email" type="email" placeholder="m@example.com" required />
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
                        <Input id="password" type="password" required />
                     </Field>
                     <Field>
                        <Button variant="outline" type="submit">
                           Login
                        </Button>
                        <FieldDescription className="text-center">
                           Don&apos;t have an account?{" "}
                           <a href="@/entities/sign-in/components/SignIn-form#">Sign up</a>
                        </FieldDescription>
                     </Field>
                  </FieldGroup>
               </form>
            </CardContent>
         </Card>
      </div>
   );
}
