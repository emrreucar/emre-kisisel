"use client";

import React, { useState, useEffect } from "react";
import ThemeComp from "./ThemeComp";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const Header = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if(window.scrollY >= 90){
        setShadow(!shadow);
      }
      else{
        setShadow(shadow);
      }
    };

    window.addEventListener('scroll', handleShadow);
  }, [])


  const navLinks = [
    {
      id: 1,
      name: "Anasayfa",
      src: "#home",
    },
    {
      id: 2,
      name: "Hakkımda",
      src: "#about",
    },
    {
      id: 3,
      name: "Yeteneklerim",
      src: "#skills",
    },
    {
      id: 4,
      name: "Projelerim",
      src: "#projects",
    },
    {
      id: 5,
      name: "İletişim",
      src: "#contact",
    },
  ];

  return (
    <div className={shadow ? 'sticky top-0 w-full h-20 shadow-xl z-[999] bg-white dark:bg-[#121212] ' : 'sticky top-0 w-full h-20 z-[999] '} >
      <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
        <Link
          className="text-4xl font-semibold text-sky-600 duration-100 dark:text-rose-700 tracking-wider"
          href="/"
        >
          EMRE
        </Link>

        <div className="w-full">
          <ul className="hidden md:flex items-center justify-end gap-10 mr-20">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a className="hover:text-sky-600 dark:hover:text-rose-700 duration-300" href={link.src}>
                  {link.name} 
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mr-10">
          <ThemeComp />
        </div>

        <div onClick={handleNav} className="md:hidden">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/* mobile menu start */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/90 duration-300"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-[#121212] p-10 ease-in duration-500 "
              : "fixed left-[-100%] top-0 p-10 duration-500 "
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link
                className="text-4xl font-semibold text-sky-600 dark:text-rose-600 tracking-wider"
                href="/"
              >
                EMRE
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose className="dark:text-white" />
              </div>
            </div>

            <div className="border-b border-gray-300 my-4"></div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase p-4">
                {navLinks.map((link) => (
                  <li key={link.id} className="py-4 tracking-widest">
                    <a onClick={() => setNav(false)} className="gap-10" href={link.src}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* mobile menu end */}
    </div>
  );
};

export default Header;
