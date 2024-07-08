import React from "react";
import "./Projects.css";
import blogs from "../../Images/Blogs3.png";
import blogBack from "../../Images/BlogBack.png";
/* import { motion } from "framer-motion"; */
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row md:gap-4 md:ml-2 md:mr-4 items-center justify-center md:justify-evenly leading-[1.5em]  md:h-screen w-full transition duration-[0.5s] bg-white">
      {/* <motion.div
      className="container3"
      initial={{ opacity: 0, transition: { duration: 0.3 } }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    > */}
      <div className="item flex flex-col justify-between text-[#eb904b] ml-[10%] sm:ml-[30%] md:ml-[0%] m-4 w-[275px] md:w-[285px] h-[450px] bg-[#5a84a2] rounded-[10px] p-[10px_5px] shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_1px_3px_1px_rgba(60,64,67,0.2)] relative cursor-crosshair">
        <div className="layer overflow-auto rounded-[inherit] h-[400px] p-[20px] shadow-[0px_1px_2px_rgba(0,0,0,0.07)_0px_2px_4px_rgba(0,0,0,0.07)_0px_4px_8px_rgba(0,0,0,0.07)_0px_8px_16px_rgba(0,0,0,0.07)_0px_16px_32px_rgba(0,0,0,0.07)_0px_32px_64px] relative left-[10px]">
          <h2 className="h2Projects inline-block text-[#eb904b] mb-[10px] font-bold text-center text-xl">
            {t("INDIVIDUALPROJECT")}
          </h2>
          <p className="text-[#555] text-[1.2em]">{t("INDIVIDUALCONTAIN")}</p>
          {/* <span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="fa-solid fa-gears"
              href="https://github.com/Palma97/VideogamesPi"
            >
              {t("SHOWMORE")}
            </a>
          </span> */}
        </div>
        <h4>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-end justify-center mb-[2%] text-white hover:cursor-pointer text-center text-base font-bold"
            href="https://github.com/Palma97/VideogamesPi"
          >
            {t("LINK")}
          </a>
        </h4>
      </div>
      <div className="item flex flex-col justify-between ml-[10%] sm:ml-[30%] md:ml-[0%] text-[#eb904b] m-4 w-[275px] md:w-[285px] h-[450px] bg-[#5a84a2] rounded-[10px] p-[10px_5px] shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_1px_3px_1px_rgba(60,64,67,0.2)] relative cursor-crosshair">
        <div className="layer overflow-auto rounded-[inherit] h-[400px] p-[20px] shadow-[0px_1px_2px_rgba(0,0,0,0.07)_0px_2px_4px_rgba(0,0,0,0.07)_0px_4px_8px_rgba(0,0,0,0.07)_0px_8px_16px_rgba(0,0,0,0.07)_0px_16px_32px_rgba(0,0,0,0.07)_0px_32px_64px] relative left-[10px]">
          <h2 className="h2Projects inline-block text-[#eb904b] mb-[10px] font-bold text-center text-xl">
            {t("GRUPALPROJECT")}
          </h2>
          <p className="text-[#555] text-[1.2em]">{t("GRUPALCONTAIN")}</p>
          {/* <span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="fa-solid fa-gears"
              href="https://stringsandkeys.up.railway.app/"
            >
              {t("SHOWMORE")}
            </a>
          </span> */}
        </div>
        <h4>
          {" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-end justify-center mb-[2%] text-white text-[1.5em] hover:cursor-pointer text-center text-base font-bold"
            href="https://stringsandkeys.up.railway.app/"
          >
            {t("LINK")}
          </a>
        </h4>
      </div>
      <div className="item flex flex-col justify-between ml-[10%] sm:ml-[30%] md:ml-[0%] text-[#eb904b] m-4 w-[275px] md:w-[285px] h-[450px] bg-[#5a84a2] rounded-[10px] p-[10px_5px] shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_1px_3px_1px_rgba(60,64,67,0.2)] relative cursor-crosshair">
        <div className="layer overflow-auto rounded-[inherit] h-[400px] p-[20px] shadow-[0px_1px_2px_rgba(0,0,0,0.07)_0px_2px_4px_rgba(0,0,0,0.07)_0px_4px_8px_rgba(0,0,0,0.07)_0px_8px_16px_rgba(0,0,0,0.07)_0px_16px_32px_rgba(0,0,0,0.07)_0px_32px_64px] relative left-[10px]">
          <h2 className="h2Projects inline-block text-[#eb904b] mb-[10px] font-bold text-center text-xl">
            {t("AXESDEV")}
          </h2>
          <p className="text-[#555] text-[1.2em]">{t("AXESCONTAIN")}</p>

          {/* <span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="fa-solid fa-gears"
              href="https://www.axesdev.com/"
            >
              {t("SHOWMORE")}
            </a>
          </span> */}
        </div>
        <h4>
          {" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-end justify-center mb-[2%] text-white text-[1.5em] hover:cursor-pointer font-bold text-center text-base "
            href="https://www.axesdev.com/"
          >
            {t("LINK")}
          </a>
        </h4>
      </div>
      <div className="hidden md:flex justify-end relative m-4 mr-2 w-[80%] lg:w-[25%] h-[80%] transition-[0.5s_ease-in-out]">
        <img
          className="flex justify-end absolute w-full h-full transition-opacity duration-500 ease-in-out opacity-100 hover:opacity-0 cursor-pointer"
          src={blogs}
          alt="Not found"
        />
        <img
          className="flex justify-end absolute w-full h-full opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100 cursor-pointer"
          src={blogBack}
          alt="Not found"
        />
      </div>
      {/* </motion.div> */}
    </div>
  );
}

export default Projects;
