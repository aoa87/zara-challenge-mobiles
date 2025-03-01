import { MobileListItem } from "../domain/mobile-list-item";
import { MobileRepository } from "../domain/mobile-repository";

export class FindAllMobilesUseCase {
  constructor(private mobileRepository: MobileRepository) {}

  async execute(search?: string): Promise<MobileListItem[]> {
    return this.mobileRepository.findAll(search);
  }
}
