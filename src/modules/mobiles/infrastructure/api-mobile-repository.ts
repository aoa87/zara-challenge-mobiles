import { fetchApi } from "@/modules/shared/infrastructure/fetch-api";
import { QueryParam } from "@/modules/shared/domain/query-param";
import { Mobile } from "../domain/mobile";
import { MobileListItem } from "../domain/mobile-list-item";
import { MobileRepository } from "../domain/mobile-repository";

export class ApiMobileRepository implements MobileRepository {
  async findAll(search?: string): Promise<MobileListItem[]> {
    const queryParams: QueryParam = {
      limit: 20,
    };

    if (search) {
      queryParams.search = search;
    }

    return await fetchApi<MobileListItem[]>("products", { queryParams });
  }

  async findById(id: Mobile["id"]): Promise<Mobile> {
    return await fetchApi<Mobile>(`products/${id}`);
  }
}
