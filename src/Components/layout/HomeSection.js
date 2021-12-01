import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import doctor from "../../assets/doctor.jpg";
const HomeSection = () => {
  return (
    <section class="grid md:grid-cols-5 grid-cols-1 bg-gray-100" id="home">
      <div class="p-10 md:col-span-3 flex md:items-start   flex-col justify-center">
        <h6 class="bg-primary inline-block text-center md:text-left px-4 py-2 rounded-full uppercase font-semibold text-gray-900 shadow-md ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 inline-block"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>{" "}
          Your Health Our Promise
        </h6>
        <h1 class="font-black md:text-5xl text-4xl text-center md:text-left  text-gray-900 py-2 md:leading-tight">
          Our goal is to provide world class{" "}
          <span class="font-black text-gray-800 text-sky-600">Health Care</span>{" "}
          for you and your family.
        </h1>
        <p class="text-gray-600 py-2 text-center md:text-left">
          Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aut explicabo amet mollitia placeat in nam molestias
          omnis eos? Ipsa, eaque.
        </p>
        <div class="flex gap-6 mt-4">
          <Link to="/login" class="btn btn-outline-primary flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
            </svg>
            Consult Doctor
          </Link>
          <ScrollLink
            spy={true}
            smooth={true}
            to="services"
            offset={-50}
            duration={500}
          >
            <button class="btn btn-outline flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
              our services
            </button>
          </ScrollLink>
        </div>
      </div>
      <div class="relative image-container md:col-span-2">
        <img src={doctor} alt="" class="object-cover h-full w-full" />
      </div>
    </section>
  );
};

export default HomeSection;
