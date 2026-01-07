import { Button } from "@/shared/ui/shadcn/button";
import type { ButtonHTMLAttributes } from "react";

//TODO Add logic with adding to cart and changing to counter

const AddToCartButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
   return <Button {...props}>Add to cart</Button>;
};

export default AddToCartButton;
