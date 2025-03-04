"use client";

import useCart from "@/shared/useCart";
import ShoppingCartItem from "./shopping-cart-item";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const Total = ({ totalAmount }: { totalAmount: number }) => {
  return (
    <div className="flex flex-row justify-between items-center w-full md:w-auto md:gap-4 ml-auto">
      <div className="text-sm">TOTAL</div>
      <div className="text-sm">{totalAmount.toFixed(2)} EUR</div>
    </div>
  );
};

const ContinueShoppingButton = () => {
  "use client";
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <button
      className="py-4 bg-white text-xs w-full md:max-w-[200px] lg:max-w-[260px] border-[0.5px]"
      onClick={handleClick}
    >
      CONTINUE SHOPPING
    </button>
  );
};

const PayButton = () => {
  return <button className="bg-black text-white text-xs w-full md:max-w-[260px] py-4">PAY</button>;
};

const ShoppingCartList = () => {
  const { state, removeItem } = useCart();
  const { items } = state;
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleRemoveItem = useCallback(
    (itemId: string) => {
      removeItem(itemId);
    },
    [removeItem],
  );

  return (
    <div className="flex flex-col min-h-[calc(100vh-100px)] lg:min-h-[calc(100vh-160px)] mb-4">
      <div className="text-xl mb-4">CART ({itemCount})</div>
      <div className="grow">
        {items.map((item) => (
          <ShoppingCartItem key={item.id} item={item} onRemove={handleRemoveItem} />
        ))}
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:hidden mb-6">
          <Total totalAmount={totalAmount} />
        </div>
        <div className="flex flex-row justify-center gap-4 md:hidden">
          <ContinueShoppingButton />
          <PayButton />
        </div>

        <div className="hidden md:flex md:flex-row md:w-full md:justify-between gap-4">
          <ContinueShoppingButton />
          <Total totalAmount={totalAmount} />
          <PayButton />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartList;
