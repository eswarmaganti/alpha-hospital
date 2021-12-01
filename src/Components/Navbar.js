import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import SideNavbar from "./layout/SideNavbar";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const links = [
    { text: "Home", to: "home" },
    { text: "About Us", to: "about" },
    { text: "Services", to: "services" },
    { text: "Our Team", to: "team" },
    { text: "Testimonials", to: "testimonials" },
    { text: "Contact", to: "contact" },
  ];
  return (
    <nav class="flex items-center justify-between px-3 py-2 shadow-lg sticky top-0 bg-white z-10">
      <div className="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
        <h4 class="font-bold text-xl">Alpha Hospitals</h4>
      </div>

      <div class="md:flex md:gap-20 hidden">
        <ul class="flex gap-5">
          {links.map((item, index) => {
            return (
              <ScrollLink
                activeClass="active"
                spy={true}
                smooth={true}
                to={item.to}
                offset={-70}
                duration={500}
              >
                <li class="link">{item.text}</li>
              </ScrollLink>
            );
          })}
        </ul>
        <div class="flex items-center gap-5 ">
          <Link to="/signup">
            <button class="btn btn-outline flex items-center">
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
            <button class="btn btn-primary flex items-center">
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
      </div>

      {/* Hamburger menu icon */}
      <div className="p-1 border  rounded-lg md:hidden block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => {
            setShow(true);
          }}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <SideNavbar setShow={setShow} show={show} />
    </nav>
  );
};

export default Navbar;
