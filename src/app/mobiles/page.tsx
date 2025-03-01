import { Suspense } from "react";

import { FindAllMobilesUseCase } from "@/modules/mobiles/application/find-all-mobiles-use-case";
import { MobileListItem } from "@/modules/mobiles/domain/mobile-list-item";
import { ApiMobileRepository } from "@/modules/mobiles/infrastructure/api-mobile-repository";
import MobilesList from "@/sections/mobiles/mobiles-list";

const LoadMobilesPage: React.FC = async () => {
  const mobilesRepository = new ApiMobileRepository();
  const findAllMobilesUseCase = new FindAllMobilesUseCase(mobilesRepository);

  let mobiles: MobileListItem[] = [];

  try {
    mobiles = await findAllMobilesUseCase.execute();
  } catch {
    throw new Error("Failed to fetch mobiles");
  }

  return <MobilesList mobiles={mobiles} />;
};

const MobilesPage = async () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoadMobilesPage />
    </Suspense>
  );
};

export default MobilesPage;
