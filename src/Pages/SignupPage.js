import React from "react";
import AuthLayout from "../Components/layout/auth/AuthLayout";
import SignupForm from "../Components/layout/auth/SignupForm";
const SignupPage = () => {
  return (
    <AuthLayout>
      <SignupForm />
    </AuthLayout>
  );
};

export default SignupPage;
