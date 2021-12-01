import React from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll, Link as ScrollLink } from "react-scroll";
const SideNavbar = ({ setShow, show }) => {
  const links = [
    { text: "Home", to: "home" },
    { text: "About Us", to: "about" },
    { text: "Services", to: "services" },
    { text: "Our Team", to: "team" },
    { text: "Testimonials", to: "testimonials" },
    { text: "Contact", to: "contact" },
  ];
  return (
    <section
      className={`w-36 h-screen bg-gray-900  fixed top-0 right-0 z-10 px-1 shadow  ${
        show ? "block" : "hidden"
      } `}
    >
      <ul>
        <li className="flex justify-end py-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-white bg-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => {
              setShow(!show);
            }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </li>
        {links.map((item, index) => {
          return (
            <li className="flex">
              <ScrollLink
                activeClass="sidenav-link-active"
                spy={true}
                smooth={true}
                to={item.to}
                offset={-50}
                duration={500}
                key={index}
                className="sidenav-link"
              >
                {item.text}
              </ScrollLink>
            </li>
          );
        })}
      </ul>

      {/* Login and signup link */}
      <div class=" mt-4 grid gap-3">
        <Link to="/signup">
          <button class="btn btn-outline-primary flex items-center w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
            </svg>
            Sign up
          </button>
        </Link>
        <Link to="/login">
          <button class="btn btn-primary flex items-center w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
            Login
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SideNavbar;
