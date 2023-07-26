"use client";
import MainHeader from "@/app/components/MainHeader";
import Footer from "@/app/components/Footer";
import emailjs from "@emailjs/browser";

import { useRef } from "react";
const Contact = () => {
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yjz5r3r",
        "template_d0tk1fc",
        form.current,
        "r3rzSTEDFm6ZKGB8a"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email enviado com sucesso!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <MainHeader />
      <div className="pt-[2rem] md:pt-[4rem] h-screen my-bg bg-center bg-no-repeat bg-cover w-full justify-center flex items-center flex-col">
        <h1 className="text-3xl text-[#fefefe] p-4 font-semibold">
          Entre em contato aqui!
        </h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col md:w-[50%] p-4 md:p-8 bg-[#101010be]"
        >
          <label>Nome:</label>
          <input
            type="text"
            name="user_name"
            placeholder="Jane Doe"
            className="mb-4"
            required
          />
          <label>Email:</label>
          <input
            placeholder="email@email.com"
            type="email"
            name="user_email"
            className="mb-4"
            required
          />
          <label>Mensagem:</label>
          <textarea
            name="message"
            placeholder="Escreva sua mensagem aqui..."
            className="mb-4"
            required
          />
          <input
            type="submit"
            value="Enviar"
            className="text-[#fefefe] rounded-sm text-center py-[5px] font-[400] justify-center focus:text-[#314e85] hover:text-[#5625aa] duration-200 md:text-2xl cursor-pointer bg-[#5625aa] hover:bg-[#fefefe] border-[#5625aa] focus:[#451f8893]"
          />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
