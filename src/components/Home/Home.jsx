import React from "react";
import "./Home.css";
import computer from "../../Images/imageComputer.png";
import { useNavigate } from "react-router-dom";
/* import { motion } from "framer-motion"; */
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const navigate = useNavigate();

  const navigateTo = (to) => {
    navigate(to);
  };

  return (
    <div className="flex bg-transparent w-[100%] h-[100vh]">
      {/* <motion.div
      className="container1"
      initial={{ opacity: 0, transition: { duration: 0.2 } }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      exit={{ x: window.innerHeight, transition: { duration: 0.2 } }}
    > */}
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        defaultValue={i18n.language}
        className="fixed w-[70px] sm:w-[100px] h-[25px] sm:h-[40px] m-[25px] sm:m-[35px] border text-xs sm:text-base border-black z-10 rounded-[5%] flex text-center font-bold hover:cursor-pointer"
      >
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
      <div className="flex flex-col justify-evenly items-center text-center bg-transparent absolute w-[85%] h-[100vh]">
        <div className="text text-[#5a84a2] text-[1.5rem] sm:text-[2rem] md:text-[3rem] font-bold w-[0] whitespace-nowrap overflow-hidden">
          {t("TITLEHOME")}
        </div>
        <div className=" grid grid-cols-2 gap-4 sm:flex items-center justify-center w-[80%]">
          <button
            onClick={() => navigateTo("/projects")}
            className="ml-[2.5%] mr-[2.5%] w-[100px] h-[100px] text-[0.8rem] rounded-[20px] bg-gradient-to-br from-[#f0f0f0] to-[#cacaca] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.1),2px_2px_8px_rgba(0,0,0,0.15),-2px_-2px_8px_rgba(255,255,255,1),-2px_-2px_8px_rgba(255,255,255,0.5)] border border-white font-bold transition ease-[0.2s] hover:cursor-pointer hover:shadow-[inset_-2px_-2px_8px_rgba(255,255,255,1),inset_-2px_-2px_8px_rgba(255,255,255,0.5),inset_2px_2px_4px_rgba(255,255,255,0.1),inset_2px_2px_8px_rgba(0,0,0,0.15)] hover:scale-[0.98] hover:border-black hover:text-[0.9rem]"
          >
            {t("BUTTONPROJECTS")}
          </button>
          <button
            onClick={() => navigateTo("/studies")}
            className="ml-[2.5%] mr-[2.5%] w-[100px] h-[100px] text-[0.8rem] rounded-[20px] bg-gradient-to-br from-[#f0f0f0] to-[#cacaca] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.1),2px_2px_8px_rgba(0,0,0,0.15),-2px_-2px_8px_rgba(255,255,255,1),-2px_-2px_8px_rgba(255,255,255,0.5)] border border-white font-bold transition ease-[0.2s] hover:cursor-pointer hover:shadow-[inset_-2px_-2px_8px_rgba(255,255,255,1),inset_-2px_-2px_8px_rgba(255,255,255,0.5),inset_2px_2px_4px_rgba(255,255,255,0.1),inset_2px_2px_8px_rgba(0,0,0,0.15)] hover:scale-[0.98] hover:border-black hover:text-[0.9rem]"
          >
            {t("BUTTONSTUDIES")}
          </button>
          <button
            onClick={() => navigateTo("/about")}
            className="ml-[2.5%] mr-[2.5%] w-[100px] h-[100px] text-[0.8rem] rounded-[20px] bg-gradient-to-br from-[#f0f0f0] to-[#cacaca] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.1),2px_2px_8px_rgba(0,0,0,0.15),-2px_-2px_8px_rgba(255,255,255,1),-2px_-2px_8px_rgba(255,255,255,0.5)] border border-white font-bold transition ease-[0.2s] hover:cursor-pointer hover:shadow-[inset_-2px_-2px_8px_rgba(255,255,255,1),inset_-2px_-2px_8px_rgba(255,255,255,0.5),inset_2px_2px_4px_rgba(255,255,255,0.1),inset_2px_2px_8px_rgba(0,0,0,0.15)] hover:scale-[0.98] hover:border-black hover:text-[0.9rem]"
          >
            {t("BUTTONABOUT")}
          </button>
          <button
            onClick={() => navigateTo("/contact")}
            className="ml-[2.5%] mr-[2.5%] w-[100px] h-[100px] text-[0.8rem] rounded-[20px] bg-gradient-to-br from-[#f0f0f0] to-[#cacaca] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.1),2px_2px_8px_rgba(0,0,0,0.15),-2px_-2px_8px_rgba(255,255,255,1),-2px_-2px_8px_rgba(255,255,255,0.5)] border border-white font-bold transition ease-[0.2s] hover:cursor-pointer hover:shadow-[inset_-2px_-2px_8px_rgba(255,255,255,1),inset_-2px_-2px_8px_rgba(255,255,255,0.5),inset_2px_2px_4px_rgba(255,255,255,0.1),inset_2px_2px_8px_rgba(0,0,0,0.15)] hover:scale-[0.98] hover:border-black hover:text-[0.9rem]"
          >
            {t("BUTTONCONTACT")}
          </button>
        </div>
      </div>
      {
        <img
          src={computer}
          alt="Not found"
          className="absolute mt-[10%] w-[600px] z-[-1] sm:right-[17%]"
        />
      }
      {/* </motion.div> */}
    </div>
  );
};
