import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  getUser,
  markAttendance,
  resetUserRno,
} from "../reduxStore/actions/attendance.action";
import { slots } from "../model/slots";

const Attendance = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const creds = useSelector((state) => state.authReducer);
  const attendance = useSelector((state) => state.attendanceReducer);
  // console.log(attendance);

  const [rno, setRno] = React.useState(null);
  const [attendanceFlag, setAttendanceFlag] = React.useState(false);

  const [attendanceSlot, setAttendanceSlot] = React.useState({
    markDate: "",
    slot1: 0,
    slot2: 0,
    slot3: 0,
    slot4: 0,
    slot5: 0,
    slot6: 0,
    slot7: 0,
    slot8: 0,
    slot9: 0,
  });

  const onChangeRno = (e) => {
    setRno(e.target.value);
  };

  const onChangeDate = (e) => {
    setAttendanceSlot({
      ...attendanceSlot,
      markDate: e.target.value,
    });
  };

  const getUserData = async (e) => {
    e.preventDefault();
    setAttendanceFlag(true);
    dispatch(getUser(rno, creds.token));
  };

  const submitAttendanceSlot = (e) => {
    e.preventDefault();
    // console.log(attendanceSlot);
    dispatch(markAttendance(attendanceSlot, attendance, creds.token, navigate));
    setAttendanceSlot(0);
    setRno(null);
  };

  return (
    <section className="panel-view">
      <h2 className="panel-view-header">Attendance</h2>

      <section className="attendance-grid">
        <h3 className="text-center">Student Details</h3>
        <form action="/" method="POST" className="my-5" onSubmit={getUserData}>
          <div className="mb-3">
            <label htmlFor="rno">
              Enter Student Rollno: <span className="text-danger">*</span>{" "}
            </label>
            <input
              type="text"
              name="rno"
              id="rno"
              placeholder="Ex. 2K20CSUN0100"
              className="form-control"
              maxLength={13}
              minLength={13}
              onChange={onChangeRno}
            />
          </div>
          <div className="mb-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary me-2"
            />
            <input
              type="reset"
              value="Reset"
              className="btn btn-secondary me-2"
              onClick={() => {
                setAttendanceFlag(false);
                setRno(null);
                dispatch(resetUserRno());
              }}
            />
          </div>
        </form>

        {attendanceFlag ? (
          <form
            action="/dashboard"
            method="POST"
            className="my-5"
            onSubmit={submitAttendanceSlot}>
            <h3 className="text-center">Attendance Details</h3>

            <div className="mb-3">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="stud_first_name">Student First Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="stud_first_name"
                    name="stud_first_name"
                    defaultValue={attendance.firstName}
                    disabled
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="stud_last_name">Student Last Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="stud_last_name"
                    name="stud_last_name"
                    defaultValue={attendance.lastName}
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="rollno">Roll Number:</label>
              <input
                type="text"
                className="form-control"
                id="rollno"
                name="rollno"
                defaultValue={attendance.rollno}
                disabled
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email_id">Email Address:</label>
              <input
                type="text"
                className="form-control"
                id="email_id"
                name="email_id"
                defaultValue={attendance.emailId}
                disabled
              />
            </div>

            <div className="mb-3">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="mentor_name">Mentor's Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="mentor_name"
                    name="mentor_name"
                    defaultValue={attendance.mentorName}
                    disabled
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="mentor_email">Mentor's Email Address:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="mentor_email"
                    name="mentor_email"
                    defaultValue={attendance.mentorEmail}
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className="mb-3">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="stud_course">Course:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="stud_course"
                    name="stud_course"
                    defaultValue={attendance.course}
                    disabled
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="stud_dept">Department:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="stud_dept"
                    name="stud_dept"
                    defaultValue={attendance.department}
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className="mb-3">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="stud_semester">Semester:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="stud_semester"
                    name="stud_semester"
                    defaultValue={attendance.semester}
                    disabled
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="stud_section">Section:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="stud_section"
                    name="stud_section"
                    defaultValue={attendance.section}
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="stud_attendance_date">Date:</label>
              <input
                type="date"
                className="form-control"
                id="stud_attendance_date"
                name="stud_attendance_date"
                onChange={onChangeDate}
                required
              />
            </div>

            <div className="row mb-3">
              {slots.map((slot, index) => {
                return (
                  <div className="col-md-4 mb-3" key={index}>
                    <label className="list-group-item">
                      <input
                        className="form-check-input me-1"
                        type="checkbox"
                        name={slot.name}
                        id={slot.name}
                        value={slot.slot}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setAttendanceSlot({
                              ...attendanceSlot,
                              [slot.name]: 1,
                            });
                          } else {
                            setAttendanceSlot({
                              ...attendanceSlot,
                              [slot.name]: 0,
                            });
                          }
                        }}
                      />
                      {slot.slot}
                    </label>
                  </div>
                );
              })}
            </div>

            <div className="mb-3 text-center">
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary btn-lg mx-1"
              />
              <input
                type="reset"
                value="Reset"
                className="btn btn-secondary btn-lg mx-1"
              />
            </div>
          </form>
        ) : null}
      </section>
    </section>
  );
};

export default Attendance;
