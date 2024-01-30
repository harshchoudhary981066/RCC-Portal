import * as ActionTypes from "../ActionTypes";

import { attendanceState } from "./initalState/states";

const attendanceReducer = (state = attendanceState, action) => {
  console.log(state);
  switch (action.type) {
    case ActionTypes.GET_USER_BY_RNO:
      console.log(
        "get user by rno action output",
        action.payload.searchedUserData
      );
      console.log("State:", state);
      return {
        ...state,
        studentID: action.payload.searchedUserData?.studentID,
        firstName: action.payload.searchedUserData?.firstName,
        lastName: action.payload.searchedUserData?.lastName,
        rollno: action.payload.searchedUserData?.rollno,
        emailId: action.payload.searchedUserData?.emailId,
        course: action.payload.searchedUserData?.course,
        department: action.payload.searchedUserData?.department,
        semester: action.payload.searchedUserData?.semester,
        section: action.payload.searchedUserData?.section,
        mentorID: action.payload.searchedUserData?.mentorID,
        mentorName: action.payload.searchedUserData?.mentorName,
        mentorEmail: action.payload.searchedUserData?.mentorEmail,
      };

    case ActionTypes.RESET_USER_RNO:
      console.log("reset user rno action output");
      return {
        ...state,
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
      };

    case ActionTypes.MARK_ATTENDANCE:
      console.log("mark attendance action output", action.payload);
      return {
        ...state,
        slotState: {
          slot1: action.payload.result.slot_1,
          slot2: action.payload.result.slot_2,
          slot3: action.payload.result.slot_3,
          slot4: action.payload.result.slot_4,
          slot5: action.payload.result.slot_5,
          slot6: action.payload.result.slot_6,
          slot7: action.payload.result.slot_7,
          slot8: action.payload.result.slot_8,
          slot9: action.payload.result.slot_9,
        },
      };

    default:
      return state;
  }
};

export default attendanceReducer;
