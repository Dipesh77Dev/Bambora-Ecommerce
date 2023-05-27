import React from "react";
import Layout from "./../../Components/Layout/Layout";

const Register = () => {
  return (
    <>
      <Layout title="REGISTER PAGE">
        <div className="register">
          <h1>REGISTER PAGE</h1>
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Your Name..."
                autoComplete="off"
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Your Email address..."
                autoComplete="off"
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter Your Password..."
                autoComplete="off"
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter Your Password..."
                autoComplete="off"
              />
            </div>

            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                id="phone"
                placeholder="Enter Your Phone No...."
                autoComplete="off"
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Enter Your Address...."
                autoComplete="off"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Register;

/*
Bootstrap form -
<div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">
    Email address
  </label>
  <input
    type="email"
    className="form-control"
    id="exampleInputEmail1"
    aria-describedby="emailHelp"
  />
</div>;

CheckBox -
<div className="mb-3 form-check">
  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
  <label className="form-check-label" htmlFor="exampleCheck1">
    Check me out
  </label>
</div>;

Remove label bcoz it is taking space instead of label use placeholder -
<label htmlFor="name" className="form-label">
  Name
</label>; 
htmlFor(label) & id(input) should be same then only it will submit the actions...
*/
