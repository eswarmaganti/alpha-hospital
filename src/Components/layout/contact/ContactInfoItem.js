import React from "react";

const ContactInfoItem = ({ icon, text }) => {
  return (
    <div className="group flex items-center gap-2 my-5 border-l-4 border-primary px-2">
      {icon()}
      <p className="font-semibold">{text}</p>
    </div>
  );
};

export default ContactInfoItem;
