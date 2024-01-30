import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { baseURL } from "../Utils/baseURL";
import axios from "axios";

import { toast } from "react-toastify";

const AllMembers = () => {
  const [allUsers, setAllUsers] = useState([]);

  const getAllUsers = async (token) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${baseURL}/api/users/getAllUsers`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(data);
      setAllUsers(data.allUsers);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const { token } = useSelector((state) => state.authReducer);

  useEffect(() => {
    getAllUsers(token);
  }, [token]);

  return (
    <section className="panel-view">
      <h2 className="panel-view-header">All members of RCC</h2>

      <table className="table table-boardered table-striped bg-light mt-5">
        <thead>
          <tr>
            <th>Sno</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Roll no</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Course</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.rollno}</td>
              <td>{user.email_id}</td>
              <td>{user.phone_no}</td>
              <td>{user.course ? user.course : "NULL"}</td>
              <td>{user.department ? user.department : "NULL"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default AllMembers;
