import { MobileListItem } from "@/modules/mobiles/domain/mobile-list-item";
import Image from "next/image";
import React from "react";

interface MobileItemProps {
  mobile: MobileListItem;
}

const MobileItem: React.FC<MobileItemProps> = ({ mobile }) => {
  return (
    <div className="relative bg-white flex flex-col items-center h-[344px] border-[0.5px] border-gray-300 p-4 overflow-hidden group cursor-pointer">
      <div className="relative z-10 w-full h-[257px] flex justify-center items-center overflow-hidden">
        <div className="w-[300px] h-full relative">
          <Image
            src={mobile.imageUrl}
            alt={mobile.name}
            fill
            sizes="(max-width: 300px) 100vw, 300px"
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col w-full px-2 mt-6 z-10 transition-colors duration-300 group-hover:text-white">
        <div className="uppercase text-secondary group-hover:!text-white">{mobile.brand}</div>
        <div className="flex justify-between">
          <div className="uppercase">{mobile.name}</div>
          <span>{mobile.basePrice} EUR</span>
        </div>
      </div>
      <div className="absolute inset-0 bg-gray-500 transform translate-y-full group-hover:translate-y-0 group-hover:bg-black transition-all duration-800 ease-out"></div>
    </div>
  );
};

export default MobileItem;
