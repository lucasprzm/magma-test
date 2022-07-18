import CardsDemandControl from "./CardsDemandControl/CardsDemandControl";

import DemandControlHeader from "./DemandControlHeader";
import Pagination from "./Pagination";

export default function DemandControl() {
  return (
    <div className="flex flex-col w-5/6">
      <DemandControlHeader />
      <div className="bg-[#EFEFEF] grid grid-cols-3 grid-rows-3 px-2 py-3">
        <CardsDemandControl />
      </div>
      <div className="w-full bg-[#EFEFEF]">
        <Pagination />
      </div>
    </div>
  );
}
