import cards from "../assets/icons/DemandControl/cards.svg";
import filter from "../assets/icons/DemandControl/filter.svg";
import list from "../assets/icons/DemandControl/list.svg";
import CardsDemandControl from "./CardsDemandControl/CardsDemandControl";
import leftArrow from "../assets/icons/DemandControl/left-arrow.svg";
import rightArrow from "../assets/icons/DemandControl/right-arrow.svg";

export default function DemandControl() {
  return (
    <div className="flex flex-col w-5/6">
      <div className="h-[60px] flex flex-row justify-around items-center border-b border-[#DEDEDE]">
        <div>
          <span className="font-poppins text-sm">Controle de Demandas</span>
        </div>
        <div className="flex items-center justify-items-center h-6">
          <div className="mr-1 h-full flex items-center">
            <input
              className="form-input h-full font-poppins text-[8px] p-1 w-48 border-[#D4D4D4] rounded"
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
      <div className="bg-[#EFEFEF] grid grid-cols-3 grid-rows-3 px-2 py-3">
        <CardsDemandControl />
      </div>
      <div className="w-full bg-[#EFEFEF]">
        <ul className="flex justify-end items-center">
          <li className="w-4 h-4 border border-gray-3 rounded-lg p-1 m-3">
            <img className="" src={leftArrow} alt="Página anterior" />
          </li>
          <li className="w-4 h-4 font-poppins text-xs text-[#FFFFFF] m-3 border border-gray-3 bg-purple-1 rounded-lg p-1 flex items-center justify-center">
            1
          </li>
          <li className="w-4 h-4 font-poppins text-xs m-3 text-gray-3">2</li>
          <li className="w-4 h-4 font-poppins text-xs m-3 text-gray-3">3</li>
          <li className="w-4 h-4 font-poppins text-xs m-3 text-gray-3">4</li>
          <li className="w-4 h-4 border border-gray-3 rounded-lg p-1 m-3">
            <img src={rightArrow} alt="Próxima página" />
          </li>
        </ul>
      </div>
    </div>
  );
}
