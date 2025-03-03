import { Suspense } from "react";

import { FindAllMobilesUseCase } from "@/modules/mobiles/application/find-all-mobiles-use-case";
import { MobileListItem } from "@/modules/mobiles/domain/mobile-list-item";
import { ApiMobileRepository } from "@/modules/mobiles/infrastructure/api-mobile-repository";
import MobilesList from "@/sections/mobiles/mobiles-list";
import SearchBox from "@/components/search-box/search-box";
import { SearchParams } from "@/shared/types";

interface LoadMobilesPageProps {
  search: string;
}

const LoadMobilesPage: React.FC<LoadMobilesPageProps> = async ({ search }) => {
  const mobilesRepository = new ApiMobileRepository();
  const findAllMobilesUseCase = new FindAllMobilesUseCase(mobilesRepository);

  let mobiles: MobileListItem[] = [];

  try {
    mobiles = await findAllMobilesUseCase.execute(search);
  } catch {
    throw new Error("Failed to fetch mobiles");
  }

  return <MobilesList mobiles={mobiles} />;
};

const MobilesPage = async (props: { searchParams: SearchParams }) => {
  const searchParams = await props.searchParams;
  const search = searchParams.search ?? "";

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchBox initialSearch={search} placeholder="Search for a smartphone..." />
      <LoadMobilesPage search={search} />
    </Suspense>
  );
};

export default MobilesPage;
