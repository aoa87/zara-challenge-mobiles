import { SearchParams } from "@/shared/types";
import MobilesPage from "./mobiles/page";

interface HomeProps {
  searchParams: SearchParams;
}

const Home: React.FC<HomeProps> = ({ searchParams }) => {
  return <MobilesPage searchParams={searchParams} />;
};

export default Home;
