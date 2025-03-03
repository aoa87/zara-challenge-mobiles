import React from "react";

import Carousel from "@/components/carousel/carousel";
import MobileItem from "./mobile-item";
import { MobileSimilarProduct } from "@/modules/mobiles/domain/mobile-similar-product";

interface MobileSimilarItemsProps {
  mobiles: MobileSimilarProduct[];
}

const MobileSimilarItems: React.FC<MobileSimilarItemsProps> = React.memo(({ mobiles }) => {
  return (
    <>
      <div className="text-xl">SIMILAR ITEMS</div>
      <Carousel>
        {mobiles?.map((similarMobile, index) => (
          <MobileItem key={`${similarMobile.id}-${index}`} mobile={similarMobile} />
        ))}
      </Carousel>
    </>
  );
});

MobileSimilarItems.displayName = "MobileSimilarItems";

export default MobileSimilarItems;
