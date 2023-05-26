import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* <div className="bg-dark text-light p-5"> */}
      <div className="footer">
        <h1 className="text-center">
          All Right Reserved - &copy;{" "}
          <b>
            <u>RAJ</u>
          </b>
        </h1>
        <p className="text-center mt-3">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/policy">Policy</Link>
        </p>
      </div>
    </>
  );
};

export default Footer;
