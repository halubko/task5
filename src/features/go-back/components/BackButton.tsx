"use client";

import { Button } from "@/shared/components/ui/button";
import { useRouter } from "next/navigation";
import type { ButtonHTMLAttributes } from "react";
import { ArrowLeft } from "lucide-react";

const BackButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
   const router = useRouter();

   return (
      <Button onClick={() => router.back()} size="icon" {...props}>
         <ArrowLeft />
      </Button>
   );
};

export default BackButton;
