import { Mobile } from "./mobile";
import { MobileListItem } from "./mobile-list-item";

export interface MobileRepository {
  findAll(search?: string): Promise<MobileListItem[]>;
  findById(id: Mobile["id"]): Promise<Mobile>;
}
