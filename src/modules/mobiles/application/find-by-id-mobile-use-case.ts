import { Mobile } from "../domain/mobile";
import { MobileRepository } from "../domain/mobile-repository";

export class FindByIdMobileUseCase {
  constructor(private mobileRepository: MobileRepository) {}

  async execute(id: Mobile["id"]): Promise<Mobile | null> {
    return this.mobileRepository.findById(id);
  }
}
