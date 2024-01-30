import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom"; //for react router dom

import { Main, Footer, Login, Signup } from "./container/pages.config";
import Navbar from "./components/Navbar/Navbar";
import SingleEvent from "./container/event/Event";
import NotFound from "./components/NotFound";

// dashboard
import Dashboard from "./Dashboard/Dashboard";
import Events from "./Dashboard/Events";
import Attendance from "./Dashboard/Attendance";
import AddEvent from "./Dashboard/AddEvent";
import AllMembers from "./Dashboard/AllMembers";

const NavFootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

const App = () => {
  const { token } = useSelector((state) => state.authReducer);

  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<NavFootLayout children={<Main />} />} />
          <Route
            path="/login"
            exact
            element={<NavFootLayout children={<Login />} />}
          />
          <Route
            path="/register"
            exact
            element={<NavFootLayout children={<Signup />} />}
          />
          {token ? (
            <>
              <Route
                path="/dashboard"
                exact
                element={<Dashboard children={<Events />} />}
              />
              <Route
                path="/dashboard/all-members"
                exact
                element={<Dashboard children={<AllMembers />} />}
              />
              <Route
                path="/dashboard/attendance"
                exact
                element={<Dashboard children={<Attendance />} />}
              />
              <Route
                path="/new-event"
                element={<Dashboard children={<AddEvent />} />}
              />
            </>
          ) : (
            <Route path="/" element={<NavFootLayout children={<Main />} />} />
          )}

          <Route path="/event/:slug" element={ <NavFootLayout children={<SingleEvent />} /> } />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
