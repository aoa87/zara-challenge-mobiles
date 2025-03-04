import { Mobile } from "./mobile";
import { MobileColor } from "./mobile-color";
import { MobileStorage } from "./mobile-storage";

export class MobileUniqueIdCreator {
  static createUniqueId(mobile: Mobile, storage: MobileStorage, color: MobileColor): string {
    return `${mobile.brand}-${mobile.name}-${storage.capacity}-${color.name}`;
  }
}
