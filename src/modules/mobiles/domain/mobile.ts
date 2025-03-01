import { MobileColor } from "./mobile-color";
import { MobileSimilarProduct } from "./mobile-similar-product";
import { MobileSpecs } from "./mobile-specs";
import { MobileStorage } from "./mobile-storage";

export interface Mobile {
  id: string;
  brand: string;
  name: string;
  description: string;
  basePrice: number;
  rating: number;
  specs: MobileSpecs;
  colorOptions: MobileColor[];
  storageOptions: MobileStorage[];
  similarProducts: MobileSimilarProduct[];
}
