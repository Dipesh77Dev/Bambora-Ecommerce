import React, { useState } from "react";
import Layout from "./../../Components/Layout/Layout";
import axios from "axios";
// import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate(); // - We had to make variable bcoz it is hook.

  // form functn
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.. Please register & login, so you can view our content!!");
    }
  };

  return (
    <>
      <Layout title="REGISTER PAGE">
        {/* <div className="register"> */}
        <div className="form-container">
          <h3 className="title">REGISTER PAGE</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your Name..."
                autoComplete="off"
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email address..."
                autoComplete="off"
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Your Password..."
                autoComplete="off"
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Your Phone No...."
                autoComplete="off"
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter Your Address...."
                autoComplete="off"
                required
              />
            </div>

            <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="What is Your Favorite sports"
              autoComplete="off"
              required
            />
          </div>

            <button type="submit" className="btn btn-primary">
              Register
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

const [name, setName] = useState("Raj");
If we give an initial value so Raj is stored in name and it cannot be edit so to do change we use onChange functn...

Testing purpose handlesubmit => {
console.log(
  `Name - ${name}, Email - ${email}, Password - ${password}, Phone - ${phone}, Address - ${address}`
);
toast.success("Register Successfully"); -  We can use alert also here. 
}

With env - 
const res = await axios.post(`${process.env.REACT_APP_API}/api/auth/register`, {
  name,
  email,
  password,
  phone,
  address,
});

if (res.data.success) {
  toast.success(res.data.message);
  navigate("/login");
}
*/
