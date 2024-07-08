import React from "react";
import "./About.css";
import htmlFondo from "../../Images/htmlFondo.png";
/* import { motion } from "framer-motion"; */
import { IoIosLink } from "react-icons/io";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row w-full md:h-screen items-center justify-evenly bg-white">
      {/* <motion.div
      className="containerr"
      initial={{ opacity: 0, transition: { duration: 0.5 } }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    > */}
      <div className="flex flex-col items-center md:items-end justify-center text-center h-[80%]  md:h-screen w-[80%] md:w-[40%]">
        <h1 className="title flex items-center text-[#5a84a2] p-[2%] md:pl-[35%] text-[2rem] lg:text-[3rem] font-bold justify-start border-b-[3px] border-[#5a84a2]">
          {t("BUTTONABOUT")}
        </h1>
        <div className="md:pl-[35%] text-[1.2em] pb-[10%] text-center md:text-right">
          {t("TEXTABOUT")}
        </div>
        <a
          href="https://drive.google.com/file/d/1iOqu28J0edTczPpNFKnYE7esMkK2o0j_/view"
          target="_blank"
          className="curriculumButton text-[none] text-left flex items-center text-[#5a84a2] text-[1.8rem] font-bold pr-[32%] border-t-[3px] border-[#5a84a2]"
        >
          {" "}
          <IoIosLink /> Curriculum vitae
        </a>
      </div>
      <div className="htmlFondo flex items-center justify-center w-[80%] md:w-[60%] mt-[5%] md:mt-[0%]">
        <img
          className="w-[80%] md:w-[60%] shadow-[8px_8px_8px_4px_rgba(0,0,0,0.5)] border-[none] rounded-[10%]"
          src={htmlFondo}
          alt="Not found"
        />
      </div>
      {/* </motion.div> */}
    </div>
  );
}

export default About;
