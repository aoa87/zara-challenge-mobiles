import { Suspense } from "react";

import { Mobile } from "@/modules/mobiles/domain/mobile";
import { ApiMobileRepository } from "@/modules/mobiles/infrastructure/api-mobile-repository";
import { FindByIdMobileUseCase } from "@/modules/mobiles/application/find-by-id-mobile-use-case";
import { notFound } from "next/navigation";
import MobileDetail from "@/sections/mobiles/mobile-detail";

interface LoadMobileDetailPageProps {
  mobileId: Mobile["id"];
}

const LoadMobileDetailPage: React.FC<LoadMobileDetailPageProps> = async ({ mobileId }) => {
  const mobilesRepository = new ApiMobileRepository();
  const findByIdMobileUseCase = new FindByIdMobileUseCase(mobilesRepository);
  const mobile = await findByIdMobileUseCase.execute(mobileId);

  if (!mobile) {
    notFound();
  }

  return <MobileDetail mobile={mobile} />;
};

interface MobileDetailPageProps {
  params: Promise<{
    mobileId: Mobile["id"];
  }>;
}

const MobileDetailPage: React.FC<MobileDetailPageProps> = async ({ params }) => {
  const { mobileId } = await params;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoadMobileDetailPage mobileId={mobileId} />
    </Suspense>
  );
};

export default MobileDetailPage;
