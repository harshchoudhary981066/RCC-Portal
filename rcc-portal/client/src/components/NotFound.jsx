import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="text-center"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <h1>404 Page Not Found</h1>
      <h2>please try again later</h2>

      <p>if you think its a mistake, please click on the button to go back </p>

      <Link className="btn btn-primary my-2" to={"/"}>
        Go Back
      </Link>
    </div>
  );
};

export default NotFound;
