import Image from "next/image";
import Link from "next/link";

import logoImg from "@/assets/logo.png";
import ShoppingCartHeader from "../shopping-cart-header/shopping-cart-header";

const MainHeader = () => {
  return (
    <header className="fixed top-0 left-0 flex justify-between items-center w-full h-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 bg-white z-50">
      <Link className="" href="/">
        <Image src={logoImg} alt="page logo" className="w-[74px] h-[24px]" />
      </Link>

      <nav className="flex space-x-4">
        <Link href="/shopping-cart">
          <ShoppingCartHeader />
        </Link>
      </nav>
    </header>
  );
};

export default MainHeader;
