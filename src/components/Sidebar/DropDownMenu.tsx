/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/solid";
import { menuOptions } from "./menuOptions";

export default function DropDownMenu() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium">
          <MenuIcon className="h-5 w-5 text-purple-2" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#FFFFFF] ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {menuOptions.map((option, index) => {
              return (
                <Menu.Item key={index}>
                  <div className="group flex w-100 font-poppins text-[10px] py-3 px-6 hover:bg-[#FAEDDE] hover:border-r-2 hover:border-orange-5 hover:cursor-pointer">
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
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
