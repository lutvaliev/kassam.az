"use client";

import React, { useState } from "react";
import "./style.css";
import Title from "@/elements/title/page";
import Subtitle from "@/elements/subtitle/page";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formValues);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  return (
    <section className="contact_section py-12 my-8 flex flex-col items-center">
      <Title title="Bizə müraciət edin." />
      <Subtitle subtitle="75k+ Bu üsulla bizə müraciət edib. Siz də müraciət edin." />
      <form
        action=""
        className="contact_form flex flex-col py-10 w-6/12 mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-6 mb-6">
          <input
            className="w-full py-4 px-6 rounded-md text-sm outline-none"
            type="text"
            id="name"
            name="name"
            placeholder="Ad, soyad"
            value={formValues.name}
            onChange={handleInputChange}
          />
          <input
            className="w-full py-4 px-6 rounded-md text-sm outline-none"
            type="email"
            id="email"
            name="email"
            placeholder="Email daxil edin"
            value={formValues.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex">
          <textarea
            className="w-full py-4 px-6 rounded-md text-sm outline-none"
            rows={1}
            id="message"
            name="message"
            placeholder="Müraciətinizi qeyd edin"
            value={formValues.message}
            onChange={handleInputChange}
          />
          <button type="submit" className="bg-white py-2.5 px-8 rounded-md">
            Göndər
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
