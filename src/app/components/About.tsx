import ContactButton from "./ContactButton";
import Eu from "./images/arthurquaresma.jpg";
import Image from "next/image";

const About = () => {
  return (
    <main className="bg-[#fefefe] pt-4 pb-12">
      <section className="flex justify-center items-center flex-col">
        <h1 className="p-10 text-5xl font-bold text-[#101010] md:text-7xl">
          Sobre mim
        </h1>
        <Image
          src={Eu}
          width={300}
          height={300}
          alt="Arthur Quaresma"
          className="rounded-full md:w-[450px]"
        />
        <p className="text-[#101010] p-10 text-center md:text-2xl">
          Olá! Sou Arthur, tenho 21 anos, atualmente moro em Balneário Camboriú,
          Santa Catarina. Sou um desenvolvedor focado em React + TypeScript e
          possuo conhecimentos sólidos em frameworks CSS, como Tailwind, SASS e
          Bootstrap. No momento estou começando meus estudos em Node.js e
          MongoDB, e pretendo iniciar em Java logo após. Meu principal objetivo
          é ingressar no mercado de trabalho como desenvolvedor web, e
          futuramente ampliar meus conhecimentos para o desenvolvimento de
          software.
        </p>
        <span className="border-b-2 border-[#101010] w-[75%] rounded-full"></span>
        <h1 className="text-[#101010] text-3xl p-10 md:text-5xl">
          Quer saber mais?
        </h1>
        <ContactButton />
      </section>
    </main>
  );
};

export default About;
