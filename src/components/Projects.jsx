import React from "react";
import ProjectItem from "./ProjectItem";
import hoobankImg from '@/assets/hoobank.png';
import fooImg from '@/assets/foo.png';
import nftImg from '@/assets/nft.png';
import movieImg from '@/assets/movieapp.png';
import shoppingcartImg from '@/assets/shoppingcart.png';
import booklistImg from '@/assets/booklist.png';


const Project = () => {
  return (
    <div id="projects" className="w-full mt-[150px] md:mt-0">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-sky-600 dark:text-rose-600 font-semibold">
          Projelerim
        </p>
        <h2 className="py-4">İşte Projelerimin Bir Kısmı!</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="HooBank"
            backgroundImg={hoobankImg}
            projectUrl="/hoobank"
            lang="React & Tailwind"
          />
          <ProjectItem
            title="Foo"
            backgroundImg={fooImg}
            projectUrl="/foo"
            lang="React & Tailwind"
          />
          <ProjectItem
            title="NFT Marketplace"
            backgroundImg={nftImg}
            projectUrl="/nft"
            lang="HTML & CSS"
          />
          <ProjectItem
            title="Movie App"
            backgroundImg={movieImg}
            projectUrl="/movieapp"
            lang="NextJS / Tailwind"
          />
          <ProjectItem
            title="Shopping Cart"
            backgroundImg={shoppingcartImg}
            projectUrl="/shoppingcart"
            lang="React & Tailwind"
          />
          <ProjectItem
            title="Booklist App"
            backgroundImg={booklistImg}
            projectUrl="/booklist"
            lang="ReactJS & ReactBootstrap"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
