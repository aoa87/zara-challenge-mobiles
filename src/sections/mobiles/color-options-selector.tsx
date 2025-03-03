"use client";

import React, { useState } from "react";

import { MobileColor } from "@/modules/mobiles/domain/mobile-color";

interface ColorOptionsSelectorProps {
  colors: MobileColor[];
  selectedColor?: MobileColor;
  onSelect: (color: MobileColor) => void;
}

const ColorOptionsSelector: React.FC<ColorOptionsSelectorProps> = React.memo(
  ({ colors, selectedColor, onSelect }) => {
    const [isHovered, setIsHovered] = useState<MobileColor | null>(null);

    return (
      <div className="flex flex-col gap-2.5">
        <div className="flex gap-2.5">
          {colors.map((colorOption) => (
            <div
              key={colorOption.hexCode}
              data-testid={colorOption.hexCode}
              className="relative w-6 h-6 cursor-pointer"
              style={{ backgroundColor: colorOption.hexCode }}
              onClick={() => onSelect(colorOption)}
              onMouseEnter={() => {
                console.log("hovered", colorOption);
                setIsHovered(colorOption);
              }}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div
                className={`absolute inset-0 border-2
                    ${
                      isHovered === colorOption
                        ? "border-black"
                        : selectedColor === colorOption
                          ? "border-black"
                          : "border-gray-300 "
                    }`}
              ></div>
              <div className="absolute inset-0 m-[2px] border-2 border-white"></div>
            </div>
          ))}
        </div>
        {isHovered ? (
          <div className="text-xs">{isHovered.name}</div>
        ) : selectedColor ? (
          <div className="text-xs">{selectedColor.name}</div>
        ) : (
          <div className="h-4"></div>
        )}
      </div>
    );
  },
);

ColorOptionsSelector.displayName = "ColorOptions";

export default ColorOptionsSelector;
