import MenuButton from "./MenuButton";

const MainHeader = () => {
  return (
    <header className="w-full md:w-full flex flex-col p-4 md:text-xl fixed bg-[#101010] z-10">
      <h1 className="text-[#fefefe] font-bold">&lt;myportfolio/&gt;</h1>
      <MenuButton />
    </header>
  );
};

export default MainHeader;
