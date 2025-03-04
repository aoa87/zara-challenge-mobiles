"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Mobile } from "@/modules/mobiles/domain/mobile";
import { MobileStorage } from "@/modules/mobiles/domain/mobile-storage";
import StorageOptionsSelector from "./storage-options-selector";
import ColorOptionsSelector from "./color-options-selector";
import { MobileColor } from "@/modules/mobiles/domain/mobile-color";
import MobileSpecs from "./mobile-specs";
import useCart from "@/shared/useCart";
import MobileSimilarItems from "./mobile-similar-items";

interface MobileDetailProps {
  mobile: Mobile;
}

const MobileDetail: React.FC<MobileDetailProps> = ({ mobile }) => {
  const [selectedStorage, setSelectedStorage] = useState<MobileStorage | undefined>(
    mobile.storageOptions.length === 1 ? mobile.storageOptions[0] : undefined,
  );
  const [selectedColor, setSelectedColor] = useState<MobileColor | undefined>(
    mobile.colorOptions.length === 1 ? mobile.colorOptions[0] : undefined,
  );
  const { addOneItem } = useCart();

  const handleSelectedOption = useCallback((storageOption: MobileStorage) => {
    setSelectedStorage(storageOption);
  }, []);

  const handleSelectedColor = useCallback((color: MobileColor) => {
    setSelectedColor(color);
  }, []);

  const addToCart = useCallback(() => {
    if (!selectedStorage || !selectedColor) return;

    addOneItem({
      id: mobile.id,
      name: mobile.name,
      description: `${selectedStorage.capacity} | ${selectedColor.name}`.toUpperCase(),
      imageUrl: selectedColor.imageUrl,
      price: selectedStorage.price,
      quantity: 1,
    });
  }, [addOneItem, selectedStorage, selectedColor, mobile]);

  return (
    <>
      <Link href="/mobiles" className="text-xs mb-4">
        {"< BACK"}
      </Link>
      <div data-testid="mobile-detail" className="mb-4 lg:px-40">
        <div className="flex flex-col md:flex-row lg:justify-between">
          <div className="relative">
            <Image
              className="w-[300] h-[300] md:w-[400px] md:h-[400px]
            lg:w-[500px] lg:h-[500px]"
              src={selectedColor ? selectedColor.imageUrl : mobile.colorOptions[0]?.imageUrl}
              alt={mobile.name}
              width={300}
              height={300}
            />
          </div>

          <div>
            <div data-testid="mobile-detail__name" className="uppercase text-[20px]">
              {mobile.name}
            </div>
            <div className="text-sm">
              {selectedStorage ? selectedStorage.price : mobile.basePrice}
            </div>

            <div className="flex flex-col mt-8 gap-5">
              <div className="text-xs">STORAGE, HOW MUCH DO YOU NEED?</div>
              <StorageOptionsSelector
                storageOptions={mobile.storageOptions}
                selectedOption={selectedStorage}
                onSelect={handleSelectedOption}
              />
            </div>

            <div className="flex flex-col mt-8 gap-5">
              <div className="text-xs">COLOR, PICK YOUR FAVOURITE</div>
              <ColorOptionsSelector
                colors={mobile.colorOptions}
                selectedColor={selectedColor}
                onSelect={handleSelectedColor}
              />
            </div>

            <button
              className="w-full md:w-[260px] lg:w-[380px] mt-8 h-12 text-xs bg-black text-white text-center py-2 px-4 
        disabled:bg-[#F3F2F2] cursor-pointer disabled:text-[#C2BFBC] disabled:cursor-not-allowed"
              disabled={!selectedStorage || !selectedColor}
              onClick={() => addToCart()}
            >
              ADD TO CART
            </button>
          </div>
        </div>

        <div className="mt-16">
          <MobileSpecs mobile={mobile} />
        </div>

        <div className="mt-16">
          <MobileSimilarItems mobiles={mobile.similarProducts} />
        </div>
      </div>
    </>
  );
};

export default MobileDetail;
