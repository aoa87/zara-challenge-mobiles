"use client";

import Image from "next/image";

import emptyCargImg from "@/assets/empty-cart.png";
import fullCartImg from "@/assets/full-cart.png";
import useCart from "@/shared/useCart";

const ShoppingCartHeader = () => {
  const { state } = useCart();
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="flex justify-between gap-2.5 text-black">
      <Image
        src={itemCount > 0 ? fullCartImg : emptyCargImg}
        alt={itemCount > 0 ? "full cart" : "empty cart"}
        className="w-3.5 h-4"
      />
      <span>{itemCount}</span>
    </div>
  );
};

export default ShoppingCartHeader;
