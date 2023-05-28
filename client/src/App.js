// import Layout from "./Components/Layout/Layout.jsx";
import {Routes, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Policy from "./Pages/Policy";
import PageNotFound from "./Pages/PageNotFound";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";

function App() {
  return (
    <>
      <Routes>
        <Route exact path = "/" element = {<HomePage />} />
        <Route exact path = "/about" element = {<About />} />
        <Route exact path = "/contact" element = {<Contact />} />
        <Route exact path = "/policy" element = {<Policy />} />
        <Route exact path = "/register" element = {<Register />} />
        <Route exact path = "/login" element = {<Login />} />
        <Route exact path = "/*" element = {<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;



/*
try purpose -
function App() {
  return (
    <>
     <h1>Hello World!!! I am Raj</h1> 
      <Layout>
        <h1>Ecommerce App</h1>
      </Layout>
    </>
  );
}

* - means if no existing routes found it will show this page...
*/