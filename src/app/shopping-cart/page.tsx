import { Suspense } from "react";

import ShoppingCartList from "@/sections/shopping-cart/shopping-cart-list";

const CartPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShoppingCartList />
    </Suspense>
  );
};

export default CartPage;
