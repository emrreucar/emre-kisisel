import React from "react";
import Image from "next/image";
import Link from "next/link";
import hoobankImg from "@/assets/hoobank.png";

const page = () => {
  return (
    <div className="h-[100px] max-w-[1240px] ">
      <div className="w-[80%] m-auto h-[30vh] lg:h-[40vh] relative ">
        <Image
          className="mt-[100px] rounded-2xl"
          width={700}
          height={400}
          style={{ objectFit: "cover" }}
          src={hoobankImg}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 px-10 py-40 sm:pt-32 sm:pl-32 ">
        <div className="col-span-4">
          <p className="text-4xl text-sky-600 dark:text-rose-600">
            Project | HooBank Responsive Web Site
          </p>
          <h2 className="mt-4 text-2xl font-semibold ">Genel Bakış</h2>
          <p className="pt-2">
            React ve Tailwind CSS kullanarak bir banka web sitesi tasarladım.
            Web sitemin tasarımı, kullanıcı dostu ve modern bir yaklaşımla
            hazırlandı. <br /> <br /> React, Facebook tarafından geliştirilmiş bir JavaScript
            kütüphanesidir ve web uygulamalarının dinamik olarak oluşturulmasını
            sağlar. Sitede yer alan her bir bileşen, kendi özellikleri ve
            işlevleriyle bağımsız bir şekilde çalışır ve bu sayede, web
            uygulamasının daha verimli olmasını sağlar. Ayrıca, sitede yer alan
            tüm bileşenler React kullanarak oluşturuldu. <br /> <br /> Web sitemin
            tasarımında, Tailwind CSS kullanarak modern ve minimal bir tasarım
            oluşturdum. Tailwind CSS, CSS kodlarının daha hızlı ve kolay
            yazılmasını sağlayan bir CSS framework'üdür. Sınıf tabanlı bir yapı
            kullanarak, sayfa tasarımlarının hızlı bir şekilde oluşturulmasına
            imkan tanır.
          </p>
          <Link href="https://emre-hoobank.netlify.app/" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8 shadow-xl shadow-gray-400 rounded-xl uppercase bg-sky-600 dark:bg-rose-600 text-white dark:shadow-gray-700 ">
              Demo
            </button>
          </Link>
          <Link
            href="https://github.com/emrreucar/React-Tailwind-Responsive-Web-Site2"
            target="_blank"
          >
            <button className="px-8 py-2 mt-4 mr-8 shadow-xl shadow-gray-400 rounded-xl uppercase bg-sky-600 dark:bg-rose-600 text-white dark:shadow-gray-700 ">
              Code
            </button>
          </Link>
        </div>
      </div>

      <footer className="py-4">
        <p className="text-center">
          {" "}
          Copyright &copy; 2023 Made with by ❤{" "}
          <span className="text-sky-600 dark:text-rose-600 font-semibold">
            EMRE UÇAR{" "}
          </span>{" "}
        </p>
      </footer>
    </div>
  );
};

export default page;
