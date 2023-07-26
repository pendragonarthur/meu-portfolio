"use client";
import Image from "next/image";
import CatFact from "./images/thumb-projetos/catfactimage.jpg";
import { BsLink45Deg } from "react-icons/bs";

const ProjectCards = () => {
  let Projects = [
    {
      name: "CatFact Generator",
      description:
        "Um simples gerador de fatos sobre gatos que consome uma API pública feito em React. ",
      image: CatFact,
      link: "https://github.com/pendragonarthur/catfacts",
      techs: ["React, ", "FetchAPI, ", "Axios, ", "CSS, ", "Bootstrap "],
    },
    {
      name: "Projeto 2",
      description: "A ser adicionado.",
      image: "",
      link: "",
    },
    {
      name: "Projeto 3",
      description: "A ser adicionado.",
      image: "",
      link: "",
    },
    {
      name: "Projeto 4",
      description: "A ser adicionado.",
      image: "",
      link: "",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {Projects.map((project, key) => {
        return (
          <div
            key={key}
            className="border-[#fefefe] border-2 rounded-sm min-h-[250px]"
          >
            <a
              href={project.link}
              target="_blank"
              className="hover:underline text-[#101010] cursor-pointer"
            >
              <h1 className="flex flex-row bg-[#fefefe] items-center justify-center text-2xl p-2 font-semibold">
                {project.name}
                <BsLink45Deg />
              </h1>
            </a>

            {project.image ? (
              <div className="grid grid-cols-2 gap-4 bg-[#101010be] lg:max-w-lg">
                <Image src={project.image} alt="Project Image" />
                <p className="font-[300] md:text-2xl text-sm pt-2 md:p-4 xl:text-[1rem] text-[#fefefe]">
                  {project.description}
                  <p className="text-sm pt-4 font-semibold md:text-2xl xl:text-[14px] xl:p-0">
                    Techs utilizadas: {project.techs}
                  </p>
                </p>
              </div>
            ) : (
              <h1 className="text-center text-2xl font-semibold p-2">
                Em desenvolvimento...
              </h1>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCards;
