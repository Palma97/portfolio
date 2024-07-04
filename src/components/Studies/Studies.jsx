import React from "react";
import "./Studies.css";
import HenryStudies from "../../Images/HenryStudies.png";
import ingles from "../../Images/ingles.png";
import bootstrap from "../../Images/carrusel/Bootstrap.png";
import css from "../../Images/carrusel/CSS.png";
import express from "../../Images/carrusel/Express.png";
import github from "../../Images/carrusel/Bootstrap.png";
import html from "../../Images/carrusel/HTML.png";
import js from "../../Images/carrusel/JS.png";
import mongo from "../../Images/carrusel/Mongo.png";
import mysql from "../../Images/carrusel/Mysql.png";
import node from "../../Images/carrusel/Node.png";
import postgre from "../../Images/carrusel/Postgres.png";
import react from "../../Images/carrusel/React.png";
import redux from "../../Images/carrusel/Redux.png";
import sequelize from "../../Images/carrusel/Sequelize.png";
import ts from "../../Images/carrusel/TS.png";
/* import { motion } from "framer-motion"; */
import { useTranslation } from "react-i18next";

function Studies() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      {/* <motion.div
      className="container10"
      initial={{ opacity: 0, transition: { duration: 0.2 } }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    > */}
      <div className="flex w-full h-full justify-evenly">
        {/* <motion.div
        className="ome"
        initial={{ width: 0, transition: { duration: 0.2 } }}
        animate={{ width: "100%", transition: { duration: 0.2 } }}
        exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
      > */}
        <div className="card">
          <div className="flex flex-col justify-center items-center mt-[2%] pt-[5%] border-2 border-black rounded-[5%] shadow-2xl face front">
            <h1 className="bg-secondary text-[#5a84a2] w-full font-bold text-[1.5rem]">
              {t("TITLEDEVELOPER")}
            </h1>
            <p className="pl-5 pr-5 text-primary text-[1.2rem] mt-0">
              {t("SMALLCONTAINDEV")}
            </p>
            <img
              src={HenryStudies}
              alt="Not found"
              className="w-[95%] h-[70%]"
            />
          </div>
          <div className="flex flex-col justify-center items-center mt-[2%] pt-[5%] border-2 border-black rounded-[5%] shadow-2xl face back">
            <h1 className="h1Back bg-secondary text-[#5a84a2] w-full font-bold text-[1.5rem]">
              {t("TITLEDEVELOPER")}
            </h1>
            <p className="pl-5 pr-5 text-primary text-[1.2rem] mt-0">
              {t("BIGCONTAINDEV")}
            </p>
          </div>
        </div>

        <div className="card">
          <div className="flex flex-col justify-center items-center mt-[2%] pt-[5%] border-2 border-black rounded-[5%] shadow-2xl face front">
            <h1 className="bg-secondary text-[#5a84a2] w-full font-bold text-[1.5rem]">
              {t("TITLEENGLISH")}
            </h1>
            <p className="pl-5 pr-5 text-primary text-[1.2rem] mt-0">
              {t("SMALLCONTAINENG")}
            </p>
            <img src={ingles} alt="Not found" className="w-[95%] h-[70%]" />
          </div>

          <div className="flex flex-col justify-center items-center mt-[2%] pt-[5%] border-2 border-black rounded-[5%] shadow-2xl face back">
            <h1 className="h1Back bg-secondary text-[#5a84a2] w-full font-bold text-[1.5rem]">
              {t("TITLEENGLISH")}
            </h1>
            <p className="pl-5 pr-5 text-primary text-[1.2rem] mt-0">
              {t("BIGCONTAINENG")}
            </p>
          </div>
        </div>
        {/* </motion.div> */}
      </div>
      <div className="slider">
        {/* <motion.div
        className="slider"
        initial={{ width: 0, transition: { duration: 0.2 } }}
        animate={{ width: "100%", transition: { duration: 0.2 } }}
        exit={{ y: window.innerWidth, transition: { duration: 0.2 } }}
      > */}
        <div className="sliderTrack">
          <div className="slide">
            <img src={bootstrap} alt="bootstrap" />
          </div>
          <div className="slide">
            <img src={css} alt="css" />
          </div>
          <div className="slide">
            <img src={express} alt="express" />
          </div>
          <div className="slide">
            <img src={github} alt="github" />
          </div>
          <div className="slide">
            <img src={html} alt="html" />
          </div>
          <div className="slide">
            <img src={js} alt="js" />
          </div>
          <div className="slide">
            <img src={mongo} alt="mongo" />
          </div>
          <div className="slide">
            <img src={mysql} alt="mysql" />
          </div>
          <div className="slide">
            <img src={node} alt="node" />
          </div>
          <div className="slide">
            <img src={postgre} alt="postgre" />
          </div>
          <div className="slide">
            <img src={react} alt="react" />
          </div>
          <div className="slide">
            <img src={redux} alt="redux" />
          </div>
          <div className="slide">
            <img src={sequelize} alt="sequelize" />
          </div>
          <div className="slide">
            <img src={ts} alt="ts" />
          </div>
        </div>
        {/* </motion.div> */}
      </div>
      {/* </motion.div> */}
    </div>
  );
}

export default Studies;
