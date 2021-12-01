import React from "react";
import ContactInfoItem from "./ContactInfoItem";
const ContactInfo = () => {
  const mobile = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-7 w-7 text-gray-700"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
          clip-rule="evenodd"
        />
      </svg>
    );
  };
  const mail = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-7 w-7 text-gray-700"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    );
  };
  const location = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-7 w-7 text-gray-700"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clip-rule="evenodd"
        />
      </svg>
    );
  };
  return (
    <div>
      <h6 className="uppercase text-sky-600 font-medium ">contact us</h6>
      <h1 className="text-3xl font-semibold mt-5">How can we help you?</h1>
      <p className="py-2 text-gray-600">
        Reach us by fill in the form or drop an email
      </p>
      {/* Contact Info */}
      <div className="my-6">
        <ContactInfoItem text="+91 9900778855" icon={mobile} />
        <ContactInfoItem text="contact@alphahospitals.com" icon={mail} />
        <ContactInfoItem
          text=" New Jersey , unites states of America"
          icon={location}
        />
      </div>
    </div>
  );
};

export default ContactInfo;
