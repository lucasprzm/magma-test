import cards from "../../assets/icons/DemandControl/cards.svg";
import filter from "../../assets/icons/DemandControl/filter.svg";
import list from "../../assets/icons/DemandControl/list.svg";

export default function DemandControlHeader() {
  return (
    <div className="h-[60px] flex flex-col justify-around items-center border-b mobile:flex-row border-[#DEDEDE]">
      <div>
        <span className="font-poppins text-xs tablet:text-sm">Controle de Demandas</span>
      </div>
      <div className="flex laptop:w-1/2 laptop:justify-around">
        <div className="flex items-center justify-items-center h-6 mr-3">
          <div className="mr-1 h-full flex items-center">
            <input
              className="form-input h-full font-poppins text-[8px] p-1 w-40 tablet:w-48 border-[#D4D4D4] rounded"
              type="text"
              placeholder="Pesquisar..."
            />
          </div>
          <div className="mr-1 flex items-center">
            <button className="flex items-center justify-center rounded-tl rounded-bl border-y border-l bg-orange-4 border-orange-4">
              <img src={cards} alt="Visualização por cards" />
            </button>
            <button className="flex items-center justify-center rounded-tr rounded-br border-y border-r border-[#D4D4D4]">
              <img src={list} alt="Visualização em lista" />
            </button>
          </div>
          <div className="h-full">
            <button className="border border-[#D4D4D4] rounded h-full w-6 flex items-center justify-center">
              <img src={filter} alt="Filtrar demandas" />
            </button>
          </div>
        </div>
        <div className="h-6 text-white">
          <button className="border bg-purple-1 font-poppins text-xs w-32 h-6 text-[#FFFFFF] rounded px-2 py-1">
            + Nova Demanda
          </button>
        </div>
      </div>
    </div>
  );
}
