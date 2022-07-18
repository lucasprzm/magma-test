import Logo from "../assets/Logo.svg";
import burgerIcon from "../assets/icons/Header/burger-icon.svg";
import bellIcon from "../assets/icons/Header/bell-icon.svg";
import personIcon from "../assets/icons/Header/person-icon.svg";
import DropDownMenu from "./Sidebar/DropDownMenu";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-full w-full bg-[#4B2C65]">
      <div className="flex items-center">
        <div className="px-6 desktop:px-14 laptop:px-8">
          <img src={Logo} alt="Logo PMO Soft" />
        </div>
        <div className="ml-2 block tablet:hidden">
          <DropDownMenu />
        </div>
        <div className="hidden tablet:block">
          <img src={burgerIcon} alt="Menu" />
        </div>
      </div>
      <div className="flex justify-around items-center">
        <div>
          <img src={bellIcon} alt="Notificações" />
        </div>
        <div className="px-4">
          <img src={personIcon} alt="Perfil" />
        </div>
      </div>
    </header>
  );
}
