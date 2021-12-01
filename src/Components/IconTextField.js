import React from "react";
import { ErrorMessage, useField } from "formik";
const IconTextField = ({ icon, label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-group">
      <label htmlFor={field.name} className="label">
        {label}
      </label>
      <div
        className={`icon-form-control ${
          meta.touched && meta.error && "border  border-red-500"
        }
          ${meta.touched && !meta.error && "border border-green-500"}
          ${(!meta.touched || meta.value === "") && "border  border-gray-300"}`}
      >
        {icon()}
        <input
          className="focus:outline-none  w-full py-1 px-3"
          {...props}
          {...field}
        />
      </div>
      <ErrorMessage
        component="p"
        name={field.name}
        className="text-sm font-medium text-red-500 text-right"
      />
    </div>
  );
};

export default IconTextField;
