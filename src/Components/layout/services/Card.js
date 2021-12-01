import React from "react";

const Card = ({ item }) => {
  const { icon, title, description } = item;
  return (
    <div className="card">
      <img src={icon} alt="" className="w-16 mx-auto" />
      <h3 className="text-lg font-semibold p-2 text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default Card;
