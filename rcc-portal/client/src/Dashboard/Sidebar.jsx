import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logout = () => {
    dispatch({ type: "USER_LOGOUT" });
    setUser(null);
    navigate("/");
  };
  const [user, setUser] = useState({
    name: "",
    email: "",
    rno: "",
  });

  const creds = useSelector((state) => state.authReducer);

  console.log(creds);

  useEffect(() => {
    if (creds.token) {
      setUser({
        name: `${creds.first_name} ${creds.last_name}`,
        email: creds.email_id,
        rno: creds.rollno,
      });
    }
  }, [creds]);

  return (
    <div className="sideBar">
      <h2 className="text-center">RCC Portal</h2>
      <hr />
      <section
        className="px-2"
        style={{
          wordWrap: "break-word",
        }}>
        <h4 className="text-center">Student Details</h4>
        <article className="py-2">Name: {user.name}</article>
        <article className="py-2">Roll no: {user.rno}</article>
        <article className="py-2">Email: {user.email}</article>
      </section>

      <hr />
      <section>
        <div className="d-flex flex-column mx-3">
          {creds.admin_status === true ? (
            <Link to="/dashboard/all-members" className="btn btn-primary my-2">
              All Members
            </Link>
          ) : null}
          <Link to="/dashboard" className="btn btn-primary my-2">
            Events
          </Link>
          <Link to="/dashboard/attendance" className="btn btn-primary my-2">
            Attendance
          </Link>
          <button className="btn btn-primary my-2" onClick={logout}>
            Logout
          </button>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
