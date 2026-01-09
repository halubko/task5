"use client";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/shadcn/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/shadcn/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/shared/ui/shadcn/field";
import { Input } from "@/shared/ui/shadcn/input";
import { type ComponentProps, type FormEvent, useEffect, useState } from "react";
import { useSignInStore } from "@/shared/stores/useSignInStore";
import { useRouter } from "next/navigation";
import { signIn } from "@/entities/signIn/api/api";
import { toast } from "sonner";

export function SignInForm({ className, ...props }: ComponentProps<"div">) {
   const { isLoggedIn, setUser } = useSignInStore();
   const [isLoading, setIsLoading] = useState(true);
   const router = useRouter();

   const [email, setEmail] = useState("emilys");
   const [password, setPassword] = useState("emilyspass");

   useEffect(() => {
      const init = async () => {
         setIsLoading(true);
         setIsLoading(false);
         if (isLoggedIn) {
            router.push("/");
            setIsLoading(false);
         }
      };
      init();
   }, [isLoggedIn, router]);

   const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();

      const userData = await signIn(email, password);
      if (userData && "accessToken" in userData) {
         setUser(userData);
         router.push("/");
      } else if (userData && "status" in userData) {
         if (userData.status === 400) {
            toast.error("Login error", { description: "Incorrect login or password" });
         } else {
            toast.error("Login error", { description: userData.message });
         }
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
