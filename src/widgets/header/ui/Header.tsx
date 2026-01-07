import { Button } from "@/shared/ui/shadcn/button";
import { ShoppingCartIcon } from "lucide-react";
import { ThemeToggleButton } from "@/features/toggleTheme/ui/ThemeToogleButton";
import Link from "next/link";
import BackButton from "@/features/goBack/ui/BackButton";
import { ProductsFilter } from "@/widgets/productsFilter/ui/ProductsFilter";
import AuthButton from "@/widgets/header/ui/AuthButton";

const Header = ({ isMainPage = false }: { isMainPage?: boolean }) => {
   return (
      <header className="grid grid-cols-2 items-center p-2 sticky top-0 z-10">
         <div className="flex items-center gap-2">
            {isMainPage ? <ProductsFilter /> : <BackButton />}
            <Link href="/" className="flex items-center">
               <h1 className="font-semibold text-md md:text-xl">KakaShop</h1>
            </Link>
         </div>
         <div className="flex gap-2 justify-end items-center">
            <ThemeToggleButton />
            <Link href="/shopCart">
               <Button>
                  <ShoppingCartIcon />
                  Cart
               </Button>
            </Link>
            <AuthButton />
         </div>
      </header>
   );
};

export default Header;
