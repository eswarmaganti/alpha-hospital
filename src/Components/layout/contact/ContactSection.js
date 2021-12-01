import React from "react";
import Heading from "../../Heading";
import ContactInfo from "./ContactInfo";
import ContactFoam from "./ContactFoam";
const ContactSection = () => {
  return (
    <section className="py-10 md:px-32 px-10 bg-gray-100" id="contact">
      <Heading title="get in touch with us" />
      <section className="grid md:grid-cols-2 my-6">
        <ContactInfo />
        <ContactFoam />
      </section>
    </section>
  );
};

export default ContactSection;
