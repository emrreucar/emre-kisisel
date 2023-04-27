import React from "react";

import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-sky-600 dark:text-rose-600 fontsemibold mt-[100px] md:mt-10">
          İletişim
        </p>
        <h2 className="font-semibold text-2xl py-6">Bana Ulaş !</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-8">
          {/* left side start */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              {/* image div start */}
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="/"
                />
              </div>
              {/* image div end */}
              <div className="py-2">Emre Uçar</div>
              <p className="italic">Jr. Full Stack Web Developer</p>
              <div className="flex items-center gap-2">
                <AiOutlinePhone /> <p className="py-4">0544 494 79 40</p>
              </div>
              <div className="flex items-center gap-2 mt-[-10px]">
                <AiOutlineMail /> <p className="py-4">emre.ucarr1@gmail.com</p>
              </div>
              <div className="flex items-center gap-2 mt-[-10px]">
                <FaRegAddressCard size={25} />{" "}
                <p className="py-4">
                  Orhaniye Mahallesi Molakent Yapı Koop. Doğu Sokak A blok
                  Daire:2 Menteşe/Muğla
                </p>
              </div>
            </div>
          </div>
          {/* left side end */}

          {/* right side start */}
          <div className="flex flex-col items-center ml-[5%] lg:ml-0 justify-end shadow-xl shadow-gray-400 bg-gray-100 dark:bg-black rounded-xl p-10 w-[100%] ">
            <form
              action="https://getform.io/f/5efe5d9e-b5dd-4771-98aa-7830a332fad2"
              method="POST"
              className="flex flex-col min-w-full md:w-1/2"
            >
              <input
                type="text"
                name="name"
                placeholder="Adınızı giriniz"
                className="p-2 bg-transparent border-2 rounded-md dark:text-white placeholder:text-black dark:placeholder:text-white placeholder:opacity-60 focus:outline-none w-full my-4"
              />

              <input
                type="email"
                name="email"
                placeholder="E-mail adresinizi giriniz"
                className="p-2 bg-transparent border-2 rounded-md dark:text-white placeholder:text-black dark:placeholder:text-white placeholder:opacity-60 focus:outline-none my-4"
              />

              <textarea
                name="message"
                rows="10"
                placeholder="Mesajınızı giriniz"
                className="p-2 bg-transparent border-2 rounded-md focus:outline-none my-4 placeholder:text-black dark:placeholder:text-white placeholder:opacity-60"
              ></textarea>

              <button className="text-white bg-sky-600 dark:bg-rose-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Gönder!
              </button>
            </form>
          </div>
          {/* right side end */}
        </div>
      </div>

      {/* footer start */}
      <footer className="py-4">
        <p className="text-center"> Copyright &copy; 2023 Made with by ❤ <span className="text-sky-600 dark:text-rose-600 font-semibold">EMRE UÇAR </span> </p>
      </footer>
      {/* footer end */}
    </div>
  );
};

export default Contact;
