"use client";

import { Fragment, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { name, email, phone, message } = formData;

  const form: any = useRef();

  const onMutate = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (e.target.validate.checked) {
      console.log("validate");
      toast.error("Cos poszło nie tak, Skontaktuj się mailowo", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    if (!e.target.accpet.checked) {
      toast.error(
        "Pamiętaj aby wyrazić zgodę na przetwarzanie danych na dole formularza",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
      return;
    }

    // Wyrażenia regularne do walidacji
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{9,15}$/;

    // Sprawdzanie pola "name"
    if (name.trim() === "") {
      toast.error("Nieprawidłowo wpisane imię", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    // Sprawdzanie pola "email"
    if (email.trim() === "") {
      toast.error("Nieprawidłowy adres e-mail", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    } else if (!emailRegex.test(email)) {
      toast.error("Nieprawidłowy adres e-mail", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    // Sprawdzanie pola "phone"
    if (phone.trim() === "") {
      toast.error("Nieprawidłowy numer telefonu", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    } else if (!phoneRegex.test(phone)) {
      toast.error("Nieprawidłowy numer telefonu", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    // Sprawdzanie pola "message"
    if (message.trim() === "") {
      toast.error("Cos poszło nie tak, Skontaktuj się mailowo", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;

    if (!serviceId) {
      throw new Error("Service ID is not defined");
    }

    const templateId = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID;

    if (!templateId) {
      throw new Error("Service ID is not defined");
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: process.env.NEXT_PUBLIC_EMAIL_JS,
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          toast.error("Cos poszło nie tak, Skontaktuj się mailowo", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          return;
        }
      );

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    toast.success("Sukces", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <Fragment>
      <form
        className="p-8 w-full max-w-4xl bg-neutral-100 flex flex-col gap-4"
        onSubmit={handleSubmit}
        ref={form}
      >
        <p className="text-lg font-bold text-secondary">Masz pytania?</p>
        <p className="text-4xl font-bold">Napisz tutaj!</p>

        <input
          placeholder="Imię i Nazwisko"
          type="text"
          name="name"
          id="name"
          onChange={onMutate}
          value={name}
          className="w-full bg-white p-4 border-2 border-base rounded-xl focus:bg-white autofill:bg-white outlne-white ring-white"
          required
        />

        <input
          placeholder="Email"
          type="email"
          name="email"
          id="email"
          onChange={onMutate}
          value={email}
          className="w-full bg-white p-4 border-2 border-base rounded-xl focus:bg-white autofill:bg-white outlne-white ring-white"
          required
        />

        <input
          placeholder="Numer Telefonu"
          type="number"
          name="phone"
          id="phone"
          onChange={onMutate}
          value={phone}
          className="w-full bg-white p-4 border-2 border-base rounded-xl focus:bg-white autofill:bg-white outlne-white ring-white"
          required
        />

        <textarea
          placeholder="Wiadomość"
          name="message"
          id="message"
          onChange={onMutate}
          value={message}
          className="w-full h-48 bg-white p-4 border-2 border-base rounded-xl focus:bg-white autofill:bg-white outlne-white ring-white"
          required
        />

        <div className="flex gap-2 items-start w-full">
          <input
            type="checkbox"
            name="accpet"
            id="accpet"
            className="block"
            required
          />
          <label htmlFor="accept" className="text-xs text-neutral-700 w-full">
            Akceptując, wyrażasz zgodę na przetwarzanie Twoich danych osobowych
            przez właściciela strony oraz na otrzymywanie ofert i informacji
            handlowych na podany adres e-mail lub numer telefonu."
          </label>
        </div>

        <button
          type="submit"
          className="p-4 px-8 bg-primary rounded-md text-white font-bold grid mt-4 place-items-center text-xl w-full transition-all duration-300
      hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_5px_#333] 
      active:translate-x-[0px] active:translate-y-[0px] active:shadow-none"
        >
          {" "}
          Prześlij
        </button>

        <input
          type="checkbox"
          name="validate"
          id="validate"
          className="scale-0 w-0 h-0"
        />

        <ToastContainer />
      </form>
    </Fragment>
  );
};

export default Form;
