import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/shadcn/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/shadcn/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/shared/ui/shadcn/field";
import { Input } from "@/shared/ui/shadcn/input";
import type { ComponentProps } from "react";
import Link from "next/link";

export function SignInForm({ className, ...props }: ComponentProps<"div">) {
   return (
      <div
         className={cn(
            "flex flex-col gap-6 w-full max-w-md mx-auto bg-slate-100 mt-37.5",
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
                           <Link
                              href="/auth/signIn"
                              className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                           >
                              Forgot your password?
                           </Link>
                        </div>
                        <Input id="password" type="password" required />
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
