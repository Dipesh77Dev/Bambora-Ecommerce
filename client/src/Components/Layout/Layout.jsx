import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "80vh" }}>{children}</main>
      <Footer />
    </>
  );
};

// We dont want desc, keyword, etc in all page so we can use default parameters - ComponentName.defaultProps = {}... If we dont pass, so it will take from the below...

Layout.defaultProps = {
  title: "Ecommerce app - Shop Now.....",
  description: "MERN ECOMMERCE WEBSITE",
  keywords: "MERN, REACTJS, EXPRESSJS, NODEJS, MONGODB",
  author: "RAJ",
};

export default Layout;

/*
Using by props keyword -
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

Static helmet -
<div className="application">
  <Helmet>
    <meta charSet="utf-8" />
      <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
  </Helmet>
            ...
</div>
*/
