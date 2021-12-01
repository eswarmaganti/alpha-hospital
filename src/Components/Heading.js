import React from "react";

const Heading = ({ title }) => {
  return (
    <div className="flex justify-center">
      <h1 className="font-semibold text-2xl text-center  border-l-4 px-3 py-1 border-primary uppercase">
        {title}
      </h1>
    </div>
  );
};

export default Heading;
