"use client";

import React from "react";

import { MobileStorage } from "@/modules/mobiles/domain/mobile-storage";

interface StorageOptionsSelectorsProps {
  storageOptions: MobileStorage[];
  selectedOption?: MobileStorage;
  onSelect: (storageOption: MobileStorage) => void;
}

const StorageOptionsSelector: React.FC<StorageOptionsSelectorsProps> = React.memo(
  ({ storageOptions, selectedOption, onSelect }) => {
    return (
      <div className="flex flex-wrap text-xs">
        {storageOptions.map((storageOption, index) => (
          <div
            key={index}
            className={`w-[89px] xl:w-[95px] p-4 border-[0.5px] text-center cursor-pointer 
              ${selectedOption === storageOption ? "border-black" : "border-gray-300"}`}
            onClick={() => onSelect(storageOption)}
          >
            {storageOption.capacity}
          </div>
        ))}
      </div>
    );
  },
);

StorageOptionsSelector.displayName = "StorageOptions";

export default StorageOptionsSelector;
