import { fetchApi } from "@/modules/shared/infrastructure/fetch-api";
import { Mobile } from "../domain/mobile";
import { MobileListItem } from "../domain/mobile-list-item";
import { MobileRepository } from "../domain/mobile-repository";
import { QueryParam } from "@/modules/shared/domain/query-param";

export class ApiMobileRepository implements MobileRepository {
  async findAll(search?: string): Promise<MobileListItem[]> {
    const queryParams: QueryParam = {};
    if (search) {
      queryParams.search = search;
    }

    return await fetchApi<MobileListItem[]>("products", { queryParams });
  }

  async findById(id: Mobile["id"]): Promise<Mobile | null> {
    const response = await fetch(`/api/mobiles/${id}`);
    return response.json();
  }
}
