import cards from "../assets/icons/DemandControl/cards.svg";
import filter from "../assets/icons/DemandControl/filter.svg";
import list from "../assets/icons/DemandControl/list.svg";
import search from "../assets/icons/DemandControl/search.svg";

export default function DemandControl() {
  return (
    <div className="flex flex-col  w-5/6">
      <div className="h-[60px] flex flex-row justify-around items-center border-b border-[#DEDEDE]">
        <div>
          <span className="font-poppins text-sm">Controle de Demandas</span>
        </div>
        <div className="flex h-6">
          <div className="mr-1">
            <input
              className="form-input font-poppins text-[8px] p-1 w-48 border-[#D4D4D4] rounded"
              type="text"
              placeholder="Pesquisar..."
            />
          </div>
          <div className="mr-1">
            <button className="rounded-tl rounded-bl border-y border-l bg-orange-4 border-orange-4">
              <img src={cards} alt="Visualização por cards" />
            </button>
            <button className="rounded-tr rounded-br border-y border-r border-[#D4D4D4]">
              <img src={list} alt="Visualização em lista" />
            </button>
          </div>
          <div className="w-6">
            <button className="h-full w-full border border-[#D4D4D4] rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 p-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#A3A3A3"
                stroke-width="1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <button>+ Nova Demanda</button>
        </div>
      </div>
      <div className="bg-[#EFEFEF]">Cards</div>
    </div>
  );
}
