import { ThemeToggleButton } from "@/features/toggleTheme/ui/ThemeToogleButton";
import Link from "next/link";
import BackButton from "@/features/goBack/ui/BackButton";
import AuthButton from "@/features/authButton/ui/AuthButton";
import GoToCartButton from "@/widgets/header/ui/GoToCartButton";

const Header = () => {
   return (
      <header className="grid grid-cols-2 items-center p-2 sticky top-0 z-10 backdrop-blur">
         <div className="flex items-center gap-2">
            <BackButton />
            <Link href="/" className="flex items-center">
               <h1 className="font-semibold text-md md:text-xl">KakaShop</h1>
            </Link>
         </div>
         <div className="flex gap-2 justify-end items-center">
            <ThemeToggleButton />
            <GoToCartButton />
            <AuthButton />
         </div>
      </header>
   );
};

export default Header;
