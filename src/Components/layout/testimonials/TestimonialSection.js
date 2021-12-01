import React from "react";
import Heading from "../../Heading";

import man1 from "../../../assets/man1.jpg";
import man2 from "../../../assets/man2.jpg";
import women1 from "../../../assets/women1.jpg";
import Testimonial from "./Testimonial";

const TestimonialSection = () => {
  const testimonialData = [
    {
      image: man1,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quislaudantium quisquam porro aut reiciendis assumenda hic vitae aperiam ratione. Nam?",
      name: "John Parker",
      place: "United States",
    },
    {
      image: man2,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quislaudantium quisquam porro aut reiciendis assumenda hic vitae aperiam ratione. Nam?",
      name: "Robert Fisher",
      place: "South Africa",
    },
    {
      image: women1,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quislaudantium quisquam porro aut reiciendis assumenda hic vitae aperiam ratione. Nam?",
      name: "Mary Williams",
      place: "Singapore",
    },
  ];

  return (
    <section className="p-10" id="testimonials">
      <Heading title="what our clients say" />

      <section className="grid gap-5 md:grid-cols-3 my-10">
        {testimonialData.map((item, index) => {
          return <Testimonial item={item} key={index} />;
        })}
      </section>
      <div className="flex items-center justify-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-8 text-gray-500 hover:text-gray-900 cursor-pointer transition ease-out duration-200"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
            clip-rule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-8 text-gray-500 hover:text-gray-900 cursor-pointer transition ease-out duration-200"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </section>
  );
};

export default TestimonialSection;
