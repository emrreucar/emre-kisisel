import React from "react";
import Image from "next/image";
import Link from "next/link";
import movieImg from "@/assets/movieapp.png";

const page = () => {
  return (
    <div className="h-[100px] max-w-[1240px] ">
      <div className="w-[80%] m-auto h-[30vh] lg:h-[40vh] relative ">
        <Image
          className="mt-[100px] rounded-2xl "
          width={700}
          height={400}
          style={{ objectFit: "cover" }}
          src={movieImg}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 px-10 py-40 sm:pt-32 sm:pl-32 ">
        <div className="col-span-4">
          <p className="text-4xl text-sky-600 dark:text-rose-600">
            Project | Movie App
          </p>
          <h2 className="mt-4 text-2xl font-semibold ">Genel Bakış</h2>
          <p className="pt-2">
            Next.js ve Tailwind CSS kullanarak bir MovieApp tasarladım. Bu
            proje, "The Movie Database" adlı platformdan veri çekme işlevselliği
            de içermektedir. <br /> <br /> Next.js, React tabanlı bir
            framework'tür ve statik ve dinamik web sayfaları oluşturmak için
            kullanılabilir. Tailwind CSS ise, CSS yazımını kolaylaştıran bir CSS
            framework'üdür. Bu iki teknolojiyi kullanarak, MovieApp web sitesi
            için modern ve minimalist bir tasarım oluşturdum. <br /> <br /> "The
            Movie Database" platformundan veri çekmek için, web sitesinde yer
            alan her bir film için bir API çağrısı yaptım. Bu sayede, filmler
            hakkında verileri web sitesinde gösterdim. Bu proje, kullanıcıların
            web sitesi üzerinden filmler hakkında bilgi edinmelerini sağlar.{" "}
            <br /> <br /> MovieApp projesi, geliştiricilere bir örnek proje
            olarak sunulabilir ve özellikle web sitesinde veri çekme
            işlevselliği hakkında fikir sahibi olmak isteyenlere ilham
            verebilir. Ayrıca, kullanıcılar için modern ve minimalist bir web
            tasarımı sunar.
          </p>
          <Link href="netxt-js-movieapp.vercel.app" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8 shadow-xl shadow-gray-400 rounded-xl uppercase bg-sky-600 dark:bg-rose-600 text-white dark:shadow-gray-700 ">
              Demo
            </button>
          </Link>
          <Link
            href="https://github.com/emrreucar/next.js-movieapp"
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
