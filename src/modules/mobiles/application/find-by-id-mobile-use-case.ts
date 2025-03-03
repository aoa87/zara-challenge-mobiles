import { Mobile } from "../domain/mobile";
import { MobileRepository } from "../domain/mobile-repository";
import { NotFoundError } from "@/modules/shared/domain/not-found-error";

export class FindByIdMobileUseCase {
  constructor(private mobileRepository: MobileRepository) {}

  async execute(id: Mobile["id"]): Promise<Mobile | null> {
    let mobile: Mobile | null = null;
    try {
      mobile = await this.mobileRepository.findById(id);
    } catch (error) {
      if (error instanceof NotFoundError) {
        mobile = null;
      } else {
        throw error;
      }
    }

    return mobile;
  }
}
