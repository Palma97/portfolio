import React from "react";
import "./Contact.css";
import computerForm from "../../Images/mail.png";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLongArrowAltRight } from "react-icons/fa";
/* import { motion } from "framer-motion"; */
import { useTranslation } from "react-i18next";

const defaultErrors = {
  name: "contact.nameRequired",
  lastName: "contact.lastNameRequired",
  email: "contact.emailRequired",
  validateEmail:
    /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/,
};

function Contact() {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    email: "",
  });

  const validators = (value, name) => {
    if (name === "email") {
      setErrors({
        ...errors,
        [name]: !defaultErrors.validateEmail.test(value)
          ? defaultErrors[name]
          : null,
      });
    } else {
      setErrors({
        ...errors,
        [name]: !value ? defaultErrors[name] : null,
      });
    }
  };

  const notify = () => {
    toast.success("Great", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Flip,
    });
  };

  const handleChange = (event) => {
    event.preventDefault();
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (values.name && values.lastName && values.email) {
      emailjs
        .sendForm(
          "service_ua12jnc",
          "template_77ukcgs",
          form.current,
          "gV3evxY75z3sKopwy"
        )
        .then(
          (response) => {
            console.log("success!", response.status, response.text);
          },
          (err) => {
            console.log("failed", err);
          }
        );
      setValues({
        name: "",
        lastName: "",
        email: "",
      });
      setErrors({});
    }
  };

  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row  justify-center items-center w-full md:h-screen bg-white">
      {/* <motion.div
        className="containerContact"
        initial={{ opacity: 0, transition: { duration: 0.5 } }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      > */}
      <div className="flex flex-col items-center w-[80%] md:w-1/2 h-90vh">
        {/* <motion.div
          className="textForm"
          initial={{ width: 0, transition: { duration: 0.5 } }}
          animate={{ width: "100%", transition: { duration: 0.5 } }}
          exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
        > */}
        <div className="flex flex-col items-center mb-0 text-lg">
          <h1 className="h1Form inline-block text-tercery text-5xl mb-5 mt-5">
            {t("BUTTONCONTACT")}
          </h1>
          <p className="w-[80%] text-justify text-[1.2em]">
            {t("TEXTCONTACT")}
          </p>
        </div>
        <div className="textForm2 flex justify-center items-center w-full h-full relative overflow-hidden rounded-lg mb-2 ml-2">
          <img
            src={computerForm}
            alt="Not found"
            className="mt-10 w-[70%] h-[60%] object-cover"
          />
          <div className="escribeme">
            <h1>
              {t("WRITEME")}
              <br></br>
              <FaLongArrowAltRight />
            </h1>
          </div>
        </div>
        {/* </motion.div> */}
      </div>
      <div className="flex flex-col items-center justify-start w-1/2 h-[70%]">
        {/* <motion.div
        className="form"
        initial={{ width: 0, transition: { duration: 0.5 } }}
        animate={{ width: "100%", transition: { duration: 0.5 } }}
        exit={{ y: window.innerHeight, transition: { duration: 0.5 } }}
      > */}
        <h1 className="h1Form2 inline-block text-tercery text-5xl mb-10">
          {t("DATA")}
        </h1>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="flex items-center justify-center flex-col w-[80%] md:w-[100%] h-[100%]"
          noValidate
        >
          <input
            name="name"
            onChange={(event) => handleChange(event)}
            onBlur={(event) =>
              validators(event.target.value, event.target.name)
            }
            value={values.name}
            type="text"
            placeholder="Nombre"
            className="w-96 h-17 p-3 mb-5 rounded-lg border-2 border-black hover:border-3 hover:border-[#5a84a2] transition ease-in-out duration-300"
          />
          <input
            name="lastName"
            onChange={(event) => handleChange(event)}
            onBlur={(event) =>
              validators(event.target.value, event.target.name)
            }
            value={values.lastName}
            type="text"
            placeholder="Apellido"
            className="w-96 h-17 p-3 mb-5 rounded-lg border-2 border-black hover:border-3 hover:border-[#5a84a2] transition ease-in-out duration-300"
          />
          <input
            name="email"
            onChange={(event) => handleChange(event)}
            onBlur={(event) =>
              validators(event.target.value, event.target.name)
            }
            value={values.email}
            type="email"
            placeholder="Email"
            className="w-96 h-17 p-3 mb-5 rounded-lg border-2 border-black hover:border-3 hover:border-[#5a84a2] transition ease-in-out duration-300"
          />
          <button
            type="submit"
            onClick={notify}
            disabled={
              errors.name ||
              errors.lastName ||
              errors.email ||
              !values.name ||
              !values.lastName ||
              !values.email
            }
            className="w-[100px] h-[50px] text-[0.8rem] rounded-[20px] bg-gradient-to-br from-[#f0f0f0] to-[#cacaca] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.1),2px_2px_8px_rgba(0,0,0,0.15),-2px_-2px_8px_rgba(255,255,255,1),-2px_-2px_8px_rgba(255,255,255,0.5)] border border-white font-bold transition ease-[0.2s] hover:cursor-pointer hover:shadow-[inset_-2px_-2px_8px_rgba(255,255,255,1),inset_-2px_-2px_8px_rgba(255,255,255,0.5),inset_2px_2px_4px_rgba(255,255,255,0.1),inset_2px_2px_8px_rgba(0,0,0,0.15)] hover:scale-[0.98] hover:border-black hover:text-[0.9rem]"
          >
            {t("BUTTONSEND")}
          </button>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Flip}
          />
        </form>
        <div className="flex items-center justify-evenly mt-12 mb-12 w-full md:w-1/2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.linkedin.com/in/nicolás-palma-330b2023b"
            className="icons text-[#5a84a2] rounded-full p-2 transition ease duration-1000 linkedin"
          >
            <FaLinkedin size={50} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Palma97"
            className="icons text-[#5a84a2] rounded-full p-2 transition ease duration-1000 github"
          >
            <IoLogoGithub size={50} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send?phone=573112513583"
            className="icons text-[#5a84a2] rounded-full p-2 transition ease duration-1000 whatsapp"
          >
            <FaWhatsapp size={50} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:palmabboy3@gmail.com?subject=¡Quiero%20contactárte!&body=Hola,%20Hola!"
            className="icons text-[#5a84a2] rounded-full p-2 transition ease duration-1000 gmail"
          >
            <SiGmail size={50} />
          </a>
        </div>
        {/* </motion.div> */}
      </div>
      {/* </motion.div> */}
    </div>
  );
}

export default Contact;
