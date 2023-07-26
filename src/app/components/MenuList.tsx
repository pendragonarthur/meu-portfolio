"use client";
import Link from "next/link";

const MenuList = () => {
  let Links = [
    {
      name: "Home",
      pathname: "/",
    },
    {
      name: "Sobre",
      pathname: "/pages/sobre",
    },
    {
      name: "Projetos",
      pathname: "/pages/projects",
    },
    {
      name: "Contato",
      pathname: "/pages/contato",
    },
  ];

  return (
    <ul className="h-screen gap-[64px] flex-col flex justify-center items-center bg-[#101010] relative ">
      {Links.map((link) => (
        <li key={link.name} className="font-bold text-5xl ">
          <Link
            className="relative transition-all
            duration-300
            before:content-['']
            before:absolute
            before:-bottom-0
            before:left-0
            before:w-0
            before:h-[2px]
            before:rounded-full
            before:opacity-0
            before:transition-all
            before:duration-500
            before:bg-[#5625aa]
            hover:before:w-full
            hover:before:opacity-100
            md:before:h-[2px]
            "
            href={link.pathname}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
