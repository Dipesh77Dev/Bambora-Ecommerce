import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "80vh" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;



/*
const Layout = (props) => {
  return (
    <>
      <h1>Layout</h1>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};
*/