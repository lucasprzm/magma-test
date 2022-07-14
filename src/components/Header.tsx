import Logo from "../assets/Logo.svg";
import burgerIcon from "../assets/icons/Header/burger-icon.svg";
import bellIcon from "../assets/icons/Header/bell-icon.svg";
import personIcon from "../assets/icons/Header/person-icon.svg";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full h-[60px] bg-[#4B2C65]">
      <div className="flex items-center">
        <div className="px-16">
          <img src={Logo} alt="Logo PMO Soft" />
        </div>
        <div>
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
