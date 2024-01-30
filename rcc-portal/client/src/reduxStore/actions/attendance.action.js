import * as ActionTypes from "../ActionTypes";
import { baseURL } from "../../Utils/baseURL";
import axios from "axios";
import { toast } from "react-toastify";

const instance = axios.create({
  baseURL: baseURL,
});

const getUser = (rollno, authToken) => async (dispatch) => {
  try {
    const { data } = await instance.get(`/api/users/getUser/${rollno}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    toast.success(data.message);

    dispatch({
      type: ActionTypes.GET_USER_BY_RNO,
      payload: data,
    });
  } catch (error) {
    toast.error(error.response.data.message);
    console.log(error.message);
  }
};

const resetUserRno = () => async (dispatch) => {
  try {
    toast.success("Form Resetted");
    dispatch({
      type: ActionTypes.RESET_USER_RNO,
    });
  } catch (error) {
    toast.error(error.response.data.message);
    console.log(error.message);
  }
};

const markAttendance =
  (attendanceSlot, attendance, authToken, navigate) => async (dispatch) => {
    try {
      const sendableData = {
        stud_id: attendance.studentID,
        m_id: attendance.mentorID,
        stud_rno: attendance.rollno,
        mark_date: attendanceSlot.markDate,
        slot_1: attendanceSlot.slot1,
        slot_2: attendanceSlot.slot2,
        slot_3: attendanceSlot.slot3,
        slot_4: attendanceSlot.slot4,
        slot_5: attendanceSlot.slot5,
        slot_6: attendanceSlot.slot6,
        slot_7: attendanceSlot.slot7,
        slot_8: attendanceSlot.slot8,
        slot_9: attendanceSlot.slot9,
      };

      const { data } = await instance.post(
        `/api/attendance/markAttendance`,
        sendableData,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      toast.success(data.message);

      dispatch({
        type: ActionTypes.MARK_ATTENDANCE,
        payload: data,
      });
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.message);
    }
  };

export { getUser, markAttendance, resetUserRno };
