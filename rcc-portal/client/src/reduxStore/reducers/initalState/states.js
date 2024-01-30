const firstNameSession = sessionStorage.getItem("first_name");
const lastNameSession = sessionStorage.getItem("last_name");
const rnoSession = sessionStorage.getItem("rollno");
const emailSession = sessionStorage.getItem("email_id");
const tokenSession = sessionStorage.getItem("token");
const isActiveSession = JSON.parse(sessionStorage.getItem("is_active"));
const adminStatusSession = JSON.parse(sessionStorage.getItem("admin_status"));

let credState = {
  first_name: firstNameSession ? firstNameSession : "",
  last_name: lastNameSession ? lastNameSession : "",
  rollno: rnoSession ? rnoSession : "",
  email_id: emailSession ? emailSession : "",
  is_active: isActiveSession ? isActiveSession : false,
  admin_status: adminStatusSession ? adminStatusSession : false,
  token: tokenSession ? tokenSession : "",
};

let attendanceState = {
  studentID: "",
  firstName: "",
  lastName: "",
  rollno: "",
  emailId: "",
  course: "",
  department: "",
  semester: "",
  section: "",
  mentorID: "",
  mentorName: "",
  mentorEmail: "",
  slotState: {
    slot1: 0,
    slot2: 0,
    slot3: 0,
    slot4: 0,
    slot5: 0,
    slot6: 0,
    slot7: 0,
    slot8: 0,
    slot9: 0,
  },
};

export { credState, attendanceState };
