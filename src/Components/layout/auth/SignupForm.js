import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import IconTextField from "../../IconTextField";
const SignupForm = () => {
  const signupSchema = Yup.object({
    fullName: Yup.string()
      .min(6, "full name is too short")
      .max(50, "fullname is to long")
      .required("fullname  required"),
    email: Yup.string()
      .email("Invalid email address")
      .min(6, "email is too short")
      .max(50, "email is to long")
      .required("Email address required"),
    password: Yup.string()
      .min(6, " password is too short")
      .max(30, " password is too long")
      .required("Password required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("confirmPassword is required"),
  });
  return (
    <div>
      <h1 className="font-bold text-3xl ">Get's Started.</h1>

      <h4 className="py-1">
        Already have an account?
        <Link to="/login" className="font-semibold text-primary px-2">
          Login
        </Link>
      </h4>

      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={signupSchema}
      >
        {(formik) => (
          <Form>
            <IconTextField
              label="Full Name"
              placeholder="Type your Full Name here"
              name="fullName"
              id="fullName"
              type="text"
              icon={() => {
                return (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                );
              }}
            />
            <IconTextField
              label="Email Address"
              placeholder="Type your Email Address here"
              name="email"
              id="email"
              type="email"
              icon={() => {
                return (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                );
              }}
            />
            <IconTextField
              label="Password"
              placeholder="Type your Password here"
              name="password"
              id="password"
              type="password"
              icon={() => {
                return (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                );
              }}
            />
            <IconTextField
              label="Confirm Password"
              placeholder="Type your Password here"
              name="confirmPassword"
              id="confirmPassword"
              type="password"
              icon={() => {
                return (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                );
              }}
            />
            <div className="form-group">
              <button type="submit" className="btn btn-primary w-full ">
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
