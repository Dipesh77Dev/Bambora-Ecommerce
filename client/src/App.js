// import Layout from "./Components/Layout/Layout.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Policy from "./Pages/Policy";
import PageNotFound from "./Pages/PageNotFound";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import Dashboard from "./Pages/Users/Dashboard";
import PrivateRoute from "./Components/Routes/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/policy" element={<Policy />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route exact path="" element={<Dashboard />} />
        </Route>
        {/* <Route exact path = "/dashboard" element = {<Dashboard />} /> */}
        <Route exact path="/*" element={<PageNotFound />} />
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

Nested Route -
<Route path="/dashboard" element={<PrivateRoute /> >
  <Route exact path="" element={<Dashboard />} />
</Route>
we are making nested routes inside <PrivateRoute>... i.e <Dashboard>
Conditn - 1st it will check protected route then nested route will be executed...
In nested path is empty then it will check for /dashboard...
but if we had more pages in "/dashboard" given any "user or admin" in Dashboard, so it will check PrivateRoute then only we can access the user or admin in the Dashboard, so it will be protected.. 
*/
