import leftArrow from "../../assets/icons/DemandControl/left-arrow.svg";
import rightArrow from "../../assets/icons/DemandControl/right-arrow.svg";

function Pagination() {
  return (
    <ul className="flex justify-center mobile:justify-end items-center">
      <li className="w-4 h-4 border border-gray-3 rounded-lg p-1 m-3">
        <img src={leftArrow} alt="Página anterior" />
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
  );
}

export default Pagination;
