import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signup } from "../../reduxStore/actions/auth.action";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mruRoll: "",
  });

  const [isAgreeChecked, setIsAgreeChecked] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (isAgreeChecked) {
      dispatch(signup(formData, navigate));
    } else {
      alert("Please agree to the terms and conditions");
    }
  };

  console.log(isAgreeChecked);

  return (
    <div className="app__wrapper">
      <div className="container main">
        <div
          className="row"
          style={{
            justifyContent: "space-between",
          }}>
          <div className="col-md-6">
            <figure>
              <img
                src={process.env.PUBLIC_URL + "assets/about_img.png"}
                alt="login"
                width="100%"
                height="100%"
                className="img-fluid"
              />
            </figure>
          </div>
          <div
            className="col-md-6"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}>
            <form method="post" onSubmit={handelSubmit}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control input-custom-style"
                    id="first_name"
                    name="first_name"
                    placeholder="First Name"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control input-custom-style"
                    id="last_name"
                    name="last_name"
                    placeholder="Last Name"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control input-custom-style"
                  placeholder="MRU Roll Number"
                  name="rollno"
                  id="rollno"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control input-custom-style"
                  placeholder="Phone number"
                  required
                  onChange={handleChange}
                  name="phone_no"
                  id="phone_no"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control input-custom-style"
                  placeholder="Email Address"
                  required
                  onChange={handleChange}
                  name="email_id"
                  id="email_id"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control input-custom-style"
                  placeholder="Password"
                  required
                  onChange={handleChange}
                  name="password"
                  id="password"
                />
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Agreement"
                    id="agree"
                    onChange={() => setIsAgreeChecked(!isAgreeChecked)}
                  />
                  <label className="form-check-label" htmlFor="tandc">
                    Agree to terms and conditions
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="submit"
                  className="btn btn-primary w-100"
                  name="register"
                  value="Register"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
