import React from "react";
import { useField, ErrorMessage } from "formik";
const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-group">
      <label htmlFor="name" className="label">
        {label}
      </label>
      <input
        {...props}
        {...field}
        className={`form-control ${
          meta.touched && meta.error && "border  border-red-500"
        }
        ${meta.touched && !meta.error && "border border-green-500"}
        ${(!meta.touched || meta.value === "") && "border  border-gray-300"}`}
      />
      <ErrorMessage
        component="p"
        name={field.name}
        className="text-sm font-medium text-red-500 text-right"
      />
    </div>
  );
};

export default TextField;
