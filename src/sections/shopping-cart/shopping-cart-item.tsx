import { CartItem } from "@/shared/cart-provider";
import Image from "next/image";

interface ShoppingCartItemProps {
  item: CartItem;
}

const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({ item }) => {
  return (
    <div className="flex flex-row items-start gap-4 mb-8">
      <div className="w-[200px] md:w-[260px] h-[200px] md:h-[320px] shrink-0">
        <Image
          src={item.imageUrl}
          alt={item.name}
          width={200}
          height={200}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col h-[200px] md:h-[320px] text-xs">
        <div className="uppercase">{item.name}</div>
        <div>{item.description}</div>
        <div className="mt-6">{item.price} EUR</div>
        <div className="flex-grow"></div>
        <button className="text-[#DF0000] text-left">Remove</button>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
