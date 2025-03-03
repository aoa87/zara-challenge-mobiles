import { Suspense } from "react";

import ShoppingCartList from "@/sections/shopping-cart/shopping-cart-list";
import LoadingBar from "@/components/loading-bar/loading-bar";

const CartPage = () => {
  return (
    <Suspense fallback={<LoadingBar />}>
      <ShoppingCartList />
    </Suspense>
  );
};

export default CartPage;
