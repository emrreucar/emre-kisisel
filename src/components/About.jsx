import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest font-semibold text-sky-600 dark:text-rose-600">
            Hakkımda
          </p>
          <h2 className="font-bold py-8">Ben Kimim?</h2>
          <p className="py-2 text-gray-600 dark:text-white">
            Merhaba, ben Emre Uçar. Yazılım geliştiricisiyim ve hem front-end hem de
            back-end teknolojileriyle ilgileniyorum. Kişisel web sitemi
            hazırladım ve üzerinde çalışmakta olduğum teknoloji React'tir.
            Geliştirme sürecinde kullandığım teknolojiler arasında HTML, CSS,
            JavaScript, React, Node.js, Express.js ve MongoDB gibi araçlar yer
            alıyor. Bu araçları kullanarak dinamik ve kullanıcı dostu web
            uygulamaları geliştiriyorum. <br /> <br /> Kodlama dünyasındaki yeni teknolojileri
            takip etmek ve öğrenmek benim için bir tutku haline geldi. Kendimi
            sürekli olarak geliştirerek daha iyi uygulamalar yazmayı
            hedefliyorum. Yaratıcı ve yenilikçi bir yaklaşıma sahip olmam, hem
            front-end hem de back-end geliştirme işlemlerinde benim için büyük
            bir avantaj sağlıyor. Kullanıcı deneyimi ve performans odaklı
            yaklaşımım sayesinde, projelerimde başarı elde ediyorum.
          </p>
          <Link href="https://emre-hoobank.netlify.app/" target="_blank">
            <p className="py-2 text-gray-600 dark:text-white underline cursor-pointer">
              Son Projeme Göz At!
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4">
          <img
            className="rounded-xl hover:scale-105 ease-in duration-300"
            src="https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="image-who-i-am"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
