import ProjectCards from "./ProjectCards";

const Projects = () => {
  return (
    <main className="my-bg-2 bg-center bg-cover bg-no-repeat h-screen pt-[8rem]">
      <h1 className="md:text-7xl text-5xl font-bold text-center text-[#fefefe]">
        Projetos
      </h1>
      <div className="p-8 lg:grid-cols-2 flex justify-center items-center">
        <ProjectCards />
      </div>
    </main>
  );
};

export default Projects;
