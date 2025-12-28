import { Button } from "@/shared/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";
import { ThemeToggleButton } from "@/features/toggle-theme/components/ThemeToogleButton";
import { SidebarTrigger } from "@/shared/components/ui/sidebar";
import ProfileDropdown from "@/widgets/header/components/ui/ProfileDropdown";
import Link from "next/link";

const Header = () => {
   return (
      <header className="grid grid-cols-3 items-center p-2">
         <div className="flex gap-2">
            <SidebarTrigger />
         </div>
         <h1 className="text-center">KakaShop</h1>
         <div className="flex gap-2 justify-end">
            <ThemeToggleButton />
            <Link href="/cart">
               <Button>
                  <ShoppingCartIcon />
                  Cart
               </Button>
            </Link>
            <ProfileDropdown />
         </div>
      </header>
   );
};

export default Header;
