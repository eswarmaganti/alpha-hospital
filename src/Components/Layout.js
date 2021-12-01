import React from "react";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <section className="m-r-[150px]">
      <Navbar />
      <section>{children}</section>
    </section>
  );
};

export default Layout;
