import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-[70%] mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-4xl mt-[130px] md:mt-10">
            Merhaba, Ben{" "}
            <span className="text-sky-600 font-semibold dark:text-rose-700 duration-100">
              EMRE
            </span>
          </h1>
          <h1 className="py-2 italic">Jr. Full Stack Web Developer</h1>
          <p className="py-4 text-gray-600 dark:text-white max-w-[70%] m-auto duration-300 ">
            Merhaba, ben web geliştirme alanında çalışan biriyim ve kendi web
            sitemi hazırladım. Sitemi geliştirirken, Next.js ve Tailwind CSS
            gibi teknolojileri kullanarak, modern ve etkileyici bir web deneyimi
            oluşturmayı hedefledim.
            Back-end konularına da ilgi duyuyorum ve back-end geliştirme
            işlemlerinde de tecrübe kazandım. Kendimi sürekli olarak
            geliştirerek, yeni teknolojileri takip ediyor ve projelerimde
            kullanıyorum.
          </p>

          {/* social icons start */}
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 ">
            <Link
              href="https://www.linkedin.com/in/emre-u%C3%A7ar-bbb927251/"
              target="_blank"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 dark:text-white dark:shadow-gray-500 p-3 cursor-pointer hover:scale-125 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link
              href="https://github.com/emrreucar?tab=repositories"
              target="_blank"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 dark:text-white dark:shadow-gray-500 p-3 cursor-pointer hover:scale-125 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
            <Link href="https://www.instagram.com/emreucaar_/" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 dark:text-white dark:shadow-gray-500 p-3 cursor-pointer hover:scale-125 ease-in duration-300">
                <FaInstagram />
              </div>
            </Link>
            <Link href="mailto:erme.ucarr1@gmail.com" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 dark:text-white dark:shadow-gray-500 p-3 cursor-pointer hover:scale-125 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1d0GSVbZ8RWCcZ5bCQNJIEhcuwKvfAFhz/view?usp=sharing"
              download
              target="_blank"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 dark:text-white dark:shadow-gray-500 p-3 cursor-pointer hover:scale-125 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
          {/* social icons end */}
        </div>
      </div>
      <div className="mt-[-20px] ">
        <p className=" mt-20 md:mt-0 text-sm italic text-gray-500 dark:text-white">
          Yukarıdaki linklerden sosyal medya hesaplarıma göz atabilir, bana mail
          gönderebilir ve CV'mi inceleyebilirsin!
        </p>
      </div>
    </div>
  );
};

export default Main;
