"use client";

import Image from "next/image";

import Spinner from "@/components/spinner/spinner";
import { CartItem } from "@/shared/cart-provider";
import useCart from "@/shared/useCart";

interface ShoppingCartItemProps {
  item: CartItem;
  onRemove: (itemId: string) => void;
}

const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({ item, onRemove }) => {
  const { addOneItem, removeOneItem } = useCart();

  return (
    <div className="flex flex-row items-start ">
      <div className="w-[200px] md:w-[260px] h-[200px] md:h-[300px] shrink-0">
        <Image
          src={item.imageUrl}
          alt={item.name}
          width={200}
          height={200}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col h-[200px] md:h-[300px] text-xs py-8 md:py-16">
        <div className="uppercase">{item.name}</div>
        <div>{item.description}</div>
        <div className="mt-6 mb-3">{item.price} EUR</div>
        <Spinner
          initialValue={item.quantity}
          onIncrease={() => addOneItem(item)}
          onDecrease={() => removeOneItem(item.id)}
        />
        <button
          className="text-[#DF0000] text-left cursor-pointer mt-auto"
          onClick={() => onRemove(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
