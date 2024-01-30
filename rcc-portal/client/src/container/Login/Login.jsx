import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login } from "../../reduxStore/actions/auth.action";

const Login = () => {
  const [formData, setFormData] = useState({
    rollno: "",
    password: "",
  });
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    dispatch(login(formData, navigate));

    console.log(formData);
  };

  return (
    <div className="app__wrapper ">
      <div className="container main">
        <div
          className="row"
          style={{
            justifyContent: "space-between",
          }}>
          <div
            className="col-md-6"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}>
            <form method="post" onSubmit={handelSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control input-custom-style"
                  placeholder="MRU Roll Number"
                  required
                  name="rollno"
                  id="rollno"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control input-custom-style"
                  placeholder="Password"
                  required
                  name="password"
                  id="password"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary w-100"
                />
              </div>
            </form>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Login;
