import { Suspense } from "react";

import { FindAllMobilesUseCase } from "@/modules/mobiles/application/find-all-mobiles-use-case";
import { MobileListItem } from "@/modules/mobiles/domain/mobile-list-item";
import { ApiMobileRepository } from "@/modules/mobiles/infrastructure/api-mobile-repository";
import MobilesList from "@/sections/mobiles/mobiles-list";
import SearchBox from "@/components/search-box/search-box";
import { SearchParams } from "@/shared/types";
import LoadingBar from "@/components/loading-bar/loading-bar";

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
    <Suspense fallback={<LoadingBar />}>
      <div className="lg:mt-10">
        <SearchBox initialSearch={search} placeholder="Search for a smartphone..." />
        <LoadMobilesPage search={search} />
      </div>
    </Suspense>
  );
};

export default MobilesPage;
