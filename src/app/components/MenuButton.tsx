"use client";
import Menu from "./images/menu.svg";
import Image from "next/image";
import Close from "./images/close.svg";
import MenuList from "./MenuList";
import { useState } from "react";

const MenuButton: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const switchMenuStatus = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <button
        onClick={switchMenuStatus}
        className="fixed top-[18px] right-3 z-10 cursor-pointer md:top-[16px]"
      >
        <Image
          src={toggleMenu ? Close : Menu}
          width={20}
          height={20}
          alt="Menu Icon"
          className="md:w-[30px] md:h-[30px]"
        />
      </button>
      {toggleMenu && <MenuList />}
    </>
  );
};

export default MenuButton;
