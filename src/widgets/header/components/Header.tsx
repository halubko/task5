import { Button } from "@/shared/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";
import { ThemeToggleButton } from "@/features/toggle-theme/components/ThemeToogleButton";
import ProfileDropdown from "@/widgets/header/components/ui/ProfileDropdown";
import Link from "next/link";
import BackButton from "@/features/go-back/components/BackButton";
import { ProductsFilter } from "@/widgets/products-filter/components/ProductsFilter";

interface HeaderProps {
   isMainPage?: boolean;
}

const Header = ({ isMainPage = false }: HeaderProps) => {
   return (
      <header className="grid grid-cols-2 items-center p-2 sticky top-0 z-10 bg-black">
         <div className="flex items-center gap-2">
            {isMainPage ? <ProductsFilter /> : <BackButton />}
            <Link href="/" className="flex items-center">
               <h1 className="font-semibold text-md md:text-xl">KakaShop</h1>
            </Link>
         </div>
         <div className="flex gap-2 justify-end items-center">
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
