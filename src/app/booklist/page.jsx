import React from "react";
import Image from "next/image";
import Link from 'next/link';
import booklistImg from "@/assets/booklist.png";

const page = () => {
  return (
    <div className="h-[100px] max-w-[1240px] ">
      <div className="w-[80%] m-auto h-[30vh] lg:h-[40vh] relative ">
        <Image
          className="mt-[100px] rounded-2xl "
          width={700}
          height={400}
          style={{ objectFit: "cover" }}
          src={booklistImg}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 px-10 py-40 sm:pt-32 sm:pl-32 ">
        <div className="col-span-4">
          <p className="text-4xl text-sky-600 dark:text-rose-600">Project | Booklist App </p>
          <h2 className="mt-4 text-2xl font-semibold ">Genel Bakış</h2>
          <p className="pt-2">
            React ve Boostrap kullanarak Kitap Listesi Uygulaması yaptım. Kitap adı, yazar adı ve barkod numarasını girdiğinizde yan ekranda bu bilgileri tutan bir uygulama. Sağ tarafta çıkan çöp kutusuna basarak bilgileri tek tek silebilir veya en altta çıkan hepsini sil butonuna basarak da girilen tüm bilgileri silebilirsiniz.
          </p>
          <Link href='https://emre-booklistapp.netlify.app/' target="_blank">
            <button className="px-8 py-2 mt-4 mr-8 shadow-xl shadow-gray-400 rounded-xl uppercase bg-sky-600 dark:bg-rose-600 text-white dark:shadow-gray-700 ">Demo</button>
          </Link>
          <Link href='https://github.com/emrreucar/React-BookList-App' target="_blank">
            <button className="px-8 py-2 mt-4 mr-8 shadow-xl shadow-gray-400 rounded-xl uppercase bg-sky-600 dark:bg-rose-600 text-white dark:shadow-gray-700 ">Code</button>
          </Link>
        </div>
      </div>

      <footer className="py-4">
        <p className="text-center"> Copyright &copy; 2023 Made with by ❤ <span className="text-sky-600 dark:text-rose-600 font-semibold">EMRE UÇAR </span> </p>
      </footer>
    </div>
  );
};

export default page;
