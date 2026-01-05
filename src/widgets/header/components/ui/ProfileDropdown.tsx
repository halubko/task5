import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuGroup,
   DropdownMenuItem,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { Button } from "@/shared/components/ui/button";
import { LogOut, MoreHorizontalIcon, UserIcon } from "lucide-react";

const ProfileDropdown = () => {
   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button variant="secondary">
               <div className="hidden sm:block">Profile</div>
               <MoreHorizontalIcon />
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent align="end">
            <DropdownMenuGroup>
               <DropdownMenuItem>
                  <UserIcon />
                  Go to profile
               </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
               <DropdownMenuItem variant="destructive">
                  <LogOut />
                  Log out
               </DropdownMenuItem>
            </DropdownMenuGroup>
         </DropdownMenuContent>
      </DropdownMenu>
   );
};

export default ProfileDropdown;
