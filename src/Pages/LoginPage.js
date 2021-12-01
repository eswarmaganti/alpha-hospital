import React from "react";
import AuthLayout from "../Components/layout/auth/AuthLayout";
import LoginForm from "../Components/layout/auth/LoginForm";
const LoginPage = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
