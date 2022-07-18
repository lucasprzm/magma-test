import { menuOptions } from "./menuOptions";
export default function Sidebar() {
  return (
    <div className="tablet:w-1/6 tablet:h-full tablet:block border-r border-[#DEDEDE] hidden">
      <div className="pt-3">
        {menuOptions.map((option, index) => {
          return (
            <div
              className="group flex w-100 font-poppins text-[10px] py-3 px-6 hover:bg-[#FAEDDE] hover:border-r-2 hover:border-orange-5 hover:cursor-pointer"
              key={index}
            >
              <div className="pr-5">
                <svg
                  className="text-purple-4 group-hover:text-orange-5"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d={option.icon}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="group-hover:font-medium">{option.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
