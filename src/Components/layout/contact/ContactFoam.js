import { Form, Formik } from "formik";
import React from "react";
import TextField from "../../TextField";
import * as Yup from "yup";
const ContactFoam = () => {
  const contactSchema = Yup.object({
    name: Yup.string()
      .min(3, "name is too short")
      .max(30, "name is too long")
      .required("name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .min(6, "email is too short")
      .max(50, "email is to long")
      .required("Email address required"),
    subject: Yup.string()
      .min(5, "subject is too short")
      .max(100, "dubject is too long")
      .required("subject is required"),
    message: Yup.string()
      .min(5, "message is too short")
      .max(100, "message is too long")
      .required("message is required"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        subject: "",
        message: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={contactSchema}
    >
      {(formik) => (
        <Form>
          <TextField
            type="text"
            name="name"
            placeholder="Type your full name"
            label="Full Name"
          />
          <TextField
            type="email"
            name="email"
            placeholder="Type your email address"
            label="Email Address"
          />
          <TextField
            type="text"
            name="subject"
            placeholder="Type subject"
            label="Subject"
          />
          <TextField
            type="textarea"
            name="message"
            placeholder="Type Message"
            label="Message"
          />

          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary  w-full  uppercase "
            >
              Send Message
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactFoam;
