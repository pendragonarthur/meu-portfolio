"use client";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const MainPage = () => {
  return (
    <main className="my-bg h-screen w-full z-0 items-center flex p-2 md:justify-center bg-no-repeat bg-center bg-cover ">
      <section className="flex flex-col text-center">
        <div>
          <h1 className="font-medium text-3xl md:text-5xl  ">
            Conheça seu próximo
          </h1>
          <h1 className="text-[#fefefe] font-bold text-5xl drop-shadow-xl md:text-7xl">
            Desenvolvedor
          </h1>
        </div>
        <div className="mt-10 md:mt-[8rem] md:px-8">
          <p className="text-[#fefefe] text-xl font-thin md:text-3xl">
            Eu sou
            <span className="text-2xl font-semibold md:text-4xl">
              {" "}
              Arthur Quaresma
            </span>
            , um desenvolvedor com foco em
            <span className="text-2xl font-semibold md:text-4xl">
              {" "}
              front-end
            </span>
            , e esse é o meu portfólio.
          </p>
        </div>

        <div className="flex gap-4 justify-center relative top-40 md:gap-8 xl:top-40">
          <Link
            href="https://www.github.com/pendragonarthur"
            target="_blank"
            className="text-[#fefefe] rounded-sm flex items-center py-[5px] pl-[10px] font-[400] justify-center border-b-[1px] hover:border-[#5625aa] focus:text-[#314e85] hover:text-[#5625aa] duration-200 md:text-2xl "
          >
            <BsGithub /> <span className="pr-[40px] pl-[20px]">GitHub</span>
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/arthur-quaresma-670873214/"
            className="text-[#fefefe] rounded-sm flex items-center py-[5px] pl-[10px] font-[400]  border-b-[1px] hover:border-[#5625aa] hover:text-[#5625aa] focus:text-[#314e85] transition-colors duration-200 md:text-2xl"
          >
            <BsLinkedin />
            <span className="pr-[40px] pl-[20px]">LinkedIn</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default MainPage;
