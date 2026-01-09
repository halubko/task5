import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "@/shared/ui/shadcn/card";

const NotFoundCard = () => {
   return (
      <Card className="col-span-full w-fit justify-self-center">
         <CardContent className="flex flex-col justify-center items-center gap-2">
            <CardTitle className="text-center">Products Not Found</CardTitle>
            <CardDescription className="text-center">Try to search again</CardDescription>
         </CardContent>
      </Card>
   );
};

export default NotFoundCard;
