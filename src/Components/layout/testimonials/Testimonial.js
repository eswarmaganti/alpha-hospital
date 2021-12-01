import React from "react";
import quotestart from "../../../assets/quote-start.svg";
import quoteend from "../../../assets/quote-end.svg";
const Testimonial = ({ item }) => {
  const { image, text, name, place } = item;
  return (
    <div className="grid grid-cols-3 bg-gray-200 rounded-r shadow border-l-8 border-primary">
      <img src={image} alt="" className="col-span-1 object-cover h-full" />
      <div className="col-span-2 p-2">
        <img src={quotestart} alt="" />
        <p className="font-medium text-gray-800 pl-2">{text}</p>
        <img className="ml-auto" src={quoteend} alt="" />
        <h4 className="text-xl font-medium text-primary ">{name}</h4>
        <p className="text-xs uppercase">{place}</p>
      </div>
    </div>
  );
};

export default Testimonial;
