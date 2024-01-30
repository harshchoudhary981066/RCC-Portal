const db = require("../models");
const Attend = db.attendance;
const Users = db.users;

// check the entry filter by date and id
const checkEntry = async (req, res) => {};

// mark attendance
const markAttendance = async (req, res) => {
  const attendanceData = req.body;

  const authTokenID = req.tokenData.user_id;
  const checkValidAdmin = await Users.findOne({
    where: {
      user_id: authTokenID,
      admin_status: 1,
      is_active: 1,
    },
  });

  if (checkValidAdmin) {
    const sendableData = {
      stud_id: attendanceData.stud_id,
      m_id: attendanceData.m_id,
      stud_rno: attendanceData.stud_rno,
      mark_date: attendanceData.mark_date,
      slot_1: attendanceData.slot_1,
      slot_2: attendanceData.slot_2,
      slot_3: attendanceData.slot_3,
      slot_4: attendanceData.slot_4,
      slot_5: attendanceData.slot_5,
      slot_6: attendanceData.slot_6,
      slot_7: attendanceData.slot_7,
      slot_8: attendanceData.slot_8,
      slot_9: attendanceData.slot_9,
    };
    // const date = new Date().toISOString().slice(0, 19).replace("T", " ");
    const date = new Date().toISOString().slice(0, 10);

    const checkUniqueEntryOfStudent = await Attend.findOne({
      where: {
        stud_id: attendanceData.stud_id,
        m_id: attendanceData.m_id,
        stud_rno: attendanceData.stud_rno,
        mark_date: date,
      },
    });

    if (!checkUniqueEntryOfStudent) {
      const mark = await Attend.create(sendableData);

      if (mark) {
        res.status(201).json({
          message: "Attendance marked successfully",
          result: mark,
        });
      } else {
        res.status(400).json({
          message: "Error marking attendance",
        });
      }
    } else {
      res.status(401).json({
        message: "You have already marked attendance",
      });
    }
  } else {
    res.status(400).json({
      message: "user not exist in the database",
    });
  }
};

module.exports = {
  markAttendance,
};
