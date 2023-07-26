import { BsEnvelopeFill, BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-4 bg-[#fefefe] text-[#101010]">
      <div className="flex flex-row justify-center gap-4 py-2 items-center text-xl">
        <Link href="https://www.github.com/pendragonarthur" target="_blank">
          <BsGithub className="hover:text-[#5625aa] transition-colors duration-200 cursor-pointer" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/arthur-quaresma-670873214/"
          target="_blank"
        >
          <BsLinkedin className="hover:text-[#5625aa] transition-colors duration-200 cursor-pointer" />
        </Link>
        <Link href="mailto:devarthurquarxma@outlook.com" target="_blank">
          <BsEnvelopeFill className="hover:text-[#5625aa] transition-colors duration-200 cursor-pointer" />
        </Link>
      </div>

      <div className="text-sm text-center w-full bg-[#fefefe] text-[#101010]">
        2023. Todos os direitos reservados. &copy;
      </div>
    </footer>
  );
};

export default Footer;
