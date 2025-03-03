import React from "react";

import { Mobile } from "@/modules/mobiles/domain/mobile";

interface MobileSpecItemProps {
  label: string;
  value: string;
}

const MobileSpecItem: React.FC<MobileSpecItemProps> = ({ label, value }) => {
  return (
    <div className="flex justify-between py-4 ">
      <div className="flex-1/2">{label}</div>
      <div className="flex-1/2">{value}</div>
    </div>
  );
};

interface MobileSpecsProps {
  mobile: Mobile;
}

const MobileSpecs: React.FC<MobileSpecsProps> = React.memo(({ mobile }) => {
  return (
    <>
      <div className="text-xl">SPECIFICATIONS</div>
      <div className="flex flex-col mt-4 text-xs divide-y divide-black border-t border-b border-black">
        <MobileSpecItem label="BRAND" value={mobile.brand} />
        <MobileSpecItem label="NAME" value={mobile.name} />
        <MobileSpecItem label="DESCRIPTION" value={mobile.description} />
        <MobileSpecItem label="SCREEN" value={mobile.specs.screen} />
        <MobileSpecItem label="RESOLUTION" value={mobile.specs.resolution} />
        <MobileSpecItem label="PROCESSOR" value={mobile.specs.processor} />
        <MobileSpecItem label="MAIN CAMERA" value={mobile.specs.mainCamera} />
        <MobileSpecItem label="SELFIE CAMERA" value={mobile.specs.selfieCamera} />
        <MobileSpecItem label="BATTERY" value={mobile.specs.battery} />
        <MobileSpecItem label="OS" value={mobile.specs.os} />
        <MobileSpecItem label="SCREEN REFRESH RATE" value={mobile.specs.screenRefreshRate} />
      </div>
    </>
  );
});

MobileSpecs.displayName = "MobileSpecs";

export default MobileSpecs;
