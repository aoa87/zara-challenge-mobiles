import Image from "next/image";

import emptyCargImg from "@/assets/empty-cart.png";

const ShoppingCartHeader = () => {
  return (
    <div className="flex justify-between gap-2.5 text-black">
      <Image src={emptyCargImg} alt="empty cart" className="w-3.5 h-4" />
      <span>0</span>
    </div>
  );
};

export default ShoppingCartHeader;
