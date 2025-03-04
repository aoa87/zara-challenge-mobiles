import { MobileListItem } from "@/modules/mobiles/domain/mobile-list-item";
import MobileItem from "./mobile-item";

interface MobilesListProps {
  mobiles: MobileListItem[];
}

const MobilesList: React.FC<MobilesListProps> = ({ mobiles }) => {
  return (
    <>
      <div className="text-xs">{mobiles.length} RESULTS</div>
      {mobiles.length > 0 ? (
        <div
          data-testid="mobiles-list"
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 auto-rows-fr my-6"
        >
          {mobiles.map((mobile, index) => (
            // Index should not be used but there is one mobile duplicated in the list with all the same properties that another one
            // So, we need to use the index to avoid the warning
            <MobileItem key={`${mobile.id}-${index}`} mobile={mobile} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center text-4xl">
          No mobiles to show
        </div>
      )}
    </>
  );
};

export default MobilesList;
