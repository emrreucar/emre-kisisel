import React from "react";
import Image from "next/image";

import html from "@/assets/skills/html.png";
import css from "@/assets/skills/css.png";
import javascript from "@/assets/skills/javascript.png";
import react from "@/assets/skills/react.png";
import nextjs from "@/assets/skills/nextjs.png";
import tailwind from "@/assets/skills/tailwind.png";
import node from "@/assets/skills/node.png";
import mongo from "@/assets/skills/mongo.png";
import java from "@/assets/skills/java.png";
import mysql from "@/assets/skills/mysql.png";
import firebase from "@/assets/skills/firebase.png";
import figma from "@/assets/skills/figma.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full mt-[200px] md:mt-0 lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl font-semibold tracking-widest uppercase text-sky-600 dark:text-rose-600">
          Yeteneklerim
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* skills item start */}
          <div className="p-6 shadow-xl shadow-gray-400 dark:shadow-gray-700 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={html} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML5</h3>
              </div>
            </div>
          </div>
          {/* skills item end */}
          {/* skills item start */}
          <div className="p-6 shadow-xl shadow-gray-400 dark:shadow-gray-700 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={css} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS3</h3>
              </div>
            </div>
          </div>
          {/* skills item end */}
          {/* skills item start */}
          <div className="p-6 shadow-xl shadow-gray-400 dark:shadow-gray-700 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={javascript} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          {/* skills item end */}
          {/* skills item start */}
          <div className="p-6 shadow-xl shadow-gray-400 dark:shadow-gray-700 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={react} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          {/* skills item end */}
          {/* skills item start */}
          <div className="p-6 shadow-xl shadow-gray-400 dark:shadow-gray-700 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={nextjs} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NextJS</h3>
              </div>
            </div>
          </div>
          {/* skills item end */}
          {/* skills item start */}
          <div className="p-6 shadow-xl shadow-gray-400 dark:shadow-gray-700 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={tailwind} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind CSS</h3>
              </div>
            </div>
          </div>
          {/* skills item end */}
          {/* skills item start */}
          <div className="p-6 shadow-xl shadow-gray-400 dark:shadow-gray-700 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={mongo} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>
          {/* skills item end */}
          {/* skills item start */}
          <div className="p-6 shadow-xl shadow-gray-400 dark:shadow-gray-700 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={node} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NodeJS</h3>
              </div>
            </div>
          </div>
          {/* skills item end */}
          {/* skills item start */}
          <div className="p-6 shadow-xl shadow-gray-400 dark:shadow-gray-700 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={java} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Java</h3>
              </div>
            </div>
          </div>
          {/* skills item end */}
          {/* skills item start */}
          <div className="p-6 shadow-xl shadow-gray-400 dark:shadow-gray-700 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={mysql} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MySQL</h3>
              </div>
            </div>
          </div>
          {/* skills item end */}
          {/* skills item start */}
          <div className="p-6 shadow-xl shadow-gray-400 dark:shadow-gray-700 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={firebase} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          {/* skills item end */}
          {/* skills item start */}
          <div className="p-6 shadow-xl shadow-gray-400 dark:shadow-gray-700 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={figma} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Figma</h3>
              </div>
            </div>
          </div>
          {/* skills item end */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
