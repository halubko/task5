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
import Link from "next/link";

export function SignUpForm({ ...props }: React.ComponentProps<typeof Card>) {
   return (
      <div className={"flex flex-col gap-6 w-full max-w-md mx-auto"} {...props}>
         <Card>
            <CardHeader>
               <CardTitle>Create an account</CardTitle>
               <CardDescription>
                  Enter your information below to create your account
               </CardDescription>
            </CardHeader>
            <CardContent>
               <form>
                  <FieldGroup>
                     <Field>
                        <FieldLabel htmlFor="name">Full Name</FieldLabel>
                        <Input id="name" type="text" placeholder="John Doe" required />
                     </Field>
                     <Field>
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        <Input id="email" type="email" placeholder="m@example.com" required />
                        <FieldDescription>
                           We&apos;ll use this to contact you. We will not share your email with
                           anyone else.
                        </FieldDescription>
                     </Field>
                     <Field>
                        <FieldLabel htmlFor="password">Password</FieldLabel>
                        <Input id="password" type="password" required />
                        <FieldDescription>Must be at least 8 characters long.</FieldDescription>
                     </Field>
                     <Field>
                        <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
                        <Input id="confirm-password" type="password" required />
                        <FieldDescription>Please confirm your password.</FieldDescription>
                     </Field>
                     <FieldGroup>
                        <Field>
                           <Button variant="outline" type="submit">
                              Create Account
                           </Button>
                           <FieldDescription className="px-6 text-center">
                              Already have an account? <Link href="/auth/signIn">Sign in</Link>
                           </FieldDescription>
                        </Field>
                     </FieldGroup>
                  </FieldGroup>
               </form>
            </CardContent>
         </Card>
      </div>
   );
}
