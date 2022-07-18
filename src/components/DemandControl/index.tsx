import CardsDemandControl from "./CardsDemandControl";
import DemandControlHeader from "./DemandControlHeader";
import Pagination from "./Pagination";

export default function DemandControl() {
  return (
    <div className="flex flex-col tablet:w-5/6 w-full">
      <DemandControlHeader />
      <div className="bg-[#EFEFEF] grid tablet:grid-cols-3 tablet:grid-rows-3 px-2 py-3 desktop:grid-cols-4 mobile:grid-cols-2 mobile:grid-rows-5 grid-cols-1">
        <CardsDemandControl />
      </div>
      <div className="w-full bg-[#EFEFEF]">
        <Pagination />
      </div>
    </div>
  );
}
