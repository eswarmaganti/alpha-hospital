import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import IconTextField from "../../IconTextField";
const LoginForm = () => {
  const LoginSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .min(6, "email is too short")
      .max(50, "email is to long")
      .required("Email address required"),
    password: Yup.string()
      .min(6, "password is too short")
      .max(30, "password is too long")
      .required("** Password required **"),
  });
  return (
    <div>
      <h1 className="font-bold text-3xl py-2">Get's Started.</h1>
      <h4 className="text-xl text-gray-700 font-medium">
        we are glad to see to again, login to your account
      </h4>
      <h4 className="py-4">
        new user, don't have an account?{" "}
        <Link to="/signup" className="font-semibold text-primary">
          Signup
        </Link>
      </h4>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={LoginSchema}
      >
        {(formik) => (
          <Form>
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

export default LoginForm;

{
  /* <div className="form-group flex items-center gap-2">
          <input
            type="checkbox"
            name="terms"
            id="terms"
            onChange={formik.handleChange}
            value={formik.values.terms}
          />
          <p>
            i agree to platform
            <span className="px-1 text-primary font-medium">
              terms of service
            </span>
            and
            <span className="px-1 text-primary font-medium">
              privacy policy.
            </span>
          </p>
        </div> */
}

// <div className="form-group">
//   <label htmlFor="email" className="label">
//     Email Address
//   </label>
//   <div className="icon-form-control">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       class="h-5 w-5"
//       viewBox="0 0 20 20"
//       fill="currentColor"
//     >
//       <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//       <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//     </svg>
//     <input
//       type="email"
//       name="email"
//       id="email"
//       className="focus:outline-none  w-full py-1 px-3"
//       placeholder="Type your Email Address here"
//       onChange={formik.handleChange}
//       value={formik.values.email}
//     />
//   </div>
// </div>
// <div className="form-group">
//   <label htmlFor="password" className="label">
//     Password
//   </label>
//   <div className="icon-form-control ">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       class="h-5 w-5"
//       viewBox="0 0 20 20"
//       fill="currentColor"
//     >
//       <path
//         fill-rule="evenodd"
//         d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
//         clip-rule="evenodd"
//       />
//     </svg>
//     <input
//       type="password"
//       name="password"
//       id="password"
//       className="focus:outline-none  w-full py-1 px-3"
//       placeholder="Type your Password here."
//       onChange={formik.handleChange}
//       value={formik.values.password}
//     />
//   </div>
// </div>
