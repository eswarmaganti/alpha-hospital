import React from "react";
import { Link } from "react-router-dom";
import loginIllustration from "../../../assets/login-illustration.svg";

const AuthLayout = (props) => {
  return (
    <section className="grid md:grid-cols-2 md:h-screen">
      {/* Login Image Container */}
      <div className="text-center bg-secondary grid place-items-center ">
        <img
          src={loginIllustration}
          alt=""
          className="w-3/4 mx-auto hidden md:block"
        />
        <div className="p-4">
          <h3 className="text-2xl text-white font-semibold">
            Start your account for free.
          </h3>
          <h2 className="text-xl font-medium text-gray-100 mt-2 ">
            consult a doctor by login to your account.
          </h2>
        </div>
      </div>
      <div className="md:px-20 px-10 py-5 flex flex-col justify-evenly">
        {/* Back to Home Link */}
        <div className="flex justify-end">
          <Link to="/" className="btn btn-primary flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Home
          </Link>
        </div>

        {/* Form Container */}
        {props.children}
      </div>
    </section>
  );
};

export default AuthLayout;
